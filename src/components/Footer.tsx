import Image from "next/image";
import { NewspaperIcon, WalletIcon } from "@heroicons/react/24/outline";

const footerLinks = [
  { label: "Legal", Icon: NewspaperIcon },
  { label: "Pricing", Icon: WalletIcon },
];

function Footer() {
  return (
    <div>
      <header className="flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6">
        <h1 className="text-lg sm:text-xl font-semibold text-black dark:text-white">Gallery</h1>

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

      <footer className="bg-[#212121] dark:bg-zinc-900">
        <div className="px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div className="flex items-center gap-3">
            <div className="bg-black dark:bg-white w-[2rem] h-[2rem] rounded-xl flex items-center justify-center">
              <Image
                src="/images/Light-logo.svg"
                width={24}
                height={24}
                alt="Krea AI Logo"
                className="dark:invert"
              />
            </div>
            <span className="text-xl sm:text-2xl text-white dark:text-gray-100 font-roboto font-bold">
              Krea AI
            </span>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:gap-0">
            <h2 className="text-white dark:text-gray-300 text-xl font-medium sm:mr-2">
              curated by
            </h2>
            <Image src="/images/Mobbin.png" width={180} height={144} alt="Mobbin" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
