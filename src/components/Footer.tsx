import Image from "next/image";
import { ScaleIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const footerLinks = [
  { label: "Legal", Icon: ScaleIcon },
  { label: "Pricing", Icon: CurrencyDollarIcon },
];

function Footer() {
  return (
    <div>
      {/* Header Section */}
      <header className="flex items-center justify-between gap-4 sm:gap-6">
        <h1 className="text-lg sm:text-xl font-semibold text-black">
          Gallery
        </h1>

        <nav className="flex flex-wrap gap-3 sm:gap-6">
          {footerLinks.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              className="flex items-center gap-2 bg-[#F3F4F6] px-3 sm:px-4 py-2 rounded-2xl text-sm sm:text-base font-medium cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Footer Section */}
      <footer className="bg-[#212121FF]">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 gap-4 sm:gap-0">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="bg-black w-[3rem] h-[3rem] rounded-2xl flex items-center justify-center">
              <Image
                src="/images/Light-logo.svg"
                width={40}
                height={40}
                alt="Krea AI Logo"
              />
            </div>
            <span className="text-3xl text-white font-roboto font-bold">
              Krea AI
            </span>
          </div>

          {/* Curated By */}
          <div className="flex flex-col items-center sm:flex-row">
            <h2 className="text-white text-2xl font-bold">curated by</h2>
            <Image
              src="/images/Mobbin.png"
              width={250}
              height={175}
              alt="Mobbin"
              className="w-[200px] h-[140px] sm:w-[250px] sm:h-[175px]"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
