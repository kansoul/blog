import Image from "next/image";

export default function Author() {
  return (
    <div className="flex items-center gap-3">
      <Image
        className="w-12 h-12 rounded-full"
        src="/icons/avatar-icon.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="font-bold text-base text-[#4E658A] dark:text-[#66768F]">
        <div>Jese Leos</div>
        <div className="font-medium text-sm text-[#4E658A] dark:text-[#66768F]">
          25 April 2023
        </div>
      </div>
    </div>
  );
}
