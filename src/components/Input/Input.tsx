import styles from "./Input.module.css";

type InputProps = {
  placeholder: string;
  size: "small" | "normal";
};
export const Input = ({ placeholder, size }: InputProps) => {
  const cssSize = {
    small: styles.inputTextSmall,
    normal: styles.inputTextNormal,
  };
  const error = false;
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`
        ${styles.inputText}
        ${cssSize[size]}
        ${error && styles.inputError}
      `}
    />
  );
};
