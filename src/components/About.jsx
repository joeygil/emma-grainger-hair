import { motion } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";
import Nav from "./Nav";
import ScrollToTop from "./ScrollToTop";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
      <Nav />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.3, type: "spring" }}
        exit={{ x: window.screenX }}
      >
        <div className="flex justify-end relative z-50">
          {scrollPosition < 10 ? (
            <div
              className="about-hero w-[60%] h-[40vh] bg-[url('/images/about-banner-dark.jpg')] bg-cover -top-80 absolute duration-1000 rounded-tl-[10rem] rounded-bl-[10rem] flex items-end justify-end ring ring-[#B1740F]"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold">
                About
              </h1>
            </div>
          ) : (
            <div
              className="w-[0] h-[0] bg-[url('/images/about-banner-dark.jpg')] bg-cover -top-80 absolute duration-1000 rounded-tl-[10rem] rounded-bl-[10rem] flex items-end justify-end ring ring-[#B1740F]"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold">
                About
              </h1>
            </div>
          )}
        </div>
        <div className="flex justify-around content-center h-full"></div>

        <motion.div className="col-span-3 w-full text-xl bg-[#B1740F] p-8 drop-shadow-2xl ">
          <h1 className="text-white">About</h1>
          <h2 className="text-white leading-relaxed text-xl">All about me!</h2>
        </motion.div>

        <motion.div className="col-span-3 my-8 w-full bg-[#635774] p-8 h-full ring ring-[#B1740F]">
          <div className="about-me flex ring ring-[#B1740F] rounded-xl">
            <img
              src="/images/emma-headshot.jpg"
              className="emma-image w-[500px] h-[700px] col-span-2 rounded-l-xl"
            />
            <motion.div className="flex flex-col">
              <h2 className="text-4xl text-white p-8">About me... </h2>
              <p className="text-white text-xl p-8">
                I started my hairdressing career at a local Knaresborough salon
                in 2002 and after qualifying and working as a stylist for a few
                years I progressed and obtained a job at a large chain in Ripon.
                The large chain was great for training and knowledge and really
                cemented my hairdressing foundation.
                <br />
                <br />
                After a while I decided that large chain style hairdressing
                wasn't for me and I relocated back to Knaresborough. I realised
                that I prefer the intimacy and community of an independent
                salon. After a few years I had a thirst for having a salon of my
                own and in 2007 aged just 23 I opened one alongside my sister
                who is also a hairdresser.
                <br />
                <br />
                After 9 years in business I left the salon and took some well
                needed time out to focus on myself. I had a year to really think
                what I wanted to do with my life before realising hairdressing
                really is my passion and I found a job working freelance from
                Divine Hairdressing in Knaresborough.
                <br />
                <br />
                Being self employed gives me the freedom I need to work
                independently but without the stresses and strains that come
                with being a salon owner. I have now been at Divine for 5 years
                and I couldn’t be happier.
                <br />
                <br />
                My favourite techniques to do in the salon are more contemporary
                and creative colours such as balayage. I feel I have a keen eye
                colouring and am a bit of perfectionist when it comes to
                styling.
              </p>
              <span className="handwriting text-white text-right text-5xl pr-20 py-1 -rotate-6">
                Emma x
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
