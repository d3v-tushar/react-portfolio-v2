import React from "react";
import aboutImg from "../assets/images/about.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  AOS.init();
  const info = [
    { text: "Years Experience", count: "01" },
    { text: "Completed Projects", count: "12" },
    { text: "Workshop Attend", count: "02" },
  ];
  return (
    <section id="about" className="py-10 text-white mx-auto w-10/12">
      <div className="text-center mt-8">
        <div>
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-2 mx-auto lg:mx-5" data-aos="fade-right">
            <div className="text-gray-300 my-3">
              <p className="text-justify text-xl leading-7 w-11/12 mx-auto">
              <span className="text-2xl">Hi,</span> I'm Mohsin Ahmed. A MERN Stack Developer from Bangladesh. I love to write clean, efficient codes & learn new technologies. I am looking for a challenging role in a reputable organization to utilize my development skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the sector.
              </p>
              <div className="flex mt-10 justify-center mx-auto items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-3xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-md">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a className="grid justify-center" href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary hover:scale-125 duration-500 ease-in-out bg-gradient-to-r from-pink-500">Download CV</button>
              </a>
            </div>
          </div>
          <div>
            <div className="grid justify-items-center">
              <img
                src={aboutImg}
                alt=""
                className="w-full lg:w-10/12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
