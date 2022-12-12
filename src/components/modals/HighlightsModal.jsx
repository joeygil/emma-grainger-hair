import React from "react";
import { useState } from "react";
import CrownAndParting from "./CrownAndParting";
import MiniModal from "../MiniModal";
import HalfHeadModal from "./HalfHeadModal";
import FullHeadModal from "./FullHeadModal";

const HighlightsModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openCrownModal = () => {
    setShowModal((prev) => !prev);
    setModalContent(<CrownAndParting />);
  };

  const openHalfModal = () => {
    setShowModal((prev) => !prev);
    setModalContent(<HalfHeadModal />);
  };

  const openFullModal = () => {
    setShowModal((prev) => !prev);
    setModalContent(<FullHeadModal />);
  };

  return (
    <>
      <ul className="modal-content-box flex flex-col justify-around w-6/12 items-center text-xl bg-white text-[#635774] rounded-xl drop-shadow-2xl p-8 ">
        <a
          onClick={openCrownModal}
          className="w-full  hover:text-[#B1740F] duration-300 cursor-pointer"
          target="_blank"
        >
          <li className="my-3 border-b-2 border-[#B1740F] w-full text-center">
            Crown and Parting
            <br />
            <p className="text-[16px]">Foils across the top mohawk section.</p>
          </li>
        </a>

        <a
          onClick={openHalfModal}
          className="w-full hover:text-[#B1740F] duration-300 cursor-pointer"
          target="_blank"
        >
          <li className="my-3 border-b-2 border-[#B1740F] w-full text-center">
            Half Head
            <br />
            <p className="text-[16px]">
              Foils through half the hair, usually top half.
            </p>
          </li>
        </a>
        <a
          onClick={openFullModal}
          className="w-full hover:text-[#B1740F] duration-300 cursor-pointer"
          target="_blank"
        >
          <li className="my-3 border-b-2 border-[#B1740F] w-full text-center">
            Full Head
            <br />
            <p className="text-[16px]">Foils through all the hair.</p>
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

export default HighlightsModal;
