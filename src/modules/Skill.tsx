import React from "react";

const skillData = [
  { name: "html", skillPercent: 90 },
  { name: "css", skillPercent: 80 },
  { name: "javascript", skillPercent: 70 },
  { name: "react js", skillPercent: 70 },
  { name: "node js", skillPercent: 50 },
  { name: "figma / github", skillPercent: 60 },
];

const SKill = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10 lg:gap-20 xl:gap-16 p-2">
      <div className="h-full w-full flex flex-col gap-6">
        <picture>
          <img
            src={"/assets/skill.jpg"}
            alt="skill"
            className="w-full overflow-hidden object-cover rounded-lg"
          />
        </picture>
        <p className="text-lg lg:text-xl xl:text-base text-textLightBlack">
          {` Lorem ipsum is simply dummy text of the printing and typesetting
            industry.Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s,`}
        </p>
      </div>
      <div className="flex flex-col justify-center gap-10 h-full px-6">
        <h1 className="font-extrabold text-2xl md:text-5xl xl:text-3xl capitalize text-bgBlack">
          skills
        </h1>
        <div className="grid grid-cols-1 gap-2  text-descriptionGray">
          {skillData.map((item, index) => {
            const progressBarWidth = {
              width: `${item.skillPercent}%`,
            };
            return (
              <div className="flex flex-col gap-1" key={index}>
                <p className="px-2 capitalize text-base md:text-lg xl:text-base text-textLightBlack font-medium">
                  {item.name}
                </p>
                <div className="h-3 md:h-5 text-xs md:text-base xl:text-sm w-full border-2 border-textLightBlack rounded-3xl">
                  <span
                    style={progressBarWidth}
                    className={`h-full flex text-xs md:text-sm xl:text-sm text-white justify-center items-center bg-textLightBlack rounded-l-3xl`}
                  >
                    {`${item.skillPercent}%`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SKill;
