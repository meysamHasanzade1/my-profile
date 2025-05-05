import React, { useRef } from "react";
import Image from "next/image";
import { ModeToggle } from "./modeToggle";

function MobileMenu() {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  return (
    <div className="flex">
      <div className="block md:hidden ml-3 cursor-pointer">
        <ModeToggle />
      </div>
      <button
        onClick={openMenu}
        className="block md:hidden ml-3 cursor-pointer"
      >
        <Image
          src={"/icons8-menu.png"}
          width={5}
          height={5}
          alt=""
          className="w-6"
        />
      </button>
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image
            src={"/icons8-close-window-48.png"}
            width={9}
            height={9}
            alt=""
            className="w-6"
          />
        </div>

        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a onClick={closeMenu} href="#about">
            About me
          </a>
        </li>
        <li>
          <a onClick={closeMenu} href="#services">
            Services
          </a>
        </li>
        <li>
          <a onClick={closeMenu} href="#wrok">
            My Wrok
          </a>
        </li>
        <li>
          <a onClick={closeMenu} href="#contact">
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
