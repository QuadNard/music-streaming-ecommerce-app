import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Modal = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-[15%] text-center">
     
        {/* Title */}
        <h1 className="text-4xl font-bold"> MaadYouDidThat</h1>
        <p className="text-sm p-2 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          {" "}
          Powered by MaadSounds{" "}
          <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
            <span className="underline underline-offset-4 hover:cursor-pointer">
               Driven By Values 
            </span>
          </a>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
        <a href="https://www.tesla.com/model3/design">
          <button className="rounded-md bg-[#393c41] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white">
             Latest New Sound
          </button>
        </a>
        <a href="https://www.tesla.com/model3/design">
          <button className="rounded-md bg-[#f4f4f4] w-96 lg:w-64 h-10 lg:mx-4 mt-2">
            Existing Beats Vault
          </button>
        </a>
      </div>

      {/* Scroll Menu*/}
      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        Scroll Up !
        <FiChevronDown size={24} />
      </div>
    </div>
  );
};

export default Modal;