import styles from "./input.module.css";

type InputProps = {
  type: "text" | "password";
  placeholder: string;
  size?: "small" | "normal";
  width?: "full";
};
export const Input = ({
  type,
  placeholder,
  size = "normal",
  width,
}: InputProps) => {
  const cssSize = {
    small: styles.small,
    normal: styles.normal,
    undefined: "",
  };
  const cssWidth: any = {
    full: styles.full,
    undefined: "",
  };
  const error = false;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`
        ${styles.input}
        ${cssSize[size]}
        ${cssWidth[width!]}
        ${error && styles.invalid}
      `}
    />
  );
};
