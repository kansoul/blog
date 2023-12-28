import Image from "next/image";

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
    <div
      className={`w-full flex items-center ${sizeOfLogo[props.size]["width"]}`}
    >
      <Image
        src="/logo.svg"
        width={sizeOfLogo[props.size]["imageSize"]}
        height={sizeOfLogo[props.size]["imageSize"]}
        alt="HoDoanIT Logo"
      />
      <span
        className={`self-center text-xl font-black text-gray-500 whitespace-nowrap dark:text-white ml-1 ${
          sizeOfLogo[props.size]["textSize"]
        }`}
      >
        DoanIT
      </span>
    </div>
  );
}
