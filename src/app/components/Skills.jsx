import React from "react";
import { Skills_data } from "../../../public/assets/assetsData";
import SkillDataProvider from "../sub/SkillDataProvider";

function Skills() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl">Making apps with modern technologies</h1>
      </div>
      <div
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
        style={{ transform: "scale(0.9)" }}
      >
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Skills_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
