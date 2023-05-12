import * as React from "react"
import { SVGProps } from "react"
const WalletConnectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M9 0a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M5.72 6.95c1.81-1.768 4.75-1.768 6.56 0l.218.215a.22.22 0 0 1 0 .32l-.745.727a.117.117 0 0 1-.165 0l-.3-.291a3.293 3.293 0 0 0-4.577 0l-.32.313a.117.117 0 0 1-.165 0l-.745-.728a.22.22 0 0 1 0-.32l.239-.236Zm8.103 1.505.665.647a.22.22 0 0 1 0 .32l-2.992 2.921a.236.236 0 0 1-.327 0L9.046 10.27a.06.06 0 0 0-.081 0L6.84 12.343a.236.236 0 0 1-.327 0L3.512 9.422a.22.22 0 0 1 0-.32l.665-.647a.236.236 0 0 1 .326 0l2.124 2.074a.06.06 0 0 0 .08 0l2.124-2.074a.236.236 0 0 1 .327 0l2.124 2.074a.06.06 0 0 0 .08 0l2.124-2.074a.249.249 0 0 1 .337 0Z"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(18 0 0 18 0 9)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5D9DF6" />
        <stop offset={1} stopColor="#006FFF" />
      </radialGradient>
    </defs>
  </svg>
)
export default WalletConnectIcon
