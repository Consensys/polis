import * as React from "react";
import { SVGProps } from "react";

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M10 .25C4.615.25.25 4.617.25 10A9.75 9.75 0 0 0 10 19.75 9.75 9.75 0 0 0 19.75 10c0-5.384-4.365-9.75-9.75-9.75ZM10.75 7a.75.75 0 1 0-1.5 0v2.25H7a.75.75 0 0 0 0 1.5h2.25V13a.75.75 0 0 0 1.5 0v-2.25H13a.75.75 0 1 0 0-1.5h-2.25V7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default AddIcon;
