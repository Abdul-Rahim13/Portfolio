import React from "react";
import profile_image from "../assets/profile_picture.jpg";

function About() {
  const skills = [
    { name: "MongoDB", width: "90%" },
    { name: "Express.Js", width: "85%" },
    { name: "React.Js", width: "92%" },
    { name: "Node.Js", width: "80%" },
  ];

  return (
    <div id="about" className="bg-[#161513] py-10 px-4 lg:px-0">
      {/* Heading */}
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white text-center relative">
          About me
        </h1>
        <img
          className="h-12 w-32 sm:h-16 sm:w-40 mt-[-40px] sm:mt-[-50px] lg:h-[120px] lg:w-[160px] lg:mt-[-70px] lg:ml-[175px]"
          src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt="underline"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row lg:gap-[100px] max-w-7xl mx-auto">
        {/* Profile Image */}
        <img
          className="h-60 w-48 sm:h-72 sm:w-56 lg:h-[400px] lg:w-[350px] lg:ml-[130px] rounded-2xl mx-auto lg:mx-0"
          src={profile_image}
          alt="Profile"
        />

        {/* Text + Skills */}
        <div className="flex flex-col mt-8 lg:mt-7 w-full">
          <p className="text-white text-base sm:text-lg font-medium max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            I am a passionate MERN Stack Developer, skilled in building dynamic
            and user-friendly web applications using MongoDB, Express.js, React,
            and Node.js. I enjoy creating clean, scalable solutions and
            continuously improving my skills in modern web technologies.
          </p>
          <p className="text-white mt-4 text-base sm:text-lg font-medium max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            My goal is to contribute to impactful projects while delivering
            high-quality, maintainable code.
          </p>

          {/* Skills */}
          <div className="flex flex-col mt-6 gap-5 max-w-xl mx-auto lg:mx-0 w-full">
            {skills.map(({ name, width }) => (
              <div
                key={name}
                className="flex items-center hover:scale-[1.05] transform-gpu transition duration-300 origin-left"
              >
                <p className="text-white mr-4 text-lg font-bold w-32">{name}</p>
                <div
                  className="h-3 rounded-3xl bg-gradient-to-r from-[#DF8908] to-[#B415FF]"
                  style={{ width }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
