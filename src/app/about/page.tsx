"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "animate.css";
import { GoDotFill } from "react-icons/go";
import { skills, skillsData, experiences } from "../../../utils/data";
import { Skill } from "../../../utils/types";

function About() {
  const [currSkill, setCurrSkill] = useState<string>("Programming Languages");
  const [skillsDataSpecific, setSkillsDataSpecific] = useState<Skill[]>([]);

  useEffect(() => {
    setSkillsDataSpecific(skillsData[currSkill]);
  }, [currSkill]);
  return (
    <div className="h-full w-full">
      <div className="h-full max-w-screen-xl mx-auto px-4 py-3">
        {/* about */}
        <div className="pt-[5rem] md:pt-[8rem] grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <div className=" h-full w-full">
            <h1 className="text-5xl sm:text-7xl md:text-8xl text-white font-bold animate__animated  animate__backInLeft">
              About Sumit
            </h1>

            <p className="text-slate-400 text-base sm:text-lg md:text-xl mt-5 animate__animated animate__fadeInUp">
              Hi, I&#39;m Sumit Mahour, a fullstack and mobile application
              developer dedicated to crafting seamless, innovative, and
              user-focused digital solutions. With over 1 years of hands-on
              experience in the tech realm, I&#39;m always on the lookout for
              fresh and creative avenues to transform my clients&#39;s ideas
              into reality.
            </p>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl mt-3 animate__animated animate__fadeInUp">
              I firmly believe that the essence of development surpasses coding
              – it involves tackling challenges head-on and engineering
              intuitive, delightful encounters for users.
            </p>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl mt-3 animate__animated animate__fadeInUp">
              Whether I&#39;m immersed in architecting a web application,
              crafting a responsive mobile app, or diving into any other digital
              venture, I consistently channel my drive for technical brilliance
              and user-centric philosophy into every endeavor. Anticipating the
              chance to infuse my expertise and enthusiasm into your upcoming
              project.
            </p>
          </div>
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative md:mx-0 !mx-5">
            <Image
              src={"/images/aboutimg.jpeg"}
              alt="about_img"
              fill={true}
              className="w-full h-full absolute z-10 animate__bounceInDown animate__animated"
            />

            <div className="w-full h-full absolute bg-[#F6F5F2] top-5 left-5 z-0 animate__animated animate__bounceInRight" />
          </div>
        </div>

        {/* Skills */}
        <div className="w-full my-[70px] md:my-[100px]">
          <h1 className="text-5xl sm:text-7xl md:text-8xl text-white font-bold">
            Skills
          </h1>
          <div className=" flex justify-center gap-4 sm:gap-x-10 md:gap-x-20 gap-y-4 flex-wrap mt-12 pb-6 border-b-2 border-slate-500">
            {skills.map((skill, idx) => (
              <button
                key={idx}
                className={`${
                  currSkill === skill.name ? "bg-white" : "bg-slate-500"
                } inline-block rounded-2xl  px-6 py-1.5`}
                onClick={() => setCurrSkill(skill.name)}
              >
                <p className="text-black font-medium text-xl md:text-2xl">
                  {skill.name}
                </p>
              </button>
            ))}
          </div>

          <div className="my-10 w-full">
            <div className=" flex gap-10 justify-center max-w-2xl mx-auto flex-wrap">
              {skillsDataSpecific?.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="w-28 h-20 bg-white rounded-md p-2 flex flex-col justify-center items-center gap-1"
                >
                  <Image
                    src={item?.img}
                    alt="html_img"
                    width={35}
                    height={35}
                  />
                  <p className="text-base font-medium text-slate-800">
                    {item?.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* experiences */}
        <div className="w-full my-[70px] md:my-[100px]">
          <h1 className="text-5xl sm:text-7xl md:text-8xl text-white font-bold">
            Experiences
          </h1>

          <div className="w-full h-full flex flex-col gap-6  mt-12 md:px-6">
            {experiences.map((experience) => (
              <div className="" key={experience.id}>
                <div className="flex gap-x-3 flex-wrap">
                  <h1 className="text-3xl text-white font-semibold">
                    {experience.role}
                  </h1>
                  <p className="text-3xl text-slate-600 font-semibold">
                    @{experience.company}
                  </p>
                </div>
                <div className="flex gap-x-3 flex-wrap mt-2">
                  <h1 className="text-3xl text-white font-semibold">
                    {experience.duration}
                  </h1>
                  <p className="text-3xl text-slate-600 font-semibold">
                    {experience.location}
                  </p>
                </div>
                {experience.responsibilties.map((item) => (
                  <div className="my-3 flex gap-2" key={item.id}>
                    <GoDotFill className="text-white pt-1.5" size={25} />
                    <p className="text-slate-400 text-xl">{item.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* education */}
        <div className="w-full my-[70px] md:my-[100px]">
          <h1 className="text-5xl sm:text-7xl md:text-8xl text-white font-bold">
            Education & Courses
          </h1>

          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 mt-12 md:px-6 gap-10">
            <div className="w-full h-full bg-[#F6F5F2] rounded-md px-4 md:px-8 py-4">
              <h1 className="text-black text-3xl font-bold mt-2">
                B.Tech in Electronics & Communication
              </h1>
              <h2 className="text-black font-semibold text-2xl mt-1">
                2020 - 2024 | RBSTEC
              </h2>
              <p className="text-xl text-slate-700 mt-3 text-justify">
                In the Electronics & Communication course, I immersed myself in
                the fascinating realm of electrical engineering and information
                transmission. From mastering the principles of circuit analysis
                and design to exploring advanced topics like digital signal
                processing and wireless communication protocols, I acquired a
                deep understanding of electronic systems. Through hands-on
                experiments and theoretical exploration, I honed my skills in
                designing and troubleshooting electronic circuits, preparing me
                for a dynamic career at the forefront of technological
                innovation.
              </p>
            </div>
            <div className="w-full h-full bg-[#F6F5F2] rounded-md px-4 md:px-8 py-4">
              <h1 className="text-black text-3xl font-bold mt-2">
                Frontend Development Course
              </h1>
              <h2 className="text-black font-semibold text-2xl mt-1">
                2022 - 2023 | Relevel By Unacademy
              </h2>
              <p className="text-xl text-slate-700 mt-3 text-justify">
                In the frontend course, I delved into cutting-edge technologies
                like React.js, harnessing its power to build interactive and
                scalable user interfaces. With TypeScript, I learned to enhance
                code quality and maintainability by adding static typing to my
                projects. Exploring Express.js, I gained proficiency in crafting
                robust backend APIs to seamlessly communicate with frontend
                applications. Additionally, diving into Redux empowered me to
                manage complex application states efficiently, rounding out my
                expertise in frontend development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
