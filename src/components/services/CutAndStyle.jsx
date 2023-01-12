import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import CutModal from "../modals/CutModal";
import ServicesNav from "../ServicesNav";
import ShrunkNav from "../ShrunkNav";
import ScrollToTop from "../ScrollToTop"

const CutAndStyle = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openModal = () => {
    setShowModal((prev) => !prev);
    setModalContent(<CutModal />);
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
    <ScrollToTop />
      <ShrunkNav />
      <motion.div
        initial={{ width: "20%" }}
        animate={{ width: "100%" }}
        exit={{ x: window.screenX }}
      >
        <div className="flex justify-end relative z-30">
          {/* {scrollPosition < 5 ? (
            <div
              className="hero w-[60%] h-[40vh] bg-[url('/images/services-banner-dark.jpg')] bg-cover -top-80 absolute duration-1000 shadow-xl rounded-tl-[10rem] rounded-bl-[10rem] flex items-end justify-end ring ring-[#B1740F]"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold">
                Cut & Style
              </h1>
            </div>
          ) : (
            <div
              className="w-[0] h-[0] opacity-0"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold opacity-0">
                Cut & Style
              </h1>
            </div>
          )} */}
        </div>

        <div>
          <div className="col-span-3 w-full h-[100px] text-xl bg-[#B1740F] p-8 drop-shadow-2xl">
            <h1 className="text-white">Cut & Style</h1>
          </div>
          <div className="bg-white">
            <h2 className="bg-[#FDE8E9] px-8 py-3"></h2>
          </div>
        </div>
      </motion.div>
      <ServicesNav />
      <div className="main-content grid grid-cols-3 gap-4 m-[2rem] ">
        <div>
          <img
            src="/images/cut-colour.webp"
            className="services-img ring ring-[#B1740F]"
          />
        </div>
        <div className="flex flex-col items-center justify-around col-span-2 bg-[#635774] text-white p-5 ring ring-[#B1740F]">
          <h2 className="font-bold text-[#FDE8E9]">Cut & Style</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg my-4 py-4 px-4 rounded justify-self-center"
          >
            Book Online
          </motion.button>
          <p className="services-p text-justify text-xl px-12">
            A great haircut can completely transform a person's appearance and
            boost their confidence. A good haircut should be tailored to the
            individual client, taking into account their face shape, hair
            texture, and personal style. A skilled hair stylist will be able to
            recommend the best haircut for a client and guide them through the
            process, from consultation to finished look. A well-executed haircut
            can enhance a person's natural beauty and make them feel like the
            best version of themselves. I believe that a good haircut is an
            essential component of any successful hair styling service.
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

export default CutAndStyle;
