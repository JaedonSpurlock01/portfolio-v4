import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 mb-24">
      <hr />

      <section className="flex justify-between gap-2">
        <p className="text-primary/60">
          Jaedon Spurlock @ {new Date().getFullYear()}
        </p>

        <div className="flex gap-4 items-center">
          <LinkItem href="" label="Github" icon={<FaGithub size={24} />} />
          <LinkItem href="" label="LinkedIn" icon={<FaLinkedin size={24} />} />
        </div>
      </section>
    </footer>
  );
};

const LinkItem = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="flex items-center gap-1 text-xs text-primary/60 hover:text-primary"
    >
      {icon}

      <span className="underline underline-offset-2">{label}</span>
    </a>
  );
};
