import { JSX, SVGProps } from 'react'

export const IconTrain = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      aria-hidden="true"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M16 18H8m8 0 2 3m-2-3a3 3 0 0 0 3-3v-4M8 18l-2 3m2-3a3 3 0 0 1-3-3v-4m3 3v1m8-1v1M5 11h7m-7 0V6m7 5h7m-7 0V6m7 5V6m-7 0H5m7 0h7M5 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3" />
      </g>
    </svg>
  )
}
