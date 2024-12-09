import React, { useRef } from "react";
import emailjs from 'emailjs-com';

// Icons
import { FaRegArrowAltCircleRight, FaUser, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";

// EmailJS
export default function ContactForm() {
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