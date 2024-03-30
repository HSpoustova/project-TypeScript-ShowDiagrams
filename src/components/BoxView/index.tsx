interface BoxProps {
  key: number;
  posX: number;
  posY: number;
  width: number;
  height: number;
  fill: string;
  label: string;
}

export const BoxView = ({
  key,
  posX,
  posY,
  width,
  height,
  fill,
  label,
}: BoxProps): JSX.Element => {
  return (
    <>
      <g key={key}>
        <rect
          x={posX}
          y={posY}
          rx="5"
          ry="5"
          width={width}
          height={height}
          fill={fill}
          stroke="white"
          strokeWidth="2"
        />
        <text
          className="label"
          x={posX + 50}
          y={posY + 20}
          textAnchor="middle"
          alignmentBaseline="central"
        >
          {label}
        </text>
      </g>
    </>
  );
};
