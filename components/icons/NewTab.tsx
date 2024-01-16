import * as React from "react";
import { SVGProps } from "react";
const NewTab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#D1D1D1"
      d="M22 4.75a.75.75 0 1 0-1.5 0v15a.75.75 0 1 0 1.5 0v-15Zm-9.72 14.28a.75.75 0 1 1-1.06-1.06L16.19 13H1.75a.75.75 0 1 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25Z"
    />
  </svg>
);
export default NewTab;
