import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";
import Balayage from "./services/Balayage";
import Colours from "./services/Colours";
import CutAndStyle from "./services/CutAndStyle";
import Extensions from "./services/Extensions";
import Highlights from "./services/Highlights";
import Kids from "./services/Kids";
import KRespect from "./services/KRespect";
import Weddings from "./services/Weddings";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/balayage" element={<Balayage />} />
          <Route path="/services/colours" element={<Colours />} />
          <Route path="/services/cutandstyle" element={<CutAndStyle />} />
          <Route path="/services/extensions" element={<Extensions />} />
          <Route path="/services/highlights" element={<Highlights />} />
          <Route path="/services/kids" element={<Kids />} />
          <Route path="/services/krespect" element={<KRespect />} />
          <Route path="/services/weddings" element={<Weddings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
