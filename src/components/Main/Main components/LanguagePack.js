const LanguagePack = ({ data, name }) => {
  return (
    <div className="w-[48%] flex flex-col justify-start items-center border-solid border-[1px] border-purple rounded-xl p-6 bg-black">
      <h2 className="h-fit mb-4 text-2xl text-white">{name}</h2>
      <ul className="w-full h-fit flex flex-row flex-wrap justify-center list-none m-0 gap-4">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-center items-center rounded-xl p-4 border-solid border-[1px] border-lightgray bg-dark"
          >
            <img src={item.imgSrc} alt={item.name} className="w-8 mr-2" />
            <p className="text-bio">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagePack;
