"use client";
import TextScale from "@/components/TextScale";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useGSAP(() => {
    const contaioners = document.querySelectorAll<HTMLElement>("[data-container]");
    contaioners.forEach((container, index) => {
      const tragetScale = 1 - index * 0.126;
      ScrollTrigger.create({
        trigger: container,
        start: "top center",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const scaleFactor = 1 - (1 - tragetScale) * progress * 1.5;
          gsap.to(container, {
            scale: scaleFactor,
            transformOrigin: "50% 50%",
          });
        },
      });
    });
  });
  return (
    <main className="mt-[50svh] mb-[50svh]">
      <section className="relative h-[125svh]">
        {[...Array(7)].map((_, index) => (
          <TextScale key={index} />
        ))}
        <TextScale />
        <div className="absolute top-1/2 left-1/2 z-10 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <div className="h-[1px] w-full bg-white/70"></div>
          <div className="absolute left-1/2 h-full w-[1px] -translate-x-1/2 bg-white/70"></div>
        </div>
      </section>
    </main>
  );
}
