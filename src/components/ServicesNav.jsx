import React from "react";
import { Link } from "react-router-dom";

const ServicesNav = () => {
  return (
    <>
      <div className="bg-white">
        <h2 className="bg-[#FDE8E9] px-8 py-3"></h2>
      </div>
      <div className="services-nav flex justify-around align-center bg-white p-8  ring ring-[#B1740F] drop-shadow-2xl">
        <Link to="/services/cutandstyle">
          <div className="text-lg flex justify-between">Cut / Style</div>
        </Link>
        <div>|</div>
        <Link to="/services/highlights">
          <div className="text-lg">Highlights</div>
        </Link>
        <div>|</div>
        <Link to="/services/colours">
          <div className="text-lg">Colours</div>
        </Link>
        <div>|</div>
        <Link to="/services/balayage">
          <div className="text-lg">Balayage</div>
        </Link>
        <div>|</div>
        <Link to="/services/weddings">
          <div className="text-lg">Weddings</div>
        </Link>
        <div>|</div>
        <Link to="/services/krespect">
          <div className="text-lg">K Respect</div>
        </Link>
        <div>|</div>
        <Link to="/services/kids">
          <div className="text-lg">Kids</div>
        </Link>
        <div>|</div>
        <Link to="/services/extensions">
          <div className="text-lg">Extensions</div>
        </Link>
      </div>
    </>
  );
};

export default ServicesNav;
