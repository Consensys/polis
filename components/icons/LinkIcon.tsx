import * as React from "react";
import { SVGProps } from "react";
const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#3D434D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.333 3.667H3a2 2 0 0 0-2 2v9.334a2 2 0 0 0 2 2h9.333a2 2 0 0 0 2-2V7.667M5 13.001 17 1m0 0h-4.667M17 1v4.666"
    />
  </svg>
);
export default LinkIcon;
