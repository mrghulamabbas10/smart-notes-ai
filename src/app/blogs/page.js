import React from "react";
import BlogsHero from "@/components/blogs/BlogsHero";
import Blogs from "@/components/blogs/Blogs";
import { Footer } from "@/components/home/Footer";

export default function Page() {
  return (
    <div>
      <BlogsHero />
      <Blogs />
      <Footer />
    </div>
  );
}
