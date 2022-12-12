import React from "react";
import { useState } from "react";
import FullColourModal from "./FullColourModal";
import PartialColourModal from "./PartialColourModal";
import RegrowthModal from "./RegrowthModal";
import TonerModal from "./TonerModal";
import MiniModal from "../MiniModal";

const ColourModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openRegrowthModal = () => {
    setShowModal((prev) => !prev);
    setModalContent(<RegrowthModal />);
  };

  const openFullColourModal = () => {
    setShowModal((prev) => !prev);
    setModalContent(<FullColourModal />);
  };

  const openPartialModal = () => {
    setShowModal((prev) => !prev);
    setModalContent(<PartialColourModal />);
  };

  const openTonerModal = () => {
    setShowModal((prev) => !prev);
    setModalContent(<TonerModal />);
  };

  return (
    <>
      <ul className="modal-content-box flex flex-col justify-around w-6/12 items-center text-xl bg-white text-[#635774] rounded-xl  p-8 ">
        <a
          className="w-full hover:text-[#B1740F]  duration-300 cursor-pointer"
          target="_blank"
          onClick={openRegrowthModal}
        >
          <li className="my-3 border-b-2 border-[#B1740F] w-full text-center">
            Re-growth Colour
            <br />
            <p className="text-[16px]">Root area, painted onto the scalp</p>
          </li>
        </a>
        <a
          className="w-full hover:text-[#B1740F]  duration-300"
          target="_blank"
          onClick={openFullColourModal}
        >
          <li className="my-3 border-b-2 border-[#B1740F] w-full text-center">
            Full Head Colour
            <br />
            <p className="text-[16px]">Full head of foils</p>
          </li>
        </a>
        <a
          className="w-full hover:text-[#B1740F]  duration-300"
          target="_blank"
          onClick={openPartialModal}
        >
          <li className="my-3 border-b-2 border-[#B1740F] w-full text-center">
            Partial Colour
            <br />
            <p className="text-[16px]">
              Either a small root touch up or a few foils (max 8) in the
              parting.
            </p>
          </li>
        </a>
        <a
          className="w-full hover:text-[#B1740F]  duration-300"
          target="_blank"
          onClick={openTonerModal}
        >
          <li className="my-3 border-b-2 border-[#B1740F] w-full text-center">
            Toner
            <br />
            <p className="text-[16px]">A toner to refresh existing colour.</p>
          </li>
        </a>
        <p className="text-center text-lg font-bold">
          New clients MUST have a patch test at the latest 48hrs before colour
          services. If you haven't had one recently, make sure to pop in before
          your booking, or your appointment may be cancelled on arrival. Thanks!
        </p>
      </ul>

      <MiniModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalContent={modalContent}
      />
    </>
  );
};

export default ColourModal;
