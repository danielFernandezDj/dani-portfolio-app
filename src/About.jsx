import React from "react";
import ContactForm from "./components/ContactFrom";

// Icons
import { FaRegArrowAltCircleRight, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";


export default function About() {
    const linkedinLink = "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
    const githubLink = "https://github.com/danielFernandezDj"

    return (
        <>
            <main className="flex flex-col items-center gap-16 max-w-sm mx-auto sm:max-w-3xl / border border-red-600">
                {/* hero */}
                <div className="text-center">
                    <strong className="text-4xl">
                        Hi there, I’m Daniel Fernandez
                    </strong>
                    <p>
                        A exited Software Engineer ready to build relieve software, and learn new technology.
                        With a expertise in Database, FrontEND + BackEND applications.
                    </p>
                    <img src="/public/mePhoto.jpeg" alt="My Selfie" />
                    <div className="mt-2 flex gap-2 justify-between content-center">
                        <button className="flex gap-2 flex-row justify-center items-center w-full btn-hover-animation">
                            Let's Talk <FaRegArrowAltCircleRight className="size-4" />
                        </button>
                        <div className="flex gap-2">
                            <a href={linkedinLink} target="_blank"><FaLinkedin className="w-12 h-auto fill-blue-900 hover:fill-blue-500 " /></a>
                            <a href={githubLink} target="_blank"><SiGithub className="w-12 h-auto fill-blue-900 hover:fill-blue-500" /></a>
                        </div>
                    </div>
                </div>

                {/* Long Time ago */}
                <div className="p-4 md:p-8 bg-slate-800 text-slate-200">
                    <strong className="text-2xl">
                        Long time ago!
                    </strong>
                    <div className="mt-4">
                        <img
                            src="/public/projects-img/old-pc.png"
                            alt="Hold computer image from Unsplash"
                            className="ml-4 md:ml-2 w-40 md:w-56 rounded-sm float-right"
                        />
                        <p className="mb-4">
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
                <div>
                    <strong className="text-3xl">
                        How Passion Began
                    </strong>
                    <p>
                        My journey before becoming a Full Stack developer was filled with different technological experiences
                        that prepared me for my current path. My first application was a video game created in Constructor 2,
                        which later moved to Unity Engine. It was here that I first learned to code in C#, a language I found fascinating.
                    </p>
                    <div className="w-auto h-64">
                        <img src="#" alt="Photo of Me" />
                        <img src="#" alt="Photo of Me" />
                        <img src="#" alt="Photo of Me" />
                    </div>
                    <p>
                        I continued creating small projects that grew my passion for programming. The potential of the Internet,
                        along with JS, HTML, and CSS, sparked my desire to become a professional programmer.
                    </p>
                </div>

                {/* Professional Growth */}
                <div className="bg-slate-800">
                    <strong className="text-3xl">
                        Professional Growth
                    </strong>
                    <p>
                        During my university internship, I worked with a team of developers on the TLC Licensing application—an educational
                        tool designed to help engineers and contractors in Florida. Working with Senior programmers, each with over 10 years
                        of experience, was eye-opening. Together, we created an application that combined Database with Fire-Base,
                        Front-End with React, and Back-End with Python. It was a challenge we successfully completed.
                    </p>
                    <img src="/public/projects-img/tlc.png" alt="TLC Licensing Screenshot." />
                    <p>
                        This journey led me to enroll at the University of Nevada, Las Vegas (UNLV), where I graduated as a Full Stack Developer.
                        I've learned technologies including React, JavaScript, Express, Node.js, TypeScript, MongoDB, and other key skills that
                        make modern web development possible.
                    </p>
                </div>

                {/* Let's Create Something Together */}
                <div>
                    <strong className="text-3xl">
                        Let's Create Something Amazing Together
                    </strong>
                    <p>
                        I'm more than just a developer—I'm a problem solver, a creative thinker, and a passionate creator who believes in
                        turning complex challenges into elegant solutions. If you're looking to bring your digital ideas to life, transform your
                        vision into reality, or simply want to explore the possibilities of technology, I'm ready to listen, collaborate,
                        and help you make your dreams code true. Let's connect and create something extraordinary!
                    </p>
                </div>

                <ContactForm />
            </main>
        </>
    )
}