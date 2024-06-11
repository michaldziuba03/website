---
title: 'Reset password in Node.js'
description: 'Learn possible way of implementing forgot password feature in your application.'
pubDate: 'Jul 01 2022'
heroImage: '/blog-placeholder-1.jpg'
---

## Introduction
Reset password feature is an important part of any application - but can be tricky to implement.

> This article DOESN'T pretend to show you best practices - this text is based on my own opinions and thoughts.

## Implementation overview
We will discuss how to implement common reset password flow.

### Universal rules
- Reset token must be **random**, **unique** and **long enough to prevent brute force attack**. Don't use any guessable/related to the user data to generate reset token.
- Reset token **shouldn't be reusable**. Don't generate "static" reset token during user registration. Don't use stateless JWTs because they can be used many times until they expire.
- Reset token must **expire** after some time. This is another reason why you shouldn't generate "static" reset tokens.
- **Don't store plain reset tokens** in database. Database breach can expose users with active reset tokens. You should hash reset tokens for the same reason you hash passwords.
-  You should limit the amount of reset password requests that can be send over time for single email address. It's easy to abuse forgot password feature and spam someone's inbox with reset emails - it's called **email bomb**. You can also add reCAPTCHA to prevent spam bots.
- **Don't rely on the Host header** while creating the reset URLs to avoid Host Header Injection attacks. The URL should be either be defined in env variable, or should be validated against a list of trusted domains.

### Sample Flow
1. User enters their email address in forgot password page.
2. Generate unique and random reset token.
3. Generate reset password link (example: `https://example.com/reset/{token}`) and send it in email message.
4. Hash token with SHA256 and store it in database.
5. User enters link from email message.
6. User sends form with new password and token to reset password endpoint.
7. You should revoke all user's active sessions after successful password reset (to prevent [Unexpired Session Identifier Attack](https://msrc.microsoft.com/blog/2022/05/pre-hijacking-attacks/#account-pre-hijacking-attacks)). This can be tricky as express session library is very generic and *unaware* of authentication. You may try to build your own [Store](https://github.com/expressjs/session#store) or extend existing.

