import React from "react";
import CardsData from "./CardsData";

export default function ProjectList() {
  const cardsData = CardsData()
  return (
    <>
      <section className="flex flex-col items-center w-full p-4 gap-4">
        {/* Header */}
        <div className="mb-4 text-center">
          <strong className="flex justify-center gap-6 text-2xl tracking-wider text-gradient">
            What I’ve been working on
          </strong>
          <p className="text-blue-800/80">
            Take a look at some of the applications and
            companies I’ve dedicated my time to.
          </p>
        </div>

        {/* Cards Container */}
        <section className="flex flex-col gap-4 w-full">
          {/* Body */}
          {cardsData.map((card, index) => (
            <div key={index} className={`card-container ${card.bgColor}`}>

              <div className="flex justify-between items-center">
                <div>
                  <strong className="text-2xl text-slate-950">{card.title}</strong>
                  <p className="text-slate-950/90">{card.description}</p>
                </div>
                <a href={card.link} target="_blank" className="px-8 py-2 btn-hover-animation">
                  See More
                </a>
              </div>

              <img src={card.img} alt="Project Image" className="card-images" />
            </div>
          ))}

          {/* Tech */}
          {cardsData.map((card, index) => (
            <div key={index} className="flex w-full gap-4">
              {card.tech.map((technology, idx) => (
                <strong key={idx} className={`bg-slate-950 text-white / px-6 py-2 rounded-md`}>
                  {technology}
                </strong>
              ))}
            </div>
          ))}
        </section>
      </section>
    </>
  )
}
