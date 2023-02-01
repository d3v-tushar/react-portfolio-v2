import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import project1 from "../assets/images/project-1.png";
// import project2 from "../assets/images/project-2.jpg";
// import project3 from "../assets/images/project-3.jpg";
// import project4 from "../assets/images/project-4.jpg";
// import project5 from "../assets/images/project-5.png";
// import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: "project1",
      name: "Movie App",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: "project2",
      name: "Job search Web App",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: "project3",
      name: "Highking",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://highking01.netlify.app",
    },
    {
      img: "project4",
      name: "React Nav",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },
    {
      img: "project5",
      name: "Vue Country",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white mx-auto w-10/12">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      {/* <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10">
      {
        projects.map((project, index) =>
        <div
      className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
    >
      <a
        href="#"
        target="_blank"
        className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
      >
        <img
          className="w-full rounded-md"
          src="https://braydentw.io/static/projects/bitcointemp.png"
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href="#" target="_blank">
            <h3 className="text-lg font-bold">{project.name}</h3>
          </a>
          <div className="space-x-2 grid grid-cols-2">
            { project  && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src="https://braydentw.io/_next/image?url=%2Fstatic%2Ficons%2Fexternal-link.svg&w=16&q=75"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project && (
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src="https://braydentw.io/_next/image?url=%2Fstatic%2Ficons%2Fgithub.svg&w=16&q=75"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-sm">A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!</p>
        {/* <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
    )}
      </div>
    </section>
  );
};

export default Project;
