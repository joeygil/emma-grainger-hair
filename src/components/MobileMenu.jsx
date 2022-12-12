import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  UilFacebook,
  UilInstagram,
  UilEnvelope,
  UilPhone,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const MobileMenu = ({ showModal, setShowModal, modalContent }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const modalRef = useRef();

  const handleClose = () => {
    setShowModal(false);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showModal ? (
          <div
            ref={modalRef}
            className="modal w-screen h-screen fixed top-0 left-0 bg-[#00000080] z-40 flex justify-end items-center"
            onClick={closeModal}
          >
            <motion.div
              className="modal-content bg-[#635774] text-white p-3 w-[95%] h-[90%] z-50 min-w-[400px] flex flex-col justify-center items-center drop-shadow-2xl rounded-l-xl ring ring-[#B1740F]"
              initial={{ opacity: 0, x: "100vh" }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ x: "150vh", opacity: 0 }}
            >
              <div className="menu-container flex flex-col justify-around items-center w-full h-full">
                <img src="/images/eg-logo-sml.png" className="h-[200px]" />
                <a
                  href="https://www.fresha.com/book-now/divine-hair-t5czol7v/services?lid=149346&eid=511383&pId=139034"
                  target="_blank"
                >
                  <motion.button className="scale-150 hidden nav-book-mobile bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg py-4 px-4 rounded z-50">
                    Book Online
                  </motion.button>
                </a>
                <div className="menu-items-wrapper flex flex-col w-full">
                  <div className="home bg-[#FDE8E9] text-[#635774] w-full text-3xl p-3 m-4 rounded-l-2xl ring ring-[#B1740F]">
                    <Link to="/" onClick={handleClose}>
                      <p>Home</p>
                    </Link>
                  </div>
                  <div className="about bg-[#FDE8E9] text-[#635774] w-full text-3xl p-3 m-4 rounded-l-2xl ring ring-[#B1740F]">
                    <Link to="/about" onClick={handleClose}>
                      <p>About</p>
                    </Link>
                  </div>
                  <div className="services bg-[#FDE8E9] text-[#635774] w-full text-3xl p-3 m-4 rounded-l-2xl ring ring-[#B1740F]">
                    <Link to="/services" onClick={handleClose}>
                      <p>Services</p>
                    </Link>
                  </div>
                  <div className="contact bg-[#FDE8E9] text-[#635774] w-full text-3xl p-3 m-4 rounded-l-2xl ring ring-[#B1740F]">
                    <Link to="/contact" onClick={handleClose}>
                      <p>Contact</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-around w-full mb-4">
                <motion.a
                  href="https://www.facebook.com/emmaatdivine"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex justify-center items-center flex-col cursor-pointer"
                >
                  <UilFacebook size="50" color="white" />
                  <span className="footer-span text-white">Facebook</span>
                </motion.a>

                <motion.a
                  href="https:/www.instagram.com/emma_at_divine"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex justify-center items-center flex-col"
                >
                  <UilInstagram size="50" color="white" />
                  <span className="footer-span text-white">Instagram</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex justify-center items-center flex-col"
                >
                  <UilPhone size="50" color="white" />
                  <span className="footer-span text-white">07976 889 289</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex justify-center items-center flex-col"
                >
                  <UilEnvelope size="50" color="white" />
                  <span className="footer-span text-white">
                    emmagraingergilchrist@gmail.com
                  </span>
                </motion.a>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="bg-[red] hover:bg-[#FDE8E9] hover:text-[#635774] text-white text-xl shadow-lg py-3 px-4 m-4 rounded-lg justify-self-center absolute top-0 right-0"
              >
                X
              </motion.button>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
