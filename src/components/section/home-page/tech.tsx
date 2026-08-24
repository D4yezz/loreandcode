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
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const logoSize = isDekstop ? 50 : 40;
  const techLogos = [
    { node: <SiReact size={logoSize} />, title: "React" },
    {
      node: <SiNextdotjs size={logoSize} />,
      title: "Next.js",
    },
    {
      node: <SiJavascript size={logoSize} />,
      title: "JavaScript",
    },
    {
      node: <SiTypescript size={logoSize} />,
      title: "TypeScript",
    },
    {
      node: <SiTailwindcss size={logoSize} />,
      title: "Tailwind CSS",
    },
    {
      node: <SiExpress size={logoSize} />,
      title: "Express.js",
    },
    {
      node: <SiMysql size={logoSize} />,
      title: "MySQL",
    },
    {
      node: <SiPostgresql size={logoSize} />,
      title: "PostgreSQL",
    },
    {
      node: <SiSupabase size={logoSize} />,
      title: "Supabase",
    },
  ];
  return (
    <section className="w-full border-y-3 bg-main lg:py-8 py-4">
      <LogoLoop
        logos={techLogos}
        speed={isDekstop ? 80 : 60}
        direction="left"
        logoHeight={60}
        gap={isDekstop ? 100 : 50}
        hoverSpeed={isDekstop ? 40 : 30}
        ariaLabel="Technology partners"
      />
    </section>
  );
}
