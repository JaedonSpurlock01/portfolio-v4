"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import BlogInfo from "@/components/markdown/blog-info";
import { Blog } from "@/types/blog";

export default function BlogContent({
  blog,
  children,
}: {
  children: React.ReactNode;
  blog: Blog;
}) {
  if (!blog) {
    notFound();
  }

  const { metadata } = blog;
  const image = metadata.image;

  return (
    <>
      <article className="max-content-width flex flex-col gap-8">
        {image && (
          <div className="flex max-h-[60vh] justify-center">
            <Image
              src={image}
              alt={String(metadata.title)}
              width={1200}
              height={630}
              className="rounded-md object-scale-down"
            />
          </div>
        )}
        <BlogInfo blog={blog} />
        <div className="prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden prose-a:no-underline prose-p:text-sm prose-headings:text-lg prose-p:text-secondary max-w-none">
          {children}
        </div>
      </article>
    </>
  );
}
