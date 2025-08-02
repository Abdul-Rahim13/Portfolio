import React from "react";
import profile_image from "../assets/profile_picture.jpg";

function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col items-center bg-[#161513] w-full top-0 left-0 m-0 p-4 md:p-0"
    >
      <img
        className="rounded-full mt-8
          h-40 w-40             /* small screens */
          sm:h-56 sm:w-56       /* small-medium */
          md:h-[300px] md:w-[300px]  /* large screens */
        "
        src={profile_image}
        alt="profile_image"
      />

      <div className="mt-5 text-center md:text-left max-w-[90vw] md:max-w-none">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">
          <span className="bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
            I'm Abdul Rahim,
          </span>{" "}
          MERN Stack
        </h1>
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">
          Developer based in Pakistan
        </h1>
      </div>

      <div className="mt-4 max-w-[90vw] md:max-w-[700px]">
        <p className="text-white font-normal leading-relaxed text-base sm:text-lg text-center md:text-justify">
          Passionate Computer Science student aspiring to become a skilled MERN
          Stack Developer. Experienced in building user-focused and scalable web
          applications with clean, maintainable code. Eager to contribute to
          innovative projects while continuously{" "}
          <span className="block text-center md:text-left">
            learning and growing in modern web technologies.
          </span>
        </p>
      </div>

      <div
        className="mt-5 mb-4 flex flex-col gap-4 sm:flex-row sm:gap-[25px]"
      >
        <button className="text-white h-10 w-[150px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_100%)] transform hover:scale-[1.05] transition duration-500 cursor-pointer mx-auto sm:mx-0">
          Connect with me
        </button>
        <button onClick={() => {window.open('/CV.pdf', '_blank');}} className="text-white h-10 w-[150px] rounded-full border-2 transform hover:scale-[1.05] hover:border-[#B415FF] transition duration-500 cursor-pointer border-white/40 mx-auto sm:mx-0">
            My resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
