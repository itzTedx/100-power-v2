import localFont from "next/font/local";

export const helvetica = localFont({
  variable: "--font-helvetica",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  src: [
    {
      weight: "200",
      path: "./helvetica/HelveticaNowDisplay-Light.woff",
    },
    {
      weight: "400",
      path: "./helvetica/HelveticaNowDisplay-Regular.woff",
    },
    {
      weight: "500",
      path: "./helvetica/HelveticaNowDisplay-Medium.woff",
    },
  ],
});

export const aloevera = localFont({
  variable: "--font-aloevera",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  src: [
    {
      weight: "100",
      path: "./aloevera/AloeveraDisplay-Thin.woff",
    },
    {
      weight: "200",
      path: "./aloevera/AloeveraDisplay-ExtraLight.woff",
    },
    {
      weight: "300",
      path: "./aloevera/AloeveraDisplay-Light.woff",
    },
    {
      weight: "400",
      path: "./aloevera/AloeveraDisplay-Regular.woff",
    },
    {
      weight: "500",
      path: "./aloevera/AloeveraDisplay-Medium.woff",
    },
    {
      weight: "600",
      path: "./aloevera/AloeveraDisplay-SemiBold.woff",
    },
    {
      weight: "700",
      path: "./aloevera/AloeveraDisplay-Bold.woff",
    },
    {
      weight: "800",
      path: "./aloevera/AloeveraDisplay-Black.woff",
    },
  ],
});
