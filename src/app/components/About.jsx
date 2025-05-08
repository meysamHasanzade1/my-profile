import Image from "next/image";
import React from "react";
import { infoList } from "../../../public/assets/assets";

function About() {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl">About me</h2>

      <div className="flex w-full flex-col lg:flex-row  gap-20 my-20">
        <div className="mx-auto">
          <p className="mb-10 max-w-2xl">
            I am an experienced Frontend Developer whit over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with pristigious oragaization,
            contributing to their success and growth.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gary-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image
                  width={50}
                  height={50}
                  className="mt-3"
                  src={icon}
                  alt={title}
                />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
