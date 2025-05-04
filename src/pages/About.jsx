import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ProjectList from "../components/ProjectList";
import ContactForm from "../components/ContactFrom";
import CardsData from "../components/CardsData";

export default function About() {
  const cardsData = CardsData();
  const card0 = cardsData[0];
  const card1 = cardsData[1];
  const scrollToContactSection = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  <button
    onClick={() => scrollToContactSection("contact")}
    className="flex gap-2 p-3 my-4 justify-center items-center btn-hover-animation"
  >
    Let&lsquo;s Talk <FaRegArrowAltCircleRight className="size-4" />
  </button>;

  return (
    <>
      <main className="flex flex-col items-center gap-32 max-w-sm mx-auto sm:max-w-3xl tracking-widest">
        {/* hero */}
        <div className="flex flex-col-reverse md:flex-row gap-6 p-4 mt-4 bg-slate-100 rounded-lg">
          {/* Image */}
          <div>
            <img
              src="/my-photo.jpg"
              alt="A picture of Daniel Fernandez."
              className="md:w-full md:h-full rounded-md h-52 w-96 object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-3 p-4 md:w-full">
            <strong className="text-3xl mb-2">👨‍💻 About Me</strong>
            <p>
              Hi, I’m <span className="font-semibold">Daniel Fernandez</span>, a
              passionate full-stack software developer and creative
              problem-solver.
            </p>
            <p>
              I specialize in building fast, responsive, and accessible web
              applications using Next.js, React, Node.js, and modern development
              tools like TypeScript and Tailwind CSS.
            </p>
            <p>
              But more than just code, I love bringing ideas to life — whether
              it&lsquo;s a digital art gallery like{" "}
              <a
                href={card0.link}
                target="_blank"
                className="font-semibold text-blue-500"
              >
                Artistic Echoes
              </a>{" "}
              or streamlining licensing processes like{" "}
              <a
                href={card1.link}
                target="_blank"
                className="font-semibold text-blue-500"
              >
                TLC Licensing
              </a>
              . Every project is a chance to learn, grow, and build something
              that makes someone&lsquo;s day easier or more inspiring.
            </p>
          </div>
        </div>

        {/* My Journey */}
        <div className="m-4 p-4 md:p-8 md:w-full bg-white rounded-lg">
          <strong className="text-2xl">🌎 My Journey</strong>
          <div className="flex flex-col gap-2 mt-4">
            <p>
              My path into software wasn’t traditional — and I’m proud of that.{" "}
              <br />
              From managing responsibilities in different industries to{" "}
              <span className="font-semibold">
                collaborating remotely with engineers
              </span>{" "}
              on real-world applications, I&lsquo;ve developed a unique mix of
              discipline, creativity, and problem-solving grit.
            </p>
            <div className="">
              <img
                src="projects-img/tlc.png"
                alt="TLC Screenshot"
                className="w-full md:h-48 my-4 h-32 object-cover"
              />
            </div>
            <p>
              During my internship, I worked with engineers in Florida to
              develop software used by actual clients. That experience taught me
              how to <span className="font-semibold">contribute to a team</span>
              , deliver under pressure, and always keep the{" "}
              <span className="font-semibold">user experience in focus.</span>
            </p>
          </div>
        </div>

        {/* What I Bring */}
        <div className="flex flex-col items-center gap-2 p-4 text-slate-800">
          <strong className="text-2xl mb-4">🛠️ What I Bring</strong>
          <ul className="list-disc space-y-3">
            <li className="flex items-start gap-2 bg-slate-100 p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span>• Clear
              communication — with developers, designers, or non-technical
              clients
            </li>
            <li className="flex items-start gap-2 bg-slate-100 p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span>• Clean,
              maintainable code — following industry standards
            </li>
            <li className="flex items-start gap-2 bg-slate-100 p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span> • Creative UI
              thinking — always blending functionality with aesthetics
            </li>
            <li className="flex items-start gap-2 bg-slate-100 p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span> • Fast learning &
              adaptability — especially in new stacks or problem spaces
            </li>
          </ul>
        </div>

        {/* Looking Ahead */}
        <div className="flex flex-col text-center text-balance gap-2 p-4 mx-4 md:p-8 md:w-full bg-slate-800 text-slate-200 rounded-lg">
          <strong className="text-2xl mb-4 text-center">
            🚀 Looking Ahead
          </strong>
          <p>
            Right now, I&lsquo;m building up a portfolio of real, functional
            apps — each one rooted in curiosity, purpose, and practical value.
            I&lsquo;m open to opportunities in{" "}
            <span className="text-[#ec6c3a] font-semibold">
              front-end, full-stack, or product-focused teams
            </span>{" "}
            where I can keep growing and help bring meaningful ideas to life.
          </p>
        </div>

        {/* Direct Contact Section */}
        <section className="flex flex-col items-center justify-center gap-4 w-full text-slate-800">
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

        <ProjectList />
        <ContactForm />
      </main>
    </>
  );
}
