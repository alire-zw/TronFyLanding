interface IconProps {
  className?: string;
  size?: number;
}

export const PriceUpIcon = ({ className = "", size = 21 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 21 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M10.5018 7.87628C9.53525 7.87628 8.75177 8.46391 8.75177 9.18882C8.75177 9.91367 9.53525 10.5013 10.5018 10.5013C11.4682 10.5013 12.2518 11.089 12.2518 11.8138C12.2518 12.5387 11.4682 13.1263 10.5018 13.1263M10.5018 7.87628C11.2637 7.87628 11.9119 8.24151 12.1521 8.75132M10.5018 7.87628V7.00128M10.5018 13.1263C9.73973 13.1263 9.09153 12.7611 8.85135 12.2513M10.5018 13.1263V14.0013" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round"
    />
    <path 
      d="M11.8125 2.18878C11.8125 2.18878 11.0984 2.18878 10.5 2.18878C6.58145 2.18878 4.62218 2.18878 3.40483 3.40613C2.1875 4.62346 2.1875 6.58273 2.1875 10.5013C2.1875 14.4198 2.1875 16.3791 3.40483 17.5965C4.62218 18.8138 6.58145 18.8138 10.5 18.8138C14.4185 18.8138 16.3778 18.8138 17.5952 17.5965C18.8125 16.3791 18.8125 14.4198 18.8125 10.5013C18.8125 9.9029 18.8125 9.18882 18.8125 9.18882" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round"
    />
    <path 
      d="M14.4375 6.56189L18.0913 2.90596M18.8125 6.10535L18.7091 3.4003C18.7091 2.76273 18.3284 2.36549 17.6349 2.31538L14.9014 2.18689" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const PriceDownIcon = ({ className = "", size = 21 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 21 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M10.5018 7.88123C9.53525 7.88123 8.75177 8.46885 8.75177 9.19374C8.75177 9.91859 9.53525 10.5062 10.5018 10.5062C11.4682 10.5062 12.2518 11.0939 12.2518 11.8187C12.2518 12.5436 11.4682 13.1312 10.5018 13.1312M10.5018 7.88123C11.2637 7.88123 11.9119 8.24645 12.1521 8.75624M10.5018 7.88123V7.00623M10.5018 13.1312C9.73973 13.1312 9.09153 12.766 8.85135 12.2562M10.5018 13.1312V14.0062" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round"
    />
    <path 
      d="M11.375 2.19373C11.375 2.19373 11.0984 2.19373 10.5 2.19373C6.58145 2.19373 4.62218 2.19373 3.40483 3.41107C2.1875 4.6284 2.1875 6.58768 2.1875 10.5062C2.1875 14.4248 2.1875 16.3841 3.40483 17.6014C4.62218 18.8187 6.58145 18.8187 10.5 18.8187C14.4185 18.8187 16.3778 18.8187 17.5952 17.6014C18.8125 16.3841 18.8125 14.4248 18.8125 10.5062C18.8125 9.90783 18.8125 9.63124 18.8125 9.63124" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round"
    />
    <path 
      d="M18.8023 2.18127L15.1485 5.8372M14.4273 2.63781L14.5307 5.34287C14.5307 5.98043 14.9114 6.37767 15.6049 6.42777L18.3384 6.55627" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const TrxPriceIcon = ({ className = "", size = 21 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 21 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M16.568 12.2021L15.9815 9.0097C15.7282 7.63084 15.6015 6.9414 15.0999 6.5332C14.5982 6.125 13.8777 6.125 12.4365 6.125H8.56349C7.12232 6.125 6.40174 6.125 5.90011 6.5332C5.39847 6.9414 5.2718 7.63084 5.01846 9.0097L4.43193 12.2021C3.90607 15.0642 3.64314 16.4952 4.45278 17.4352C5.26241 18.375 6.7581 18.375 9.74951 18.375H11.2505C14.2419 18.375 15.7376 18.375 16.5472 17.4352C17.3568 16.4952 17.0939 15.0642 16.568 12.2021Z" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round"
    />
    <path 
      d="M18.375 9.625C18.5122 9.55579 18.6315 9.46855 18.7374 9.35856C19.25 8.82656 19.25 7.97031 19.25 6.25779C19.25 4.54528 19.25 3.68902 18.7374 3.15701C18.2248 2.625 17.3999 2.625 15.75 2.625H5.25C3.60008 2.625 2.77512 2.625 2.26257 3.15701C1.75 3.68902 1.75 4.54528 1.75 6.25779C1.75 7.97031 1.75 8.82656 2.26257 9.35856C2.36852 9.46855 2.48782 9.55579 2.625 9.625" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round"
    />
    <path 
      d="M8 9L13 10.4118M8 9L10.5 15M8 9L10.5 11.1176L13 10.4118M13 10.4118L12.2308 11.8235M10.5 15V11.4706L12.2308 11.8235M10.5 15L12.2308 11.8235" 
      stroke="currentColor" 
      strokeWidth="0.7"
    />
  </svg>
);

export const TelegramIcon = ({ className = "", size = 21 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 21 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M10.4872 13.4823L13.3235 16.7069C14.3742 17.9015 14.8997 18.4989 15.4496 18.3535C15.9996 18.208 16.1882 17.4219 16.5653 15.8496L18.6575 7.12766C19.2385 4.70603 19.5289 3.49522 18.8832 2.898C18.2376 2.30078 17.1185 2.74509 14.8803 3.63372L4.49642 7.75643C2.70632 8.46715 1.81126 8.82254 1.75444 9.4332C1.74862 9.49567 1.74852 9.55859 1.75415 9.62106C1.8091 10.232 2.70306 10.5904 4.49098 11.307C5.30108 11.6317 5.70614 11.7941 5.99655 12.1051C6.02921 12.14 6.0606 12.1762 6.09068 12.2136C6.35826 12.5461 6.47246 12.9825 6.70082 13.8551L7.12822 15.4884C7.35044 16.3376 7.46155 16.7622 7.75257 16.8201C8.04359 16.878 8.29697 16.5259 8.80373 15.8217L10.4872 13.4823ZM10.4872 13.4823L10.2092 13.1925C9.89266 12.8626 9.73446 12.6977 9.73446 12.4928C9.73446 12.2879 9.89266 12.1229 10.2092 11.7931L13.3355 8.53483" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const RocketIcon = ({ className = "", size = 21 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 21 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M8.45834 6.75001V5.61161C8.45834 4.3298 8.99334 3.22487 9.78162 2.29344C10.0882 1.93114 10.2415 1.75 10.5 1.75C10.7585 1.75 10.9118 1.93114 11.2184 2.29344C12.0067 3.22487 12.5416 4.3298 12.5416 5.61161V6.75001C12.5416 7.68751 12.5416 7.95407 13.1081 8.36413C13.5612 8.65541 14 8.93751 14 9.50233C14 10.1875 13.7084 10.5 13.0688 10.5H7.93113C7.29166 10.5 7 10.1875 7 9.50233C7 8.93751 7.43878 8.65541 7.89191 8.36413C8.45834 7.95407 8.45834 7.68751 8.45834 6.75001Z" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinejoin="round"
    />
    <path 
      d="M17.0625 19.25C18.2706 19.25 19.25 18.2053 19.25 16.9166C19.25 15.628 18.2706 14.5834 17.0625 14.5834C17.0625 13.2947 16.0831 12.25 14.875 12.25" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M3.9375 19.25C2.72938 19.25 1.75 18.2053 1.75 16.9166C1.75 15.628 2.72938 14.5834 3.9375 14.5834C3.9375 13.2947 4.91688 12.25 6.125 12.25" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M8.75 13.125V17.5" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round"
    />
    <path 
      d="M12.25 13.125V14.875" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round"
    />
  </svg>
);

export const ZapIcon = ({ className = "", size = 21 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 21 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M7.54962 11.0894H7.14803C5.84977 11.0894 5.20063 11.0894 4.92394 10.6613C4.64725 10.2334 4.91088 9.63708 5.43816 8.44448L7.02334 4.85908C7.50275 3.77475 7.74245 3.23258 8.20747 2.92879C8.67249 2.625 9.26266 2.625 10.4431 2.625H12.2713C13.7053 2.625 14.4223 2.625 14.6926 3.09343C14.9631 3.56186 14.6074 4.18764 13.896 5.4392L12.958 7.08915C12.6044 7.71133 12.4275 8.02243 12.43 8.27708C12.4332 8.60803 12.6092 8.91292 12.8935 9.07987C13.1122 9.20841 13.4686 9.20841 14.1815 9.20841C15.0826 9.20841 15.5333 9.20841 15.7679 9.36442C16.0728 9.56707 16.2324 9.92967 16.1765 10.2928C16.1334 10.5723 15.8303 10.9074 15.2241 11.5777L10.3809 16.9333C9.42961 17.9852 8.95396 18.5112 8.63456 18.3447C8.31515 18.1782 8.46854 17.4844 8.77529 16.0967L9.37624 13.3784C9.60977 12.3218 9.72659 11.7934 9.44571 11.4414C9.16484 11.0894 8.62642 11.0894 7.54962 11.0894Z" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinejoin="round"
    />
  </svg>
);

export const UserMultipleIcon = ({ className = "", size = 21 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 21 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M11.375 9.625C11.375 7.692 9.80796 6.125 7.875 6.125C5.942 6.125 4.375 7.692 4.375 9.625C4.375 11.558 5.942 13.125 7.875 13.125C9.80796 13.125 11.375 11.558 11.375 9.625Z" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M9.65877 6.61301C9.63646 6.45354 9.625 6.29061 9.625 6.125C9.625 4.192 11.192 2.625 13.125 2.625C15.058 2.625 16.625 4.192 16.625 6.125C16.625 8.058 15.058 9.625 13.125 9.625C12.4735 9.625 11.8636 9.44702 11.3412 9.13701" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M13.125 18.375C13.125 15.4755 10.7745 13.125 7.875 13.125C4.9755 13.125 2.625 15.4755 2.625 18.375" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M18.375 14.875C18.375 11.9755 16.0245 9.625 13.125 9.625" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const BitcoinShieldIcon = ({ className = "", size = 21 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 21 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M8.85938 12.6876V7.43762M10.5 7.43762V6.12512M10.5 14.0001V12.6876M8.85938 10.0626H12.1406M12.1406 10.0626C12.6843 10.0626 13.125 10.5033 13.125 11.047V11.7032C13.125 12.2469 12.6843 12.6876 12.1406 12.6876H7.875M12.1406 10.0626C12.6843 10.0626 13.125 9.62187 13.125 9.07823V8.422C13.125 7.87834 12.6843 7.43762 12.1406 7.43762H7.875" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M18.375 9.78559V7.24544C18.375 5.81044 18.375 5.09294 18.0214 4.62481C17.6678 4.1567 16.8683 3.92943 15.2694 3.4749C14.1769 3.16436 13.2139 2.79023 12.4445 2.44869C11.3955 1.98302 10.871 1.75018 10.5 1.75018C10.129 1.75018 9.60452 1.98302 8.5555 2.44869C7.78609 2.79023 6.82311 3.16436 5.73066 3.4749C4.13169 3.92943 3.33219 4.1567 2.9786 4.62481C2.625 5.09294 2.625 5.81044 2.625 7.24544V9.78559C2.625 14.7076 7.05492 17.6608 9.26975 18.8297C9.80096 19.11 10.0665 19.2502 10.5 19.2502C10.9335 19.2502 11.199 19.11 11.7303 18.8297C13.9451 17.6608 18.375 14.7076 18.375 9.78559Z" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round"
    />
  </svg>
);

export const ChartIcon = ({ className = "", size = 21 }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 21 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M1.75 18.375H19.25" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M3.5 15.75V13.125" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M7 12.25V7.875" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M10.5 9.625V7.875" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M14 9.625V4.375" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M17.5 4.375V2.625" 
      stroke="currentColor" 
      strokeWidth="1.3125" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
); 