import { Link } from 'react-router-dom';
import CardsData from "./CardsData";

export default function ProjectList() {
  const cardsData = CardsData()
  return (
    <>
      <main id="projects" className="flex flex-col m-4 p-4 bg-slate-900 rounded-xl">

        <div className="text-center mb-4 mt-8">
          <strong className="text-3xl text-gradient">
            What I’ve been working on
          </strong>
          <p className="text-slate-200/80">
            Take a look at some of the applications and
            companies I’ve dedicated my time to.
          </p>
        </div>

        <section className="flex flex-col items-center m-auto rounded-2xl bg-slate-900">
          {cardsData.map((card, index) => (
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
                    <a href={card.link} >
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
                  <div className="flex justify-end gap-2">
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
      </main>
    </>
  )
}
