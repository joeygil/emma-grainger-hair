import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import KRespectModal from "../modals/KRespectModal";
import { Link } from "react-router-dom";
import ServicesNav from "../ServicesNav";
import ShrunkNav from "../ShrunkNav";
import ScrollToTop from "../ScrollToTop";

const KRespect = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const openModal = (prev) => {
    setShowModal((prev) => !prev);
    setModalContent(<KRespectModal />);
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
        initial={{ width: "40%" }}
        animate={{ width: "100%" }}
        exit={{ x: window.screenX }}
      >
        <div className="flex justify-end relative z-30"></div>

        <div>
          <div className="col-span-3 w-full text-xl bg-[#B1740F] p-8 drop-shadow-2xl">
            <h1 className="text-white">K Respect</h1>
            <h2 className="text-white leading-relaxed text-xl">
              Hair Smoothing
            </h2>
          </div>
          <div className="bg-white">
            <h2 className="bg-[#FDE8E9] px-8 py-3"></h2>
          </div>
        </div>
      </motion.div>
      <ServicesNav />
      <motion.div
        className="flex w-screen justify-center items-center z-0 relative"
        style={{ y }}
      >
        <img src="/images/krespect-banner.webp" className="w-screen " />
      </motion.div>

      <div className="main-content grid grid-cols-3 gap-4 m-[2rem] z-10 relative">
        <div>
          <img
            src="/images/K-Respect.webp"
            className="services-img ring ring-[#B1740F]"
          />
        </div>
        <div className="flex flex-col items-center justify-around col-span-2 bg-[#635774] text-white p-5 ring ring-[#B1740F]">
          <h2 className="font-bold text-[#FDE8E9]">K Respect</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg my-4 py-4 px-4 rounded justify-self-center"
          >
            Book Online
          </motion.button>
          <p className="services-p text-justify text-xl px-8">
            {" "}
            K Respect is a keratin smoothing treatment that can last between 3 &
            5 months. It makes frizzy and unruly hair more manageable and easier
            to dry. We can tailor make our K Respect treatment to suit your
            needs.
            <br />
            <br />
            As K Respect a bespoke service, a full consultation is required
            beforehand to assess your needs, click above to book online and see
            what I can do for you.
          </p>
          <p className="text-justify text-xl"></p>
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

export default KRespect;
