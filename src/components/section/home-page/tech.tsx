"use client";

import LogoLoop from "@/components/ui/LogoLoop";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  SiExpress,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

export default function TechSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const logoSize = isDesktop ? 50 : 40;
  const techLogos = [
    {
      node: (
        <SiReact
          size={logoSize}
          className="bg-third w-14 h-14 p-2 shadow-shadow border-2"
        />
      ),
      title: "React",
    },
    {
      node: (
        <SiNextdotjs
          size={logoSize}
          className="bg-third w-14 h-14 p-2 shadow-shadow border-2"
        />
      ),
      title: "Next.js",
    },
    {
      node: (
        <SiJavascript
          size={logoSize}
          className="bg-third w-14 h-14 p-2 shadow-shadow border-2"
        />
      ),
      title: "JavaScript",
    },
    {
      node: (
        <SiTypescript
          size={logoSize}
          className="bg-third w-14 h-14 p-2 shadow-shadow border-2"
        />
      ),
      title: "TypeScript",
    },
    {
      node: (
        <SiTailwindcss
          size={logoSize}
          className="bg-third w-14 h-14 p-2 shadow-shadow border-2"
        />
      ),
      title: "Tailwind CSS",
    },
    {
      node: (
        <SiExpress
          size={logoSize}
          className="bg-third w-14 h-14 p-2 shadow-shadow border-2"
        />
      ),
      title: "Express.js",
    },
    {
      node: (
        <SiMysql
          size={logoSize}
          className="bg-third w-14 h-14 p-2 shadow-shadow border-2"
        />
      ),
      title: "MySQL",
    },
    {
      node: (
        <SiPostgresql
          size={logoSize}
          className="bg-third w-14 h-14 p-2 shadow-shadow border-2"
        />
      ),
      title: "PostgreSQL",
    },
    {
      node: (
        <SiSupabase
          size={logoSize}
          className="bg-third w-14 h-14 p-2 shadow-shadow border-2"
        />
      ),
      title: "Supabase",
    },
  ];
  return (
    <section className="w-full border-y-3 bg-main lg:py-8 py-4">
      <LogoLoop
        logos={techLogos}
        speed={isDesktop ? 80 : 60}
        direction="left"
        logoHeight={60}
        gap={isDesktop ? 100 : 50}
        hoverSpeed={isDesktop ? 30 : 20}
        ariaLabel="Technology partners"
      />
    </section>
  );
}
