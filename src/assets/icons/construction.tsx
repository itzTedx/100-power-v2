import { JSX, SVGProps } from 'react'

export const IconConstruction = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      aria-hidden="true"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path
          d="m13.57,9.258l-6.656,6.656c-.781.781-2.047.781-2.828,0h0c-.781-.781-.781-2.047,0-2.828l6.656-6.656"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="m15.831,10.602l1.432-1.432c.316-.316.316-.829,0-1.146l-4.01-4.379-4.931-.343-.286.286,6.65,7.013c.316.316.829.316,1.146,0Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}
