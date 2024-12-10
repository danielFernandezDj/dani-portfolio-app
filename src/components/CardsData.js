import React from "react";

export default function CardsData() {
  return [
    {
      title: 'TLC LiCensing',
      description: 'Full-Stack Educational Institution at Miami, FL.',
      link: 'https://tlclicensing.com/',
      img: './projects-img/tlc.png',
      bgColor: 'bg-slate-800',
      tech: ['React', 'Redux', 'JavaScript']
    },
    {
      title: 'Artistic Echoes',
      description: 'Image Stock Bank, offers free Download.',
      link: 'https://tailwindcss.com',
      img: './projects-img/artistic-echoes.png',
      bgColor: 'bg-slate-800',
      tech: ['React', 'MongoDB', 'Express']
    },
    {
      title: 'AI random app.',
      description: 'This is just an example AI app.',
      link: 'https://tailwindcss.com',
      img: '/projects-img/ai.png',
      bgColor: 'bg-slate-800',
      tech: ['ChatGPT', 'NextJS', 'TypeScript']
    },
  ]
}