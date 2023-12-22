import typeImg from "../../assets/Certificates/typesc.jpg";
import reactImg from "../../assets/Certificates/react.jpg";
import cortexImg from "../../assets/Certificates/Cortex.jpg";
import coinisImg from "../../assets/Certificates/Coinis.jpg";
import nextImg from "../../assets/Certificates/next.jpg";

export default function Certificates() {
  const data = [
    {
      href: "https://www.udemy.com/certificate/UC-bd9ca052-ef58-432c-b758-1fbeac2212a0/",
      src: reactImg,
      alt: "certificate-react",
    },
    {
      src: nextImg,
      href: "https://www.udemy.com/certificate/UC-cb737ff6-ac7c-4258-8c1c-6db19531daf7/",
      alt: "certificate-nextJS",
    },
    {
      href: "https://www.udemy.com/certificate/UC-8b958eed-bf51-474b-b160-ca90690593d6/",
      src: typeImg,
      alt: "certificate-typescript",
    },
    {
      src: cortexImg,
      alt: "certificate-cortex",
    },
    {
      src: coinisImg,
      alt: "certificate-coinis",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center clip-border-bot bg-black px-[5%] pb-12">
      <section className="certificates w-full lg:w-[1100px] mt-12 ">
        <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-12 text-bio text-center">
          Certificates
        </h2>
        <div className="flex flex-col gap-8">
          {data.map((item) => (
            <a
              key={item.alt}
              href={item.href ? item.href : null}
              className="flex justify-center items-center"
            >
              <img
                src={item.src}
                className="rounded-md cursor-pointer w-full sm:w-[50%]"
                alt={item.alt}
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
