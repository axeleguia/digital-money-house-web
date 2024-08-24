import { useFormContext } from "react-hook-form";
import { ColorIcon, Icon, SvgIcon } from "../icons/icons";
import styles from "./input.module.css";

type InputProps = {
  fieldName: string;
  type: "text" | "password" | "number" | "email";
  placeholder: string;
  size?: "small" | "normal";
  width?: "full";
  display?: boolean;
  icon?: SvgIcon;
  iconColor?: ColorIcon;
};
export const Input = ({
  fieldName,
  type,
  placeholder,
  size = "normal",
  width,
  display = true,
  icon,
  iconColor,
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
      <div className={styles.icon}>
        <Icon icon={icon} color={iconColor} />
      </div>
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
