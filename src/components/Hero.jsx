import React from "react";
import { TypeAnimation } from "react-type-animation";
import hero from "../assets/images/hero.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFilePdf } from "react-icons/fa";
const Hero = () => {
  AOS.init();
  const social_media = [
    {
      logo: "logo-github",
      title: "Github",
      url: "https://github.com/d3v-tushar"
    },
    {
      logo: "logo-facebook",
      title: "Facebook",
      url: "https://fb.com/tushar.phb6"
    },
    {
      logo: "logo-linkedin",
      title: "Linkedin",
      url: "https://www.linkedin.com/in/md-mohsin-ahmed/"
    },
  ];
  return (
    <section data-aos="fade-up" data-aos-duration="500" id="home" className="min-h-screen bg-[url('/grid.svg')] grid grid-cols-1 justify-items-center justify-center items-center lg:grid-cols-2 mt-12">
        <div data-aos="fade-right" className="grid items-center">
          <div className="text-left md:text-left sm:text-center  w-full">
          <h4 className="text-xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 lg:text-4xl text-3xl">
              Hi, <span className="text-white">I'm</span>
              <br />
            </span>
            <span className="text-5xl lg:text-7xl">Mohsin Ahmed</span>
          </h4>
          <h4 className="text-transparent bg-gradient-to-r from-pink-500 via-blue-400 to-purple-600 bg-clip-text text-[26px] lg:text-[40px] leading-snug md:leading-normal lg:leading-10 mt-2 font-bold text-gray-700">
          <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'Full Stack Developer',
    1000,
    'React Developer',
    1000,
    'MERN Stack Developer',
    1000,
    ]}
    cursor={true}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
          </h4>
          
          <div className="text-center lg:text-left">
          <a href='https://drive.google.com/uc?export=download&id=1SePO_a5VRZwPm4rfrgGrsKVcjTM-eZnu'>
          <button type="button" className="btn-primary hover:scale-125 duration-500 ease-in-out mt-4 bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:from-green-400 to-blue-500">RESUME <FaFilePdf/></button></a>
          </div>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon,index) => (
              <div
                key={index}
                className="text-gray-300 hover:text-white cursor-pointer "
              >
                <a href={icon.url} target="_blank" rel="noopener noreferrer"><ion-icon name={icon.logo}></ion-icon></a>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="grid justify-items-center content-evenly sm:content-center">
          <img src={hero} alt="" className="w-10/12 lg:w-8/12  object-cover sm:mx-3" />
        </div>
      </section>
  );
};

export default Hero;
