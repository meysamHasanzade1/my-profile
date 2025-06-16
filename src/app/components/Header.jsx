import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "motion/react";

import React from "react";

function Header() {
  const { systemTheme, theme } = useTheme();
  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <motion.h3
          className="flex items-end gap-2 text-xl md:text-2xl mb-3 "
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hi I`m Meysam Hasanzadeh
          <Image
            width={30}
            height={30}
            src={"/icons8-waving-hand-light-skin-tone-48.png"}
            alt="hi"
          />
        </motion.h3>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-6xl lg:text-[66px]"
        >
          frontend web developer based in tehran.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Frontend developer experienced in creating websites and web
          applications using HTML, CSS, JavaScript, TypeScript, React library
          and framework Next.js. Highly motivated to learn and enhance skills
          with the ability to work in a team and solve complex problems.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
            href="#contact"
          >
            contact me
          </motion.a>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/Resume.pdf"
            download
            className="px-10 py-3 border rounded-full  border-gray-500 flex items-center gap-2"
          >
            my resume
            <Image
              alt="download"
              width={25}
              height={25}
              src={`${
                isDark
                  ? "/icons8-download-light.png"
                  : "/icons8-download-24.png"
              }`}
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Header;
