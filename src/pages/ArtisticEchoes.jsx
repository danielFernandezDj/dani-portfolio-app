import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactFrom";
import CardsData from "../components/CardsData";

import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function ArtisticEchoes() {
    // Personal Account
    const linkedinLink = "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
    const githubLink = "https://github.com/danielFernandezDj"

    // Project Git-Links
    const frontEND = "https://github.com/danielFernandezDj/artistic-echoes-front-end"
    const backEND = "https://github.com/danielFernandezDj/artistic-echoes-back-end"

    const cardData = CardsData().filter((element) => element.id === 0 || element.id === 2)

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
                            Artistic Echoes
                        </strong>
                    </div>
                    <p className="w-full md:w-4/6">
                        Artistic Echoes is a Stock website that share old humans history paints from all over the word for free download.
                    </p>
                    <img
                        src="./projects-img/artistic-echoes.png"
                        alt="Artistic Echoes web site screenshot."
                        className="rounded-xl"
                    />

                    {/* Project Repos */}
                    <section className="flex flex-row gap-4">
                        <div className="flex flex-col md:flex-row md:gap-4 w-5/6">
                            <strong>
                                Git Repositories :
                            </strong>
                            <a
                                href={frontEND}
                                target="_blank"
                                className="text-blue-500 font-normal nav-text-style"
                            >
                                git-font-end➚
                            </a>
                            <a
                                href={backEND}
                                target="_blank"
                                className="text-blue-500 font-normal nav-text-style"
                            >
                                git-back-end➚
                            </a>
                        </div>

                        <div className="flex justify-end items-end w-4/6 gap-4">
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
                        <Link
                            to={card.link}
                            target="_blank"
                        >
                            <img
                                src={card.img}
                                alt="Project Image"
                                className="hover:outline outline-slate-400/80 outline-offset-4 outline-2 rounded-xl"
                            />
                        </Link>
                        <div>
                            <div className="flex flex-wrap md:flex-nowrap md:justify-between md:mb-10 py-4">
                                <div className="w-full">
                                    <Link href={card.link} target="_blank">
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

            {/* Contact Form */}
            <ContactForm />
        </main>
    )
}