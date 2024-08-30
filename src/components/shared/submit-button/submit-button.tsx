"use client";

import { FieldValues, useFormContext } from "react-hook-form";
import styles from "./submit-button.module.css";

type SubmitButtonProps<T> = {
  label: string;
  color?: "primary" | "secondary" | "tertiary" | "background" | "silver";
  size?: "small" | "medium" | "large";
  width?: "full" | "default";
  icon?: boolean;
  onSubmit: (data: T) => void;
  isLoading?: boolean;
};

export const SubmitButton = <T extends FieldValues>({
  label,
  color = undefined,
  size = undefined,
  icon = false,
  width = "default",
  onSubmit,
  isLoading,
}: SubmitButtonProps<T>) => {
  const { handleSubmit } = useFormContext<T>();
  const cssSize: any = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
    undefined: "",
  };
  const cssColor: any = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    background: styles.background,
    silver: styles.silver,
    undefined: "",
  };
  const cssWidth: any = {
    full: styles.full,
    default: "",
  };
  return (
    <button
      type="submit"
      className={`
        ${styles.button}
        ${cssSize[size!]}
        ${cssColor[color!]}
        ${cssWidth[width!]}
        ${isLoading ? styles.disabled : ""}
      `}
      onClick={handleSubmit(onSubmit)}
      disabled={isLoading}
    >
      {label}
      {isLoading && <img src="/spinner.svg" alt="Loading" />}
    </button>
  );
};
