import styles from "./icons.module.css";

export type SvgIcon =
  | "logo"
  | "arrow-right"
  | "arrow"
  | "close"
  | "menu"
  | "copy"
  | "pencil"
  | "success"
  | "search"
  | "add"
  | "profile"
  | "card"
  | "edit";

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

const LogoIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="87"
    height="34"
    viewBox="0 0 87 34"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <path
      d="M63.4615 13.1817H77.378V0.5H86.3077V33.5H77.378V20.1942H63.4615"
      fill="currentColor"
    />
    <path
      d="M47.7787 0.5L43.7109 15.1506C43.5174 15.9518 43.3063 16.8242 43.0816 17.769C42.8556 18.7139 42.6459 19.6118 42.4524 20.4586C42.2589 21.3082 42.0965 22.0356 41.9679 22.6436H41.5809C41.4185 21.8746 41.225 21.0102 41.0004 20.0493C40.7744 19.0883 40.5484 18.1676 40.3224 17.2872C40.0964 16.4068 39.9029 15.7102 39.7418 15.1975L35.72 0.5H23.522C23.457 5.92216 23.4096 9.9257 23.4029 11.9442C23.4029 12.2623 23.3988 13.5454 23.3014 15.2432C23.2364 16.3813 23.2039 16.9503 23.1065 17.5919C22.9793 18.4294 22.7614 19.8131 21.9996 21.4142C21.6125 22.2289 21.0482 23.3871 19.8587 24.5172C19.4528 24.9037 18.6584 25.6929 17.3404 26.1989C16.339 26.5827 15.1603 26.7746 13.8044 26.7746H8.67019V7.22535C10.0803 7.23072 11.1818 7.22938 11.941 7.22535C12.6 7.22267 13.006 7.22133 13.4322 7.22535C13.6027 7.22804 13.7746 7.23072 13.9857 7.23609C15.3078 7.2683 16.0291 7.28575 16.8546 7.36225C17.2659 7.39983 17.8465 7.46559 18.5447 7.58504V0.844924C18.0035 0.759029 17.4283 0.685212 16.8207 0.630185C16.0291 0.557711 15.2821 0.526842 14.5906 0.522816C9.72571 0.514763 4.86353 0.508053 0 0.5V33.5H13.9004C17.5163 33.5 20.576 32.9081 23.0781 31.723C24.2486 31.1687 25.2879 30.4735 26.1973 29.6414C26.1973 29.6414 26.2027 29.6374 26.2041 29.6347C26.2217 29.6186 26.242 29.6038 26.2596 29.5864C26.3096 29.5394 26.3881 29.4642 26.4788 29.3757C26.9402 28.9355 27.5045 28.3328 28.0621 27.541C29.2759 25.815 29.8307 24.081 30.1853 22.4128C30.1866 22.4074 30.188 22.402 30.1893 22.3967C30.8633 19.6024 30.8957 17.357 30.9066 16.7168C30.9066 16.6994 30.9066 16.6792 30.9066 16.6604C30.9187 16.2847 30.9214 15.9706 30.9228 15.7505C30.9228 15.7357 30.9228 15.7223 30.9228 15.7075C30.958 13.8648 31.0148 11.6007 31.0811 8.954H31.1163C31.2774 9.59554 31.4627 10.3793 31.6738 11.3081C31.8836 12.2368 32.1015 13.1495 32.3275 14.046C32.5535 14.9425 32.747 15.7116 32.908 16.3518L37.7999 33.5H44.7745L49.6178 16.3518C49.8113 15.6471 50.0291 14.807 50.2714 13.8299C50.5136 12.8529 50.7396 11.908 50.9493 10.9954C51.1591 10.0827 51.312 9.38616 51.4094 8.90569H51.7965C51.7965 9.41838 51.7802 10.2505 51.7478 11.4034C51.7153 12.5562 51.6909 13.838 51.6747 15.2459C51.6584 16.6551 51.6503 18.0482 51.6503 19.4252V33.5H60.0769V0.5H47.7747H47.7787Z"
      fill="currentColor"
    />
  </svg>
);

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

const ProfileIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <path
      d="M16.9075 0C12.4248 0.00463263 8.12698 1.78744 4.95721 4.95721C1.78744 8.12698 0.00463263 12.4248 0 16.9075C0 21.425 1.7575 25.67 4.95 28.8625C6.5165 30.4378 8.37999 31.6867 10.4325 32.5368C12.4851 33.387 14.6859 33.8214 16.9075 33.815C21.3902 33.8104 25.688 32.0276 28.8578 28.8578C32.0276 25.688 33.8104 21.3902 33.815 16.9075C33.8104 12.4248 32.0276 8.12698 28.8578 4.95721C25.688 1.78744 21.3902 0.00463263 16.9075 0ZM6.6875 28.7525C7.85607 27.2322 9.35286 25.9954 11.0662 25.1344C12.7796 24.2734 14.6652 23.8104 16.5825 23.78C16.6425 23.7825 16.7 23.7975 16.76 23.7975H16.8175C16.8725 23.7975 16.9225 23.7825 16.9775 23.78C18.9213 23.8131 20.8317 24.2913 22.5617 25.1781C24.2918 26.0648 25.7956 27.3363 26.9575 28.895C24.1464 31.2674 20.5859 32.5676 16.9075 32.565C13.1519 32.5717 9.52112 31.2173 6.6875 28.7525ZM16.7675 22.5175C16.705 22.5175 16.645 22.5275 16.5825 22.53C15.1233 22.4806 13.7409 21.8639 12.7292 20.8111C11.7175 19.7584 11.1564 18.3525 11.165 16.8925C11.1676 16.1534 11.3161 15.4222 11.602 14.7406C11.8878 14.0591 12.3054 13.4406 12.8308 12.9208C13.3562 12.401 13.979 11.9901 14.6636 11.7115C15.3481 11.4329 16.0809 11.2922 16.82 11.2975C17.5591 11.3001 18.2903 11.4486 18.9719 11.7345C19.6534 12.0203 20.2719 12.4379 20.7917 12.9633C21.3115 13.4887 21.7224 14.1115 22.001 14.7961C22.2796 15.4806 22.4203 16.2135 22.415 16.9525C22.415 19.9825 19.99 22.445 16.98 22.5325C16.91 22.53 16.84 22.5175 16.7675 22.5175ZM27.885 28.055C25.9519 25.5039 23.2022 23.6932 20.095 22.925C21.1762 22.3325 22.0782 21.4601 22.7063 20.3992C23.3344 19.3383 23.6655 18.1279 23.665 16.895C23.6621 15.9919 23.481 15.0982 23.1322 14.2652C22.7834 13.4321 22.2737 12.676 21.6324 12.0402C20.991 11.4044 20.2305 10.9013 19.3944 10.5598C18.5583 10.2183 17.6631 10.0451 16.76 10.05C15.8569 10.0529 14.9632 10.234 14.1301 10.5828C13.2971 10.9316 12.541 11.4413 11.9052 12.0826C11.2694 12.724 10.7663 13.4845 10.4248 14.3206C10.0833 15.1567 9.91006 16.0519 9.915 16.955C9.91959 18.1764 10.2519 19.3742 10.8772 20.4234C11.5025 21.4726 12.3979 22.3348 13.47 22.92C10.4153 23.6703 7.70204 25.4272 5.7675 27.9075C2.86591 24.985 1.24215 21.0308 1.2525 16.9125C1.25713 12.7613 2.90824 8.78144 5.84359 5.84609C8.77894 2.91074 12.7588 1.25963 16.91 1.255C21.0612 1.25963 25.0411 2.91074 27.9764 5.84609C30.9118 8.78144 32.5629 12.7613 32.5675 16.9125C32.5664 18.9877 32.1518 21.0419 31.3478 22.9551C30.5439 24.8682 29.3666 26.602 27.885 28.055Z"
      fill="currentColor"
    />
  </svg>
);

const CardIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="36"
    height="34"
    viewBox="0 0 36 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <path
      d="M29.3452 2.16497V8.98997L30.1069 8.22826H7.0916C6.28799 8.22826 5.51484 8.60911 5.11875 9.32894C4.85215 9.80882 4.84072 10.3077 4.84072 10.8295V21.0861L5.60244 20.3243H2.17471C2.16328 20.3243 2.01475 20.3243 2.01475 20.3167L2.11758 20.3282C2.0833 20.3205 2.05283 20.3129 2.01855 20.3053C1.98809 20.2977 1.95381 20.2863 1.92334 20.2748C1.84717 20.2444 1.8624 20.252 1.96523 20.2977C1.96523 20.3015 1.84336 20.2329 1.83574 20.2291C1.67959 20.1377 1.83574 20.2329 1.82812 20.2367C1.82051 20.2444 1.61484 20.0387 1.62246 20.0311C1.6415 20.012 1.71387 20.172 1.65674 20.0654C1.63389 20.0235 1.60723 19.9778 1.58438 19.9359C1.50059 19.7911 1.62627 20.0958 1.58438 19.9359C1.58057 19.9206 1.52725 19.7416 1.53486 19.7416L1.54629 19.8445C1.54248 19.8102 1.53867 19.7759 1.53867 19.7416C1.53486 19.6769 1.53867 19.7074 1.53867 19.6883V19.6426C1.53105 18.3248 1.53867 17.0033 1.53867 15.6855V2.11546C1.53867 2.09642 1.54248 2.08119 1.54248 2.06214C1.5501 1.97835 1.5501 1.99359 1.53486 2.11165C1.53105 2.11165 1.58057 1.93265 1.58438 1.91742C1.50059 2.05833 1.62627 1.75365 1.58438 1.91742C1.61104 1.87552 1.63389 1.83363 1.65674 1.78792C1.73672 1.6432 1.53867 1.90599 1.65674 1.78411C1.69102 1.74984 1.72148 1.71175 1.75957 1.67747C1.88906 1.5556 1.75957 1.67747 1.75576 1.67367C1.75195 1.66986 1.87002 1.6013 1.88145 1.59369C2.04141 1.50609 1.87764 1.58988 1.87764 1.58607C1.87764 1.57845 1.99951 1.54417 2.02236 1.54036C2.0376 1.53656 2.05664 1.53275 2.07187 1.52894C2.15566 1.5137 2.13662 1.5137 2.01855 1.53275C2.01855 1.52513 2.16328 1.52513 2.17471 1.52513H26.1079C26.9763 1.52513 27.8446 1.5137 28.713 1.52513C28.732 1.52513 28.8729 1.52132 28.8729 1.53275C28.8768 1.55179 28.6901 1.48324 28.8463 1.53656C28.8844 1.54798 28.9263 1.55941 28.9682 1.57083C28.8272 1.48704 29.1319 1.61273 28.9682 1.57083C29.0101 1.59749 29.052 1.62035 29.0977 1.6432C29.2424 1.72318 28.9796 1.52513 29.1015 1.6432C29.1357 1.67747 29.1738 1.70794 29.2081 1.74603C29.33 1.87552 29.2081 1.74603 29.2119 1.74222C29.2157 1.73841 29.2843 1.85648 29.2919 1.8679C29.3795 2.02786 29.2957 1.8641 29.2995 1.8641C29.3071 1.8641 29.3414 1.9974 29.3452 2.00882C29.349 2.02406 29.3528 2.0431 29.3566 2.05833C29.3719 2.14212 29.3719 2.12308 29.3528 2.00501C29.3452 2.00882 29.3452 2.15355 29.3452 2.16497C29.3528 2.56488 29.6918 2.94574 30.1069 2.92669C30.5145 2.90765 30.8763 2.59154 30.8687 2.16497C30.8458 0.976693 29.8975 0.0207357 28.7054 0.00169271H2.95166C2.68887 0.00169271 2.42988 -0.00211589 2.16709 0.00169271C1.21875 0.0169271 0.40752 0.614877 0.102832 1.5099C0.0114258 1.77269 0 2.05072 0 2.32493V19.6731C0.0114258 20.6062 0.586523 21.406 1.45869 21.7259C1.89668 21.8859 2.38799 21.844 2.84502 21.844H5.59482C6.00615 21.844 6.35654 21.4936 6.35654 21.0823V13.6212C6.35654 12.5662 6.35273 11.5151 6.35654 10.4601V10.3611C6.35654 10.3268 6.36035 10.2925 6.36416 10.2582C6.36797 10.1554 6.32227 10.403 6.36035 10.3077C6.3832 10.2506 6.40225 10.1744 6.41367 10.1135C6.43272 10.0183 6.34131 10.2392 6.39463 10.1592C6.41748 10.1249 6.43272 10.0868 6.45176 10.0526C6.44795 10.0602 6.50508 9.96878 6.50508 9.96878C6.52031 9.9764 6.39463 10.0907 6.47461 10.0069L6.61172 9.86976C6.71455 9.77074 6.57744 9.90404 6.57363 9.90023C6.57363 9.90023 6.646 9.85453 6.65742 9.84691C6.68408 9.83167 6.71455 9.81644 6.74502 9.7974C6.59268 9.83929 6.88213 9.71742 6.74502 9.7974C6.75645 9.79359 6.93926 9.74027 6.93926 9.74788C6.93926 9.75931 6.7374 9.75931 6.88975 9.7555C6.92402 9.7555 6.9583 9.75169 6.99258 9.75169H7.0002C7.14873 9.74788 7.29727 9.75169 7.4458 9.75169H30.1031C30.5145 9.75169 30.8648 9.4013 30.8648 8.98997V2.16497C30.8648 1.76507 30.5145 1.38421 30.1031 1.40326C29.6956 1.4223 29.3452 1.73841 29.3452 2.16497Z"
      fill="currentColor"
    />
    <path
      d="M0.76631 6.22507H28.9156C29.2965 6.22507 29.6812 6.23268 30.062 6.22507H30.1115C30.5114 6.22507 30.8923 5.87467 30.8732 5.46335C30.8542 5.05202 30.5381 4.70163 30.1115 4.70163H1.96221C1.58135 4.70163 1.19668 4.69401 0.815822 4.70163H0.76631C0.366408 4.70163 -0.0144514 5.05202 0.00459159 5.46335C0.0236346 5.87848 0.339748 6.22507 0.76631 6.22507ZM34.1829 10.3917V27.1457C34.1829 27.1647 34.1829 27.3056 34.1753 27.3094C34.1601 27.3132 34.221 27.1114 34.1791 27.2561C34.1639 27.3018 34.1524 27.3513 34.1372 27.4008C34.0953 27.5532 34.2058 27.3056 34.1486 27.378C34.1182 27.4199 34.0877 27.4808 34.0648 27.5265C33.9887 27.6636 34.1563 27.4466 34.0801 27.5113C34.0496 27.538 34.0268 27.5722 33.9963 27.6027C33.9887 27.6103 33.8935 27.7055 33.8858 27.7017C33.8668 27.6827 34.0268 27.6103 33.9201 27.6674C33.8782 27.6903 33.8325 27.717 33.7906 27.7398C33.6497 27.8236 33.9506 27.6979 33.7906 27.7398C33.7602 27.7474 33.7259 27.7589 33.6954 27.7703C33.6611 27.7779 33.6307 27.7855 33.5964 27.7931C33.7145 27.7779 33.7297 27.7779 33.6459 27.7855C32.9718 27.7931 32.2977 27.7893 31.6235 27.7893H9.04239C8.36065 27.7893 7.67891 27.8007 7.00098 27.7893H6.94766C6.92862 27.7893 6.91338 27.7855 6.89434 27.7855C6.81055 27.7779 6.82578 27.7779 6.94385 27.7931C6.94385 27.7969 6.80674 27.7589 6.79531 27.7589C6.78389 27.755 6.7001 27.7284 6.7001 27.7284C6.7001 27.7246 6.86006 27.8084 6.70391 27.7208C6.67725 27.7055 6.64678 27.6865 6.62012 27.6713C6.55156 27.6256 6.5668 27.637 6.6544 27.7055C6.62774 27.6865 6.60488 27.6636 6.58203 27.6408C6.55156 27.6141 6.5249 27.5837 6.49824 27.5532C6.38779 27.4427 6.5249 27.5646 6.50967 27.5722C6.50205 27.576 6.38399 27.3628 6.38779 27.359C6.39541 27.3551 6.44492 27.5303 6.39541 27.3551C6.3916 27.3437 6.35733 27.2066 6.36113 27.2066C6.37256 27.2066 6.37256 27.4085 6.36875 27.2561C6.36875 27.2142 6.36494 27.1952 6.36494 27.1495V13.4728C6.36494 12.4483 6.34971 11.42 6.36494 10.3955V10.3917C6.36494 10.3726 6.36114 10.4221 6.36494 10.3383C6.36494 10.3193 6.36875 10.3041 6.36875 10.285C6.37637 10.2012 6.37637 10.2165 6.36113 10.3345C6.36494 10.3345 6.41065 10.0908 6.42969 10.0946C6.4335 10.0946 6.34971 10.2546 6.43731 10.0984C6.44112 10.0946 6.50967 9.97272 6.51729 9.97272C6.5211 9.97653 6.39922 10.106 6.5211 9.97653C6.54776 9.94606 6.57822 9.9194 6.60869 9.89274C6.71914 9.78229 6.59727 9.9194 6.58965 9.90417C6.58584 9.90036 6.70391 9.8318 6.71533 9.82419C6.72676 9.81657 6.80293 9.77848 6.80293 9.77848C6.80674 9.7861 6.63154 9.83561 6.80674 9.7861C6.84483 9.77467 6.89434 9.77086 6.92862 9.75563C6.98574 9.7442 6.96289 9.74801 6.85244 9.76325C6.88672 9.75944 6.921 9.75563 6.95528 9.75563C7.01621 9.75182 7.07715 9.75563 7.13428 9.75563H33.6002C33.6192 9.75563 33.6345 9.75944 33.6535 9.75944C33.7221 9.76706 33.7221 9.76706 33.6535 9.75944C33.6383 9.75563 33.6192 9.75563 33.604 9.75182C33.6383 9.75944 33.6688 9.76706 33.703 9.77467C33.7145 9.77848 33.8478 9.81276 33.8478 9.82038C33.8439 9.84323 33.6992 9.74421 33.8021 9.80514C33.8439 9.8318 33.8858 9.85465 33.9315 9.87751C34.0763 9.95749 33.8173 9.75944 33.9354 9.87751C33.9544 9.89655 34.1144 10.0413 34.1067 10.0527C34.0915 10.0679 34.0153 9.89655 34.0877 10.0375C34.1067 10.0717 34.1296 10.1098 34.1486 10.1441C34.1067 9.98415 34.2324 10.285 34.1486 10.1441C34.1563 10.1746 34.1677 10.2089 34.1791 10.2393C34.1829 10.2546 34.1867 10.2736 34.1905 10.2888C34.2058 10.3726 34.2058 10.3536 34.1867 10.2355C34.1829 10.2355 34.1829 10.3802 34.1829 10.3917C34.1905 10.7916 34.5295 11.1724 34.9446 11.1534C35.3521 11.1343 35.714 10.8182 35.7064 10.3917C35.6873 9.39762 34.9865 8.4569 33.9772 8.2779C33.7944 8.24362 33.6192 8.23219 33.4364 8.23219H7.1C6.89434 8.23219 6.69248 8.24743 6.49444 8.29313C5.52705 8.51022 4.85674 9.42048 4.84151 10.3955C4.8377 10.6735 4.84151 10.9477 4.84151 11.2257V26.959C4.84151 27.0581 4.8377 27.1571 4.84531 27.2561C4.92529 28.334 5.72129 29.1718 6.79531 29.2975C7.02383 29.3242 7.25996 29.3128 7.48848 29.3128H33.1013C33.4364 29.3128 33.7716 29.328 34.1029 29.2404C35.0475 28.9928 35.6911 28.1131 35.7064 27.1495V10.3917C35.7064 9.99176 35.356 9.6109 34.9446 9.62995C34.5333 9.64899 34.1829 9.9651 34.1829 10.3917Z"
      fill="currentColor"
    />
    <path
      d="M9.79365 24.0568H12.433C12.8329 24.0568 13.2138 23.7064 13.1947 23.2951C13.1757 22.8837 12.8596 22.5333 12.433 22.5333H9.79365C9.39375 22.5333 9.01289 22.8837 9.03194 23.2951C9.05098 23.7064 9.36709 24.0568 9.79365 24.0568ZM14.223 17.7231H10.6734C10.5897 17.7269 10.6239 17.7497 10.6658 17.7307C10.7115 17.7078 10.7306 17.7459 10.6658 17.7269C10.6734 17.7269 10.5706 17.704 10.5668 17.6964C10.5668 17.6659 10.7153 17.7802 10.6125 17.7078C10.4944 17.6241 10.643 17.7421 10.6468 17.7421C10.643 17.7459 10.5706 17.6698 10.5744 17.6736C10.483 17.5936 10.6315 17.7002 10.6011 17.7117C10.5973 17.7117 10.563 17.6507 10.563 17.6469C10.5249 17.5631 10.6049 17.8031 10.5706 17.666C10.5706 17.6736 10.5439 17.5669 10.5478 17.5669C10.5706 17.5555 10.5554 17.7383 10.5592 17.6126V14.223C10.5592 14.1697 10.563 14.1125 10.5592 14.0592C10.5592 14.0478 10.5668 14.0097 10.5592 14.0021C10.5935 14.044 10.5249 14.1544 10.5554 14.0516C10.5516 14.0592 10.5782 13.9526 10.5858 13.9526C10.582 13.9526 10.5135 14.1316 10.5744 13.9983C10.6277 13.8878 10.5592 14.0592 10.5401 14.0326C10.5363 14.0287 10.6125 13.9564 10.6087 13.9602C10.6925 13.8688 10.5744 13.9945 10.5706 13.9868C10.5744 13.9907 10.6544 13.9297 10.6582 13.9373C10.6772 13.9678 10.4944 13.983 10.6163 13.9564C10.6354 13.9526 10.7077 13.9411 10.7153 13.9335C10.6963 13.9488 10.5325 13.9411 10.6696 13.945H13.9831C14.0555 13.945 14.1316 13.9488 14.204 13.945C14.223 13.945 14.2688 13.9526 14.2802 13.945C14.2269 13.9868 14.1316 13.9069 14.2307 13.9411C14.2497 13.9488 14.3145 13.9716 14.3297 13.9716C14.3068 13.9754 14.1735 13.8916 14.284 13.9602C14.3868 14.0249 14.2535 13.9259 14.2497 13.9259C14.2535 13.9221 14.3106 13.9868 14.3221 13.9945C14.4325 14.0935 14.284 13.964 14.2954 13.9564C14.2916 13.9564 14.3525 14.0402 14.3449 14.044C14.3335 14.0516 14.2916 13.8535 14.3259 14.0021C14.3297 14.0211 14.3411 14.0897 14.3487 14.1011C14.3411 14.0897 14.3449 13.9488 14.3335 14.0287V14.063C14.3297 14.124 14.3335 14.1887 14.3335 14.2496V17.6126C14.3335 17.6317 14.3259 17.6621 14.3335 17.6698C14.3183 17.6545 14.383 17.4869 14.3373 17.6202C14.3335 17.6355 14.3297 17.6545 14.3221 17.6698C14.2992 17.7345 14.2992 17.7345 14.3221 17.6736C14.3487 17.6621 14.3563 17.6088 14.3145 17.6736C14.2383 17.7993 14.3449 17.6393 14.3487 17.6393C14.3525 17.6431 14.2878 17.7002 14.2802 17.7117C14.2002 17.8031 14.3068 17.6545 14.3183 17.685C14.3221 17.6926 14.2269 17.7307 14.2307 17.7345C14.223 17.7231 14.4173 17.6812 14.2726 17.7155C14.2497 17.7231 14.223 17.7269 14.1964 17.7345C14.0974 17.7612 14.3982 17.7155 14.223 17.7231C13.827 17.7345 13.4423 18.0659 13.4613 18.4848C13.4804 18.8885 13.7965 19.2579 14.223 19.2465C15.1295 19.2199 15.8341 18.5191 15.8569 17.6126C15.8607 17.4298 15.8569 17.247 15.8569 17.0642V14.6914C15.8569 14.482 15.8607 14.2725 15.8569 14.063C15.8417 13.3051 15.3085 12.5739 14.5315 12.452C14.2802 12.4139 14.0364 12.4177 13.7851 12.4177H12.6539C12.0026 12.4177 11.3514 12.4139 10.7001 12.4177C9.98789 12.4253 9.36709 12.8481 9.12334 13.5222C9.02432 13.8002 9.03194 14.0897 9.03194 14.3829V17.5326C9.03194 18.1306 9.29854 18.6905 9.82031 19.0104C10.1593 19.216 10.5287 19.2465 10.9096 19.2465H14.223C14.623 19.2465 15.0038 18.8961 14.9848 18.4848C14.9657 18.0697 14.6496 17.7231 14.223 17.7231ZM15.3275 24.0568H17.9669C18.3668 24.0568 18.7477 23.7064 18.7286 23.2951C18.7096 22.8837 18.3935 22.5333 17.9669 22.5333H15.3275C14.9276 22.5333 14.5468 22.8837 14.5658 23.2951C14.5849 23.7064 14.901 24.0568 15.3275 24.0568ZM20.8614 24.0949H23.5008C23.9007 24.0949 24.2815 23.7445 24.2625 23.3331C24.2435 22.9218 23.9273 22.5714 23.5008 22.5714H20.8614C20.4615 22.5714 20.0807 22.9218 20.0997 23.3331C20.1188 23.7445 20.4349 24.0949 20.8614 24.0949ZM26.3953 24.0949H29.0347C29.4346 24.0949 29.8154 23.7445 29.7964 23.3331C29.7773 22.9218 29.4612 22.5714 29.0347 22.5714H26.3953C25.9954 22.5714 25.6146 22.9218 25.6336 23.3331C25.6526 23.7445 25.9688 24.0949 26.3953 24.0949Z"
      fill="currentColor"
    />
  </svg>
);

