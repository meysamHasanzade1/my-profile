import Link from "next/link";
import React, { useRef } from "react";
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
          <ProjectCard
            key={index}
            projectLink={projectLink}
            videoLink={videoLink}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

function ProjectCard({ projectLink, videoLink, description, poster }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;

    // سورس فقط در اولین هاور ست می‌شود
    if (!video.src) {
      video.src = videoLink;
    }

    video.play();
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div className="bg-inherit max-w-[25rem] max-h-[350px] overflow-auto border-2 rounded-sm hover:border-blue-200 transition delay-150 duration-300">
      <Link target="_blank" href={projectLink}>
        <video
          ref={videoRef}
          preload="none"
          muted
          loop
          width={400}
          height={200}
          className="rounded-t-sm w-[100%]"
          poster={poster} // یک تصویر سبک ۲۰kb بگذارید
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <p className="p-2">{description}</p>
      </Link>
    </div>
  );
}
