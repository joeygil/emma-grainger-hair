import React from "react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../mediaqueries.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  //   console.log(scrollPosition);

  return (
    <>
      <ScrollToTop />
      <Nav />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.screenX }}
      >
        <div className="home-image flex justify-end relative z-50">
          {scrollPosition < 5 ? (
            <div
              className="w-[65%] h-[90vh] bg-[url('/images/milkshake-red-banner.webp')] bg-cover -top-80 absolute duration-1000 shadow-xl rounded-tl-[10rem] flex items-end justify-end ring ring-[#B1740F]"
              id="hero"
            ></div>
          ) : (
            <div
              className="w-[0] h-[50vh] bg-[url('/images/milkshake-red-banner.webp')] bg-cover -top-80 absolute duration-1000 shadow-xl rounded-tl-[10rem] flex items-end justify-end opacity-0"
              id="hero"
            ></div>
          )}
        </div>
        <motion.div className="home-tagline col-span-3 w-full bg-[#B1740F] py-8 px-2 drop-shadow-2xl ">
          <h1 className="tagline text-white text-3xl tracking-wide">
            Knaresborough based hairdresser
          </h1>
        </motion.div>
        <div className="hidden mobile-banner flex justify-center">
          <img src="/images/mobile-banner.jpg" className="object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.8,
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center items-center relative"
        >
          <div className="home-grid grid grid-cols-3 gap-8 w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              exit={{ opacity: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ y }}
              className="col-span-3 row-span-2 w-full text-xl bg-[#B1740F] z-0"
            >
              <div className="home-banner flex justify-center">
                <img src="/images/salon-1-2.jpg" className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.2,
                },
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="justify-self-center justify-items-center row-span-2 w-10/12 text-xl bg-white drop-shadow-2xl rounded-xl p-3 z-10 ring ring-[#B1740F]"
            >
              <div className="flex flex-col items-center justify-center ">
                <h2 className="tracking-wider my-4 text-2xl bg-[#635774] text-white w-full p-3 text-center">
                  Contemporary Cut & Colour
                </h2>
                <img src="/images/cut-colour.jpg" />
                <Link
                  to="/services/cutandstyle"
                  className="flex justify-center w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#B1740F] hover:bg-[#635774] text-white w-10/12 hover:text-white text-xl drop-shadow-xl my-4 py-4 px-4 rounded z-50"
                  >
                    Find out more!
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.3,
                },
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="justify-self-center row-span-2 w-10/12 text-xl bg-white drop-shadow-2xl p-3 rounded-xl z-10 ring ring-[#B1740F]"
            >
              <div className="flex flex-col items-center justify-center">
                <h2 className="tracking-wider my-4 text-2xl bg-[#635774] text-white w-full p-3 text-center">
                  Extensions
                </h2>
                <img src="/images/extensions-home.jpg" />
                <Link
                  to="/services/extensions"
                  className="flex justify-center w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#B1740F] hover:bg-[#635774] text-white w-10/12 hover:text-white text-xl drop-shadow-xl my-4 py-4 px-4 rounded z-50"
                  >
                    Find out more!
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="justify-self-center row-span-2 w-10/12 text-xl bg-white drop-shadow-2xl p-3 rounded-xl z-10 ring ring-[#B1740F]"
            >
              <div className="flex flex-col items-center justify-center">
                <h2 className="tracking-wider my-4 text-2xl bg-[#635774] text-white w-full p-3 text-center">
                  Weddings
                </h2>
                <img src="/images/weddings-home.jpg" />
                <Link
                  to="/services/weddings"
                  className="flex justify-center w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#B1740F] hover:bg-[#635774] text-white w-10/12 hover:text-white text-xl drop-shadow-xl my-4 py-4 px-4 rounded z-50"
                  >
                    Find out more!
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div className="col-span-3 w-full bg-[#635774] p-8 h-full ring ring-[#B1740F]">
              <div className="home-about-me flex ring ring-[#B1740F] rounded-xl">
                <img
                  src="/images/emma-headshot.jpg"
                  className="emma-image w-[500px] h-[700px] col-span-2 rounded-l-xl"
                />
                <div className="flex flex-col justify-around">
                  <h2 className="text-4xl text-white px-8 py-2">
                    About me...{" "}
                  </h2>
                  <p className="text-white text-xl p-8">
                    I started my hairdressing career at a local Knaresborough
                    salon in 2002 and after qualifying and working as a stylist
                    for a few years I progressed and obtained a job at a large
                    chain in Ripon. The large chain was great for training and
                    knowledge and really cemented my hairdressing foundation.
                    <br />
                    <br />
                    After a while I decided that large chain style hairdressing
                    wasn't for me and I relocated back to Knaresborough. I
                    realised that I prefer the intimacy and community of an
                    independent salon. After a few years I had a thirst for
                    having a salon of my own and in 2007 aged just 23 I opened
                    one alongside my sister who is also a hairdresser.
                    <br />
                    <br />
                    After 9 years in business I left the salon and took some
                    well needed time out to focus on myself. I had a year to
                    really think what I wanted to do with my life before
                    realising hairdressing really is my passion and I found a
                    job working freelance from Divine Hairdressing in
                    Knaresborough.
                    <br />
                    <br />
                    Being self employed gives me the freedom I need to work
                    independently but without the stresses and strains that come
                    with being a salon owner. I have now been at Divine for 5
                    years and I couldn’t be happier.
                    <br />
                    <br />
                    My favourite techniques to do in the salon are more
                    contemporary and creative colours such as balayage. I feel I
                    have a keen eye colouring and am a bit of perfectionist when
                    it comes to styling.
                  </p>
                  <span className="handwriting text-white text-right text-5xl pr-20 py-1 -rotate-6">
                    Emma x
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
