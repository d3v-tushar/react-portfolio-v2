import React from 'react';

const MySkills = () => {
    const skills = [
        {
          title: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          title: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          title: "Javascript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          title: "Sass",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
        {
          title: "TailwindCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
          title: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          title: "NextJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
          style: { filter: "invert(1)" },
        },
        {
          title: "Typescript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          title: "NodeJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          title: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          title: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          title: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ];
      
    return (
       
    //         <div className="flex flex-col md:flex-row justify-between relative">
    //   {/* <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
    //     I got the experience.
    //     <br />
    //     Here is my toolbelt for success.
    //     <img
    //       className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
    //       src="/src/assets/skills/laptop.svg"
    //     />
    //     <img
    //       className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
    //       src="/src/assets/skills/coding.svg"
    //     />
    //     <img
    //       className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
    //       src="/src/assets/skills/youtube.svg"
    //     />
    //     <img
    //       className="sqD top-[-15px] right-[-15px]"
    //       src="/src/assets/skills/fillStar.svg"
    //     />
    //   </h2> */}
    //   <div className="grid grid-cols-2 lg:grid-cols-6 gap-y-6 w-2/5 my-8">
    //     {skills.map((item, index) => {
    //       return (
    //         <div
    //           title={item.title}
    //           key={index}
    //           className="w-10 mx-auto flex items-center flex-col justify-center"
    //         >
    //           <img src={item.icon} style={item.style} />
    //           <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
    //             {item.title}
    //           </p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div>
      <div>
        <img className='animate-spin' src="../assets/images/hero.png" alt="" />
      </div>
    </div>
        
    );
};

export default MySkills;