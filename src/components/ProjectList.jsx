import React from "react";
import { Link } from 'react-router-dom';
import CardsData from "./CardsData";

export default function ProjectList() {
  const cardsData = CardsData()
  return (
    <>
      <section id="projects" className="flex flex-col items-center w-full p-4 gap-4">
        {/* Header */}
        <div className="mb-6 text-center ">
          <strong className="flex justify-center gap-6 text-3xl tracking-wider text-gradient">
            What I’ve been working on
          </strong>
          <p className="text-slate-800/80">
            Take a look at some of the applications and
            companies I’ve dedicated my time to.
          </p>
        </div>

        {/* Cards Container */}
        <section className="flex flex-col px-3 gap-4 w-full">
          {/* Body */}
          {cardsData.map((card, index) => (
            <div key={index}>
              <Link
                to={card.link}
                className={`card-container ${card.bgColor}`}
              >
                <img src={card.img} alt="Project Image" className="card-images" />
              </Link>
              <div
                href={card.link}
                target="_blank"
              >
                <div className="flex flex-wrap md:flex-nowrap md:justify-between mb-10 px-4 py-4">
                  <div className="w-full">
                    <Link to={card.link}>
                      <strong className="text-2xl text-slate-950">{card.title}</strong>
                    </Link>
                    <p className="text-slate-950/90 md:mb-0 mb-2">{card.description}</p>
                  </div>

                  {/* Tech */}
                  <div className="flex justify-end gap-2">
                    {card.tech.map((technology, idx) => (
                      <strong key={idx} className={`bg-slate-900 text-white / m-auto px-4 py-2 rounded-md`}>
                        {technology}
                      </strong>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  )
}
