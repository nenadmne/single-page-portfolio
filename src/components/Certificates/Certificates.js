import typeImg from "../../assets/Sertificates/typesc.jpg";
import reactImg from "../../assets/Sertificates/react.jpg";

export default function Certificates() {
  return (
    <section className="certificates w-full lg:w-[1100px] mt-12">
      <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-12 text-bio text-center">
        Certificates
      </h2>
      <div className="flex flex-col gap-4">
        <img src={reactImg} />
        <img src={typeImg} />
      </div>
    </section>
  );
}
