import React from "react";
import {Link} from "gatsby";
import classNames from "classnames";

interface PageIndicatorProps {
    page: number;
    currentPage: number;
    basePath: string;
}

const PageIndicator: React.FC<PageIndicatorProps> = (props) => {
    const isFirst = props.page === 1;
    const isCurrent = props.page === props.currentPage;
    const pathname = `${props.basePath}/${isFirst ? '' : props.page}`;
    const styles = classNames('w-8 h-8 flex items-center justify-center rounded-full', {
        'bg-primary text-body select-none': isCurrent,
    });

    if (isCurrent) {
        return <span className={styles}>{props.page}</span>
    }

    return (
        <Link className={styles}
              to={pathname}>
            { props.page }
        </Link>
    )
}


interface ArrowIndicatorProps extends React.PropsWithChildren {
    isActive: boolean;
    to: string;
}

const ArrowIndicator: React.FC<ArrowIndicatorProps> = (props) => {
    const styles = classNames('flex items-center gap-2', {
        'text-paragraph': props.isActive,
        'text-gray-300 dark:text-gray-600 select-none': !props.isActive,
    })

    if (!props.isActive) {
        return <span className={styles}>{props.children}</span>
    }

    return (
        <Link className={styles}
              to={props.to}>{ props.children }</Link>
    )
}


interface PaginationProps {
    numPages: number;
    currentPage: number;
    basePath: string;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
    const isFirst = props.currentPage === 1;
    const previousPath = props.currentPage === 2 ? props.basePath : `${props.basePath}/${props.currentPage - 1}`;

    const isLast = props.currentPage === props.numPages;
    const nextPath = `${props.basePath}/${props.currentPage + 1}`;

    const pages = Array.from({ length: props.numPages });

    return (
        <nav className='w-full font-medium flex justify-between items-center'>
            <ArrowIndicator isActive={!isFirst} to={previousPath}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

                <span className='hidden md:inline'>Previous</span>
            </ArrowIndicator>
            <div className='flex gap-3 items-center'>
                { pages.map((_, i) => (
                    <PageIndicator
                        page={i+1}
                        basePath={props.basePath}
                        currentPage={props.currentPage} />
                )) }
            </div>
            <ArrowIndicator isActive={!isLast} to={nextPath}>
                <span className='hidden md:inline'>Next</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </ArrowIndicator>
        </nav>
    )
}
