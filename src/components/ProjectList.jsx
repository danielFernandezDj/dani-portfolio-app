import React from "react";

export default function ProjectList() {
  return (
    <>
      <section className="flex flex-col w-full m-4 p-4 gap-4 justify-center self-center rounded-xl ">
        <strong className="text-2xl tracking-wider text-slate-800">
          PROJECTS
        </strong>
        <div className="flex flex-wrap w-full gap-4">
          {/* CARD 1 */}
          <div className="flex flex-col gap-4 p-4 rounded-lg bg-indigo-50 border-solid border-2 sm:shadow-none shadow-md sm:hover:border-blue-400 sm:border-blue-100 border-blue-400
              transition duration-300
            ">
            <div className="flex  justify-between items-center">
              <div>
                <strong className="text-lg text-blue-500">Word Games</strong>
                <p className="font-extralight">Multi games web app.</p>
              </div>
              <button className="p-2 text-white font-bold tracking-wider btn-home-animation"
              >
                See More
              </button>
            </div>
            <div className="flex gap-2">
              <img className="rounded-md" src="https://fakeimg.pl/100x100" alt="Project Image" />
              <img className="rounded-md" src="https://fakeimg.pl/100x100" alt="Project Image" />
              <img className="rounded-md" src="https://fakeimg.pl/100x100" alt="Project Image" />
            </div>
          </div>

          <div className="hidden sm:block flex justify-center self-center h-24 w-px | bg-gradient-to-t from-blue-200 to-purple-200"></div>
        </div>
      </section>
    </>
  )
}