import React from "react";

type CardProps = {
  className?: string;
  color?: string;
  children?: React.ReactNode;
  onMouseLeave?: () => void;
};
export const Card = ({
  className,
  color,
  children,
  onMouseLeave,
}: CardProps) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: color ? `var(--color-${color})` : "var(--color-white)",
        padding: "30px",
        marginBottom: "20px",
        borderRadius: "var(--border-radius)",
      }}
      {...(onMouseLeave && { onMouseLeave })}
    >
      {children}
    </div>
  );
};
