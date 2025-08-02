import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#161513] py-8">
      {/* Divider */}
      <div className="border-t border-gray-400 w-10/12 mx-auto my-6"></div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center w-10/12 mx-auto text-center md:text-left">
        {/* Left Side - Copyright */}
        <div>
          <h1 className="text-white text-sm sm:text-base">
            © 2025 Abdul Rahim. All rights reserved.
          </h1>
        </div>

        {/* Right Side - Links & Socials */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-8">
          <div className="flex gap-6 text-white text-sm sm:text-base">
            <a className="hover:text-[#DF8908] transition cursor-pointer">
              Terms of Service
            </a>
            <a className="hover:text-[#DF8908] transition cursor-pointer">
              Privacy Policy
            </a>
          </div>

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
