import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import KidsModal from "../modals/KidsModal";
import { Link } from "react-router-dom";
import ServicesNav from "../ServicesNav";

const Kids = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openModal = (prev) => {
    setShowModal((prev) => !prev);
    setModalContent(<KidsModal />);
  };

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.screenX }}
      >
        <div className="flex justify-end relative z-30">
          {scrollPosition < 5 ? (
            <div
              className="hero w-[60%] h-[40vh] bg-[url('/images/services-banner-dark.jpg')] bg-cover -top-80 absolute duration-1000 shadow-xl rounded-tl-[10rem] rounded-bl-[10rem] flex items-end justify-end ring ring-[#B1740F]"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold">
                Kids
              </h1>
            </div>
          ) : (
            <div
              className="w-[0] h-[0] bg-[#F6AE2D] -top-80 absolute duration-1000 shadow-xl rounded-tl-[10rem] flex items-end justify-end opacity-0"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold opacity-0">
                Kids
              </h1>
            </div>
          )}
        </div>
      </motion.div>
      <div>
        <motion.div className="col-span-3 w-full text-xl bg-[#B1740F] p-8 drop-shadow-2xl">
          <h1 className="text-white">Kids</h1>
        </motion.div>
        <div className="bg-white">
          <h2 className="bg-[#FDE8E9] px-8 py-3"></h2>
        </div>
        <ServicesNav />
      </div>

      <div className="main-content grid grid-cols-3 gap-4 m-[2rem] ">
        <div>
          <img src="/images/cut-colour.jpg" className="ring ring-[#B1740F]" />
        </div>
        <div className="flex flex-col items-center justify-around col-span-2 bg-[#635774] text-white p-5 ring ring-[#B1740F]">
          <h2 className="font-bold text-[#FDE8E9]">Kids</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg my-4 py-4 px-4 rounded justify-self-center"
          >
            Book Online
          </motion.button>
          <p className="services-p text-justify text-xl px-12">
            Cutting children's hair can be a challenging but rewarding
            experience. Children can be restless and uncooperative during a
            haircut, so it is important for the stylist to have patience and a
            gentle touch. A successful children's haircut requires a stylist to
            be knowledgeable about age-appropriate styles and to be able to work
            quickly and efficiently. It is also important to make the experience
            fun for the child, by providing distractions such as toys or games,
            and by being friendly and engaging. I believe that a positive
            haircut experience for a child can set the foundation for a lifetime
            of good grooming habits.
          </p>
        </div>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalContent={modalContent}
      />
    </>
  );
};

export default Kids;
