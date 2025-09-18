import Image from "next/image";

export default function Logo() {
  return (
    <>
      {/* Light Mode Logo */}
      <Image
        src="/images/Dark-Logo.svg"
        width={30}
        height={30}
        alt="Krea Ai Light"
        className="block dark:hidden"
      />
      {/* Dark Mode Logo */}
      <Image
        src="/images/Light-logo.svg"
        width={30}
        height={30}
        alt="Krea Ai Dark"
        className="hidden dark:block"
      />
    </>
  );
}
