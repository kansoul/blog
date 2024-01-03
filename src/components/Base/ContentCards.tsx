import CardBlog from "../ui/card-blog";

export default function ContentCards() {
  const cardTemps = [
    {
      srcImage: "/images/card-blog/card-1.jpg",
      cardTitle: "Helpful Tips for Working from Home as a Freelancer",
      cardTag: "Travel",
      isHot: true,
    },
    {
      srcImage: "/images/card-blog/card-2.png",
      cardTitle: "Helpful Tips for Working from Home as a Freelancer",
      cardTag: "Travel",
      isHot: true,
    },
    {
      srcImage: "/images/card-blog/card-3.png",
      cardTitle: "Helpful Tips for Working from Home as a Freelancer",
      cardTag: "Travel",
    },
    {
      srcImage: "/images/card-blog/card-4.png",
      cardTitle: "Helpful Tips for Working from Home as a Freelancer",
      cardTag: "Travel",
    },
    {
      srcImage: "/images/card-blog/card-1.jpg",
      cardTitle: "Helpful Tips for Working from Home as a Freelancer",
      cardTag: "Travel",
    },
  ];
  return (
    <div className="w-full lg:flex flex-wrap items-center justify-center gap-5">
      {cardTemps.map(({ cardTag, cardTitle, srcImage, isHot }, index) => (
        <CardBlog
          key={`Card blog ${index}`}
          cardTag={cardTag}
          cardTitle={cardTitle}
          srcImage={srcImage}
          size={isHot ? "XL" : "L"}
        />
      ))}
    </div>
  );
}
