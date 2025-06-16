import { ModeToggle } from "./modeToggle";
import MobileMenu from "./mobileMenu";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const { systemTheme, theme } = useTheme();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });

  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  return (
    <div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? `${
                isDark ? "bg-black" : "bg-white"
              } bg-opacity-50 backdrop-blur-lg shadow-sm`
            : ""
        }`}
      >
        <a href="">
          <h1 className={"text-3xl"}>
            Meysam
            <span className="text-red-500 font-extrabold">.</span>
          </h1>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
            "bg-amber-50"
           ${isDark ? "bg-gray-800" : "bg-amber-50"} shadow-sm bg-opacity-50`}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <a
            className=" hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml:4"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <MobileMenu />
      </nav>
    </div>
  );
}

export default Navbar;
