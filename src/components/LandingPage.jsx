import React, {useRef} from "react";
import emailjs from 'emailjs-com'

// Icons
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Home() {
  // EmailJS
  const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
    }

    
  }

  return (
    <>
      <main className="flex flex-col max-h-screen bg-red-100 gap-y-14 p-4">
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

        {/* Contact me From */}
        <section className="bg-gray-100 font-sans leading-normal tracking-normal flex items-center justify-center h-screen">
          <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full">
            <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
            <form>
              <div className="mb-4">
                <label for="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name" required
                />
              </div>
              <div className="mb-4">
                <label for="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email" required
                />
              </div>
              <div className="mb-4">
                <label for="message" className="block text-gray-700 mb-2">Message</label>
                <textarea id="message" className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your message" rows="4" required></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}