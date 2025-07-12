import type { MDXComponents } from "mdx/types";
import MDXCode from "./components/markdown/MDXCode";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: MDXCode,
  };
}
