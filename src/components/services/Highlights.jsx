import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import HighlightsModal from "../modals/HighlightsModal";
import { Link } from "react-router-dom";
import ServicesNav from "../ServicesNav";

const Highlights = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openModal = (prev) => {
    setShowModal((prev) => !prev);
    setModalContent(<HighlightsModal />);
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
              className="hero w-[70%] h-[40vh] bg-[url('/images/services-banner-dark.jpg')] bg-cover -top-80 absolute duration-1000 shadow-xl rounded-tl-[10rem] rounded-bl-[10rem] flex items-end justify-end ring ring-[#B1740F]"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold">
                Highlights
              </h1>
            </div>
          ) : (
            <div
              className="w-[0] h-[0] bg-[#F6AE2D] -top-80 absolute duration-1000 shadow-xl rounded-tl-[10rem] flex items-end justify-end opacity-0"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold opacity-0">
                Highlights
              </h1>
            </div>
          )}
        </div>

        <div>
          <motion.div className="col-span-3 w-full text-xl bg-[#B1740F] p-8 drop-shadow-2xl">
            <h1 className="text-white">Services</h1>
            <h2 className="text-white leading-relaxed text-xl">
              Pick and book your services below:
            </h2>
          </motion.div>
          <div className="bg-white">
            <h2 className="bg-[#FDE8E9] px-8 py-3"></h2>
          </div>
          <ServicesNav />
        </div>
        <div className="main-content grid grid-cols-3 gap-4 m-[2rem] ">
          <div>
            <img
              src="/images/highlights.jpg"
              className="ring ring-[#B1740F]"
            />
          </div>
          <div className="flex flex-col items-center justify-around col-span-2 bg-[#635774] text-white p-5 ring ring-[#B1740F]">
            <h2 className="font-bold text-[#FDE8E9]">Highlights</h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={openModal}
              className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg my-4 py-4 px-4 rounded justify-self-center"
            >
              Book Online
            </motion.button>
            <p className="services-p text-justify text-xl px-12">
              Highlights are a popular way for clients to add dimension and
              depth to their natural hair color. The technique involves
              lightening small sections of the hair using a hair coloring
              product, creating a multi-tonal effect. Highlights can be done
              using a variety of methods, such as foil highlights or balayage,
              and can be customized to suit the individual client. They can be
              as subtle or as bold as the client desires, and can be a great way
              to refresh a person's look. I believe that highlights are a
              versatile and effective hair coloring technique that can help
              clients achieve the look they want.
            </p>
          </div>
        </div>

        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalContent={modalContent}
        />
      </motion.div>
    </>
  );
};

export default Highlights;
