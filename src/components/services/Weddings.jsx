import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import WeddingsModal from "../modals/WeddingsModal";
import { Link } from "react-router-dom";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import ServicesNav from "../ServicesNav";
import ShrunkNav from "../ShrunkNav";
import ScrollToTop from "../ScrollToTop";

const Weddings = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openModal = (prev) => {
    setShowModal((prev) => !prev);
    setModalContent(<WeddingsModal />);
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
                Weddings
              </h1>
            </div>
          ) : (
            <div className="w-[0] h-[0] opacity-0" id="hero">
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold opacity-0">
                Weddings
              </h1>
            </div>
          )} */}
        </div>

        <div>
          <div className="col-span-3 w-full text-xl bg-[#B1740F] p-8 drop-shadow-2xl">
            <h1 className="text-white">Weddings</h1>
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
            src="/images/wedding-serv.jpg"
            className="services-img ring ring-[#B1740F]"
          />
        </div>
        <div className="flex flex-col items-center justify-around col-span-2 bg-[#635774] text-white p-5 ring ring-[#B1740F]">
          <h2 className="font-bold text-[#FDE8E9]">Weddings</h2>
          <p className="services-p text-justify text-xl px-12">
            Need your and/or your bridal party's hair doing for your big day?
            Weddings are a special and exciting time for you. On your wedding
            day, a bride and your bridal party want to look and feel their best,
            and it is my job to help you achieve that. Wedding hair can be as
            simple or as elaborate as you desire, and can range from classic
            updos to loose and romantic styles. It is important to work closely
            with you to understand your vision and to create a look that will
            complement your dress and overall wedding aesthetic. I believe that
            wedding hair is an important part of a bride's big day and can help
            her feel confident and beautiful.
          </p>
          <p className="services-p text-justify text-xl px-12">
            Get in touch on Facebook or Instagram below to book in a
            consultation and see what I can do for you.
          </p>
          <div className="socials flex justify-between w-[300px] items-center">
            <motion.a
              href="https:/www.instagram.com/emma_at_divine"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col justify-center items-center"
            >
              <UilInstagram size="50" color="#B1740F" />
              <span>Instagram</span>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/emmaatdivine"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col justify-center items-center"
            >
              <UilFacebook size="50" color="#B1740F" />
              <span>Facebook</span>
            </motion.a>
          </div>
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

export default Weddings;
