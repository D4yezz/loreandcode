import Footer from "@/components/layout/Footer/footer";
import Navbar from "@/components/layout/Navbar/navbar";
import AdvantagesSection from "@/components/section/home-page/advantages";
import FaqSection from "@/components/section/home-page/faq";
import HeroSection from "@/components/section/home-page/hero";
import ServiceSection from "@/components/section/home-page/service";
import TechSection from "@/components/section/home-page/tech";
import WorkflowSection from "@/components/section/home-page/workflow";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="border-3 lg:mx-10 mx-4 lg:my-8 my-4 bg-background">
        <Navbar />
        <HeroSection />
        <TechSection />
        <AdvantagesSection />
        <ServiceSection />
        <WorkflowSection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  );
}
