import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PreviewCards from "@/components/PreviewCards";
import FeatureBar from "@/components/FeatureBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <PreviewCards />
      <FeatureBar />
    </main>
  );
}
