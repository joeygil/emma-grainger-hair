import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ showModal, setShowModal, modalContent }) => {
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
          <div
            ref={modalRef}
            className="modal w-screen h-screen fixed top-0 left-0 bg-[#00000080] z-40 flex justify-center items-center"
            onClick={closeModal}
          >
            <motion.div
              className="modal-content m-80 bg-[#635774] text-white p-3 w-[80%] h-[90%] z-50 min-w-[400px] rounded-[100px] flex flex-col justify-center items-center drop-shadow-2xl ring ring-[#B1740F]"
              initial={{ opacity: 0, y: "-100vh", rotate: 30 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ y: "150vh", opacity: 0 }}
            >
              <h2 className="modal-title text-center text-2xl my-5">
                Pick your service below and you'll be redirected to our secure
                booking system to complete booking:
              </h2>

              {modalContent}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="modal-close bg-[#B1740F] hover:bg-[#FDE8E9] hover:text-[#635774] text-white text-xl shadow-lg ml-4 py-2 px-3 rounded justify-self-center absolute bottom-[5%] right-[5%]"
              >
                Close
              </motion.button>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Modal;
