import styles from "./icons.module.css";

export type SvgIcon =
  | "arrow-right"
  | "arrow"
  | "close"
  | "menu"
  | "copy"
  | "pencil"
  | "success"
  | "search"
  | "add";

export type ColorIcon =
  | "background"
  | "primary"
  | "secondary"
  | "tertiary"
  | "opaque"
  | "gray"
  | "silver"
  | "black";

const cssColor = {
  background: styles.colorBackground,
  primary: styles.colorPrimary,
  secondary: styles.colorSecondary,
  tertiary: styles.colorTertiary,
  opaque: styles.colorOpaque,
  gray: styles.colorGray,
  silver: styles.colorSilver,
  black: styles.colorBlack,
};

const ArrowRightIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="22"
    height="23"
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <path
      d="M2 10C1.17157 10 0.5 10.6716 0.5 11.5C0.5 12.3284 1.17157 13 2 13L2 10ZM21.0607 12.5607C21.6464 11.9749 21.6464 11.0251 21.0607 10.4393L11.5147 0.893397C10.9289 0.307611 9.97918 0.307611 9.3934 0.893398C8.80761 1.47918 8.80761 2.42893 9.3934 3.01472L17.8787 11.5L9.3934 19.9853C8.80761 20.5711 8.80761 21.5208 9.3934 22.1066C9.97919 22.6924 10.9289 22.6924 11.5147 22.1066L21.0607 12.5607ZM2 13L20 13L20 10L2 10L2 13Z"
      fill="currentColor"
    />
  </svg>
);

const ArrowIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <path
      d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97918 0.807611 9.3934 1.3934C8.80761 1.97918 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM2 13.5L20 13.5L20 10.5L2 10.5L2 13.5Z"
      fill="currentColor"
    />
  </svg>
);

const CloseIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <path
      d="M2 2L16 16"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M16 2L2 15"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const MenuIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="33"
    height="26"
    viewBox="0 0 33 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <line
      x1="2"
      y1="2"
      x2="31"
      y2="2"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <line
      x1="2"
      y1="13"
      x2="31"
      y2="13"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <line
      x1="2"
      y1="24"
      x2="31"
      y2="24"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const CopyIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="38"
    height="32"
    viewBox="0 0 38 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <path
      d="M28.4375 10V28H10.4375V10H28.4375ZM28.4375 8H10.4375C9.90707 8 9.39836 8.21071 9.02329 8.58579C8.64821 8.96086 8.4375 9.46957 8.4375 10V28C8.4375 28.5304 8.64821 29.0391 9.02329 29.4142C9.39836 29.7893 9.90707 30 10.4375 30H28.4375C28.9679 30 29.4766 29.7893 29.8517 29.4142C30.2268 29.0391 30.4375 28.5304 30.4375 28V10C30.4375 9.46957 30.2268 8.96086 29.8517 8.58579C29.4766 8.21071 28.9679 8 28.4375 8Z"
      fill="currentColor"
    />
    <path
      d="M4.4375 18H2.4375V4C2.4375 3.46957 2.64821 2.96086 3.02329 2.58579C3.39836 2.21071 3.90707 2 4.4375 2H18.4375V4H4.4375V18Z"
      fill="currentColor"
    />
  </svg>
);

const PencilIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <g clipPath="url(#clip0_5053_160)">
      <path
        d="M2.44531 15.5091V18.9466H5.88281L16.0211 8.80829L12.5836 5.37079L2.44531 15.5091ZM18.6795 6.14996C19.037 5.79246 19.037 5.21496 18.6795 4.85746L16.5345 2.71246C16.177 2.35496 15.5995 2.35496 15.242 2.71246L13.5645 4.38996L17.002 7.82746L18.6795 6.14996V6.14996Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_5053_160">
        <rect width="22" height="22" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

const SuccessIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="92"
    height="95"
    viewBox="0 0 92 95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <g clipPath="url(#clip0_1623_2865)">
      <path
        d="M48.8983 5.97322C43.234 5.96253 37.6234 7.1073 32.3887 9.34181C27.154 11.5763 22.3983 14.8566 18.3946 18.9942C1.57584 36.3613 1.57584 64.612 18.4003 81.9792C35.2191 99.3404 62.5776 99.3404 79.3963 81.9792C96.2094 64.612 96.2094 36.3613 79.3963 18.9942C75.395 14.8566 70.6413 11.5764 65.4085 9.34182C60.1756 7.10726 54.5667 5.96247 48.9041 5.97322H48.8983ZM48.8983 11.8751C58.4548 11.8751 68.0114 15.6454 75.3254 23.192C78.8014 26.7735 81.5593 31.0279 83.4409 35.7115C85.3226 40.3951 86.2912 45.416 86.2912 50.4867C86.2912 55.5573 85.3226 60.5782 83.4409 65.2618C81.5593 69.9454 78.8014 74.1998 75.3254 77.7814C71.8569 81.3708 67.7369 84.2186 63.2012 86.1616C58.6655 88.1046 53.8031 89.1048 48.8926 89.1048C43.9821 89.1048 39.1197 88.1046 34.584 86.1616C30.0483 84.2186 25.9283 81.3708 22.4598 77.7814C18.9838 74.1998 16.2259 69.9454 14.3442 65.2618C12.4626 60.5782 11.494 55.5573 11.494 50.4867C11.494 45.416 12.4626 40.3951 14.3442 35.7115C16.2259 31.0279 18.9838 26.7735 22.4598 23.192C25.9272 19.5998 30.048 16.7508 34.5852 14.8087C39.1225 12.8665 43.9867 11.8696 48.8983 11.8751ZM65.9183 38.6057C65.3738 38.6586 64.8552 38.8707 64.4234 39.2173L43.4128 55.486L33.6781 45.4398C33.4129 45.1562 33.0956 44.9301 32.7449 44.7745C32.3941 44.6189 32.0169 44.537 31.6351 44.5336C31.2534 44.5301 30.8748 44.6053 30.5215 44.7545C30.1682 44.9038 29.8472 45.1242 29.5772 45.403C29.3073 45.6817 29.0938 46.0132 28.9492 46.378C28.8047 46.7429 28.7319 47.1338 28.7353 47.528C28.7386 47.9222 28.8179 48.3118 28.9686 48.674C29.1192 49.0362 29.3383 49.3637 29.6128 49.6376L41.1128 61.5126C41.6016 62.0175 42.2502 62.3237 42.9398 62.3749C43.6294 62.4262 44.3138 62.2191 44.8676 61.7917L67.8676 43.9792C68.355 43.6124 68.7183 43.0966 68.9061 42.5048C69.094 41.9131 69.0969 41.2753 68.9144 40.6817C68.7319 40.0882 68.3733 39.5689 67.8893 39.1974C67.4052 38.8259 66.8204 38.621 66.2174 38.6117C66.1197 38.6065 66.0218 38.6065 65.9241 38.6117L65.9183 38.6057Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1623_2865">
        <rect width="92" height="95" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

const SearchIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <circle
      cx="6.5"
      cy="6.5"
      r="5.75"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10.1992 11L14.7195 16.1191"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const AddIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <circle cx="17" cy="17" r="16.35" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M16.75 10V24.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path
      d="M24 17L9.5 17"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  icon?: SvgIcon;
  color?: ColorIcon;
  onClick?: () => void;
};

export const Icon = (props: IconProps): JSX.Element => {
  const svgs: any = {
    "arrow-right": <ArrowRightIcon {...props} />,
    arrow: <ArrowIcon {...props} />,
    close: <CloseIcon {...props} />,
    menu: <MenuIcon {...props} />,
    copy: <CopyIcon {...props} />,
    pencil: <PencilIcon {...props} />,
    success: <SuccessIcon {...props} />,
    search: <SearchIcon {...props} />,
    add: <AddIcon {...props} />,
  };
  return svgs[props.icon!];
};
