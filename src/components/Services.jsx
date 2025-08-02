import React from "react";

function Services() {
  const services = [
    {
      num: "01",
      title: "Full Stack Web Development",
      desc: "Build dynamic, scalable, and modern web applications using the MERN stack.....",
    },
    {
      num: "02",
      title: "Frontend Development - React.Js",
      desc: "Create responsive, interactive, and visually appealing user interfaces.....",
    },
    {
      num: "03",
      title: "Backend API Development - Node.Js + Express.js",
      desc: "Develop secure and efficient REST APIs for your applications.....",
    },
    {
      num: "04",
      title: "Database Management - MongoDB",
      desc: "Design and manage NoSQL databases with high performance and scalability.....",
    },
    {
      num: "05",
      title: "Authentication & Authorization",
      desc: "Implement secure login, registration, and role-based access using JWT or OAuth.....",
    },
    {
      num: "06",
      title: "Deployment & Hosting",
      desc: "Deploy MERN applications to platforms like Vercel, Netlify, or AWS.....",
    },
  ];

  return (
    <div id="services" className="bg-[#161513] py-12 px-4 md:px-12">
      {/* Heading */}
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white text-center relative">
          My Services
        </h1>
        <img
          className="h-12 w-32 sm:h-16 sm:w-40 mt-[-40px] sm:mt-[-50px]"
          src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt="underline"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="text-white h-64 w-80 sm:w-80 md:w-[380px] rounded-2xl 
                       border-2 border-white/40 transition duration-300 
                       transform hover:scale-105 hover:border-[#ff00ff] 
                       hover:bg-[linear-gradient(45deg,#3f0028,#582300)] cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center text-center p-6">
              <h1 className="text-2xl font-bold">{service.num}</h1>
              <h1 className="text-xl sm:text-[22px] font-bold mt-5 bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
                {service.title}
              </h1>
              <p className="text-sm sm:text-[15px] font-semibold mt-4">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
