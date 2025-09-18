import { ChevronDownIcon } from "@heroicons/react/24/solid";
import CircleNav from "./CircleNav";

export default function UserProfile() {
  return (
    <div className="flex items-center gap-2">
      <CircleNav />
      <span className="font-semibold text-sm  lg:inline text-gray-900 dark:text-gray-100">
        benevolenternimblebot
      </span>
      <ChevronDownIcon className="w-4 h-4  lg:inline text-gray-900 dark:text-gray-100" />
    </div>
  );
}
