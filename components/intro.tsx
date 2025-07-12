import React from "react";
import { info } from "@/data/data";
import { AvatarImage } from "./ui/avatar-image";
import { VideoText } from "./magicui/video-text";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Globe, Upload } from "lucide-react";
import { Tech } from "./ui/tech";
import { Cube } from "./ui/cube";
import PulsatingDot from "./ui/pulsating-dot";

export const Intro = () => {
  return (
    <section>
      <div className="flex items-center gap-16 justify-between">
        <div className="flex flex-col gap-4 my-5">
          <div className="flex gap-4 z-10 items-center">
            <AvatarImage width={80} height={80} />
            <div>
              <div className="relative h-[32px] w-[220px]">
                <VideoText fontSize={"1.7rem"} src="/nature.mp4">
                  {info.name}
                </VideoText>
              </div>

              <p className="text-primary/70 text-lg font-semibold">
                {info.role}
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button variant={"outline"} size="sm" className="rounded-4xl">
              <Upload /> Resume
            </Button>
            <Button variant={"outline"} size="sm" className="rounded-4xl">
              <FaGithub /> Github
            </Button>
            <Button variant={"outline"} size="sm" className="rounded-4xl">
              <FaLinkedin /> LinkedIn
            </Button>
          </div>
        </div>

        <Cube />
      </div>
      <p className="text-primary text-sm mt-8 leading-relaxed">
        Im a <strong>full-stack software engineer</strong> from California,
        United States 🇺🇸. I have industry experience in software engineering and
        secured over $100k through student organizations. I have experience in
        full-stack development, devops, and infrastructure (IaC).
      </p>

      <p className="text-primary text-sm mt-4 flex items-center flex-wrap gap-x-1 gap-y-1">
        <span>I&apos;m</span>
        <span>experienced</span>
        <span>with</span>
        <span>languages</span>
        <span>like</span>
        <Tech technology="typescript" />
        <Tech technology="python" />
        <span>and</span>
        <Tech technology="golang" />.<span>I</span>
        <span>also</span>
        <span>work</span>
        <span>with</span>
        <span>frameworks</span>
        <span>such</span>
        <span>as</span>
        <Tech technology="react" />
        <Tech technology="sveltekit" />
        <span>and</span>
        <Tech technology="nextjs" />
        <span>along</span>
        <span>with</span>
        <span>databases</span>
        <span>like</span>
        <Tech technology="postgresql" />
        <span>and</span>
        <Tech technology="mongodb" />.
      </p>

      <p className="text-primary text-sm mt-4">
        I was born completely deaf and advocate for the hard-of-hearing (HoH).
        Learn more about my story{" "}
        <Link
          href="/blog/hearing-journey"
          className="underline underline-offset-2"
        >
          here
        </Link>
      </p>
    </section>
  );
};
