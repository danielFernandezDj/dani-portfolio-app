import React, { useRef } from "react";
import emailjs from 'emailjs-com';

// Icons
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

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
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            Send Message
          </button>
          <div className="m-5 p-0.5 bg-gray-200"></div>
          {/* My contact Information */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="flex flex-row items-center gap-1"><FaUser />Daniel Fernandez</p>
            <p className="flex flex-row items-center gap-1"><FaPhone />(786)307-4352</p>
            <p className="flex flex-row items-center gap-1"><MdAttachEmail />danielfernandez.tech@gmail.com</p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8  max-w-sm mx-auto sm:max-w-3xl">
        {/* Hero */}
        <section className="flex mt-4 p-4 overflow-hidden max-w-full gap-2">
          <div className="flex flex-col size-4/5">
            <img className="rounded-xl size-fit" src="./mePhoto.jpeg" alt="Me in Moto)" />
            <button className="flex gap-2 flex-row justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-2 p-3 rounded-lg
                 transition-all duration-200 ease-in-out"
            >
              Let's Talk <span> <FaRegArrowAltCircleRight className="size-4" /></span>
            </button>
          </div>
          <div className="flex flex-col sm:border-r border-blue-500">
            <p className="text-4xl sm:text-8xl font-bold">Hi there, <br /> I'm Daniel</p>
            <p className="text-2xl sm:text-5xl font-bold">Full Stack Developer, Student & Enthusiast! </p>
          </div>
        </section>

        {/* <div className="flex justify-center self-center w-4/5 h-px | bg-gradient-to-r from-blue-400 to-purple-400"></div> */}

        {/* About Me */}
        <section className="flex sm:flex-nowrap gap-4 flex-wrap m-4 p-4 overflow-hidden max-w-full justify-around bg-white shadow-md rounded-xl">
          <div className="max-w-80">
            <p className="tracking-wider text-justify indent-8">
              <strong className="text-purple-500">1-</strong> I'm 27 year old graduate student at <a className="underline decoration-purple-400">University of Nevada
                (UNLV)</a> where I graduate in Full Stack Software Engineer, using technology has <a className="underline decoration-purple-400">React and Nodejs.</a>
            </p>
          </div>
          <div className="max-w-80">
            <p className="tracking-wider text-justify indent-8">
              <strong className="text-blue-500">2-</strong> Through these experience, I've had the opportunity to create memorable products
              that are not only enjoyable to use, but are written in code thats <a className="underline decoration-blue-400">maintainable and easy to understand.</a>
            </p>
          </div>
        </section>

        <div className="flex justify-center self-center w-4/5 h-px | bg-gradient-to-r from-blue-400 to-purple-400"></div>

        {/* Project list, Cards */}
        <section className="flex flex-wrap p-4 justify-center self-center space-x-4">
          <div className="bg-blue-200">
            <p>Project Name here!</p>
            <img src="https://fakeimg.pl/400x100" alt="Project Image" />
          </div>
        </section>

        {/* Tech That I use */}
        <section className="flex flex-wrap p-4 justify-around ">
          <div className="bg-blue-200 text-center">
            <FaReact className="size-14 md:size-20 grow" />
            <p>React</p>
          </div>
          <div className="bg-blue-200 flex flex-col justify-center items-center">
            <FaJsSquare className="size-14 md:size-20 grow" />
            <p>JavaScript</p>
          </div>
          <div className="bg-blue-200 text-center">
            <RiTailwindCssFill className="size-14 md:size-20 grow" />
            <p>Tailwind</p>
          </div>
        </section>

        {/* Something Cool to impress the heir team (like a line that do something). */}
        <section className="p-4">
          <div className="bg-red-600 p-4">
            <h3>Doo something cool here!</h3>
          </div>
        </section>

        {/* Contact-Form */}
        {ContactForm()}
      </main >
    </>
  )
}
