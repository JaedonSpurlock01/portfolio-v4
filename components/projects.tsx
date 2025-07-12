"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import ProjectCard from "./ui/project-card";
import { projects } from "@/data/data";
import { Title } from "./ui/title";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "motion/react";
import { ProjectModal } from "./ui/project-modal";

export default function Projects() {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects">
      <Title title="Projects" />

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-[60]"
          />
        )}
      </AnimatePresence>

      <ProjectModal active={active} setActive={setActive} id={id} ref={ref} />

      <ul className="flex flex-col gap-4 mt-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            card={project}
            id={id}
            setActive={setActive}
          />
        ))}
      </ul>
    </section>
  );
}
