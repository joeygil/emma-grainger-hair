import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import ColourModal from "../modals/ColourModal";
import { Link } from "react-router-dom";
import ServicesNav from "../ServicesNav";
import ShrunkNav from "../ShrunkNav";
import ScrollToTop from "../ScrollToTop";

const Colours = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openModal = (prev) => {
    setShowModal((prev) => !prev);
    setModalContent(<ColourModal />);
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
          <div className="col-span-3 w-full h-[100px] text-xl bg-[#B1740F] p-8 drop-shadow-2xl">
            <h1 className="text-white">Colours</h1>
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
            src="/images/colour-copper.webp"
            className="services-img ring ring-[#B1740F]"
          />
          <br />
          <img
            src="/images/cut-colour.webp"
            className="services-img ring ring-[#B1740F]"
          />
        </div>
        <div className="flex flex-col items-center justify-around col-span-2 bg-[#635774] text-white p-5 ring ring-[#B1740F]">
          <h2 className="font-bold text-[#FDE8E9]">Colours</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg my-4 py-4 px-4 rounded justify-self-center"
          >
            Book Online
          </motion.button>

          <p className="services-p text-justify text-xl px-12">
            <p>
              As a hair stylist I have a deep passion for hair colouring. There
              is something truly special about transforming a person's look with
              a new hair colour. From subtle highlights to bold and vibrant
              hues, the possibilities are enless when it comes to hair
              colouring, I love working with my clients to create a custom
              colour that complements their natural features and enhances their
              overall appearance. Whether they are looking to cover up greys,
              add a new dimension to their hair or make a bold statement, I
              enjoy helping them achieve their desired look. I take pride in my
              attention to detail and strive to ensure that every hair colour
              service leaves my clients feeling confident and beautiful
            </p>
            <br />
            I use milk_shake colours in my current salon. milk_shake® is a salon
            professional hair care brand, offering a complete range of quality
            products to enhance and maintain the natural beauty of hair.
            <br />
            <br />
            milk_shake® offers the benefits of milk and fruit for wellbeing and
            beauty to satisfy the needs of the discerning consumer and salon
            professional.
            <br />
            <br />
            milk_shake® is part of the z-one concept group, a young, innovative
            and dynamic Italian company offering professional hair and beauty
            products worldwide. z.one concept™ was founded in 1999 in Italy,
            which is known as one of the most difficult and competitive
            professional hair business regions in Europe. Within a few years
            z.one concept™ achieved significant results among hair care product
            manufacturers and was recognized by industry experts as “the most
            innovative emerging brand of the latest years”. Their hair products
            are an amazing range of professional salon hair products inspired by
            nature.
            <br />
            <br />
            The philosophy of milk_shake® hair products is simple, use the power
            and beauty of nature to get amazing looking hair for all occasions.
            milk_shake® hair products are made with an amazing mix of
            professional ingredients including milk protein that will be
            heavenly food for your hair. milk_shake® offer a fantastic porfolio
            of products that include a range of shampoo, conditioner, intensive
            hair treatments and hair styling products that will all become the
            perfect additions to your daily hair care routine.
          </p>
          <br />
          <br />
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

export default Colours;
