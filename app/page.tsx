import { existsSync } from "node:fs";
import path from "node:path";
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import EmailSection from "./components/EmailSection"
import Footer from "./components/Footer"
import AchievementsSection from "./components/AchievementsSection";
export default function Home() {
  return (

      <main className= "flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection hasCv={existsSync(path.join(process.cwd(), "public", "cv.pdf"))} />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      </main>
  );
}
