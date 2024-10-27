import AboutMe from "@/components/AboutMe";
import CannectWithMe from "@/components/CannectWithMe";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
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
      <ContactMe/>
      <Portfolio/>
    </>
  );
}
