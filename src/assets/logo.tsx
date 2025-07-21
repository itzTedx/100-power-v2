import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.webp"
      alt="100 Power Logo"
      height={54}
      width={96}
      priority
      loading="eager"
    />
  );
};
