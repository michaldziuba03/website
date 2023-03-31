import React, {useEffect, useState} from "react";

function getTopBoundingRect(el: HTMLElement) {
    return Math.abs(el.getBoundingClientRect().top);
}

interface IndicatorProps {
    sections: string[];
}

export const SectionIndicator: React.FC<IndicatorProps> = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(sections[0]);

    function spyScroll() {
        const sectionsEl = Array.from(document.querySelectorAll('section'));
        const sortedSections = sectionsEl.sort((s1, s2) => {
            return getTopBoundingRect(s1) - getTopBoundingRect(s2);
        });

        setActiveSection(sortedSections[0].id);
    }

    useEffect(() => {
        window.addEventListener('scroll', spyScroll);
        return () => window.removeEventListener('scroll', spyScroll);
    }, []);

    return (
        <nav className='hidden fixed top-2/4 left-24 -translate-y-1/2 xl:flex flex-col items-center gap-6'>
            { sections.map(section => <IndicatorDot
                key={section}
                section={section}
                sections={sections}
                activeSection={activeSection}
            />) }
        </nav>
    )
}

interface IndicatorDotProps extends IndicatorProps {
    section: string;
    activeSection: string;
}

export const IndicatorDot: React.FC<IndicatorDotProps> = ({ section, activeSection, sections}) => {
    const isFirst = section === sections[0];

    function handleClick(e: any) {
        if (isFirst) {
            document.body.scrollIntoView({ behavior: 'smooth' });
            e.preventDefault();
        }
    }

    if ( activeSection !== section) {
        return (
            <a href={`#${section}`}
               onClick={handleClick}
               className=' flex relative group w-5 h-5 flex border border-gray-400 border-2 rounded-full transition-transform'
            >
                <span className='hidden z-50 capitalize absolute left-7 top-1/2 -translate-y-1/2 select-none rounded group-hover:flex px-3 py-2 bg-heading text-body font-medium text-sm'>
                    { section }
                </span>
            </a>
        )
    }
    return (
        <a href={`#${section}`}
           onClick={handleClick}
           className='flex relative group w-5 h-5 scale-150 flex items-center justify-center border border-primary border-2 rounded-full transition-transform'
        >
            <div className='w-3 h-3 bg-primary rounded-full'></div>
        </a>
    )
}
