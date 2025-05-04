import ProjectList from "../components/ProjectList";
import ContactForm from "../components/ContactFrom";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const scrollToContactSection = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <>
      <main className="flex flex-col gap-16 m-auto md:max-w-3xl tracking-wide">
        {/* ----------------------------- HERO ----------------------------- */}
        <section className="flex flex-col text-center my-10 md:my-28 gap-4 w-11/12 m-auto">
          <strong className="text-4xl md:text-6xl">
            Turning creative ideas into clean,{" "}
            <span className="text-gradient">modern</span> apps!
          </strong>

          <p className="md:text-xl w-5/6 m-auto">
            From{" "}
            <span className="text-gradient font-semibold">
              React components
            </span>{" "}
            to full-stack{" "}
            <span className="text-gradient font-semibold">Next.js apps</span> —
            I build responsive, accessible web experiences with{" "}
            <span className="text-gradient font-semibold">TypeScript.</span>
          </p>

          <button
            onClick={() => scrollToContactSection("contact")}
            className="flex gap-2 flex-row justify-center items-center p-3 w-4/6 md:w-2/6 m-auto btn-hover-animation"
          >
            Let&lsquo;s Talk <FaRegArrowAltCircleRight className="size-4" />
          </button>
        </section>

        {/* ----------------------------- Projects Card ----------------------------- */}
        <section className="px-4 py-12 bg-slate-900 text-white">
          <h2 className="text-3xl font-bold mb-8 text-gradient">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <ProjectCard
              title="Artistic Echoes"
              image="/artistic-thumb.jpg"
              link="/artistic-echoes"
              description="Digital art gallery powered by The Met’s open API."
            />
            <ProjectCard
              title="TLC Licensing"
              image="/tlc-thumb.jpg"
              link="/tlc-licensing"
              description="Compliance app for TLC drivers, built during my internship."
            />
            <ProjectCard
              title="(Your 3rd Project)"
              image="/your-project.jpg"
              link="/your-project-link"
              description="Short one-liner to summarize what it does."
            />
          </div>
        </section>

        {/* ----------------------------- About Me & Skills ----------------------------- */}
        <section className="m-4">
          <div className="flex gap-4 flex-wrap mb-20 md:p-8 p-4 max-w-full justify-start rounded-xl bg-slate-800 text-slate-200   ">
            <strong className="flex justify-start text-3xl tracking-wider text-gradient">
              About Me
            </strong>
            <p className="tracking-wider indent-4 max-w-full">
              I&lsquo;m a 27-year-old graduate student at the University of
              Nevada, Las Vegas (UNLV), where my journey in Full Stack Software
              Engineering has become more than just a career path—it&lsquo;s a
              personal mission to create meaningful digital experiences.
              Specializing in technologies like React, Express, and JavaScript,
              I pour my heart into every line of code.
            </p>
            <Link to="/tlc-licensing">
              <strong className="text-blue-500 hover:underline decoration-blue-600 decoration-wavy | transition-all duration-300">
                More about me {">"}
              </strong>
            </Link>
          </div>

          <div className="flex flex-col gap-4 flex-wrap mt-4 p-4 md:p-8 max-w-full justify-start rounded-xl bg-slate-800 text-slate-200">
            <strong className="flex justify-start text-3xl tracking-wider text-gradient">
              Skills
            </strong>
            <div className="w-full grid-rows-4 gap-2">
              <div className="flex flex-col mb-4">
                <h3 className="font-bold text-slate-200">Languages:</h3>
                <div className="flex flex-wrap gap-x-2 text-slate-400">
                  <p>JavaScript - </p>
                  <p>TypeScript - </p>
                  <p>HTML - </p>
                  <p>CSS - </p>
                  <p>SQL</p>
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <h3 className="font-bold text-slate-200">Frameworks:</h3>
                <div className="flex flex-wrap gap-x-2 text-slate-400">
                  <p>Next.js - </p>
                  <p>React - </p>
                  <p>Express - </p>
                  <p>Jest - </p>
                  <p>Tailwind </p>
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <h3 className="font-bold text-slate-200">DataBases:</h3>
                <div className="flex flex-wrap gap-x-2 text-slate-400">
                  <p>MongoDB - </p>
                  <p>PostgreSQL</p>
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <h3 className="font-bold text-slate-200">Deployment:</h3>
                <div className="flex flex-wrap gap-x-2 text-slate-400">
                  <p>Vercel - </p>
                  <p>Railway - </p>
                  <p>Render -</p>
                  <p>AWS</p>
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <h3 className="font-bold text-slate-200">
                  AI & Productivity Tools:
                </h3>
                <div className="flex flex-wrap gap-x-2 text-slate-400">
                  <p>Git - </p>
                  <p>Command - </p>
                  <p>Postman - </p>
                  <p>Claude-api - </p>
                  <p>ChatGPT-api - </p>
                  <p>Gemini-api</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectList />
        <ContactForm />
      </main>
    </>
  );
}
