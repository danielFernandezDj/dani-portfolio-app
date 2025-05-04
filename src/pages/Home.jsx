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
      <main className="flex flex-col gap-16 m-auto p-2 md:max-w-4xl tracking-wider">
        {/* ----------------------------- HERO ----------------------------- */}
        <section className="flex flex-col text-center my-10 md:my-28 gap-4 md:gap-6 w-full m-auto text-slate-900">
          <strong className="text-4xl md:text-7xl">
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
            className="flex gap-2 flex-row justify-center items-center p-3 w-4/6 md:w-2/6 m-auto mt-2 btn-hover-animation hover:-translate-y-1"
          >
            Let&lsquo;s Talk <FaRegArrowAltCircleRight className="size-4" />
          </button>
        </section>

        <div className="flex flex-col gap-16 md:gap-32">
          {/* ----------------------------- Projects Card ----------------------------- */}
          <section className="px-8 py-10 bg-slate-900 text-white rounded-xl ">
            <h2 className="text-3xl font-bold mb-8 text-gradient">
              Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <ProjectCard
                title="Artistic Echoes"
                image="./artistic-echoes-img/home-page.png"
                link="/artistic-echoes"
                description="Full-Stack image stock website that offers free Download."
              />
              <ProjectCard
                title="TLC LiCensing"
                image="./projects-img/tlc.png"
                link="/tlc-licensing"
                description="Full-Stack Educational Institution at Miami, FL."
              />
              <ProjectCard
                title="Shield.ai"
                image="./projects-img/shield-ai.png"
                link="/shield-ai"
                description="Created to help U.S community to learn more about low & human rights."
              />
            </div>
          </section>

          {/* ----------------------------- About Me ----------------------------- */}
          <section>
            <div className="flex gap-4 flex-wrap md:p-8 p-4 max-w-full justify-start rounded-xl bg-slate-900 text-slate-200">
              <strong className="flex justify-start text-3xl tracking-wider text-gradient">
                About Me
              </strong>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="space-y-2 text-lg text-slate-200">
                  <p>
                    Hi, I’m{" "}
                    <span className="font-semibold">Daniel Fernandez</span>, a
                    passionate full-stack software developer and creative
                    problem-solver.
                  </p>
                  <p>
                    I specialize in building fast, responsive, and accessible
                    web applications using Next.js, React, Node.js, and modern
                    development tools like TypeScript and Tailwind CSS.
                  </p>
                </div>
                <img
                  src="my-photo.jpg"
                  alt="Photo of Daniel Fernandez, creator of this website."
                  className="w-full md:h-48 my-4 object-cover border-2 border-slate-700 rounded-full hidden md:block"
                />
              </div>
              <Link to="/tlc-licensing">
                <strong className="text-blue-500 hover:underline decoration-blue-600 decoration-wavy | transition-all duration-300">
                  More about me {">"}
                </strong>
              </Link>
            </div>
          </section>

          {/* ----------------------------- Direct Contact Section ----------------------------- */}
          <section
            className="flex flex-col items-center justify-center gap-4 py-10 bg-white rounded-lg text-slate-800
                border-2 border-slate-50/0 hover:border-indigo-600 transition duration-300"
          >
            <strong className="text-2xl">📬 Reach Out Directly</strong>
            <p className="text-center">
              If you&lsquo;d rather connect without the form, feel free to email
              me directly:
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=your@email.com&su=Subject&body=Message"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d2592a] hover:bg-[#0f1113] text-white px-6 py-3 rounded-md text-lg font-semibold"
            >
              Email Me
            </a>
          </section>

          {/* ----------------------------- Skills ----------------------------- */}
          <section>
            <div className="flex flex-col gap-4 flex-wrap p-4 md:p-8 max-w-full justify-start rounded-xl bg-slate-900 text-slate-200">
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

          {/* ----------------------------- Direct Contact Section ----------------------------- */}
          <section
            className="flex flex-col items-center justify-center gap-4 py-10 bg-white rounded-lg text-slate-800
                border-2 border-slate-50/0 hover:border-indigo-600 transition duration-300"
          >
            <strong className="text-2xl">📬 Reach Out Directly</strong>
            <p className="text-center">
              If you&lsquo;d rather connect without the form, feel free to email
              me directly:
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=your@email.com&su=Subject&body=Message"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d2592a] hover:bg-[#0f1113] text-white px-6 py-3 rounded-md text-lg font-semibold"
            >
              Email Me
            </a>
          </section>

          <ContactForm />
        </div>
      </main>
    </>
  );
}
