import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const handleIcon = () => {
    setIcon(!icon);
  };

  return (
    <div className="fixed flex w-full justify-between items-center h-15 mx-auto px-4 bg-gray-100 z-10">
      <h1 className="flex items-center gap-5 p-2 w-full text-xl font-bold text-black ">
        <img className="w-20 rounded-full" src={logo} alt="" /> <span className="">Adamjee Cantonment College BNCC Platoon</span>
      </h1>
      <ul className="hidden md:flex font-bold">
        <a href="/">
          <li className="p-4 cursor-pointer hover:text-green-400">Home</li>
        </a>
        <a href="#about">
          <li className="p-4 cursor-pointer hover:text-green-400">About Us</li>
        </a>
        <a href="#history">
          <li className="p-4 cursor-pointer hover:text-green-400">History</li>
        </a>
        <a href="#executives">
          <li className="p-4 cursor-pointer hover:text-green-400">
            Executives
          </li>
        </a>
        <a href="#gallery">
          <li className="p-4 cursor-pointer hover:text-green-400">Gallery</li>
        </a>
        <a href="#contact">
          <li className="p-4 cursor-pointer hover:text-green-400">Contact</li>
        </a>
      </ul>
      <div onClick={handleIcon} className="block md:hidden">
        {icon ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          icon
            ? "fixed right-0 rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden top-14 text-sm border-r border-r-gray-900 duration-500"
            : "ease-in-out duration-500 fixed top-14 right-[-100%]"
        }
      >
        <a href="/">
        <li className="p-4 border-b border-gray-600 hover:bg-slate-500 hover:text-white">
          Home
        </li>
        </a>
        <a href="#about">
        <li className="p-4 border-b border-gray-600 hover:bg-slate-500 hover:text-white">
          About Us
        </li>
        </a>
        <a href="#history">
        <li className="p-4 border-b border-gray-600 hover:bg-slate-500 hover:text-white">
          History
        </li>
        </a>
        <a href="#executives">
        <li className="p-4 border-b border-gray-600 hover:bg-slate-500 hover:text-white">
          Executives
        </li>
        </a>
        <a href="#gallery">
        <li className="p-4 border-b border-gray-600 hover:bg-slate-500 hover:text-white">
          Gallery
        </li>
        </a>
        <a href="#contact">
        <li className="p-4 border-b border-gray-600 hover:bg-slate-500 hover:text-white">
          Contact
        </li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
