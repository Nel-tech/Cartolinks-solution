import Image from "next/image";
import { NewspaperIcon, WalletIcon } from "@heroicons/react/24/outline";

const footerLinks = [
  { label: "Legal", Icon: NewspaperIcon },
  { label: "Pricing", Icon: WalletIcon },
];

function Footer() {
  return (
    <div>
      {/* Header Section */}
      <header className="flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6">
        <h1 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
          Gallery
        </h1>

        <nav className="flex flex-wrap gap-3 sm:gap-6">
          {footerLinks.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              className="flex items-center gap-2 bg-[#F3F4F6] dark:bg-zinc-800 px-3 sm:px-4 py-2 rounded-2xl text-sm sm:text-base font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Footer Section */}
      <footer className="bg-[#212121] dark:bg-zinc-900 mt-1">
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="bg-black dark:bg-white w-[2.5rem] h-[2.5rem] rounded-2xl flex items-center justify-center">
              <Image
                src="/images/Light-logo.svg"
                width={32}
                height={32}
                alt="Krea AI Logo"
                className="dark:invert"
              />
            </div>
            <span className="text-2xl sm:text-3xl text-white dark:text-gray-100 font-roboto font-bold">
              Krea AI
            </span>
          </div>

          {/* Curated By */}
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-0">
            <h2 className="text-white dark:text-gray-300 text-lg sm:text-xl font-semibold sm:mr-2">
              curated by
            </h2>
            <Image
              src="/images/Mobbin.png"
              width={200}
              height={140}
              alt="Mobbin"
              className="w-[180px] h-[120px] sm:w-[200px] sm:h-[140px]"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
