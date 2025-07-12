import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

export const AvatarImage = ({ className, width, height }: Props) => {
  return (
    <Image
      className={cn("border rounded-full border-border bg-white", className)}
      src="/pfp.png"
      alt="avatar"
      width={width ? width : 40}
      height={height ? height : 40}
    />
  );
};
