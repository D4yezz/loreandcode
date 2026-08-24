import Navbar from "@/components/common/Navbar/navbar";
import HeroSection from "@/components/section/home-page/hero";
import TechSection from "@/components/section/home-page/tech";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="border-3 lg:mx-10 mx-4 lg:my-8 my-4 bg-background">
        <Navbar />
        <HeroSection />
        <TechSection />
      </div>
    </main>
  );
}
