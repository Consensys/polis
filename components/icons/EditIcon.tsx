"use client";

import * as React from "react";
import { SVGProps } from "react";
import { useTheme } from "next-themes";

const EditIcon = (props: SVGProps<SVGSVGElement>) => {
  const { resolvedTheme } = useTheme();
  const stroke = resolvedTheme === "dark" ? "#808080" : "#3D434D";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...props}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.829 2.91 1.44-1.44a1.6 1.6 0 1 1 2.262 2.262L7.47 12.794a3.84 3.84 0 0 1-1.619.964l-2.291.683.683-2.291a3.84 3.84 0 0 1 .964-1.62l7.622-7.62Zm0 0 2.25 2.25m-1.28 5.867v4.054A1.92 1.92 0 0 1 11.88 17H2.92A1.92 1.92 0 0 1 1 15.08V6.12A1.92 1.92 0 0 1 2.92 4.2h4.053"
      />
    </svg>
  );
};

export default EditIcon;
