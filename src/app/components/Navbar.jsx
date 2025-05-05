import { ModeToggle } from "./modeToggle";
import MobileMenu from "./mobileMenu";

function Navbar() {
  return (
    <div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="">
          <h1 className="text-3xl">
            Meysam<span className="text-red-500 font-extrabold">.</span>
          </h1>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#wrok">My Wrok</a>
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
