import React from "react";
import ContactForm from "../components/ContactFrom";
import CardsData from "../components/CardsData";

import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function ShieldAi() {
    // Personal Account
    const linkedinLink = "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
    const githubLink = "https://github.com/danielFernandezDj"

    // Project Git-Links

    const data = CardsData()
    const cardData = data.filter((element) => element.id === 0 || element.id === 1)

    return (
        <main className="container mx-auto px-4 flex flex-col gap-20 md:gap-28 text-slate-200">
            <div className="flex flex-col gap-4 m-auto mt-10 md:w-4/6">
                <section className="py-8 text-center bg-gradient opacity-90 rounded-2xl">
                    <strong className="text-4xl text-slate-200 italic ">
                        "Coming Soon!"
                    </strong>
                </section>

                <section className="flex flex-col gap-4 bg-slate-800 p-4 rounded-2xl">
                    <div>
                        <p className="text-sm text-slate-200/80">
                            Description
                        </p>
                        <strong className="text-2xl text-gradient">
                            Shield.ai
                        </strong>
                    </div>
                    <p className="w-full md:w-4/6">
                        Shield.ai is created to help U.S community to learn more about low & human rights.
                    </p>
                    <img
                        src="./projects-img/shield-ai.png"
                        alt="Artistic Echoes web site screenshot."
                        className="rounded-xl"
                    />

                    {/* Project Repos */}
                    <section className="flex flex-row gap-4">
                        <p className="flex items-center px-4 w-5/6 text-blue-500">
                            Contact Links {'->'}
                        </p>
                        <div className="flex justify-end w-full m-auto gap-4">
                            <a href={linkedinLink} target="_blank"><FaLinkedin className="w-10 h-auto fill-slate-200 hover:fill-blue-500 " /></a>
                            <a href={githubLink} target="_blank"><SiGithub className="w-10 h-auto fill-slate-200 hover:fill-yellow-500" /></a>
                        </div>
                    </section>
                </section>
            </div>

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
                        <a
                            href={card.link}
                            target="_blank"
                        >
                            <img
                                src={card.img}
                                alt="Project Image"
                                className="hover:outline outline-slate-400/80 outline-offset-4 outline-2 rounded-xl"
                            />
                        </a>
                        <div>
                            <div className="flex flex-wrap md:flex-nowrap md:justify-between md:mb-10 py-4">
                                <div className="w-full">
                                    <a href={card.link} target="_blank">
                                        <strong
                                            className="text-2xl text-slate-200"
                                        >
                                            {card.title}
                                        </strong>
                                    </a>
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

            {/* Contact Form */}
            <ContactForm />
        </main>
    )
}