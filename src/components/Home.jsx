import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import ProjectList from "./ProjectList";

// Icons
import { FaRegArrowAltCircleRight, FaUser, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { SiGithub } from "react-icons/si";

// EmailJS
function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bj64yfh', 'template_6fh7ri9', form.current, 'LQRAY8j91g7DFwi90')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="sm:p-4 mb-8 font-sans leading-normal tracking-normal flex items-center justify-center ">
      <div className="bg-white dark:bg-slate-200 sm:shadow-md sm:rounded-xl p-8 max-w-md w-full">
        <h1 className="flex gap-2 flex-row justify-center items-center text-2xl font-bold mb-6 text-center
          font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500"
        >
          Let's Talk <IoMdMailOpen className="fill-blue-500" />
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          {/* Name & Phone_#*/}
          <div className="flex flex-row gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-slate-800 mb-2">Name</label>
              <input type="text" id="name" name="user_name" className="w-full p-3 text-slate-800 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-300"
                placeholder="Enter your name" required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-slate-800 mb-2">Phone</label>
              <input type="text" id="phone" name="user_phone" className="w-full p-3 text-slate-800 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-300"
                placeholder="Enter your Phone" required
              />
            </div>
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-800 mb-2">Email</label>
            <input type="email" id="email" name="user_email" className="w-full p-3 text-slate-800 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-300"
              placeholder="Enter your email" required
            />
          </div>
          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-slate-800 mb-2">Message</label>
            <textarea id="message" name="message" className="w-full p-3 text-slate-800 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-300"
              placeholder="Enter your message" rows="4" required>
            </textarea>
          </div>
          <button type="submit" className="flex gap-2 flex-row justify-center items-center w-full p-3 text-white dark:text-slate-200 font-bold sm:tracking-wider btn-home-animation">
            Send Message<span> <FaRegArrowAltCircleRight className="size-4" /></span>
          </button>
        </form>
        {/* My contact Information */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-center self-center mt-5 w-4/5 h-px | bg-gradient-to-r from-blue-400 to-purple-400"></div>
          <h3 className="text-2xl font-bold text-slate-800">Contact Information</h3>
          <p className="flex flex-row items-center gap-1 text-slate-800"><FaUser />Daniel Fernandez</p>
          <p className="flex flex-row items-center gap-1 text-slate-800"><FaPhone />(786)307-4352</p>
          <p className="flex flex-row items-center gap-1 text-slate-800"><MdAttachEmail />danielfernandez.tech@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

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
                <a href={linkedinLink} target="_blank"><FaLinkedin className="w-12 h-auto fill-blue-900 lg:hover:fill-yellow-600 " /></a>
                <a href={githubLink} target="_blank"><SiGithub className="w-12 h-auto fill-blue-900 lg:hover:fill-indigo-600" /></a>
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

        {/* Contact-Form */}
        {ContactForm()}
      </main >
    </>
  )
}
