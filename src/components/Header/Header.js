import ProfileInfo from "./Header components/ProfileInfo";
import PatternRings from "../../UI/PatternRings";
import ProfileLinks from "../../UI/ProfileLinks";
import NavigationLinks from "./Header components/NavigationLinks";

const Header = () => {
  return (
    <div className="w-full lg:w-[1100px] relative flex flex-col mt-0 lg:mt-12 p-[5%] lg:p-0">
      <ul className="flex flex-row w-full justify-between items-center list-none mb-4">
        <NavigationLinks />
        <ProfileLinks />
      </ul>
      <ProfileInfo />
      <PatternRings
        divClass="absolute top-[20%] sm:top-[15%] lg:top-[22%] left-[-15%] sm:left-[-10%] transform translate-x-[-50%] z-0"
        imgClass="w-[375px] sm:w-[530px] h-[150px] object-contain"
      />
    </div>
  );
};

export default Header;
