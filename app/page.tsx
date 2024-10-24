import AboutMe from "@/components/AboutMe";
import CannectWithMe from "@/components/CannectWithMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";


export default function Home() {

  return (
    <>
      <HeroSection/>
      <AboutMe/>
      <Education/>
      <Experience/>
      <Skills/>
      <Resume/>
      <CannectWithMe/>
    </>
  );
}
