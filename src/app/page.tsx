import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import CarouselPosts from "@/components/CarouselPosts";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Hero/>
      <FeaturedPosts/>
      <CarouselPosts />
    </>
  )
}
