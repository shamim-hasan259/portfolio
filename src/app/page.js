import About from "@/components/About";
import Hero from "@/components/Hero";
import EducationSection from "@/components/EaducationSection";
import SkillsSection from "@/components/SkillSEction";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EducationSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
