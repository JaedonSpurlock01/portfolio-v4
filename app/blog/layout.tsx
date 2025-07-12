"use server";

import BlogContent from "@/components/markdown/blog-content";
import { getBlogBySlug } from "@/lib/utils";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slug = headers().get("x-next-blog-slug") as string;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  blog.component = undefined;

  return (
    <div className="font-[family-name:var(--font-geist-sans)] page-layout h-full justify-between">
      <div className="flex flex-col h-full items-center gap-8">
        <Suspense fallback={<div>Loading…</div>}>
          <BlogContent blog={blog}>{children}</BlogContent>
        </Suspense>
      </div>
    </div>
  );
}
