import Image from "next/image";
import Link from "next/link";

export default function Logo(props: { size: "L" | "XL" }) {
  const sizeOfLogo = {
    L: {
      width: "max-w-[180px]",
      imageSize: 40,
      textSize: "lg:text-xl",
    },
    XL: {
      width: "max-w-[230px]",
      imageSize: 56,
      textSize: "lg:text-3xl",
    },
  };
  return (
    <Link
      href="/"
      className={`flex items-center cursor-pointer flex-shrink-0 ${
        sizeOfLogo[props.size]["width"]
      }`}
    >
      <Image
        src="/logo.svg"
        width={sizeOfLogo[props.size]["imageSize"]}
        height={sizeOfLogo[props.size]["imageSize"]}
        alt="HoDoanIT Logo"
      />
      <p
        className={`self-center text-xl font-black text-[#4a576a] whitespace-nowrap dark:text-[#d8e6fb] ml-1 ${
          sizeOfLogo[props.size]["textSize"]
        }`}
      >
        HoDoanIT
      </p>
    </Link>
  );
}
