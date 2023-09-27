import * as React from "react"
import { HeadFC, PageProps } from "gatsby";
import { Button } from "../components/shared/Button";
import { Socials } from "../components/shared/Socials";
import {Container} from "../components/shared/Container";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Container className='w-full min-h-screen flex flex-col justify-between items-center'>
        <div>
        </div>

        <div className='flex flex-col items-center text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold'>OOPS! PAGE NOT FOUND</h1>
            <h1 className='text-6xl lg:text-9xl font-bold'>404</h1>
            <div className="md:w-80 mt-8">
                <Button href='/' variant='primary'>Back to home</Button>
            </div>
        </div>

        <div className='py-10'>
            <Socials />
        </div>
    </Container>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
