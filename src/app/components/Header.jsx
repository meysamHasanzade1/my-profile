import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 ">
          Hi I`m Meysam Hasanzadeh
          <Image
            width={30}
            height={30}
            src={"/icons8-waving-hand-light-skin-tone-48.png"}
          />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
          frontend web developer based in tehran.
        </h1>
        <p>
          I am frontend developer from... Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
            href="#contact"
          >
            contact me
          </a>
          <a
            href="/sample-resume.pdf"
            download
            className="px-10 py-3 border rounded-full  border-gray-500 flex items-center gap-2"
          >
            my resume
            <Image width={25} height={25} src={"/icons8-download-24.png"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
