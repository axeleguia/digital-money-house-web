import { useFormContext } from "react-hook-form";
import styles from "./input.module.css";

type InputProps = {
  fieldName: string;
  type: "text" | "password" | "number" | "email";
  placeholder: string;
  size?: "small" | "normal";
  width?: "full";
  display?: boolean;
  icon?: string;
};
export const Input = ({
  fieldName,
  type,
  placeholder,
  size = "normal",
  width,
  display = true,
  icon,
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
  return !icon ? (
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
  ) : (
    <div className={styles.wrapper}>
      <img src={icon} className={styles.icon} />
      <input
        type={type}
        placeholder={placeholder}
        className={`
        ${styles.input}
        ${cssSize[size]}
        ${cssWidth[width!]}
        ${errors[fieldName] ? styles.invalid : ""}
        ${!display ? styles.hidden : ""}
        ${icon ? styles.withIcon : ""}
      `}
        {...register(fieldName)}
      />
    </div>
  );
};
