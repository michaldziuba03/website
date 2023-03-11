import React, {useEffect, useState, MouseEvent} from "react";

interface IndicatorProps {
    sections: string[];
}

function getTopBoundingRect(el: HTMLElement) {
    return Math.abs(el.getBoundingClientRect().top);
}

interface IndicatorDotProps extends IndicatorProps {
    section: string;
    activeSection: string;
}

export const IndicatorDot: React.FC<IndicatorDotProps> = ({ section, activeSection, sections}) => {
    function handleClick(e: any) {
        if (section === sections[0]) {
            document.body.scrollIntoView({ behavior: 'smooth' });
            e.preventDefault();
        }
    }

    if ( activeSection !== section) {
        return (
            <a href={`#${section}`}
               onClick={handleClick}
               className=' flex w-5 h-5 flex border border-gray-400 border-2 rounded-full transition-transform'
            >
            </a>
        )
    }
    return (
        <a href={`#${section}`}
           onClick={handleClick}
           className='flex w-5 h-5 scale-150 flex items-center justify-center border border-primary border-2 rounded-full transition-transform'
        >
            <div className='w-3 h-3 bg-primary rounded-full'></div>
        </a>
    )
}

export const FixedNav: React.FC<IndicatorProps> = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(sections[0]);

    function spyScroll() {
        const sectionsEl = Array.from(document.querySelectorAll('section'));
        let minValue;
        let closestIndex = 0;
        let i = 0;

        for (const section of sectionsEl) {
            const currentValue = getTopBoundingRect(section);
            if (!minValue) {
                minValue = currentValue;
                closestIndex = i;
                i++;
                continue;
            }
            if (minValue > currentValue) {
                minValue = currentValue;
                closestIndex = i;
                i++;
            }
        }

        const closestSection = sectionsEl[closestIndex];
        setActiveSection(closestSection.id);
    }

    useEffect(() => {
        window.addEventListener('scroll', spyScroll);
        return () => window.removeEventListener('scroll', spyScroll);
    }, []);

    return (
        <nav className='hidden fixed top-2/4 left-24 -translate-y-1/2 lg:flex flex-col items-center gap-6'>
            { sections.map(section => <IndicatorDot
                key={section}
                section={section}
                sections={sections}
                activeSection={activeSection}
            />) }
        </nav>
    )
}
