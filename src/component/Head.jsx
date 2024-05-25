import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex col-span-1 gap-5">
        <img
          src="https://up.yimg.com/ib/th?id=OIP.3oWC_8moLxKDTYSSdd_ELAHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123"
          alt="menu"
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="Logo"
            className="h-8"
          />
        </a>
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="w-1/2 border border-gray-300 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          src="https://up.yimg.com/ib/th?id=OIP.k7dE2dftQijg3KbpTyIObAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
          alt="userIcon"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
