import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const ServicesNav = () => {
  const [currentPage, setCurrentPage] = useState(false);

 

  return (
    <>
      <div className="bg-white">
        <h2 className="bg-[#FDE8E9] px-8 py-3"></h2>
      </div>
      <div className="services-nav flex justify-around align-center bg-white p-8  ring ring-[#B1740F] drop-shadow-2xl">
        <NavLink to="/services/cutandstyle" activeClassName="active">
          <div className="page-current text-lg">Cut / Style</div>
        </NavLink>
        <div>|</div>
        <NavLink to="/services/highlights" activeClassName="active">
          <div className="text-lg">Highlights</div>
        </NavLink>
        <div>|</div>
        <NavLink to="/services/colours" activeClassName="active">
          <div className="text-lg">Colours</div>
        </NavLink>
        <div>|</div>
        <NavLink to="/services/balayage" activeClassName="active">
          <div className="page-current text-lg">Balayage</div>
        </NavLink>
        <div>|</div>
        <NavLink to="/services/weddings" activeClassName="active">
          <div className="text-lg">Weddings</div>
        </NavLink>
        <div>|</div>
        <NavLink to="/services/krespect" activeClassName="active">
          <div className="text-lg">K Respect</div>
        </NavLink>
        <div>|</div>
        <NavLink to="/services/kids" activeClassName="active">
          <div className="text-lg">Kids</div>
        </NavLink>
        <div>|</div>
        <NavLink to="/services/extensions" activeClassName="active">
          <div className="text-lg">Extensions</div>
        </NavLink>
      </div>
    </>
  );
};

export default ServicesNav;
