import { motion } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import ServicesNav from "./ServicesNav";

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // const openModal = (prev) => {
  //   setShowModal((prev) => !prev);
  // };

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
      {/* <button onClick={openModal}>OPEN MODAL</button> */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.screenX }}
      >
        <div className="services-hero flex justify-end relative z-30">
          {scrollPosition < 5 ? (
            <div
              className="w-[60%] h-[40vh] bg-[url('/images/services-banner-dark.jpg')] bg-cover -top-80 absolute duration-1000 delay-500 drop-shadow-2xl rounded-tl-[10rem] rounded-bl-[10rem] flex items-end justify-end ring ring-[#B1740F]"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold">
                Services
              </h1>
            </div>
          ) : (
            <div
              className="w-[0] h-[0] bg-[url('/images/services-banner-dark.jpg')] bg-cover -top-80 absolute duration-1000 drop-shadow-2xl rounded-tl-[10rem] rounded-bl-[10rem] flex items-end justify-end ring ring-[#B1740F] opacity-0"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold opacity-0">
                Services
              </h1>
            </div>
          )}
        </div>
      </motion.div>
      <div>
        <motion.div className="col-span-3 w-full text-xl bg-[#B1740F] p-8 drop-shadow-2xl ">
          <h1 className="text-white">Services</h1>
          <h2 className="text-white leading-relaxed text-xl">
            Pick and book your services below:
          </h2>
        </motion.div>
        <ServicesNav />

        <section className="services-sections bg-[#FDE8E9] grid grid-rows-9 grid-cols-2 m-8 w-10/12 flex justify-center align-center mx-auto ring ring-[#B1740F] rounded-xl">
          <div className="col-span-2 text-center"></div>

          <div className="flex justify-center py-3">
            <div className="services-box flex flex-col justify-center items-center p-5 bg-[url('/images/cut.jpg')] bg-cover bg-center h-[400px] w-[600px] text-white text-[6rem]">
              <p className="services-title drop-shadow-3xl text-center">
                Cut / Style
              </p>
              <Link to="/services/cutandstyle">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg ml-4 py-4 px-4 rounded"
                >
                  View more
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center py-3">
            <div className="services-box flex flex-col justify-center items-center p-5 bg-[url('/images/highlights.jpg')] bg-cover bg-center h-[400px] w-[600px] text-white text-[6rem]">
              <p className="services-title drop-shadow-3xl text-center">
                Highlights
              </p>
              <Link to="/services/highlights">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg ml-4 py-4 px-4 rounded"
                >
                  View more
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center py-3">
            <div className="services-box flex flex-col justify-center items-center p-5 bg-[url('/images/balayage.jpg')] bg-cover bg-center h-[400px] w-[600px] text-white text-[6rem]">
              <p className="services-title drop-shadow-3xl text-center">
                Balayage
              </p>
              <Link to="/services/balayage">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg ml-4 py-4 px-4 rounded"
                >
                  View more
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center py-3">
            <div className="services-box flex flex-col justify-center items-center p-5 bg-[url('/images/blowdry.jpg')] bg-cover bg-center h-[400px] w-[600px] text-white text-[6rem]">
              <p className="services-title drop-shadow-3xl text-center">
                Colour
              </p>
              <Link to="/services/colours">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg ml-4 py-4 px-4 rounded"
                >
                  View more
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center py-3">
            <div className="services-box flex flex-col justify-center items-center p-5 bg-[url('/images/weddings.jpg')] bg-cover bg-center h-[400px] w-[600px] text-white text-[6rem]">
              <p className="services-title drop-shadow-3xl text-center">
                Weddings
              </p>
              <Link to="/services/weddings">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg ml-4 py-4 px-4 rounded"
                >
                  View more
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center py-3">
            <div className="services-box flex flex-col justify-center items-center p-5 bg-[url('/images/krespect.jpg')] bg-cover bg-center h-[400px] w-[600px] text-white text-[6rem]">
              <p className="services-title drop-shadow-3xl text-center">
                K Respect
              </p>

              <Link to="/services/krespect">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg ml-4 py-4 px-4 rounded"
                >
                  View more
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center py-3">
            <div className="services-box flex flex-col justify-center items-center p-5 bg-[url('/images/kids.jpg')] bg-cover bg-center h-[400px] w-[600px] text-white text-[6rem]">
              <p className="services-title drop-shadow-3xl text-center">Kids</p>
              <Link to="/services/kids">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg ml-4 py-4 px-4 rounded"
                >
                  View more
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center py-3">
            <div className="services-box flex flex-col justify-center items-center p-5 bg-[url('/images/extensions.jpg')] bg-cover bg-center h-[400px] w-[600px] text-white text-[6rem]">
              <p className="services-title drop-shadow-3xl text-center">
                Extensions
              </p>
              <Link to="/services/extensions">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg ml-4 py-4 px-4 rounded"
                >
                  View more
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Services;
