interface TitleOfSectionProps {
  mainTitle: string;
  subTitle: string;
}

export default function TitleOfSection(props: TitleOfSectionProps) {
  return (
    <div className="mb-[70px]">
      <h1 className="mb-1.5 text-[45px] text-transparent text-linear">
        {props.mainTitle}
      </h1>
      <p className="text-[#708AB0] dark:text-[#94A9C9] text-[18px]">
        {props.subTitle}
      </p>
    </div>
  );
}
