import React, { useRef } from "react";
import emailjs from 'emailjs-com';

// Icons
import { FaRegArrowAltCircleRight } from "react-icons/fa";
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
        <section className="sm:p-4 mb-4 font-sans leading-normal tracking-normal flex items-start justify-center ">
            <div className="bg-white dark:bg-slate-200 p-8 max-w-md w-full">
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
            </div>
        </section>
    );
}