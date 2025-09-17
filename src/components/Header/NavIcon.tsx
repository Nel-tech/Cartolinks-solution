
import Image from "next/image";
import clsx from "clsx";
function NavIcon({
  src,
  alt,
  active,
}: {
  src: string;
  alt: string;
  active?: boolean;
}) {
  return (
    <span
      className={clsx(
        "p-2 rounded-lg cursor-pointer transition-colors flex items-center justify-center",
        active
          ? "bg-white  dark:bg-gray-100"
          : "hover:bg-white dark:hover:bg-gray-100 "
      )}
    >
      <Image src={src} alt={alt} width={20} height={20} />
    </span>
  );
}

export default NavIcon