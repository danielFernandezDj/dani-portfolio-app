import React from "react";
import ProjectList from "./ProjectList";
import ContactForm from "./ContactFrom";

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
                <a href={linkedinLink} target="_blank"><FaLinkedin className="w-12 h-auto fill-blue-900 lg:hover:fill-blue-500 " /></a>
                <a href={githubLink} target="_blank"><SiGithub className="w-12 h-auto fill-blue-900 lg:hover:fill-blue-500" /></a>
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
          <strong className="flex justify-center gap-6 text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-20% to-blue-500">
            <span className="horizontal-line"></span> About Me <span className="horizontal-line"></span>
          </strong>
          <div className="flex sm:flex-nowrap gap-4 flex-wrap mt-4 p-4 overflow-hidden max-w-full justify-around shadow-md shadow-indigo-300/50 dark:bg-slate-800 dark:shadow-indigo-600/50 rounded-xl">
            <div className="max-w-80">
              <p className="tracking-wider text-justify indent-8 dark:text-slate-200">
                <strong className="text-purple-500">1-</strong> I'm 27 year old graduate student at <a className="underline decoration-purple-400">University of Nevada
                  (UNLV)</a> where I graduate in Full Stack Software Engineer, using technology has <a className="underline decoration-purple-400">React and Nodejs.</a>
              </p>
            </div>
            <div className="hidden sm:block flex justify-center self-center h-24 w-px | bg-gradient-to-t from-blue-400 to-purple-400"></div>
            <div className="max-w-80">
              <p className="tracking-wider text-justify indent-8 dark:text-slate-200">
                <strong className="text-blue-400 ">2-</strong> Through these experience, I've had the opportunity to create memorable products
                that are not only enjoyable to use, but are written in code thats <a className="rounded bg-blue-100 dark:bg-blue-700">maintainable and easy to understand.</a>
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------- Project CARDs LIST ----------------------------- */}
        <ProjectList />

        {/* ----------------------------- Tech that I have used ----------------------------- */}
        {/* <div className="flex justify-center self-center w-4/5 h-px | bg-gradient-to-r from-blue-400 to-purple-400"></div> */}


        <ContactForm />
      </main >
    </>
  )
}
