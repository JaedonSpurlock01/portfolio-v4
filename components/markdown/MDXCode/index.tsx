"use server";

import { Code } from "bright";
import { code_theme_dark, code_theme_light } from "./code_theme.ts";

Code.theme = {
  light: code_theme_light,
  dark: code_theme_dark,
  lightSelector: "html.light",
};

export default async function MDXCode({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <Code>{children}</Code>;
}
