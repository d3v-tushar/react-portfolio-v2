import React from "react";
import { TypeAnimation } from "react-type-animation";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    // <section
    //   id="home"
    //   className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    // >
    //   {/* <div className="flex-1 justify-center text-center">
    //     <div className="md:text-left text-center">
    //       <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
    //         <span className="text-cyan-600 md:text-6xl text-5xl">
    //           Hello!
    //           <br />
    //         </span>
    //         My Name is <span>John Alex</span>
    //       </h1>
    //       <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
    //         Fullstack Developer
    //       </h4>
    //       <button className="btn-primary mt-8">Contact Me</button>
    //       <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
    //         {social_media?.map((icon) => (
    //           <div
    //             key={icon}
    //             className="text-gray-600 hover:text-white cursor-pointer "
    //           >
    //             <ion-icon name={icon}></ion-icon>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex-1 flex items-center justify-center h-full">
    //     <img src={hero} alt="" className="md:w-8/12 h-full object-cover" />
    //   </div> */}
      
    // </section>
    <section className="min-h-screen grid grid-cols-1 justify-items-center justify-center items-center lg:grid-cols-2 mt-12">
        <div className="grid items-center">
          <div className="md:text-left w-full">
          <h4 className="text-xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 lg:text-4xl text-3xl">
              Hi, <span className="text-white">I'm</span>
              <br />
            </span>
            <span className="text-4xl lg:text-7xl">Mohsin Ahmed</span>
          </h4>
          <h4 className="text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl lg:text-4xl md:leading-normal lg:leading-10 mt-2 font-bold text-gray-600">
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
          
          <button type="button" class="px-8 py-3 rounded-xl font-bold mt-4 text-lg bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:from-green-400 to-blue-500 hover:text-gray-900">Resume</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
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
