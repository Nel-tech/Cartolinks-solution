import Link from "next/link";
import NavIcon from "./NavIcon";
import { NAV_LINKS } from "@/helpers/mock";

export default function DesktopNav() {
  return (
    <div className="bg-gray-100 dark:bg-white px-3 py-2 rounded-2xl flex gap-4">
      {NAV_LINKS.map(({ key, src, alt, active }) => (
        <Link href="#" key={key}>
          <NavIcon src={src} alt={alt} active={active} />
        </Link>
      ))}
    </div>
  );
}
