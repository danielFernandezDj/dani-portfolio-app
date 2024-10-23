import React from "react";

export default function ProjectList() {
  const cardsData = [
    {
      title: 'Word Games',
      description: 'Multi games web app.',
      link: 'https://tailwindcss.com/docs/gap',
      imgA: './unlv-badges/css-badge.png',
      imgB: './unlv-badges/html-badge.png',
      imgC: './unlv-badges/final-badge.png',
    },
    {
      title: 'Card 2 Title',
      description: 'Description for card 2',
      link: 'https://tailwindcss.com/docs/gap',
      imgA: './unlv-badges/css-badge.png',
      imgB: './unlv-badges/html-badge.png',
      imgC: './unlv-badges/final-badge.png',
    },
    {
      title: 'Card 3 Title',
      description: 'Description for card 3',
      link: 'https://tailwindcss.com/docs/gap',
      imgA: './unlv-badges/css-badge.png',
      imgB: './unlv-badges/html-badge.png',
      imgC: './unlv-badges/final-badge.png',
    },
    {
      title: 'Card 4 Title',
      description: 'Description for card 4',
      link: 'https://tailwindcss.com/docs/gap',
      imgA: './unlv-badges/css-badge.png',
      imgB: './unlv-badges/html-badge.png',
      imgC: './unlv-badges/final-badge.png',
    },
  ]

  return (
    <>
      <section className="flex flex-col w-full p-4 gap-4 rounded-xl">
        <strong className="flex justify-center gap-6 text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-20% to-red-500">
          <span className="horizontal-line"></span> PROJECTS <span className="horizontal-line"></span>
        </strong>
        <div className="flex flex-wrap justify-center w-full gap-4">
          {cardsData.map((card, index) => (
            <div key={index} className="card-container bg-gradient-to-r from-white to-indigo-100">
              <div className="flex  justify-between items-center">
                <div>
                  <strong className="text-lg text-blue-500">{card.title}</strong>
                  <p className="font-extralight">{card.description}</p>
                </div>
                <a href={card.link} target="_blank" className="p-2 text-white font-bold tracking-wider btn-home-animation">See More</a>
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
