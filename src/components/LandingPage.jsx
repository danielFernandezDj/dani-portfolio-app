import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import TechThatIKnow from "./TechIknow";

// Icons
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

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
    <section className="font-sans leading-normal tracking-normal flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
          {/* Name & Phone_#*/}
          <div className="flex flex-row gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input type="text" id="name" name="user_name" className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
              <input type="text" id="phone" name="user_phone" className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your Phone" required />
            </div>
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" id="email" name="user_email" className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
          </div>
          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea id="message" name="message" className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your message" rows="4" required></textarea>
          </div>
          <button type="submit" className="flex gap-2 flex-row justify-center items-center w-full p-3 text-white font-bold sm:tracking-wider btn-home-animation">
            Send Message<span> <FaRegArrowAltCircleRight className="size-4" /></span>
          </button>
        </form>
        {/* My contact Information */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-center self-center mt-5 w-4/5 h-px | bg-gradient-to-r from-blue-400 to-purple-400"></div>
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <p className="flex flex-row items-center gap-1"><FaUser />Daniel Fernandez</p>
          <p className="flex flex-row items-center gap-1"><FaPhone />(786)307-4352</p>
          <p className="flex flex-row items-center gap-1"><MdAttachEmail />danielfernandez.tech@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-16 max-w-sm mx-auto sm:max-w-3xl">
        {/* ----------------------------- HERO ----------------------------- */}
        <section className="flex mt-8 p-4 overflow-hidden max-w-full gap-2">
          <div className="flex flex-col size-4/5">
            <img className="rounded-xl size-fit" src="./mePhoto.jpeg" alt="Me in Moto)" />
            <button className="flex gap-2 flex-row justify-center items-center mt-2 p-3 text-white font-bold sm:tracking-wider btn-home-animation"
            >
              Let's Talk <span> <FaRegArrowAltCircleRight className="size-4" /></span>
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl sm:text-8xl font-bold text-slate-800">Hi there, <br /> I'm Daniel</p>
            <p className="text-2xl sm:text-5xl font-bold text-slate-800">Full Stack Developer, Student & Enthusiast! </p>
          </div>
        </section>

        {/* ----------------------------- About Me ----------------------------- */}
        <section className="flex sm:flex-nowrap gap-4 flex-wrap m-4 p-4 overflow-hidden max-w-full justify-around shadow-md shadow-indigo-300/50 rounded-xl">
          <div className="max-w-80">
            <p className="tracking-wider text-justify indent-8">
              <strong className="text-purple-500">1-</strong> I'm 27 year old graduate student at <a className="underline decoration-purple-400">University of Nevada
                (UNLV)</a> where I graduate in Full Stack Software Engineer, using technology has <a className="underline decoration-purple-400">React and Nodejs.</a>
            </p>
          </div>

          <div className="hidden sm:block flex justify-center self-center h-24 w-px | bg-gradient-to-t from-blue-400 to-purple-400"></div>

          <div className="max-w-80">
            <p className="tracking-wider text-justify indent-8">
              <strong className="text-blue-400">2-</strong> Through these experience, I've had the opportunity to create memorable products
              that are not only enjoyable to use, but are written in code thats <a className="rounded bg-blue-100">maintainable and easy to understand.</a>
            </p>
          </div>
        </section>

        {/* ----------------------------- Project CARDs ----------------------------- */}
        <section className="flex flex-col w-full m-4 p-4 gap-4 justify-center self-center rounded-xl ">
          <strong className="text-2xl tracking-wider text-slate-800">
            PROJECTS
          </strong>
          <div className="flex flex-wrap w-full gap-4">
            {/* CARD 1 */}
            <div className="flex flex-col gap-4 p-4 rounded-lg bg-indigo-50 border-solid border-2 sm:shadow-none shadow-md sm:hover:border-blue-400 sm:border-blue-100 border-blue-400
              transition duration-300
            ">
              <div className="flex  justify-between items-center">
                <div>
                  <strong className="text-lg text-blue-500">Word Games</strong>
                  <p className="font-extralight">Multi games web app.</p>
                </div>
                <button className="p-2 text-white font-bold tracking-wider btn-home-animation"
                >
                  See More
                </button>
              </div>
              <div className="flex gap-2">
                <img className="rounded-md" src="https://fakeimg.pl/100x100" alt="Project Image" />
                <img className="rounded-md" src="https://fakeimg.pl/100x100" alt="Project Image" />
                <img className="rounded-md" src="https://fakeimg.pl/100x100" alt="Project Image" />
              </div>
            </div>

            <div className="hidden sm:block flex justify-center self-center h-24 w-px | bg-gradient-to-t from-blue-200 to-purple-200"></div>
          </div>
        </section>

        {/* ----------------------------- Tech That I Use ----------------------------- */}
        <div className="flex justify-center self-center w-4/5 h-px | bg-gradient-to-r from-blue-400 to-purple-400"></div>
        <TechThatIKnow />
        <div className="flex justify-center self-center w-4/5 h-px | bg-gradient-to-r from-blue-400 to-purple-400"></div>

        {/* Contact-Form */}
        {ContactForm()}
      </main >
    </>
  )
}
