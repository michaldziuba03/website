import React from 'react';
import { PropsWithChildren } from "react"
import { Container } from "../container/Container"
import { ArticleAuthor } from './ArticleAuthor';
import { LatestArticles } from './LatestArticles';

export const ArticleLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container>
            <div className='article-layout'>
                <div>
                    { children }
                </div>

                <div className='sticky-column'>
                  <ArticleAuthor />
                  <LatestArticles />
                </div>
            </div>
        </Container>
    )
  }