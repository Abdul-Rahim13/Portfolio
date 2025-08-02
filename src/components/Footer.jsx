import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#161513] py-8">
      <div className="border-t border-gray-400 w-10/12 mx-auto my-6"></div>

      <div className="grid grid-cols-2 gap-20 items-center w-10/12 mx-auto">
        <div>
          <h1 className="text-white text-center md:text-left">
            © 2025 Abdul Rahim. All rights reserved.
          </h1>
        </div>

        <div className="flex justify-around text-white items-center">
          <a className="hover:text-[#DF8908]">Terms of Service</a>
          <a className="hover:text-[#DF8908]">Privacy Policy</a>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/abdul-rahim-842417258"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#32323c] p-2 rounded-full hover:bg-[#DF8908] transition transform hover:scale-110"
            >
              <FaLinkedin className="text-white text-xl" />
            </a>
            <a
              href="https://github.com/Abdul-Rahim13"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#32323c] p-2 rounded-full hover:bg-[#DF8908] transition transform hover:scale-110"
            >
              <FaGithub className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
