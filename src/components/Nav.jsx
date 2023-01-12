import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UilBars } from "@iconscout/react-unicons";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [logo, setLogo] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openMenu = () => {
    setShowModal((prev) => !prev);
    setModalContent(<MobileMenu />);
  };

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  // console.log(scrollPosition);

  return (
    <>
      <nav className="nav-bar py-3 sticky w-full top-0 z-20 ring ring-[#B1740F]">
        <div className="nav-bar-items flex justify-between items-start px-4">
          {scrollPosition <= 4 ? (
            <img
              src="/images/eg-logo-sml.webp"
              className="nav-logo w-[60%] duration-1000"
              id="logo"
            />
          ) : (
            <img
              src="/images/eg-logo-sml.webp"
              id="logo"
              className="nav-logo nav-logo-zoom w-[7.5%] duration-1000"
            />
          )}

          <div className="flex justify-end h-full w-full items-center">
            <div className="menu-button flex flex-col cursor-pointer">
              <UilBars size="50" onClick={openMenu} />
            </div>
          </div>

          <div className="flex justify-around items-center h-full">
            <ul className="main-nav flex flex-row justify-center items-center text-lg ">
              <li className="px-8 hover:overline hover:decoration-[#B1740F] text-2xl duration-500">
                <Link to="/">Home</Link>
              </li>
              <li className="px-8 hover:overline hover:decoration-[#B1740F] text-2xl duration-500">
                <Link to="/about">About</Link>
              </li>
              <li className="px-8 hover:overline hover:decoration-[#B1740F] text-2xl duration-500">
                <Link to="/services">Services</Link>
              </li>
              <li className="px-8 hover:overline hover:decoration-[#B1740F] text-2xl duration-500">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <a
              href="https://www.fresha.com/book-now/divine-hair-t5czol7v/services?lid=149346&eid=511383&pId=139034"
              target="_blank"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="nav-book w-[200px] bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg py-4 px-4 rounded z-50"
              >
                Book Online
              </motion.button>
            </a>
          </div>
        </div>
      </nav>

      <MobileMenu
        showModal={showModal}
        setShowModal={setShowModal}
        modalContent={modalContent}
      />
    </>
  );
};

export default Nav;
