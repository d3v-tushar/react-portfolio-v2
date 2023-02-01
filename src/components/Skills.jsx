import React from "react";
import Lottie from 'react-lottie';
import animationData from './../../public/skill.json';
import html from '../assets/technologies/html-5-svgrepo-com.svg';
import css from '../assets/technologies/css-3-svgrepo-com.svg';
import tailwind from '../assets/tech/tailwind.png';
import bootstrap from '../assets/tech/bootstrap.png';
import javascript from '../assets/technologies/javascript-svgrepo-com.svg';
import react from '../assets/tech/react.png';
import redux from '../assets/tech/redux.png';
import firebase from '../assets/technologies/firebase-svgrepo-com.svg';
import mongo from '../assets/technologies/mongodb-svgrepo-com.svg';
import node from '../assets/tech/node.png';
import express from '../assets/tech/express.png';
import git from '../assets/tech/git.png';
import typescript from '../assets/tech/typescript.png'


const Skills = () => {
  // const skills = [
  //   {
  //     logo: "logo-html5",
  //     level: "HTML5",
  //     count: 86,
  //   },
  //   {
  //     logo: "logo-css3",
  //     level: "CSS3",
  //     count: 90,
  //   },
  //   {
  //     logo: "logo-nodejs",
  //     level: "NODE JS",
  //     count: 40,
  //   },
  //   {
  //     logo: "logo-react",
  //     level: "REACT JS",
  //     count: 80,
  //   },
  // ];
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const skills = [
    {
      title: "HTML",
      icon: html,
    },
    {
      title: "CSS",
      icon: css,
      
    },
    {
      title: "TailwindCSS",
      icon: tailwind,
    },
    {
      title: "Bootstrap",
      icon: bootstrap,
    },
    {
      title: "Javascript",
      icon: javascript,
    },
    {
      title: "React",
      icon: react,
      style: "animate-[spin_3s_linear_infinite]"
    },
    {
      title: "Redux",
      icon: redux,
    },
    {
      title: "NodeJS",
      icon: node
    },
    {
      title: "ExpressJS",
      icon: express,
    },
    {
      title: "MongoDB",
      icon: mongo,
    },
    {
      title: "Git",
      icon: git,
    },
    {
      title: "Firebase",
      icon: firebase
    },
    
  ];
  return (
    <section id="skills" className="py-10 relative w-10/12 mx-auto">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        {/* <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
          <Lottie options={defaultOptions}
              height={400}
              width={400}/>
          </div>
        <div data-aos="zoom-out-left" className="grid grid-cols-3 lg:grid-cols-4 gap-y-3 my-8">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img src={item.icon} className={`hover:scale-125 duration-500 ease-in-out w-full ${item.title == "React" ? item.style : ""}`} />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
