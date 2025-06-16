import Link from "next/link";
import React from "react";
import { Video_data } from "../../../public/assets/assetsData";

function Projects() {
  return (
    <section
      id="projects"
      className="flex justify-center flex-col items-center"
    >
      <h1 className="text-4xl text-center">My Projects</h1>
      <div className="flex flex-wrap xl:justify-normal justify-center max-w-[85em] mt-7 items-center gap-15">
        {Video_data.map(({ projectLink, videoLink, description, index }) => (
          <div
            key={index}
            className="bg-inherit max-w-[25rem] border-2 rounded-sm  hover:border-blue-200 transition delay-150 duration-300"
          >
            <Link target="_blank" href={projectLink}>
              <video
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
                loop
                muted
                width={400}
                height={200}
                src={videoLink}
                className="rounded-t-sm w-[100%]"
              />
              <p className="p-2">{description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
