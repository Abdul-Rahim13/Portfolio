import P1 from "../assets/P1.png";
import P2 from "../assets/P2.png";
import P3 from "../assets/P3.png";
import P4 from "../assets/P4.jpg";
import P5 from "../assets/P5.jpg";
import P7 from "../assets/P7.jpg";

function Projects() {
  return (
    <div id="portfolio" className="bg-[#161513]">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-semibold text-white mt-30 text-center relative">
          My Latest Work
        </h1>
        <img
          className="h-[120px] w-[160px] mt-[-68px] ml-[300px]"
          src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt=""
        />
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-5 justify-items-center mt-7">
        <div className="text-white h-[250px] w-[390px] rounded-2xl border-2 border-white/40 transition duration-400 transform hover:scale-105 hover:border-[#ff00ff] cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={P1}
            alt=""
          />
        </div>

        <div className="text-white h-[250px] w-[390px] rounded-2xl border-2 border-white/40 transition duration-400 transform hover:scale-105 hover:border-[#ff00ff] cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={P2}
            alt=""
          />
        </div>

        <div className="text-white h-[250px] w-[390px] rounded-2xl border-2 border-white/40 transition duration-400 transform hover:scale-105 hover:border-[#ff00ff] cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={P3}
            alt=""
          />
        </div>

        <div className="text-white h-[250px] w-[390px] rounded-2xl border-2 border-white/40 transition duration-400 transform hover:scale-105 hover:border-[#ff00ff] cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={P4}
            alt=""
          />
        </div>

        <div className="text-white h-[250px] w-[390px] rounded-2xl border-2 border-white/40 transition duration-400 transform hover:scale-105 hover:border-[#ff00ff] cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={P5}
            alt=""
          />
        </div>

        <div className="text-white h-[250px] w-[390px] rounded-2xl border-2 border-white/40 transition duration-400 transform hover:scale-105 hover:border-[#ff00ff] cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={P7}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
