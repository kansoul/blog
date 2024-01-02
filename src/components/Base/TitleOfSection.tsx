interface TitleOfSectionProps {
  mainTitle: string;
  subTitle: string;
  className?: string;
}

export default function TitleOfSection(props: TitleOfSectionProps) {
  const { mainTitle, subTitle, className } = props;
  return (
    <div
      className={`mb-[70px] animate__animated animate__fadeInUp ${
        className ? className : ""
      }`}
    >
      <p className="mb-1.5 text-[45px] text-linear font-bold">{mainTitle}</p>
      <p className="text-[#708AB0] dark:text-[#94A9C9] text-[18px] whitespace-pre-line">
        {subTitle}
      </p>
    </div>
  );
}
