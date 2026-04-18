# Personal Website


My portfolio and blog built with [Astro](https://astro.build/), [React](https://react.dev/), [Sanity](https://www.sanity.io/), and [Tailwind CSS](https://tailwindcss.com/).

## Features

- **Astro** for fast, static-first site generation
- **React** components for interactive UI elements
- **Sanity CMS** for content management (blog, authors, categories)
- **RSS Feed** for subscribing to content updates.
- **Tailwind CSS** for utility-first, responsive styling
- **Accessible** and responsive design
- **Contact form** with [FormSubmit](https://formsubmit.co/)
- **SEO-friendly** and performant

## Tech Stack

| Technology      | Purpose                        |
|-----------------|-------------------------------|
| Astro           | Static site generation         |
| React           | UI components & interactivity  |
| Sanity          | Headless CMS backend           |
| Tailwind CSS    | Styling                        |
| React Icons     | Iconography                    |
| FormSubmit      | Contact form handling          |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22+ recommended)
- [pnpm](https://pnpm.io/) (v10.30.0+ recommended)

1. **Clone the repository:**

```sh
   git clone https://github.com/michaldziuba03/website.git
   cd website
```

2. **Install dependencies**

```sh
pnpm install
```

3. **Set up environment variables**

Create `.env` file in the root directory with following values:

```sh
PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
PUBLIC_SANITY_DATASET=your_sanity_dataset
```

4. **Run the development server:**

```sh
pnpm dev
```

The site will be available by default at `http://localhost:4321`.
