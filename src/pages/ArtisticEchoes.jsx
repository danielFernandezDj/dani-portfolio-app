import { Link } from "react-router-dom";
import ContactForm from "../components/ContactFrom";
import CardsData from "../components/CardsData";
import { SiGithub } from "react-icons/si";

export default function ArtisticEchoes() {
  const cardData = CardsData().filter(
    (element) => element.id === 1 || element.id === 2
  );

  const btnColor = "#d2592a";
  const btnColorHover = "hover:bg-[#0f1113]";

  return (
    <main className="container mx-auto px-4 flex flex-col gap-20 md:gap-20 tracking-widest">
      <section
        className="flex flex-col items-center gap-8 mt-4 pt-8 rounded-2xl text-slate-800
                    bg-gradient-to-b bg-white to-slate-50"
      >
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <strong className="text-4xl md:text-5xl">🎨 Artistic Echoes</strong>
            <p className="text-black/50">By Daniel Fernandez</p>
          </div>
          <p className="text-center px-4 md:w-11/12 text-balance">
            Artistic Echoes is a web application designed to explore and
            celebrate art from The Metropolitan Museum of Art’s open-access
            collection.
            <span className="hidden md:inline-block">
              Users can browse artwork from different time periods, styles, and
              artists — all pulled dynamically through the museum’s public API.
            </span>
          </p>
        </div>
        <div className="m-auto px-2 md:px-8 ">
          <img
            src="./artistic-echoes-img/home-page.png"
            alt="Artistic-Echoes home page Screenshot."
            className="border-2 rounded-lg"
          />
        </div>
        <p className="text-center px-4 md:w-10/12 text-balance hidden md:inline-block">
          The app serves as a minimalist visual archive that pays homage to the
          timeless beauty of art, while also offering a fast and responsive user
          experience. It was built as a portfolio project to showcase skills in
          modern web development, API integration, and user-focused design.
        </p>
        <div className="flex flex-col w-full m-auto gap-6 items-center">
          {cardData.length > 0 && (
            <a
              href={cardData[0].liveLink}
              target="_blank"
              className={`w-5/6 md:w-2/6 p-4 text-xl text-center font-semibold rounded-md text-white
                bg-[${btnColor}] ${btnColorHover} transition duration-150`}
            >
              Live Web Site➚
            </a>
          )}
          <a
            href=""
            className="flex flex-row items-center gap-2 nav-text-style mb-8 "
          >
            <SiGithub /> Repository {"➚"}
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-4 md:w-4/6 m-auto text-slate-800 md:p-8 px-4 py-8 bg-white rounded-2xl">
        <div className="my-2">
          <strong className="text-3xl mb-2">💡 What I Learned</strong>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="list-disc">
            <strong>Working on Artistic Echoes taught me how to:</strong>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span>
              Integrate a public REST API using fetch() and display dynamic
              content elegantly.
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span>
              Work with async data and loading states in Next.js.
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span>
              Create clean UI/UX designs that focus on clarity and
              accessibility.
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span>
              Handle edge cases like broken image links, missing data, or slow
              responses from external APIs.
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span>
              Improve SEO through proper use of &quot;Head&quot; and meta tags
              in Next.js.
            </li>
          </ul>

          <ul className="list-disc space-y-2">
            <strong>I also deepened my understanding of:</strong>
            <div className="bg-slate-50 p-3 rounded-md shadow-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#8DB402] mt-1">✓</span>
                Modular component architecture.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8DB402] mt-1">✓</span>
                Client-side vs. server-side rendering in Next.js.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8DB402] mt-1">✓</span>
                How to organize and plan a project with scalability in mind.
              </li>
            </div>
          </ul>
        </div>
      </section>

      {/* Challenges Faced */}
      <section className="flex flex-col gap-4 md:w-4/6 m-auto text-slate-800">
        <strong className="text-3xl">🧠 Challenges Faced</strong>
        <div>
          <strong>
            Every project has its ups and downs — here are the main challenges I
            ran into:
          </strong>
          <ul className="list-disc space-y-2">
            <li className="flex items-start gap-2 bg-white p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span>
              API Limitations: The Met’s API doesn’t always provide consistent
              data (e.g. some entries have missing images or unclear titles), so
              I had to implement graceful fallbacks and dynamic placeholders.
            </li>
            <li className="flex items-start gap-2 bg-white p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span>
              Design Consistency: Balancing creativity with usability was
              tricky. I wanted the site to feel like an “art gallery,” but it
              also needed to be usable and intuitive.
            </li>
            <li className="flex items-start gap-2 bg-white p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span>
              Mobile Responsiveness: Ensuring the art display grid looked great
              on all devices — from phones to desktops — required custom styling
              and lots of testing.
            </li>
            <li className="flex items-start gap-2 bg-white p-3 rounded-md shadow-sm my-2">
              <span className="text-[#8DB402] mt-1">✓</span>
              Deployment & Hosting: Integrating environment variables and making
              sure everything worked correctly on Vercel took some
              experimentation, especially when handling API keys securely.
            </li>

            <div className="flex flex-col md:flex-row gap-4 py-4">
              <img
                src="artistic-echoes-img/mobile-home-page.png"
                alt="Screen shot of the mobile version of Artistic-Echoes home page."
              />
              <img
                src="artistic-echoes-img/mobile-view-menu.png"
                alt="Screen shot of the mobile version of Artistic-Echoes home page."
                className="hidden md:block"
              />
            </div>
          </ul>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-10 bg-white rounded-lg text-slate-800">
        <strong className="text-2xl">📬 Reach Out Directly</strong>
        <p className="text-center">
          If you&lsquo;d rather connect without the form, feel free to email me
          directly:
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

      {/* Technologies Used */}
      <section className="flex flex-col gap-4 md:w-4/6 m-auto text-slate-800 ">
        <strong className="text-3xl">🛠️ Technologies Used</strong>
        <div>
          <span className="text-slate-500">
            Every project has its ups and downs — here are the main challenges I
            ran into:
          </span>
          <p>
            <span className="">Framework: </span>
            <span className="text-blue-500 ">Next.js</span>
          </p>
        </div>
        <div>
          <table className="table-auto border-collapse border border-gray-400 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 font-bold">
                  Libraries
                </th>
                <th className="border border-gray-300 px-4 py-2 font-bold">
                  Development Tools
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Lucide React
                </td>
                <td className="border border-gray-300 px-4 py-2">Prisma</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Axios</td>
                <td className="border border-gray-300 px-4 py-2">Jest</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Radix Ui</td>
                <td className="border border-gray-300 px-4 py-2">Tailwind</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">NextAuth</td>
                <td className="border border-gray-300 px-4 py-2">TypeScript</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why It Matters */}
      <section
        className="flex flex-col gap-4 md:w-4/6 m-auto text-slate-800 md:p-8 px-4 py-8 rounded-2xl
                    bg-gradient-to-b from-slate-50 to-slate-200"
      >
        <strong className="text-3xl text-center">🖼️ Why It Matters</strong>
        <p>
          Artistic Echoes isn’t just a tech demo — it’s a representation of how
          code can be used to{" "}
          <span className="font-semibold">
            connect people with creativity and culture.
          </span>{" "}
          <img
            src="public/wallpaper.jpg"
            alt="Wallpaper Image"
            className="md:hidden my-4"
          />
          This project blends my passion for visual design and coding, and shows
          my ability to bring real-world data into usable digital experiences.
        </p>
        <img
          src="wallpaper.jpg"
          alt="Wallpaper Image"
          className="hidden md:block"
        />
      </section>

      {/* Direct Contact Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-10 bg-white rounded-lg text-slate-800">
        <strong className="text-2xl">📬 Reach Out Directly</strong>
        <p className="text-center">
          If you&lsquo;d rather connect without the form, feel free to email me
          directly:
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

      {/* Other projects */}
      <section
        id="projects"
        className="flex flex-col items-center md:w-4/6 m-auto rounded-2xl bg-slate-800"
      >
        <strong className="text-4xl mt-4 md:mb-6 md:mt-12 text-gradient">
          Other Projects
        </strong>

        {cardData.map((card, index) => (
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
                  <Link href={card.link}>
                    <strong className="text-2xl text-slate-200">
                      {card.title}
                    </strong>
                  </Link>
                  <p className="text-slate-400 md:mb-0 mb-2">
                    {card.description}
                  </p>
                </div>

                {/* Display Tech */}
                <div className="flex justify-end gap-4">
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

      <ContactForm />
    </main>
  );
}
