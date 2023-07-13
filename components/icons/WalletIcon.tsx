import * as React from "react";
import { SVGProps } from "react";
import { useTheme } from "next-themes";

const WalletIcon = (props: SVGProps<SVGSVGElement>) => {
  const { resolvedTheme } = useTheme();
  const stroke = resolvedTheme === "dark" ? "#202328" : "#fff";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      fill="none"
      {...props}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.075 8.5A1.875 1.875 0 0 0 14.2 6.625h-3.125a2.5 2.5 0 0 1-5 0H2.95A1.875 1.875 0 0 0 1.075 8.5m15 0v5a1.875 1.875 0 0 1-1.875 1.875H2.95A1.875 1.875 0 0 1 1.075 13.5v-5m15 0V6m-15 2.5V6m15 0A1.875 1.875 0 0 0 14.2 4.125H2.95A1.875 1.875 0 0 0 1.075 6m15 0V3.5A1.875 1.875 0 0 0 14.2 1.625H2.95A1.875 1.875 0 0 0 1.075 3.5V6"
      />
    </svg>
  );
};

export default WalletIcon;
