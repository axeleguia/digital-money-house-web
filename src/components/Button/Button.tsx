import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  btnType?: "primary" | "secondary" | "third";
  size?: "small" | "medium" | "large";
  icon?: boolean;
  onClick?: () => void;
};
export const Button = ({
  label,
  btnType = undefined,
  size = undefined,
  icon = false,
  onClick,
}: ButtonProps) => {
  const cssSize: any = {
    small: styles.buttonSmallSize,
    medium: styles.buttonMediumSize,
    large: styles.buttonLargeSize,
    undefined: "",
  };
  const cssTypes: any = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
    third: styles.buttonThird,
    undefined: "",
  };
  return (
    <button
      className={`
        ${styles.button}
        ${cssTypes[btnType!]}
        ${cssSize[size!]}
      `}
      onClick={onClick}
    >
      {label}
      {icon && <img src="/arrow.svg" alt="Arrow Icon" />}
    </button>
  );
};
