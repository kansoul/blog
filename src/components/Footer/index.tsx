import Logo from "../Base/Logo";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="container mx-auto h-[573px] border bg-[#E8EDF5] dark:bg-[#131C31] rounded-[48px] border-[#C2D4EE] dark:border-[#222F43] mt-[80px] mb-6 pt-[90px] !px-[107px] pb-[51px]">
        <div className="flex flex-wrap">
          <div className="w-1/3">
            <Logo size="L" />
            <p className="pt-4 pl-4 text-[#708AB0] dark:text-[#94A9C9] text-sm">
              When an unknown prnoto sans took a galley and scrambled it to make
              specimen book not only five When an unknown prnoto sans took a
              galley and scrambled it to five centurie.
            </p>
            <p className="pt-4 pl-4 text-[#344161] dark:text-[#B9E0F2] text-base font-bold">
              Address
            </p>
            <p className="pt-1.4 pl-4 text-[#708AB0] dark:text-[#94A9C9] text-sm whitespace-pre-line">
              {"14 Phuoc Tan 3, \nEaKuang, Krong Pak, Dak Lak 630000"}
            </p>
          </div>
          <div className="w-1/3">Second</div>
          <div className="w-1/3">Three</div>
        </div>
      </div>
    </div>
  );
}
