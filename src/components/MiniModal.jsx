import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MiniModal = ({ showModal, setShowModal, modalContent }) => {
  const modalRef = useRef();

  const handleClose = () => {
    setShowModal(false);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showModal ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: "-100vh", rotate: 30 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ y: "150vh", opacity: 0 }}
              ref={modalRef}
              className="modal w-screen h-screen fixed bg-[#00000080] z-40 flex justify-center items-center"
              onClick={closeModal}
            >
              <div className="flex flex-col justify-center items-center absolute w-full">
                {modalContent}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  className="bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-[#FDE8E9] text-xl shadow-lg py-2 px-3 rounded w-6/12"
                >
                  Back
                </motion.button>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MiniModal;