### Database schema
If you are using SQL you may want to use some cron job to delete expired reset tokens.
![SQL Schema](https://user-images.githubusercontent.com/43048524/232195594-b05801a3-af32-4f9e-b4f4-cdf17379e4d4.png)

> Entity diagram generated with [dbdiagram.io](https://dbdiagram.io/)

In case of MongoDB you can use [TTL index](https://www.mongodb.com/docs/manual/core/index-ttl/) on Date type field like `createdAt` and database will delete all tokens when they expire.
```ts
{
    "_id": ObjectId,
    "token": String,
    "userId": ObjectId,
    "createdAt": Date
}
```

## Code sample
Let's implement simple reset password flow in TypeScript and Node.js. I will focus on most important parts of code. You can find full code in my [GitHub repository](https://github.com/michaldziuba03/code-samples/tree/main/reset-password).

### Database setup
I gonna use TypeORM with SQLite driver (I use SQLite to make project easier to run, without requiring knowledge of tools like Docker).

> /setup/db.ts
```ts
import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { ResetToken } from '../entities/ResetToken';

export const sampleDataSource = new DataSource({
    type: 'sqlite',
    database: "sample.db",
    entities: [User, ResetToken],
    synchronize: true,
});

export const userRepository = sampleDataSource.getRepository(User);
export const resetTokenRepository = sampleDataSource.getRepository(ResetToken);

export async function startDatabase() {
    await sampleDataSource.initialize();
}
```
> /entities/User.ts
```ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
```

> /entities/ResetToken.ts
```ts
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './User';

@Entity('reset_tokens')
export class ResetToken {
    @PrimaryColumn()
    token: string;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user: User;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ name: 'token_expiry' })
    tokenExpiry: number;
}
```
### Setup middlewares
> server.ts
```ts
import 'reflect-metadata';
import { config } from 'dotenv';
config();
import express from 'express';
import session from 'express-session';
import flash from 'express-flash';
import { startDatabase } from './setup/db';

startDatabase();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(session({
    name: 'sid',
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false,
}));

app.listen(3000, () => {
    console.log('Server started');
});
```

### Mock register & login
Authentication is out of scope of this guide but we need somehow create accounts and later test if password actually changes. In login page if password is valid we will just show simple success message.
> server.ts
```ts
// REGISTER:
app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { email, name, password } = req.body;

    const userExists = await userRepository.exist({ where: {
        email,
    } });

    if (userExists) {
        req.flash('err', 'User already exists');
        return res.redirect('/register');
    }

    const hashedPassword = await argon2.hash(password);

    const user = await userRepository.save({
        email,
        name,
        password: hashedPassword,
    });

    req.flash('success', 'Now you can login to created account');
    return res.redirect('/login');
});

// LOGIN:
app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await userRepository.findOneBy({ email });
    if(!user) {
        req.flash('err', 'Invalid email or password');
        return res.redirect('/login');
    }


    const isMatching = await argon2.verify(user.password, password);
    if (!isMatching) {
        req.flash('err', 'Invalid email or password');
        return res.redirect('/login');
    }

    req.flash('success', 'Valid email and password :)');
    return res.redirect('/login');
});
```

### Mail configuration
For email testing you can use services like [Ethereal Email](https://ethereal.email) or [Mailtrap](https://mailtrap.io).

In addition to the reset link, it is also good to include:
- IP location
- Time
- Operating system & Browser
- Mention it's safe to ignore this email
- Support contact info


To keep this guide simple, I will send just only link:
> mail.ts
```ts
import { createTransport } from 'nodemailer';

const transport = createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

const URL = process.env.URL || 'http://localhost:3000';

export async function sendResetEmail(email: string, token: string) {
    const link = `${URL}/reset/${token}`;

    await transport.sendMail({
        subject: 'Reset password - Sample',
        to: email,
        html: `Reset password link: <a href="${link}"> ${link} </a>`,
        text: `Reset password link: ${link}`,
    });
}
```

### Reset password request
> throttler.ts
```ts
import { RateLimiterMemory } from 'rate-limiter-flexible';

const resetLimiter = new RateLimiterMemory({
    duration: 5 * 60 * 60,
    points: 5,
    keyPrefix: 'reset',
});

export async function throttleResetPassword(email: string) {
    try {
        const result = await resetLimiter.consume(email, 1);
        if (result.remainingPoints <= 0) {
            return true;
        }

        return false;
    } catch (err) {
        return true;
    }
}
```

> server.ts
```ts
app.get('/reset/request', (req, res) => {
    return res.render('reset-request');
});

const TWENTY_MINUTES = 20 * 60 * 1000;
app.post('/reset/request', async (req, res) => {
    const { email } = req.body;

    const isBlocked = await throttleResetPassword(email);
    if (isBlocked) {
        req.flash('err', 'Too many reset password requests');
        return res.redirect('/reset/request');
    }

    const user = await userRepository.findOneBy({ email });
    if (user) {
        const token = randomBytes(64).toString('hex');
        const tokenHash = createHash('sha256').update(token).digest('hex');

        await resetTokenRepository.save({
            token: tokenHash,
            userId: user.id,
            tokenExpiry: Date.now() + TWENTY_MINUTES,
        });

        sendResetEmail(user.email, token);
    }

    // show successful message even if user doesn't exist
    return res.render('sent', { email });
});
```

### Reset password
> server.ts
```ts
app.get('/reset/:token', (req, res) => {
    return res.render('reset', {
        token: req.params.token,
    });
});

app.post('/reset', async (req, res) => {
    const { token, password } = req.body;
    const tokenHash = createHash('sha256').update(token).digest('hex');

    const resetToken = await resetTokenRepository.findOneBy({
        token: tokenHash,
        tokenExpiry: MoreThanOrEqual(Date.now()),
     });

    if (!resetToken) {
        return res.render('error');
    }

    const hashedPassword = await argon2.hash(password);

    await sampleDataSource.transaction(async t => {
        await t.update(
            User,
            { id: resetToken.userId },
            { password: hashedPassword },
        );

        await t.delete(ResetToken, { userId: resetToken.userId });
    })

    return res.render('success');
});
```

## Summary
Thanks for reading this guide, I hope you found it helpful and interesting. Any feedback is welcome. Let me know if you know a better approach :)

### Additional resources
- [LogRocket blog - Implementing a secure password reset in Node.js](https://blog.logrocket.com/implementing-secure-password-reset-node-js/)
- [SuperTokens blog - Implementing a forgot password flow](https://supertokens.com/blog/implementing-a-forgot-password-flow)
- [Checklist design - Resetting password flow](https://www.checklist.design/flows/password)
- [OWASP - Forgot Password Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)
- [How to implement Password reset feature in a web application?](https://www.meziantou.net/how-to-implement-password-reset-feature-in-a-web-application.htm)