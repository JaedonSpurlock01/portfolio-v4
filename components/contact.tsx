import React from "react";
import { Title } from "./ui/title";
import { VideoText } from "./magicui/video-text";

export const Contact = () => {
  return (
    <section id="contact">
      <Title title="Contact" />

      <div className="mt-4 relative h-[32px] w-[185px]">
        <VideoText fontSize={"2rem"} src="/nature.mp4">
          Get in touch
        </VideoText>
      </div>

      <p className="mt-3">
        Want to connect? Email me at{" "}
        <strong>jaedonaspurlock@outlook.com</strong> or message me on Linkedin
        and I&apos;ll respond as quick as possible.
      </p>
    </section>
  );
};
