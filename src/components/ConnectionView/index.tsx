interface ConnectProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export const ConnectionView = ({
  startX,
  startY,
  endX,
  endY,
}: ConnectProps): JSX.Element => {
  return (
    <>
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="white"
        strokeWidth="2"
      />
    </>
  );
};
