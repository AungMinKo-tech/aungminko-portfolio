import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";

const techs = [
  { icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
  { icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
  { icon: FaBootstrap, color: "text-blue-600", name: "Bootstrap" },
  { icon: SiTailwindcss, color: "text-sky-400", name: "Tailwind CSS" },
  { icon: FaJs, color: "text-yellow-400", name: "JavaScript" },
  { icon: FaReact, color: "text-cyan-400", name: "React" },
  { icon: SiPhp, color: "text-blue-500", name: "PHP" },
  { icon: SiLaravel, color: "text-red-500", name: "Laravel" },
  { icon: GrMysql, color: "text-blue-300", name: "MySQL" },
  { icon: SiPostgresql, color: "text-blue-300", name: "Postgres" },
  { icon: FaGitAlt, color: "text-red-500", name: "Git" },
];

export default function TechStack() {
  return (
    <div className="flex flex-wrap gap-4 text-3xl mt-10">
      {techs.map(({ icon: Icon, color, name }) => (
        <Icon
          key={name}
          title={name}
          className={`${color} hover:scale-110 transition text-6xl`}
        />
      ))}
    </div>
  );
}
