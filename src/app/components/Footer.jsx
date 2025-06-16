import { useTheme } from "next-themes";
import React from "react";

function Footer() {
  const { systemTheme, theme } = useTheme();
  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl">
          Meysam<span className="text-red-500">.</span>
        </h1>
        <p className="flex gap-2 mt-2">
          <img
            width={30}
            alt="email"
            src={`${
              isDark ? "icons8-email-48-white.png" : "./icons8-email-48.png"
            }`}
          />
          meysam.hasanzade0101@gmail.com
        </p>

        <a
          className="flex items-center justify-center"
          target="_blank"
          href="https://github.com/meysamHasanzade1"
        >
          <img
            width={40}
            src={isDark ? "icons8-github-24.png" : `./icons8-github-64.png`}
            alt=""
          />
          Github
        </a>
      </div>

      <div className="text-center border-gray-500 border-t mt-5">
        idea from greatstackdev
      </div>
    </div>
  );
}

export default Footer;
