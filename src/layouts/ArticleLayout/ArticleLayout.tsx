import React from 'react';
import { PropsWithChildren } from "react"
import { ArticleAuthor } from '../../components/article/ArticleAuthor';
import { LatestArticles } from '../../components/article/LatestArticles';
import { Container } from "../../components/container/Container"
import './ArticleLayout.scss';

export const ArticleLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <main style={{ padding: '0 1.5rem' }}>
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
        </main>
    )
  }