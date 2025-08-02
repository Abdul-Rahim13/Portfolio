import { Link } from 'react-scroll';


function Navbar() {
  return (
    <ul className="h-16 w-full flex justify-around items-center list-none bg-[#161513] text-white top-0 left-0 m-0 p-0">
      <li className="cursor-pointer hover:text-[#DF8908]">
        <Link to="home" smooth={true} duration={500}>
        Home
        </Link>
      </li>
      <li className="cursor-pointer hover:text-[#DF8908]">
        <Link to="about" smooth={true} duration={500}>
        About Me
        </Link>
      </li>
      <li className="cursor-pointer hover:text-[#DF8908]">
        <Link to="services" smooth={true} duration={500}>
        Services
        </Link>
      </li>
      <li className="cursor-pointer hover:text-[#DF8908]">
        <Link to="portfolio" smooth={true} duration={500}>
        Portfolio
        </Link>
      </li>
      <li className="cursor-pointer hover:text-[#DF8908]">
        <Link to="contact" smooth={true} duration={500}>
        Contact
        </Link>
      </li>
      <button className="h-10 w-[150px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_100%)] transform hover:scale-[1.05] transition duration-500 cursor-pointer">
        Connect with me
      </button>
    </ul>
  );
}

export default Navbar;
