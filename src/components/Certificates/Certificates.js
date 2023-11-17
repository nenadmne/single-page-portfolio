import typeImg from "../../assets/Sertificates/typesc.jpg";
import reactImg from "../../assets/Sertificates/react.jpg";

export default function Certificates() {
  return (
    <div className="w-full flex items-center justify-center clip-border-bot bg-black px-[5%] pb-12">
      <section className="certificates w-full lg:w-[1100px] mt-12">
        <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-12 text-bio text-center">
          Certificates
        </h2>
        <div className="flex flex-col gap-8">
          <img src={reactImg} className="rounded-md" />
          <img src={typeImg} className="rounded-md" />
        </div>
      </section>
    </div>
  );
}
