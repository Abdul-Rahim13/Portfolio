import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false); // Close sidebar on desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#161513] text-white left-0 w-full z-50">
      {/* Desktop Navbar */}
      <ul className="h-16 w-full justify-around items-center list-none m-0 p-0 hidden md:flex">
        {["home", "about", "services", "portfolio", "contact"].map((section) => (
          <li key={section} className="cursor-pointer hover:text-[#DF8908]">
            <Link to={section} smooth duration={500}>
              {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
            </Link>
          </li>
        ))}
        <button className="h-10 w-[150px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_100%)] transform hover:scale-[1.05] transition duration-500 cursor-pointer">
          <Link to="contact" smooth duration={500}>
            Connect with me
          </Link>
        </button>
      </ul>

      {/* Mobile Navbar Hamburger */}
      <div className="md:hidden flex justify-between items-center h-16 px-6">
        <h1 className="text-xl font-bold">Abdul Rahim</h1>
        <FaBars
          className="text-2xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Fullscreen Sidebar */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-[#161513] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 flex flex-col`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h1 className="text-xl font-bold">Menu</h1>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 mt-6 pl-6 text-lg flex-grow">
          {["home", "about", "services", "portfolio", "contact"].map((section) => (
            <li
              key={section}
              className="cursor-pointer hover:text-[#DF8908]"
            >
              <Link
                to={section}
                smooth
                duration={500}
                onClick={handleLinkClick}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
              </Link>
            </li>
          ))}

          <button
            className="h-10 w-[150px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_100%)] transform hover:scale-[1.05] transition duration-500 cursor-pointer mt-auto mb-6 ml-6"
            onClick={() => setIsOpen(false)}
          >
            <Link to="contact" smooth duration={500}>
              Connect with me
            </Link>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
