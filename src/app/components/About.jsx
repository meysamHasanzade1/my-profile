import Image from "next/image";
import React from "react";
import { infoList } from "../../../public/assets/assetsData";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

function About() {
  const { systemTheme, theme } = useTheme();

  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row  gap-20 my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto"
        >
          <p className="mb-10 max-w-2xl">
            I am an experienced Frontend Developer whit over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with pristigious oragaization,
            contributing to their success and growth.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                className="border-[0.5px] border-gary-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image
                  width={50}
                  height={50}
                  className="mt-3"
                  src={isDark ? iconDark : icon}
                  alt={title}
                />
                <h3
                  className={`my-4 font-semibold ${
                    isDark ? "text-white" : "text-gray-700"
                  } `}
                >
                  {title}
                </h3>
                <p
                  className={`${
                    isDark ? "text-white" : "text-gray-600"
                  }text-sm`}
                >
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
