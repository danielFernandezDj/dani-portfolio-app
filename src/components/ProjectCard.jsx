// src/components/ProjectCard.jsx
import { Link } from "react-router-dom";

export default function ProjectCard({ title, image, link, description }) {
  return (
    <Link to={link}>
      <div className="bg-slate-800 h-80 rounded-lg overflow-hidden border-2 border-slate-50/0 hover:border-indigo-600 transition duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-slate-400">{description}</p>
        </div>
      </div>
    </Link>
  );
}