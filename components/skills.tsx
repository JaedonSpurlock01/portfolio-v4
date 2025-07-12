import React from "react";
import { Title } from "./ui/title";
import { frameworks, langauges, libraries, tools } from "@/data/data";

export const Skills = () => {
  return (
    <section id="skills">
      <Title title="Skills" />

      <div className="mt-4 text-muted-foreground text-xs flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2>Languages</h2>
          <div className="flex flex-wrap gap-2">
            {langauges.map((lang) => (
              <SkillItem key={lang} label={lang} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Libraries & Frameworks</h2>
          <div className="flex flex-wrap gap-2">
            {[...libraries, ...frameworks].map((lib) => (
              <SkillItem key={lib} label={lib} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Tools</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <SkillItem key={tool} label={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SkillItem = ({ label }: { label: string }) => {
  return (
    <span className="rounded-full text-sm text-primary w-fit border border-border px-2 py-0.5">
      {label}
    </span>
  );
};
