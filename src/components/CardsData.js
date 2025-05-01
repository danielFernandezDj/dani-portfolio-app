export default function CardsData() {
  return [
    {
      id: 1,
      title: 'Artistic Echoes',
      description: 'Full-Stack image stock website that offers free Download.',
      link: '/artistic-echoes',
      liveLink: 'https://artistic-echoes.vercel.app/',
      img: './artistic-echoes-img/home-page.png',
      bgColor: 'bg-slate-800',
      tech: ['Next.js', 'TypeScript', 'MongoDB']
    },
    {
      id: 0,
      title: 'TLC LiCensing',
      description: 'Full-Stack Educational Institution at Miami, FL.',
      link: '/tlc-licensing',
      liveLink: 'https://tlclicensing.com',
      img: './projects-img/tlc.png',
      bgColor: 'bg-slate-800',
      tech: ['React', 'Redux', 'JavaScript']
    },
    {
      id: 2,
      title: 'Shield.ai',
      description: 'Shield.ai is created to help U.S community to learn more about low & human rights.',
      link: '/shield-ai',
      liveLink: '#',
      img: '/projects-img/shield-ai.png',
      bgColor: 'bg-slate-800',
      tech: ['NextJS', 'TypeScript', 'Gemini']
    },
  ]
}