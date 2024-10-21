import React from "react";
// Icons
import { FaReact, FaJsSquare, FaBootstrap, FaPython, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiExpress, SiRedux, SiRailway, SiRender } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsFillTerminalFill } from "react-icons/bs";
import { LuServerCog } from "react-icons/lu";

export default function TechThatIKnow() {
  const iconsColor = (color) => ({
    filter: `drop-shadow(2px 4px 6px ${color}) saturate(200%)`
  });

  return (
    <>
      <section className="flex flex-col m-4 | rounded-lg bg-clip-content p-4 border-2 border-blue-300 border-dashed">
        <strong className="mx-4 mb-4 flex justify-center w-auto text-2xl tracking-wider | py-4 border-b-2 border-blue-300 border-dashed w-4/6">
          Tech that I have use.
        </strong>
        <div className="flex flex-wrap gap-2 p-4 justify-around ">
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <FaReact className="size-10 grow" style={iconsColor('rgb(14 165 233)')} />{/*Blue*/}
            <p>React</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <FaJsSquare className="size-10 grow" style={iconsColor('rgb(253 224 71)')} />{/*Yellow*/}
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <RiTailwindCssFill className="size-10 grow" style={iconsColor('rgb(14 165 233)')} />{/*Blue*/}
            <p>Tailwind</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <FaBootstrap className="size-10 grow" style={iconsColor('rgb(99 102 241)')} />{/*Indigo*/}
            <p>Bootstrap</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <SiMui className="size-10 grow" style={iconsColor('rgb(14 165 233)')} />{/*Blue*/}
            <p>Mui</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <FaPython className="size-10 grow" style={iconsColor('rgb(34 197 94)')} />{/*Green*/}
            <p>Python</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <FaCss3Alt className="size-10 grow" style={iconsColor('rgb(245 158 11)')} />{/*Orange*/}
            <p>CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <FaHtml5 className="size-10 grow" style={iconsColor('rgb(239 68 68)')} />{/*Red*/}
            <p>HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <FaNodeJs className="size-10 grow" style={iconsColor('rgb(34 197 94)')} />{/*Green*/}
            <p>NodeJS</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <SiExpress className="size-10 grow" style={iconsColor('rgb(253 224 71)')} />{/*Yellow*/}
            <p>Express</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <BiLogoMongodb className="size-10 grow" style={iconsColor('rgb(34 197 94)')} />{/*Green*/}
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <BiLogoPostgresql className="size-10 grow" style={iconsColor('rgb(14 165 233)')} />{/*Blue*/}
            <p>Postgresql</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <MdOutlineDesignServices className="size-10 grow" style={iconsColor('rgb(99 102 241)')} />{/*Indigo*/}
            <p>UX.UI</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <BsFillTerminalFill className="size-10 grow" style={iconsColor('rgb(245 158 11)')} />{/*Orange*/}
            <p>Command</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <SiRailway className="size-10 grow" style={iconsColor('rgb(14 165 233)')} />{/*Blue*/}
            <p>Railway</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <SiRender className="size-10 grow" style={iconsColor('rgb(99 102 241)')} />{/*Indigo*/}
            <p>Render</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <LuServerCog className="size-10 grow" style={iconsColor('rgb(239 68 68)')} />{/*Red*/}
            <p>Restful</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <SiRedux className="size-10 grow" style={iconsColor('rgb(245 158 11)')} />{/*Orange*/}
            <p>Redux</p>
          </div>
          <div className="flex flex-col justify-center items-center icon-hover-animation">
            <BiLogoTypescript className="size-10 grow" style={iconsColor('rgb(239 68 68)')} />{/*Red*/}
            <p>TypeScript</p>
          </div>
        </div>
      </section>
    </>
  )
}