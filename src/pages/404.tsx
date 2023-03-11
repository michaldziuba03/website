import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import {Socials} from "../components/Socials";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className='w-full min-h-screen bg-primary text-body flex flex-col justify-between items-center'>
        <div></div>

        <div className='text-center'>
            <h1 className='text-7xl font-bold'>OOPS! PAGE NOT FOUND</h1>
            <h1 className='text-9xl font-bold'>404</h1>
            <div className="notfound__button">

            </div>
        </div>

        <div className='py-10'>
            <Socials className='text-body' />
        </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
