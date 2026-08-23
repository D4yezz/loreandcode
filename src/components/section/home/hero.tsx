"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const dummyWord = ["Profesional", "E-Commerce", "UMKM", "Perusahaan"];
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex(
        (currentIndex) => (currentIndex + 1) % dummyWord.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [dummyWord.length]);

  return (
    <section className="min-h-screen px-12 font-dm-sans">
      <div className="flex w-full items-center h-[80vh]">
        <div className="w-1/2 h-full flex flex-col items-start justify-center">
          <h1 className="text-[4rem] leading-16 font-bold font-public-sans">
            Jasa Pembuatan <br /> Website {dummyWord[activeWordIndex]}
          </h1>
          <p className="text-2xl mt-3 pr-5">
            Gak pakai pusing. Kamu terima beres, kami set-up website
            berkecepatan tinggi dengan gaya sesuai keinginan dan pasti bikin
            brand kamu langsung dilirik.
          </p>
          <div className="flex mt-8 gap-4">
            <Button className="text-lg">Order Sekarang</Button>
            <Button className="text-lg">Lihat Projek</Button>
          </div>
          <ul className="flex items-center justify-center w-fit gap-4 mt-4">
            <li>IG</li>
            <li>WA</li>
            <li>X</li>
            <li>IN</li>
          </ul>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
    </section>
  );
}
