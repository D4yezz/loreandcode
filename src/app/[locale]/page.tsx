import Navbar from "@/components/common/Navbar/navbar";
import HeroSection from "@/components/section/home/hero";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("main");
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
}
