import React, { useState } from 'react';

const MyProjects = () => {
    const [project, setProject] = useState(true);
    return (
        <div className='my-8'>
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
            <h3 className="text-lg font-bold">BitcoinTemp</h3>
          </a>
          <div className="space-x-2">
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
        </div>
    );
};

export default MyProjects;