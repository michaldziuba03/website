interface IProps {
  width?: number;
  height?: number;
}

export function Dots(props: IProps) {
  const width = props.width || 350;
  const height = props.height || 500;

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
          id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
        fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
      ></rect>
    </svg>
  );
}
