import React from "react";
import BlogsHero from "@/components/blogs/BlogsHero";
import Blogs from "@/components/blogs/Blogs";
import { Footer } from "@/components/home/Footer";
import Header from "@/components/home/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <BlogsHero />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
