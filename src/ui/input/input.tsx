import { useFormContext } from "react-hook-form";
import styles from "./input.module.css";

type InputProps = {
  fieldName: string;
  type: "text" | "password" | "number" | "email";
  placeholder: string;
  size?: "small" | "normal";
  width?: "full";
  display?: boolean;
};
export const Input = ({
  fieldName,
  type,
  placeholder,
  size = "normal",
  width,
  display = true,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const cssSize: any = {
    small: styles.small,
    normal: styles.normal,
    undefined: "",
  };
  const cssWidth: any = {
    full: styles.full,
    undefined: "",
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`
        ${styles.input}
        ${cssSize[size]}
        ${cssWidth[width!]}
        ${errors[fieldName] ? styles.invalid : ""}
        ${!display ? styles.hidden : ""}
      `}
      {...register(fieldName)}
    />
  );
};
