"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PiLinkSimpleBold } from "react-icons/pi";
import { appProjects, projectCategories, webProjects } from "../../../utils/data";
import { projectDataType } from "../../../utils/types";

function Projects() {
  const [currProjectCategory, setCurrProjectCategory] =
    useState<string>("Websites");
  const [data, setData] = useState<projectDataType[]>([]);

  useEffect(() => {
    if (currProjectCategory === "Websites") {
      setData(webProjects);
    } else if (currProjectCategory === "Mobile Apps") {
      setData(appProjects);
    }
  }, [currProjectCategory]);
  return (
    <div className="h-full w-full">
      <div className="h-full max-w-screen-xl mx-auto px-4 py-3">
        {/* about */}
        <div className="pt-[5rem] md:pt-[8rem] grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <h1 className="text-5xl sm:text-7xl md:text-8xl text-white font-bold animate__animated  animate__backInLeft">
            Projects
          </h1>
        </div>
        <div className=" flex justify-center gap-4 sm:gap-x-10 md:gap-x-20 gap-y-4 flex-wrap mt-12 pb-6 border-b-2 border-slate-500">
          {projectCategories.map((category, idx) => (
            <button
              key={idx}
              className={`${
                currProjectCategory === category.name
                  ? "bg-white"
                  : "bg-slate-500"
              } inline-block rounded-2xl  px-6 py-1.5`}
              onClick={() => setCurrProjectCategory(category.name)}
            >
              <p className="text-black font-medium text-xl md:text-2xl">
                {category.name}
              </p>
            </button>
          ))}
        </div>

        <div className={`w-full h-full grid grid-cols-1 ${currProjectCategory==="Websites"?"md:grid-cols-2":"md:grid-cols-3"}  my-12 md:px-6 gap-10`}>
          {data.length > 0 &&
            data.map((project, idx) => (
              <div
                key={idx}
                className="w-full h-full bg-[#F6F5F2] rounded-md px-4 md:px-8 py-4"
              >
                <div className={`w-full  ${currProjectCategory==="Websites"?"h-[250px]":"h-[75vh]"}  relative`}>
                  <Image
                    src={project?.img}
                    alt="project_img"
                    fill={true}
                    className="w-full h-full absolute"
                  />
                </div>
                <div className="mt-4">
                  <h1 className="text-black text-3xl font-bold mt-2">
                    {project?.name}
                  </h1>
                  <h2 className="text-black font-semibold text-2xl mt-1">
                    Category | {project?.category}
                  </h2>
                  <div className="w-full flex justify-end items-center gap-3">
                    <Link
                      href={project?.github}
                      target="_black"
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={"/images/icons/githubicon.png"}
                        alt="github_icon"
                        width={30}
                        height={30}
                        className=" cursor-pointer hover:scale-105 transition-all"
                      />
                    </Link>

                    {project?.live && <Link
                      href={project.live}
                      target="_black"
                      className=" hover:scale-105 transition-all p-1.5 rounded-full bg-black flex items-center justify-center"
                    >
                      <PiLinkSimpleBold size={20} fill="white" />
                    </Link>}
                  </div>
                  <p className="text-xl text-slate-700 mt-3 text-justify">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;
