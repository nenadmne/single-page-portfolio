import profilePicture from "../../../assets/profile.png";
import { ProfileSvg } from "../../../UI/ProfileSvg";

const ProfileInfo = () => {
  return (
    <section className="flex flex-row w-full lg:w-[1100px] pb-4 sm:pb-20 sm:gap-4">
      <div className="w-[70%]">
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold w-full mb-12 sm:mb-8">
          Nice to meet you! I'm
          <span className="underline decoration-purple ml-2 animate-blurIn">
            Nenad Ćosović
          </span>
        </h2>
        <p className="text-sm sm:text-md w-full max-w-[300px] sm:max-w-[85%] lg:w-[550px] text-bio font-medium leading-0 sm:leading-7 m-0">
          Hailing from Montenegro, I'm a versatile developer with a penchant for
          crafting accessible web applications that users truly enjoy. My
          primary expertise lies in front-end development, and I bring a touch
          of back-end knowledge to create comprehensive digital experiences.
        </p>
      </div>
      <div className="flex items-start justify-start w-[30%] relative">
        <div className="absolute left-[-2rem] lg:left-[-8rem] top-[-2rem] lg:top-[-4rem] w-[12rem] lg:w-[34rem] h-[12rem] lg:h-[34rem] z-0">{ProfileSvg}</div>
        <img
          src={profilePicture}
          className="w-full h-fit bg-dark rounded-full lg:rounded-none aspect-square lg:aspect-auto object-contain lg:object-cover z-10 shadow-shadow"
        />
      </div>
    </section>
  );
};

export default ProfileInfo;
