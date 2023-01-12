import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import ExtensionsModal from "../modals/ExtensionsModal";
import { Link } from "react-router-dom";
import ServicesNav from "../ServicesNav";
import ShrunkNav from "../ShrunkNav";
import ScrollToTop from "../ScrollToTop";

const Extensions = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openModal = (prev) => {
    setShowModal((prev) => !prev);
    setModalContent(<ExtensionsModal />);
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
        <div className="flex justify-end relative z-30"></div>

        <div>
          <div className="col-span-3 w-full text-xl bg-[#B1740F] p-8 drop-shadow-2xl">
            <h1 className="text-white">Extensions</h1>
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
            src="/images/extensions-bw.webp"
            className="services-img ring ring-[#B1740F]"
          />
        </div>
        <div className="flex flex-col items-center justify-around col-span-2 bg-[#635774] text-white p-5 ring ring-[#B1740F]">
          <h2 className="font-bold text-[#FDE8E9]">Extensions</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg my-4 py-4 px-4 rounded justify-self-center"
          >
            Book Online
          </motion.button>
          <p className="services-p text-justify text-xl px-12">
            Extensions can quickly and easily add volume and length, naturally
            enhancing your hairstyle for a different look. They can be a quick,
            gratifying way to prepare for a special occasion or just give you an
            instant style change without months of waiting for hair growth. I
            can do extensions to increase length, volume or thickness.
            <br />
            <br />
            <p>
              Hair extensions can be a great way to add length and volume to a
              client's natural hair. They come in a variety of colors, textures,
              and lengths, so it is easy to find the perfect match for any
              client. Hair extensions are applied using a variety of methods,
              such as fusion, tape-in, or clip-in, and can be easily removed
              without damaging the natural hair. I use the nano-ring method as I
              feel it is the most effective and long lasting. With proper care
              and maintenance, hair extensions can last for several months,
              giving the client a beautiful and full head of hair. Overall, I
              believe that hair extensions are a valuable tool in the hair
              styling industry and can help clients achieve the look they
              desire.
            </p>
            <br />
            As extensions are a bespoke service, a full consultation is required
            beforehand to assess your needs, click above to book online and see
            what I can do for you.
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

export default Extensions;
