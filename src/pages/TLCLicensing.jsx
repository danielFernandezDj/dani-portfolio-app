import React from "react"
import { Link } from "react-router-dom";
import CardsData from "../components/CardsData"
import ContactForm from "../components/ContactFrom"

import { IoLogoFirebase } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function TLCLicensing() {
    const cardData = CardsData().filter((element) => element.id === 1 || element.id === 2)

    const bottomColor = {
        primary: '#E2E065',
        secondary: '#1E293B'
    }
    const textColor = {
        colorXL: '#8DB402',
    }

    return (
        <>
            <main className="container mx-auto px-4 flex flex-col gap-20 md:gap-80">
                <section className="flex flex-col items-center gap-4 mt-4 pt-4 rounded-t-xl text-slate-800
                    bg-gradient-to-b from-[#E2E065] to-slate-50"
                >
                    <strong className="text-5xl">
                        TLC Licensing
                    </strong>
                    <p className="text-center px-4 md:w-4/6">
                        A comprehensive web platform integrating cutting-edge front-end, back-end, and database
                        technologies with secure, robust server infrastructure to deliver a seamless and reliable user experience.
                    </p>
                    <img
                        src="projects-img/tlc.png"
                        alt="TLC Licensing Home page Screenshot."
                        className="rounded-md"
                    />
                    {cardData.length > 0 && (
                        <a
                            href={cardData[0].liveLink}
                            target="_blank"
                            className="w-5/6 md:w-2/6 m-auto p-4 text-xl text-center font-semibold rounded-md"
                            style={{ backgroundColor: bottomColor.primary }}
                        >
                            Live Web Site➚
                        </a>
                    )}

                </section>

                <section className="flex flex-col gap-4 md:w-4/6 m-auto text-slate-800 md:p-8 px-4 py-8 bg-white rounded-2xl">
                    <div className="md:text-center">
                        <strong className="text-3xl mb-2">
                            Project Purpose and Goal
                        </strong>
                        <p>
                            This project encompassed three critical phases of site development and integration:
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="text-xl" style={{ color: textColor.colorXL }}>
                                Phase 1: The Biggest Challenge
                            </p>
                            <p>
                                Establishing a secure connection between the front-end application and back-end system,
                                protecting against potential cyber threats. The previous application had been vulnerable,
                                experiencing over 1,000 hacking attempts monthly. Our primary goal was to implement robust security
                                measures that would shield the entire system from unauthorized access.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl" style={{ color: textColor.colorXL }}>
                                Phase 2: Ensuring Stable and Secure Connectivity
                            </p>
                            <p>
                                Developing the most effective strategy to maintain a stable and secure connection between the server and database.
                                This involved implementing advanced encryption protocols and creating multiple layers of authentication to prevent
                                potential breaches.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl" style={{ color: textColor.colorXL }}>
                                Phase 3: Advanced Server Port Management
                            </p>
                            <p>
                                Designing a sophisticated system focused on server entry point security, ensuring data integrity and protection.
                                We developed comprehensive security protocols that monitor, filter, and validate all incoming and outgoing data transactions.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className="flex justify-center md:p-4 md:gap-24 gap-4 md:w-4/6 m-auto text-slate-800 rounded-xl"
                    style={{ backgroundColor: bottomColor.primary }}
                >
                    <IoLogoFirebase className="size-16" />
                    <RiReactjsLine className="size-16" />
                    <FaPython className="size-16" />
                    <IoLogoJavascript className="size-16" />
                </section>

                <section className="flex flex-col gap-4 md:w-4/6 m-auto text-slate-800">
                    <strong className="text-3xl">
                        Web Stack and Explanation
                    </strong>
                    <p>
                        React was the optimal choice for our web application due to its flexibility and seamless back-end integration,
                        ensuring a smooth and efficient working environment. Its component-based architecture allows for dynamic and
                        responsive user interfaces that can easily communicate with server-side resources.
                    </p>
                    <p>
                        For the complexity of transactions and account management, we utilized React Hooks with Redux to centralize and
                        organize all cart items and user tasks in a single, cohesive state management system. This approach provides a
                        robust and predictable way to handle complex application logic, enabling efficient data flow and user experience.
                    </p>

                    <div className="flex flex-col my-4 gap-8 justify-center">
                        <div>
                            <strong>
                                Shopping Cart:
                            </strong>
                            <img
                                src="/tlc-images/chopping-cart.png"
                                alt="TLC Licensing Shopping-Cart page screenshot."
                                className="rounded-xl my-2 shadow-sm"
                            />
                        </div>
                        <div>
                            <strong>
                                Non Exams page:
                            </strong>
                            <img
                                src="/tlc-images/non-exams.png"
                                alt="TLC Licensing Non-Exams page screenshot."
                                className="rounded-xl mt-2 shadow-sm"
                            />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-4 md:w-4/6 m-auto text-slate-800 md:p-8 px-4 py-8 rounded-2xl
                    bg-gradient-to-b from-slate-50 to-[#E2E065]"
                >
                    <strong
                        className="text-3xl text-center"
                        style={{ color: textColor.colorXL }}
                    >
                        Lessons Learned
                    </strong>
                    <ol className="flex flex-col gap-4 list-decimal list-inside">
                        <li>
                            I could spend hours describing the invaluable lessons learned while working on this project.
                            The most significant insights came from my deep dive into React Hooks, Git management, Feature Keys,
                            and API integration. As my first large-scale React project, it became a transformative learning
                            experience that reshaped my approach to software development.
                        </li>
                        <li>
                            Initially, I was prone to writing hasty, unstructured code and quickly moving on. However, this project
                            taught me a critical lesson: poor code organization can create significant challenges down the line. Now,
                            I invest substantial time in refactoring and meticulously improving every line of code I write. My focus
                            has shifted to ensuring maximum readability and maintainability, which ultimately prevents future headaches
                            and creates more robust, elegant solutions.
                        </li>
                        <li>
                            This project was more than just a technical challenge—it was a personal growth journey that fundamentally
                            changed how I approach software development, emphasizing the importance of clean, thoughtful code and
                            strategic project management.
                        </li>
                    </ol>
                </section>

                {/* Other projects */}
                <section
                    id="projects"
                    className="flex flex-col items-center md:w-4/6 m-auto rounded-2xl bg-slate-800"
                >
                    <strong className="text-4xl mt-4 md:mb-6 md:mt-12 text-gradient">
                        Other Projects
                    </strong>

                    {cardData.map((card, index) => (
                        <div key={index} className="p-4 md:w-5/6">
                            <Link to={card.link}>
                                <img
                                    src={card.img}
                                    alt="Project Image"
                                    className="hover:outline outline-slate-400/80 outline-offset-4 outline-2 rounded-xl"
                                />
                            </Link>
                            <div>
                                <div className="flex flex-wrap md:flex-nowrap md:justify-between md:mb-10 py-4">
                                    <div className="w-full">
                                        <Link href={card.link}>
                                            <strong
                                                className="text-2xl text-slate-200"
                                            >
                                                {card.title}
                                            </strong>
                                        </Link>
                                        <p
                                            className="text-slate-400 md:mb-0 mb-2"
                                        >
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Display Tech */}
                                    <div className="flex justify-end gap-4">
                                        {card.tech.map((technology, idx) => (
                                            <strong
                                                key={idx}
                                                className="bg-slate-400 text-slate-800 px-2 py-2 m-auto rounded-lg"
                                            >
                                                {technology}
                                            </strong>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <ContactForm />
            </main>
        </>
    )
}