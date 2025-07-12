"use client";

import React from "react";
import ProjectCard from "./ui/project-card";
import { projects } from "@/data/data";
import { Title } from "./ui/title";

export default function Projects() {
  return (
    <section id="projects">
      <Title title="Projects" />

      <ul className="flex flex-col gap-4 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} card={project} />
        ))}
      </ul>
    </section>
  );
}
