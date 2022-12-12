import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import { useScroll, useTransform } from "framer-motion";

const Contact = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
        <div className="flex justify-end relative z-50">
          {scrollPosition < 1 ? (
            <div
              className="contact-image w-[70%] h-[40vh] bg-[url('/images/contact-banner-dark.jpg')] bg-cover -top-80 absolute duration-1000 shadow-xl rounded-tl-[10rem] rounded-bl-[10rem] flex items-end justify-end ring ring-[#B1740F]"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold">
                Contact
              </h1>
            </div>
          ) : (
            <div
              className="w-[0] h-[0] bg-[url('/images/contact-banner-dark.jpg')] bg-cover -top-80 absolute duration-1000 shadow-xl rounded-tl-[10rem] rounded-bl-[10rem] flex items-end justify-end ring ring-[#B1740F]"
              id="hero"
            >
              <h1 className="mb-8 mr-8 text-white text-[8rem] font-bold opacity-0 transition-['1s']">
                Contact
              </h1>
            </div>
          )}
        </div>

        <motion.div
          className="flex w-screen justify-center items-center z-0 relative"
          style={{ y }}
        >
          <img src="/images/salon-contact.jpg" className="w-screen " />
        </motion.div>

        <motion.div className="col-span-3 w-full text-xl bg-[#B1740F] p-8 drop-shadow-2xl z-10 ">
          <h1 className="text-white">Contact</h1>
          <h2 className="text-white leading-relaxed text-xl">
            Feel free to get in touch below with any questions:
          </h2>
        </motion.div>
        <div className="contact-grid grid grid-cols-2 my-12 mx-12 z-10">
          <div className="flex justify-around bg-[#FDE8E9] shadow-xl ring ring-[#B1740F] z-10">
            <form
              action="https://public.herotofu.com/v1/51b9dfb0-6bd7-11ed-a377-655c67143cec"
              method="post"
              className="mb-20 w-5/6 flex flex-col justify-center items-center"
            >
              <h1 className="p-3 ml-4">Drop me a message:</h1>
              <label for="name"></label>
              <motion.input
                whileTap={{ scale: 0.9 }}
                whileFocus={{ outlineColor: "#B1740F" }}
                type="text"
                placeholder="name"
                name="name"
                id="name"
                className="border-2 border-[#062726] p-3 my-3 w-full"
              ></motion.input>
              <label for="email"></label>
              <motion.input
                whileTap={{ scale: 0.9 }}
                whileFocus={{ outlineColor: "#B1740F" }}
                type="email"
                placeholder="email"
                name="email"
                id="email"
                className="border-2 border-[#062726] p-3 my-3 w-full"
              ></motion.input>
              <label for="phone"></label>
              <motion.input
                whileTap={{ scale: 0.9 }}
                whileFocus={{ outlineColor: "#B1740F" }}
                type="phone"
                placeholder="phone"
                name="phone"
                id="phone"
                className="border-2 border-[#062726] p-3 my-3 w-full"
              ></motion.input>
              <br />
              <motion.textarea
                whileTap={{ scale: 0.9 }}
                whileFocus={{ outlineColor: "#B1740F" }}
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message - if your message is appointment related, please include preferred time and day"
                className="border-2 border-[#062726] p-3 w-full h-3/6"
              ></motion.textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#635774] hover:bg-[#B1740F] text-white shadow-lg m-6 w-10/12 py-2 text-xl rounded"
              >
                Submit
              </motion.button>
            </form>
          </div>
          <div className="flex justify-end">
            <div className="contact-number  flex flex-col justify-center items-center w-11/12 p-5 bg-[#FDE8E9] shadow-xl ring ring-[#B1740F] z-10">
              <h2 className="text-center text-2xl">
                My preferred method of contact is Facebook, as it's easier to
                answer messages than the phone whilst with clients. If you're
                not on Facebook or Instagram, please text the below number and
                I'll get back to you ASAP:
              </h2>
              <h2 className="text-7xl my-5 tracking-wider">07976 889 289</h2>
              <div className="flex items-center text-lg">
                <p className="contact-address text-xl">
                  Divine Hair, 26 High Street, Knaresborough, HG5 0EQ
                </p>
              </div>
              <div className="flex items-center justify-around m-8">
                <motion.a
                  href="https:/www.instagram.com/emma_at_divine"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <UilInstagram size="50" color="#635774" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/emmaatdivine"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <UilFacebook size="50" color="#635774" />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#635774] hover:bg-[#B1740F] text-white shadow-lg ml-4 py-2 px-4 rounded"
                >
                  Book Online
                </motion.button>
              </div>
              <div className="flex">
                <div className="contact-divider flex w-[400px] border-black border-b-2"></div>
              </div>
              <br />
              <p>Sign up for my mailing list:</p>
              <motion.input
                whileTap={{ scale: 0.9 }}
                whileFocus={{ outlineColor: "#B1740F" }}
                type="email"
                placeholder="Email Address"
                className="p-3 m-3 w-[90%]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
