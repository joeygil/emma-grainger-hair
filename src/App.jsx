import React from "react";
import { Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </>
  );
}

export default App;
