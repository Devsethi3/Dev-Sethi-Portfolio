import { cn } from "@/lib/utils";
import Marquee from "./Marquee";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiGooglecloud,
  SiMongodb,
  SiPostman,
  SiTypescript,
  SiVercel,
  SiVite,
  SiZod,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFigma } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";

const techStack = [
  { icon: FaReact, name: "React" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaHtml5, name: "HTML" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaJsSquare, name: "JavaScript" },
  { icon: FaGitAlt, name: "Git" },
  { icon: RiNextjsFill, name: "Next JS" },
  { icon: SiVercel, name: "Vercel" },
  { icon: FaGithub, name: "GitHub" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS" },
  { icon: SiVite, name: "Vite" },
  { icon: RiFirebaseFill, name: "Firebase" },
  { icon: SiMongodb, name: "Mongo DB" },
  { icon: BiLogoPostgresql, name: "PostgreSQL" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiGooglecloud, name: "Google Cloud" },
  { icon: IoLogoFigma, name: "Figma" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiZod, name: "Zod" },
  { icon: TbBrandRedux, name: "Redux" },
];

const TechStackCard = ({
  icon: Icon,
  name,
}: {
  icon: React.ElementType;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative flex flex-col items-center justify-center w-[7rem] sm:w-48 md:w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // dark styles only
        "border-gray-50/[.1] bg-gray-900/[.01] hover:bg-gray-900/[.05]"
      )}
    >
      <Icon className="mb-2 text-white lg:text-4xl md:text-3xl text-2xl" />
      <figcaption className="lg:text-sm text-xs font-medium text-white">
        {name}
      </figcaption>
    </figure>
  );
};

const TechStackMarquee = () => {
  return (
    <div className="relative flex lg:py-10 py-8 w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:90s]">
        {techStack.map((item, index) => (
          <TechStackCard key={index} icon={item.icon} name={item.name} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:90s]">
        {techStack.map((item, index) => (
          <TechStackCard key={index} icon={item.icon} name={item.name} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
};

export default TechStackMarquee;
