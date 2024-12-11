import React from "react";
import ContactForm from "./components/ContactFrom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default function About() {
    const linkedinLink = "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
    const githubLink = "https://github.com/danielFernandezDj"

    return (
        <>
            <main className="flex flex-col items-center gap-16 max-w-sm mx-auto sm:max-w-3xl">
                {/* hero */}
                <div className="flex flex-col items-center gap-2 p-4 mb-8 md:mb-16 text-slate-800">
                    <div className="flex flex-col text-gradient text-center">
                        <strong className="mb-6 text-start md:text-center text-5xl">
                            Hi there, I’m Daniel Fernandez
                        </strong>
                    </div>
                    <div className="w-full md:w-[70%] text-slate-800">
                        <img
                            src="/mePhoto.jpeg"
                            alt="My Selfie"
                            className="rounded-xl w-3/6 md:w-2/6 float-right"
                        />
                        <div>
                            <p>
                                A exited Software Engineer ready to build relieve software, and learn new technology.
                                With a expertise in Database, FrontEND + BackEND applications.
                            </p>
                            <button className="flex gap-2 p-3 my-4 justify-center items-center btn-hover-animation">
                                Let's Talk <FaRegArrowAltCircleRight className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Long Time ago */}
                <div className="p-4 md:py-8 md:px-24 md:w-5/6 bg-slate-800 text-slate-200 rounded-lg">
                    <strong className="text-2xl">
                        Long time ago!
                    </strong>
                    <div className="mt-4">
                        <img
                            src="/projects-img/old-pc.png"
                            alt="Hold computer image from Unsplash"
                            className="ml-4 md:ml-2 w-40 md:w-56 rounded-md float-right"
                        />
                        <p>
                            I have been surrounded by technology almost my entire life, starting with those old computers
                            running Windows XP where you had to type commands to start them up—those PCs that made those distinctive, quirky startup noises.
                        </p>
                        <p>
                            Technology has changed dramatically since those days, evolving to a point where AI now shows reasoning
                            similar to human intelligence.
                        </p>
                    </div>
                </div>


                {/* How Passion Began */}
                <div className="flex flex-col items-center gap-2 p-4 md:p-24 text-slate-800">
                    <strong className="text-2xl mb-4">
                        How Passion Began
                    </strong>
                    <p>
                        My journey before becoming a Full Stack developer was filled with different technological experiences
                        that prepared me for my current path. My first application was a video game created in Constructor 2,
                        which later moved to Unity Engine. It was here that I first learned to code in C#, a language I found fascinating.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="row-span-2">
                            <img
                                src="/projects-img/old-pc.png"
                                alt="Hold computer image from Unsplash"
                                className="w-auto h-full object-cover rounded-md rounded-tl-2xl rounded-bl-2xl"
                            />
                        </div>
                        <div className="row-span-1">
                            <img
                                src="/projects-img/old-pc.png"
                                alt="Hold computer image from Unsplash"
                                className="w-48 md:w-80 rounded-md rounded-tr-2xl"
                            />
                        </div>
                        <div className="row-span-1">
                            <img
                                src="/projects-img/old-pc.png"
                                alt="Hold computer image from Unsplash"
                                className="w-48 md:w-80 rounded-md rounded-br-2xl"
                            />
                        </div>
                    </div>
                    <p>
                        I continued creating small projects that grew my passion for programming. The potential of the Internet,
                        along with JS, HTML, and CSS, sparked my desire to become a professional programmer.
                    </p>
                </div>

                {/* Professional Growth */}
                <div className="flex flex-col gap-2 p-4 md:p-8 md:w-5/6 bg-slate-800 text-slate-200 rounded-lg">
                    <strong className="text-2xl mb-4 text-center">
                        Professional Growth
                    </strong>
                    <p>
                        During my university internship, I worked with a team of developers on the TLC Licensing application—an educational
                        tool designed to help engineers and contractors in Florida. Working with Senior programmers, each with over 10 years
                        of experience, was eye-opening. Together, we created an application that combined Database with Fire-Base,
                        Front-End with React, and Back-End with Python. It was a challenge we successfully completed.
                    </p>
                    <img
                        src="/projects-img/tlc.png"
                        alt="TLC Licensing Screenshot."
                        className="rounded-lg"
                    />
                    <p>
                        This journey led me to enroll at the University of Nevada, Las Vegas (UNLV), where I graduated as a Full Stack Developer.
                        I've learned technologies including React, JavaScript, Express, Node.js, TypeScript, MongoDB, and other key skills that
                        make modern web development possible.
                    </p>
                </div>

                {/* Let's Create Something Together */}
                <div className="flex flex-col gap-2 p-1 md:p-8 m-2 text-slate-800 bg-gradient rounded-xl">
                    <div className="p-4 bg-white rounded-xl">
                        <strong className="text-2xl text-gradient mb-4">
                            Let's Create Something Amazing Together
                        </strong>
                        <p>
                            I'm more than just a developer—I'm a problem solver, a creative thinker, and a passionate creator who believes in
                            turning complex challenges into elegant solutions. If you're looking to bring your digital ideas to life, transform your
                            vision into reality, or simply want to explore the possibilities of technology, I'm ready to listen, collaborate,
                            and help you make your dreams code true. Let's connect and create something extraordinary!
                        </p>
                    </div>
                </div>

                <ContactForm />
            </main>
        </>
    )
}