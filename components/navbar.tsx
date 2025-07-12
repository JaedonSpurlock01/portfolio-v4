"use client";

import React from "react";
import { ToggleTheme } from "./ui/toggle-theme";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import Link from "next/link";
import { AvatarImage } from "./ui/avatar-image";
import { info } from "@/data/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  const items = [
    {
      href: "https://www.linkedin.com/in/jaedon-spurlock/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://github.com/JaedonSpurlock01",
      label: "Github",
      icon: <FaGithub />,
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="mt-4 w-full md:w-[calc(100%+4rem)] relative md:-translate-x-[2rem] rounded-4xl px-3 py-2 flex items-center justify-between custom-background">
        <Link href="/" className="flex items-center gap-2">
          <AvatarImage width={40} height={40} />
          {info.name}
        </Link>

        <div className="flex items-center gap-2 w-max ml-auto">
          {items.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <ToggleTheme />
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={href} target="_blank">
          <Button variant="outline" size="icon" className={"rounded-full"}>
            {icon}
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};
