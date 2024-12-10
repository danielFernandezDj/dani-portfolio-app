import React from "react";
import CardsData from "./CardsData";

export default function ProjectList() {
  const cardsData = CardsData()
  return (
    <>
      <section className="flex flex-col w-full p-4 gap-4 rounded-xl">
        <div className="mb-4 text-center">
          {/* Title */}
          <strong className="flex justify-center gap-6 text-2xl tracking-wider text-gradient">
            What I’ve been working on
          </strong>
          {/* Sub title */}
          <p className="text-blue-800/80">
            Take a look at some of the applications and
            companies I’ve dedicated my time to.
          </p>
        </div>
        <div className="flex flex-wrap justify-center w-full gap-4">
          {cardsData.map((card, index) => (
            <div key={index} className="card-container bg-gradient-to-r from-white to-indigo-100   dark:from-slate-800 dark:to-slate-800">
              <div className="flex justify-between items-center">
                <div>
                  <strong className="text-lg text-blue-500">{card.title}</strong>
                  <p className="font-extralight dark:text-slate-300">{card.description}</p>
                </div>
                <a href={card.link} target="_blank" className="p-2 text-white dark:text-slate-200 font-bold tracking-wider btn-home-animation">See More</a>
              </div>
              <div className="flex gap-2 justify-center card-images">
                <img src={card.imgA} alt="Project Image" />
                <img src={card.imgB} alt="Project Image" />
                <img src={card.imgC} alt="Project Image" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
