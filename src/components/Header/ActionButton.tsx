function ActionButton({
  Icon,
  label,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}) {
  return (
    <button className="dark:text-black cursor-pointer bg-[#F3F4F6FF] px-3 py-2 rounded-2xl hover:bg-gray-200 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors items-center gap-1 text-xs font-medium hidden sm:flex">
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}

export default ActionButton