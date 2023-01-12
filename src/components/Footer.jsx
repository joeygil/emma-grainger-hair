import React from "react";
import { UilInstagram } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilPhone } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <>
      <div className="w-screen h-[180px] bg-[#B1740F] mt-10">
        <div className="flex justify-around items-center h-full px-5">
          <motion.a
            href="https://www.facebook.com/emmagraingerhair"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center items-center flex-col cursor-pointer"
          >
            <UilFacebook size="50" color="#635774" />
            <span className="footer-span text-white">Facebook</span>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/emmagraingerhair"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center items-center flex-col"
          >
            <UilInstagram size="50" color="#635774" />
            <span className="footer-span text-white">Instagram</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center items-center flex-col"
          >
            <UilPhone size="50" color="#635774" />
            <span className="footer-span text-white">07976 889 289</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center items-center flex-col"
          >
            <UilEnvelope size="50" color="#635774" />
            <span className="footer-span text-white">
              emmagraingergilchrist@gmail.com
            </span>
          </motion.a>

          <motion.img
            src="/images/eg-init-logo.webp"
            className="footer-logo h-[100px] w-[150px]"
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={1}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
