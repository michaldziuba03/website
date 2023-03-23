import React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { PostsListLayout } from '../layouts/PostsListLayout';
import {Header} from "../components/Header";

interface PostsListTemplateProps {
    data: any,
    pageContext: {
        limit: number,
        skip: number,
        numPages: number,
        currentPage: number,
    }
}

const BlogPost: React.FC<PostsListTemplateProps> = ({ data }) => {
    return (
        <>
            <Header></Header>
        </>
    )
}

export default BlogPost;

export const Head: HeadFC = ({ location }) => {
    return <></>
}