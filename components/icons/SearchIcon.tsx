import * as React from "react";
import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#D1D5DD"
      fillRule="evenodd"
      d="M6.005 2.502a4.003 4.003 0 1 0 0 8.006 4.003 4.003 0 0 0 0-8.006ZM0 6.505a6.005 6.005 0 1 1 10.898 3.478l4.821 4.821a1 1 0 0 1-1.415 1.415l-4.82-4.82A6.005 6.005 0 0 1 0 6.505Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SearchIcon;
