import React from "react";
// Icons
import { FaReact, FaJsSquare, FaBootstrap, FaPython, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiExpress, SiRailway, SiRender } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsFillTerminalFill } from "react-icons/bs";
import { LuServerCog } from "react-icons/lu";

export default function TechThatIKnow() {
  const iconsColor = (color) => ({
    filter: `drop-shadow(2px 4px 6px ${color}) saturate(200%)`
  });

  // Array of tech icons and labels
  const techIcons = [
    { icon: FaReact, label: "React", color: "rgb(14 165 233)" },
    { icon: FaJsSquare, label: "JavaScript", color: "rgb(253 224 71)" },
    { icon: RiTailwindCssFill, label: "Tailwind", color: "rgb(14 165 233)" },
    { icon: FaBootstrap, label: "Bootstrap", color: "rgb(99 102 241)" },
    { icon: SiMui, label: "Mui", color: "rgb(14 165 233)" },
    { icon: FaPython, label: "Python", color: "rgb(34 197 94)" },
    { icon: FaCss3Alt, label: "CSS", color: "rgb(245 158 11)" },
    { icon: FaHtml5, label: "HTML", color: "rgb(239 68 68)" },
    { icon: FaNodeJs, label: "NodeJS", color: "rgb(34 197 94)" },
    { icon: SiExpress, label: "Express", color: "rgb(253 224 71)" },
    { icon: BiLogoMongodb, label: "MongoDB", color: "rgb(34 197 94)" },
    { icon: BiLogoPostgresql, label: "Postgresql", color: "rgb(14 165 233)" },
    { icon: MdOutlineDesignServices, label: "UX.UI", color: "rgb(99 102 241)" },
    { icon: BsFillTerminalFill, label: "Command", color: "rgb(245 158 11)" },
    { icon: SiRailway, label: "Railway", color: "rgb(14 165 233)" },
    { icon: SiRender, label: "Render", color: "rgb(99 102 241)" },
    { icon: LuServerCog, label: "Restful", color: "rgb(239 68 68)" },
  ];

  return (
    <section className="flex flex-col m-4">
      <strong className="mx-4 mb-4 flex justify-center w-auto text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-500 from-20% to-green-500">
        Tech that I have used.
      </strong>
      <div className="flex flex-wrap sm:gap-5 gap-3 p-4 justify-around rounded-xl dark:bg-slate-800 dark:shadow-lg dark:shadow-indigo-600/50">
        {techIcons.map(({ icon: Icon, label, color }, index) => (
          <div key={index} className="flex gap-2 flex-col justify-center items-center icon-hover-animation">
            <Icon className="size-10 grow" style={iconsColor(color)} />
            <p className="dark:text-slate-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
