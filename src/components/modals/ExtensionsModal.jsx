import React from "react";

const ExtensionsModal = () => {
  return (
    <>
      <ul className="modal-content-box flex flex-col justify-around w-6/12 items-center text-xl bg-white text-[#635774] rounded-xl drop-shadow-2xl p-8 ">
        <a
          href="https://www.fresha.com/book-now/divine-hair-t5czol7v/services?lid=149346&eid=511383&oiid=sv%3A2643016&pId=139034"
          className="w-full hover:text-[#B1740F]  duration-300"
          target="_blank"
        >
          <li className="my-3 border-b-2 border-[#B1740F] w-full text-center">
            Extensions Consultation
            <br />
            <p className="text-[16px]">
              Thinking about extensions? Come and see us for a chat and to see
              if your hair is suitable for extensions.
            </p>
          </li>
        </a>
      </ul>
    </>
  );
};

export default ExtensionsModal;
