import { JSX, SVGProps } from 'react'

export const FlagUae = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg {...props} viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h6v3H0z" fill="#00843D" />
      <path d="M0 1h6v2H0z" fill="#fff" />
      <path d="M0 2h6v1H0z" />
      <path d="M0 0h1.5v3H0z" fill="#C8102E" />
    </svg>
  )
}

export const FlagEn = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg {...props} viewBox="0 0 6000 3900" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h7410v3900H0z" fill="#b22234" />
      <path
        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
        stroke="#fff"
        strokeWidth="300"
      />
      <path d="M0 0h2964v2100H0z" fill="#3c3b6e" />
      <g fill="#fff">
        <g id="d">
          <g id="c">
            <g id="e">
              <g id="b">
                <path
                  d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                  id="a"
                />
                <use xlinkHref="#a" y="420" />
                <use xlinkHref="#a" y="840" />
                <use xlinkHref="#a" y="1260" />
              </g>
              <use xlinkHref="#a" y="1680" />
            </g>
            <use x="247" xlinkHref="#b" y="210" />
          </g>
          <use x="494" xlinkHref="#c" />
        </g>
        <use x="988" xlinkHref="#d" />
        <use x="1976" xlinkHref="#c" />
        <use x="2470" xlinkHref="#e" />
      </g>
    </svg>
  )
}

export const FlagRu = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg {...props} viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h9v3H0z" fill="#fff" />
      <path d="M0 3h9v3H0z" fill="#DA291C" />
      <path d="M0 2h9v2H0z" fill="#0032A0" />
    </svg>
  )
}

export const FlagUK = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg {...props} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h640v480H0z" fill="#012169" />
      <path
        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
        fill="#FFF"
      />
      <path
        d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
        fill="#C8102E"
      />
      <path d="M241 0v480h160V0zM0 160v160h640V160z" fill="#FFF" />
      <path d="M0 193v96h640v-96zM273 0v480h96V0z" fill="#C8102E" />
    </svg>
  )
}
