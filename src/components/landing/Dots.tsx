interface DotsProps {
    width?: number;
    height?: number;
    /** Radius of each dot in px */
    dotRadius?: number;
    /** Center-to-center spacing between dots in px */
    gap?: number;
    color?: string;
    className?: string;
}

export function Dots({
    width = 255,
    height = 300,
    dotRadius = 4,
    gap = 24,
    color = "#913c134D",
    className,
}: DotsProps) {
    // A stable-enough ID scoped to the instance without crypto overhead on SSR
    const patternId = `dots-${width}-${height}-${dotRadius}-${gap}`;

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            aria-hidden="true"
            className={className}
        >
            <defs>
                <pattern
                    id={patternId}
                    x={dotRadius}
                    y={dotRadius}
                    width={gap}
                    height={gap}
                    patternUnits="userSpaceOnUse"
                >
                    <circle cx={dotRadius} cy={dotRadius} r={dotRadius} fill={color} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
    );
}
