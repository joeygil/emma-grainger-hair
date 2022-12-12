import React from "react";

const TonerModal = () => {
  return (
    <>
      <ul className="flex flex-col justify-around w-11/12 items-center text-xl bg-white text-[#635774] rounded-xl drop-shadow-2xl p-8 ">
        <a
          href="https://www.fresha.com/book-now/divine-hair-t5czol7v/services?lid=149346&eid=511383&oiid=p%3A78051&pId=139034"
          className="w-full  hover:text-[#B1740F]  duration-300"
          target="_blank"
        >
          <li className="my-3 border-b-2 border-[#B1740F] w-full text-center">
            Toner, Cut & Blowdry
          </li>
        </a>
        <a
          href="https://www.fresha.com/book-now/divine-hair-t5czol7v/services?lid=149346&eid=511383&oiid=p%3A78052&pId=139034"
          className="w-full  hover:text-[#B1740F] duration-300"
          target="_blank"
        >
          <li className="my-3 border-b-2 border-[#B1740F] w-full text-center">
            Toner, Dry/Wet Cut
          </li>
        </a>
      </ul>
    </>
  );
};

export default TonerModal;
