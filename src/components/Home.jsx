import React from "react";
import ProjectList from "./ProjectList";
import ContactForm from "./ContactFrom"

// Icons
import { FaRegArrowAltCircleRight, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Home() {
  const linkedinLink = "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
  const githubLink = "https://github.com/danielFernandezDj"

  return (
    <>
      <main className="flex flex-col gap-16 max-w-sm mx-auto sm:max-w-3xl">
        {/* ----------------------------- HERO ----------------------------- */}
        <section className="flex sm:flex-row flex-col-reverse items-center sm:mt-8 p-4 overflow-hidden max-w-full gap-2">
          <div className="flex flex-col size-4/5">
            <img className="rounded-xl size-fit h-auto" src="./mePhoto.jpeg" alt="Me in Moto)" />
            <div className="mt-2 flex gap-2 justify-between content-center">

              <button className="flex gap-2 flex-row justify-center items-center w-full text-white font-bold sm:tracking-wider btn-home-animation dark:text-slate-200">
                Let's Talk <span> <FaRegArrowAltCircleRight className="size-4" /></span>
              </button>

              <div className="flex gap-2">
                <a href={linkedinLink} target="_blank"><FaLinkedin className="w-12 h-auto fill-blue-900 hover:fill-blue-500 " /></a>
                <a href={githubLink} target="_blank"><SiGithub className="w-12 h-auto fill-blue-900 hover:fill-blue-500" /></a>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center sm:text-left">
            <p className="text-7xl sm:text-8xl font-bold font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-20% to-red-500">
              Hi there, <br /> I'm Daniel
            </p>
            <p className="text-2xl sm:text-5xl font-bold
              bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% to-blue-500"
            >
              Full Stack Developer<span className="hidden sm:contents">, Student </span> & Enthusiast!
            </p>
          </div>
        </section>

        {/* ----------------------------- About Me ----------------------------- */}
        <section className="m-4">
          <div className="flex gap-4 flex-wrap md:p-8 p-4 overflow-hidden max-w-full justify-start  dark:bg-slate-800 dark:shadow-indigo-600/50 rounded-xl">
            <strong className="flex justify-start text-2xl tracking-wider text-gradient">
              About Me
            </strong>
            <p className="tracking-wider indent-4 dark:text-slate-200 max-w-full">
              I'm a 27-year-old graduate student at the University of Nevada, Las Vegas (UNLV), where my journey in 
              Full Stack Software Engineering has become more than just a career path—it's a personal mission to 
              create meaningful digital experiences. Specializing in technologies like React, Express, and JavaScript, 
              I pour my heart into every line of code.
            </p>
            <p className="tracking-wider dark:text-slate-200">
              Each day brings a wave of excitement that propels me to explore skills I once thought were beyond my reach. 
              Technology isn't just a job for me—it's a canvas where creativity and logic dance together. And while my world 
              revolves around innovative solutions, music remains my soulful companion, offering inspiration that enriches 
              my perspective and fuels my professional creativity.
            </p>
            <p className="tracking-wider dark:text-slate-200">
              If you're seeking to transform your web application into something truly exceptional, 
              I'm ready to bring both technical expertise and genuine passion to your project.
            </p>

            <strong className="text-blue-800 dark:text-blue-600 hover:tracking-widest hover:underline | transition-all duration-300">
              More about me {'>'}
            </strong>
          </div>
        </section>

        {/* ----------------------------- Project CARDs LIST ----------------------------- */}
        <ProjectList />

        {/* ----------------------------- Skils ----------------------------- */}
        {/* <div className="flex justify-center self-center w-4/5 h-px | bg-gradient-to-r from-blue-400 to-purple-400"></div> */}
        <ContactForm />
      </main >
    </>
  )
}
