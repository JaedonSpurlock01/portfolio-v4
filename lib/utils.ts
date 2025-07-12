import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Blog } from "@/types/blog";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// @ts-expect-error No need to check type
const importAll = (r): Promise<Blog[]> =>
  Promise.all(
    r.keys().map(async (fileName: string) => {
      const blogModule = r(fileName);
      const slug = fileName.slice(2).replace(/\/page\.mdx$/, "");

      return {
        slug,
        metadata: blogModule?.metadata,
        component: blogModule?.default,
        readingTime: blogModule?.metadata_readingTime,
      } satisfies Blog;
    })
  );

export const getAllBlogs = async (): Promise<Blog[]> =>
  importAll(
    //@ts-expect-error No need to check types
    require.context("../app/blog/", true, /^\.\/[^\/]+\/page\.mdx$/)
  );

export const getBlogBySlug = async (slug: string): Promise<Blog> => {
  const blogModule = await import(`../app/blog/${slug}/page.mdx`);

  return {
    slug,
    component: blogModule?.default,
    metadata: blogModule?.metadata,
    readingTime: blogModule?.metadata_readingTime,
  };
};
