type SkeletonProps = {
  width: number;
  height: number;
};

export const Skeleton = ({ width, height }: SkeletonProps) => {
  return (
    <div
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
        backgroundColor: "var(--color-gray)",
        borderRadius: "4px",
        opacity: "0.5",
      }}
    ></div>
  );
};
