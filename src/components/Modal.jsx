import Link from "next/link";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Modal = () => {
  return (
    <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
      <div className="absolute inset-x-0 top-[25%] text-center">
     
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
      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[25%]">
        <Link href='/audio/player'>
          <button className="rounded-full bg-[#393c41] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white">
             Listen New Sound
          </button>
        </Link>
        <Link href='/'>
          <button className="rounded-full bg-[#393c41] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white">
            Existing Beats Vault
          </button>
        </Link>
      </div>

      {/* Scroll Menu*/}
    
    </div>
  );
};

export default Modal;