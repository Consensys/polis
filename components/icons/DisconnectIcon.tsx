import * as React from "react"
import { SVGProps } from "react"
const DisconnectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#202328"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7.5V3.75A2.25 2.25 0 0 0 9.75 1.5h-6A2.25 2.25 0 0 0 1.5 3.75v13.5a2.25 2.25 0 0 0 2.25 2.25h6A2.25 2.25 0 0 0 12 17.25V13.5m-3.75-6-3 3m0 0 3 3m-3-3H18"
    />
  </svg>
)
export default DisconnectIcon