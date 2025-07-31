import React from "react";

function Navbar() {
  return (
    <ul className="h-16 w-full flex justify-around items-center list-none bg-[#161513] text-white top-0 left-0 m-0 p-0">
      <li className="cursor-pointer">Home</li>
      <li className="cursor-pointer">About Me</li>
      <li className="cursor-pointer">Services</li>
      <li className="cursor-pointer">Portfolio</li>
      <li className="cursor-pointer">Contact</li>
      <button className="h-10 w-[150px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_100%)] transform hover:scale-[1.05] transition duration-500 cursor-pointer">
        Connect with me
      </button>
    </ul>
  );
}

export default Navbar;
