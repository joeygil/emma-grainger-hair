import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import BalayageModal from "../modals/BalayageModal";
import ServicesNav from "../ServicesNav";
import ShrunkNav from "../ShrunkNav";

const Balayage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openModal = (prev) => {
    setShowModal((prev) => !prev);
    setModalContent(<BalayageModal />);
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
      <ShrunkNav />
      <motion.div
        initial={{ width: "20%" }}
        animate={{ width: "100%" }}
        exit={{ x: window.screenX }}
      >
        <div className="flex justify-end relative z-30"></div>

        <div>
          <div className="col-span-3 w-full text-xl bg-[#B1740F] p-8 drop-shadow-2xl">
            <h1 className="page-title text-white">Balayage</h1>
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
            src="/images/balayage-serv.webp"
            className="services-img ring ring-[#B1740F]"
          />
        </div>
        <div className="flex flex-col items-center justify-around col-span-2 bg-[#635774] text-white p-5 ring ring-[#B1740F]">
          <h2 className="font-bold text-[#FDE8E9]">Balayage</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg my-4 py-4 px-4 rounded justify-self-center"
          >
            Book Online
          </motion.button>
          <p className="services-p text-justify text-xl px-12">
            Balayage is a popular and versatile hair colouring technique that
            can create beautiful, natural-looking results. The word "balayage"
            comes from the French verb "to sweep," and this technique involves
            using a brush to apply hair colour in a sweeping motion, creating a
            graduated, sun-kissed effect. This technique is low maintenance and
            allows for a more natural and subtle transition of colour, as
            opposed to the traditional foil highlight method. My go-to technique
            for balayage is combining both foils and balayage to create
            'foilayage'. The method works better for a more modern balayage
            look. Balayage can be customized to suit the individual client and
            can be applied to all hair types and lengths. I believe that
            balayage is a great option for clients who want a soft and
            natural-looking colour update.
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

export default Balayage;
