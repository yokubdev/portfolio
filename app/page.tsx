import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "yokubjon | portfolio",
  description: "yokubjon.uz",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Blog />
    </>
  );
}
