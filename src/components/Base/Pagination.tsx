export default function Pagination(props: { number: number }) {
  return (
    <div className="flex flex-wrap gap-1 items-center justify-start mt-10">
      <div className="flex justify-center items-center text-white text-[15px] font-bold w-[42px] h-[42px] rounded-full dark:bg-[#222f43] bg-[#7f92b0] bg-linear cursor-pointer">
        {"<-"}
      </div>
      {Array.from({ length: props.number }).map((_, index) => (
        <div
          key={`Pagination ${index}`}
          className="flex justify-center items-center text-white text-[15px] font-bold w-[42px] h-[42px] rounded-full dark:bg-[#222f43] bg-[#7f92b0] bg-linear cursor-pointer"
        >
          {index + 1}
        </div>
      ))}
      <div className="flex justify-center items-center text-white text-[15px] font-bold w-[42px] h-[42px] rounded-full dark:bg-[#222f43] bg-[#7f92b0] bg-linear cursor-pointer">
        {"->"}
      </div>
    </div>
  );
}
