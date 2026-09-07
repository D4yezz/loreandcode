"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Lenis from "lenis";
import { createContext, useContext } from "react";

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
    });

    lenisRef.current = lenis;

    // 2. Request Animation Frame Loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // 3. Cleanup instance saat unmount/pindah halaman agar tidak berbenturan
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 4. FIX UTAMA MASALAH NGEBOUNCE / ROUTE CHANGE:
  // Reset posisi Lenis saat pathname atau hash URL berubah (misal kembali dari /contact ke /#service)
  useEffect(() => {
    if (!lenisRef.current) return;

    const hash = window.location.hash;

    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        // Beri delay sedikit agar DOM halaman tuju selesai dirender
        setTimeout(() => {
          lenisRef.current?.scrollTo(targetElement as HTMLElement, {
            offset: -80, // Penyesuaian offset tinggi Navbar Fixed Anda
            immediate: false,
          });
        }, 100);
      }
    } else {
      // Jika kembali ke halaman tanpa hash, scroll balik ke paling atas
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
