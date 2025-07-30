interface IProps {
  width?: number;
  height?: number;
}

export function Dots(props: IProps) {
  const width = props.width || 350;
  const height = props.height || 500;
  const patternId = crypto.randomUUID();

  return (
    <svg
      className="absolute left-full -top-2.5 hidden lg:block transform -translate-x-1/2"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 400 800"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            className="text-gray-400"
            fill="currentColor"
          ></rect>
        </pattern>
      </defs>
      <rect
        width={'100%'}
        height={'100%'}
        fill={`url(#${patternId})`}
      ></rect>
    </svg>
  );
}
