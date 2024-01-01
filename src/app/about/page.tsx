import Introduce from "@/components/Introduce";

export default function About() {
  return (
    <div className="container flex flex-row color-home">
      <div className="w-0 xl:w-1/12"></div>
      <div className="w-full xl:w-10/12">
        <Introduce />
      </div>
    </div>
  );
}
