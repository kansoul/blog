import Introduce from "@/components/Introduce";
import Image from "next/image";

export default function About() {
  const skillComponents = [
    {
      icons: "/icons/skills/icon-1.svg",
      title: "Motion & Web Graphy",
      description:
        'NetTracking" is a very powerful Web 2.0 site search engine allows you to find email allerts',
    },
    {
      icons: "/icons/skills/icon-2.svg",
      title: "UI/Ux Consultancy",
      description:
        'NetTracking" is a very powerful Web 2.0 site search engine allows you to find email allerts',
    },

    {
      icons: "/icons/skills/icon-3.svg",
      title: "Branding & Design",
      description:
        'NetTracking" is a very powerful Web 2.0 site search engine allows you to find email allerts',
    },

    {
      icons: "/icons/skills/icon-4.svg",
      title: "Product Photography",
      description:
        'NetTracking" is a very powerful Web 2.0 site search engine allows you to find email allerts',
    },

    {
      icons: "/icons/skills/icon-5.svg",
      title: "Key Seo Optimization",
      description:
        'NetTracking" is a very powerful Web 2.0 site search engine allows you to find email allerts',
    },

    {
      icons: "/icons/skills/icon-6.svg",
      title: "Social Management",
      description:
        'NetTracking" is a very powerful Web 2.0 site search engine allows you to find email allerts',
    },
  ];

  const projectTemps = [
    "All Projects",
    "Web Development",
    "Mobile App",
    "Motions",
    "Graphic Design",
  ];

  const topics = [
    {
      imgUrl: "/images/topics/img_1.jpg",
      tag: "AI Generate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque suscipit",
    },
    {
      imgUrl: "/images/topics/img_2.png",
      tag: "Laravel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque suscipit",
    },
    {
      imgUrl: "/images/topics/img_3.jpg",
      tag: "ReactJs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque suscipit",
    },
    {
      imgUrl: "/images/topics/img.png",
      tag: "Javascript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque suscipit",
    },
    {
      imgUrl: "/images/topics/img_1.jpg",
      tag: "NextJs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque suscipit",
    },
    {
      imgUrl: "/images/topics/img_3.jpg",
      tag: "Flutter",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque suscipit",
    },
  ];

  const ButtonCyanToBlue = () => {
    return projectTemps.map((project, index) => (
      <button
        key={`ButtonCyan ${index}`}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[#506481] rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
          {project}
        </span>
      </button>
    ));
  };

  return (
    <div className="container flex flex-row color-home">
      <div className="w-0 xl:w-1/12"></div>
      <div className="w-full xl:w-10/12">
        <Introduce />
        <div id="experience" className="pt-[90px] relative z-20">
          <p className="text-center mb-1.5 text-[45px] font-bold">
            <span className="text-linear">My Skills</span>
          </p>
          <p className="text-center text-[#708AB0] dark:text-[#94A9C9] text-[18px] whitespace-pre-line">
            {
              "With many years of experience in the field of Digital Marketing,\nI'm confident to bring you many outstanding values."
            }
          </p>
          <div className=" border bg-[#E8EDF5] dark:bg-[#131C31] rounded-[20px] border-[#C2D4EE] dark:border-[#222F43] mt-[60px] py-[70px] !px-[100px]">
            <div className="flex flex-wrap gap-y-[50px]">
              {skillComponents.map((skill, index) => (
                <div
                  key={skill.title + index}
                  className="flex flex-col justify-start lg:w-1/3 md:w-1/2 w-full px-3"
                >
                  <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#f9fbff] dark:bg-[#0b1222] mb-[15px] ">
                    <Image
                      src={skill.icons}
                      alt={skill.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <p className="text-[#344161] dark:text-[#b9e0f2] mb-[15px] font-bold text-[20px]">
                    {skill.title}
                  </p>
                  <p className="text-[#4e658a] dark:text-[#66768f] text-base">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="project" className="pt-[90px] relative z-20">
          <p className="text-center mb-1.5 text-[45px] font-bold">
            <span className="text-linear">My Latest Projects</span>
          </p>
          <p className="text-center text-[#708AB0] dark:text-[#94A9C9] text-[18px] whitespace-pre-line">
            {
              "The convention is the main event of the year for professionals in\nthe world of design and architecture."
            }
          </p>

          <div className="mt-[50px] text-center mx-auto">
            <ButtonCyanToBlue />
            <div className="sm:flex flex-wrap mt-[50px]">
              {topics.map((value, index) => (
                <div
                  key={`Project ${index}`}
                  className="p-3 md:w-1/2 lg:w-1/3 w-full"
                >
                  <div className="m-2 w-full h-[347px] cursor-pointer relative rounded-md overflow-hidden">
                    <div className="card-info z-20 peer">
                      <div className="absolute bottom-0 left-0 p-[15px] text-left mb-4">
                        <h6 className="text-[#F9FBFF] dark:text-[#B9E0F2] mb-2 text-[32px] font-bold">
                          {value.tag}
                        </h6>
                        <p className="text-sm text-[#708AB0] dark:text-[#94A9C9]">
                          {value.description}
                        </p>
                      </div>
                    </div>
                    <Image
                      alt={value.tag}
                      src={value.imgUrl}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="object-cover w-full h-full transform transition-transform duration-300 peer-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
