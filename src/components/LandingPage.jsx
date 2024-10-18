import React, { useRef } from "react";
import emailjs from 'emailjs-com';

// Icons
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
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
    <section className="bg-gray-100 font-sans leading-normal tracking-normal flex items-center justify-center py-8">
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
      <main className="flex flex-col man-h-screen bg-red-100 gap-y-14 p-4">
        {/* Welcome */}
        <section className="flex flex-col justify-center item-center bg-blue-200">
          <p className="text-3xl font-bold">Hi there, I'm Daniel. <br /> Full Stack Developer, <br /> Student and Enthusiast</p>
          <img src="https://fakeimg.pl/600x400" alt="Me in Moto ;)" />
        </section>

        {/* About me text 'p' */}
        <section className="bg-blue-200">
          <p>About Me.</p>
          <p>
            I'm 27 year old graduate student at University of Nevada (UNLV)
            where I graduate in Full Stack Software Engineer, using technology has React and Nodejs.
          </p>
          <p>
            Through these experience, I've had the opportunity to create memorable products
            that are not only enjoyable to use, but are written in code thats maintainable and easy to understand.
          </p>
        </section>

        {/* Project list, Cards */}
        <section className="flex flex-wrap justify-center self-center space-x-4">
          <div className="bg-blue-200">
            <p>Project Name here!</p>
            <img src="https://fakeimg.pl/400x200" alt="Project Image" />
          </div>

        </section>

        {/* Tech That I know list using a 'p' */}
        <section className="flex flex-wrap justify-around ">
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
        <section className="">
          <div className="bg-red-600 p-4">
            <h3>Doo something cool here!</h3>
          </div>
        </section>

        {/* Contact-Form */}
        {ContactForm()}
      </main>
    </>
  )
}
