import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PreviewCards from "@/components/PreviewCards";
import FeatureBar from "@/components/FeatureBar";
import Transition from "@/components/Transition";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <PreviewCards />
      <FeatureBar />
      <Transition />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
