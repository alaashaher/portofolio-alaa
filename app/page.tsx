"use client";
import HeroSection from "@/components/Home/HeroSection";
import MyWork from "@/components/Home/MyWork";
import SkillsSection from "@/components/Home/SkillsSection";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, []);
  return (
    <div >
      <HeroSection />
      <SkillsSection />
      <MyWork />
    </div>
  );
}