const EditIcon = ({ color = "black", onClick }: IconProps) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...(onClick && { onClick })}
    className={cssColor[color]}
  >
    <g clipPath="url(#clip0_1623_2796)">
      <path
        d="M23.332 25H4.9987V6.66667H16.0154L17.682 5H4.9987C4.55667 5 4.13275 5.17559 3.82019 5.48816C3.50763 5.80072 3.33203 6.22464 3.33203 6.66667V25C3.33203 25.442 3.50763 25.866 3.82019 26.1785C4.13275 26.4911 4.55667 26.6667 4.9987 26.6667H23.332C23.7741 26.6667 24.198 26.4911 24.5105 26.1785C24.8231 25.866 24.9987 25.442 24.9987 25V12.5L23.332 14.1667V25Z"
        fill="currentColor"
      />
      <path
        d="M27.9406 4.86666L25.1322 2.05833C25.0076 1.93335 24.8595 1.8342 24.6965 1.76654C24.5335 1.69889 24.3587 1.66406 24.1822 1.66406C24.0057 1.66406 23.831 1.69889 23.668 1.76654C23.5049 1.8342 23.3569 1.93335 23.2322 2.05833L11.8072 13.55L10.8822 17.5583C10.8428 17.7526 10.847 17.9532 10.8944 18.1458C10.9418 18.3383 11.0312 18.5179 11.1563 18.6717C11.2815 18.8255 11.4391 18.9496 11.6179 19.0352C11.7967 19.1208 11.9923 19.1657 12.1906 19.1667C12.293 19.1779 12.3964 19.1779 12.4989 19.1667L16.5406 18.275L27.9406 6.76666C28.0655 6.64203 28.1647 6.49396 28.2324 6.33094C28.3 6.16793 28.3348 5.99316 28.3348 5.81666C28.3348 5.64016 28.3 5.4654 28.2324 5.30238C28.1647 5.13936 28.0655 4.99129 27.9406 4.86666ZM15.6739 16.7333L12.6239 17.4083L13.3322 14.3833L21.9322 5.725L24.2822 8.075L15.6739 16.7333ZM25.2239 7.13333L22.8739 4.78333L24.1656 3.46666L26.5322 5.83333L25.2239 7.13333Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1623_2796">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

type IconProps = {
  icon?: SvgIcon;
  color?: ColorIcon;
  onClick?: () => void;
};

export const Icon = (props: IconProps): JSX.Element => {
  const svgs: any = {
    logo: <LogoIcon {...props} />,
    "arrow-right": <ArrowRightIcon {...props} />,
    arrow: <ArrowIcon {...props} />,
    close: <CloseIcon {...props} />,
    menu: <MenuIcon {...props} />,
    copy: <CopyIcon {...props} />,
    pencil: <PencilIcon {...props} />,
    success: <SuccessIcon {...props} />,
    search: <SearchIcon {...props} />,
    add: <AddIcon {...props} />,
    profile: <ProfileIcon {...props} />,
    card: <CardIcon {...props} />,
    edit: <EditIcon {...props} />,
  };
  return svgs[props.icon!];
};
