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

      <div className="flex flex-wrap xl:justify-normal justify-center max-w-[85em] mt-7 items-center gap-6">
        {Video_data.map((item, i) => (
          <ProjectCard
            key={item.id} // ✅ اگر id موجود نبود، از index استفاده می‌کنیم
            projectLink={item.projectLink}
            videoLink={item.videoLink}
            poster={item.poster}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

function ProjectCard({ projectLink, videoLink, description, poster }) {
  const videoRef = useRef();

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) video.play();
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="bg-inherit max-w-[25rem] max-h-[350px] overflow-hidden border-2 rounded-sm hover:border-blue-200 transition duration-300">
      <Link target="_blank" href={projectLink}>
        <video
          ref={videoRef}
          preload="metadata" // ✅ metadata preload می‌کنیم تا poster همیشه نمایش داده شود
          muted
          loop
          width={400}
          height={200}
          className="rounded-t-sm w-full object-cover"
          poster={poster}
          src={videoLink} // ⚡ src از ابتدا ست شده تا تصویر poster نمایش داده شود
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <p className="p-2 text-sm text-gray-700">{description}</p>
      </Link>
    </div>
  );
}
