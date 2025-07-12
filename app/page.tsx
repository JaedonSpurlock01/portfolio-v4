import WorkExperience from "@/components/work-experience";
import { Intro } from "@/components/intro";
import Projects from "@/components/projects";
import StaggerContainer from "@/components/ui/stagger-container";
import Education from "@/components/education";
import { Contact } from "@/components/contact";
import Photos from "@/components/photos";

export default function Home() {
  return (
    <StaggerContainer className="contents">
      <Intro />
      <hr />
      <WorkExperience />
      <hr />
      <Projects />
      <hr />
      <Education />
      <hr />
      <Photos />
      <hr />
      <Contact />
    </StaggerContainer>
  );
}
