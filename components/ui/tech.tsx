import { cn } from "@/lib/utils";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { FaPython, FaReact, FaAws } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiSvelteFill, RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import React from "react";

type TechnologyType =
  | "typescript"
  | "python"
  | "golang"
  | "react"
  | "sveltekit"
  | "nextjs"
  | "postgresql"
  | "mongodb"
  | "aws";

const styles: Record<TechnologyType, string> = {
  typescript: "hover:border-blue-300 hover:bg-blue-100 hover:text-blue-500",
  python: "hover:border-yellow-700 hover:bg-yellow-200 hover:text-yellow-800",
  golang: "hover:border-cyan-300 hover:bg-cyan-100 hover:text-cyan-500",
  react: "hover:border-sky-300 hover:bg-sky-100 hover:text-sky-500",
  sveltekit:
    "hover:border-orange-300 hover:bg-orange-100 hover:text-orange-500",
  nextjs: "hover:border-neutral-600 hover:bg-neutral-300",
  postgresql:
    "hover:border-indigo-300 hover:bg-indigo-100 hover:text-indigo-500",
  mongodb:
    "hover:border-emerald-300 hover:bg-emerald-100 hover:text-emerald-500",
  aws: "hover:border-amber-300 hover:bg-amber-100 hover:text-amber-500",
};

const icons: Record<TechnologyType, React.ReactNode> = {
  typescript: <BiLogoTypescript />,
  python: <FaPython />,
  golang: <FaGolang />,
  react: <FaReact />,
  sveltekit: <RiSvelteFill />,
  nextjs: <RiNextjsFill />,
  postgresql: <BiLogoPostgresql />,
  mongodb: <SiMongodb />,
  aws: <FaAws />,
};

interface Props {
  technology: TechnologyType;
}

export const Tech = ({ technology }: Props) => {
  return (
    <span
      className={cn(
        "px-1.5 flex w-fit text-xs transition-colors font-medium items-center gap-1 py-0.5 rounded-sm border",
        styles[technology]
      )}
    >
      {icons[technology]} {technology}
    </span>
  );
};
