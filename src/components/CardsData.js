import React from "react";
// https://tlclicensing.com/
export default function CardsData() {
  return [
    {
      id: 0,
      title: 'TLC LiCensing',
      description: 'Full-Stack Educational Institution at Miami, FL.',
      link: '/tlc-licensing',
      liveLink: 'https://tlclicensing.com/',
      img: './projects-img/tlc.png',
      bgColor: 'bg-slate-800',
      tech: ['React', 'Redux', 'JavaScript']
    },
    {
      id: 1,
      title: 'Artistic Echoes',
      description: 'Image Stock Bank, offers free Download.',
      link: 'artistic-echoes',
      liveLink: '#',
      img: './projects-img/artistic-echoes.png',
      bgColor: 'bg-slate-800',
      tech: ['React', 'MongoDB', 'Express']
    },
    {
      id: 2,
      title: 'AI random app.',
      description: 'This is just an example AI app.',
      link: 'https://tailwindcss.com',
      liveLink: '#',
      img: '/projects-img/ai.png',
      bgColor: 'bg-slate-800',
      tech: ['ChatGPT', 'NextJS', 'TypeScript']
    },
  ]
}