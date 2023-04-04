import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import {Button} from "../components/Button";
import {Socials} from "../components/Socials";
import {Logo} from "../components/Logo";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className='w-full min-h-screen flex flex-col justify-between items-center'>
        <div>
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold'>OOPS! PAGE NOT FOUND</h1>
            <h1 className='text-6xl lg:text-9xl font-bold'>404</h1>
            <div className="md:w-80 mt-8">
                <Button  href='/' variant='primary'>Back to home</Button>
            </div>
        </div>

        <div className='py-10'>
            <Socials />
        </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
