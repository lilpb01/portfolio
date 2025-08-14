import { useRef, useCallback } from "react";
import Image from "next/image";

type Shot = { src: string; alt: string };

interface ScreenshotCarouselProps {
  shots: Shot[];
  /** Optional image dimensions for next/image (defaults) */
  width?: number;
  height?: number;
}

export default function ScreenshotCarousel({ shots }: ScreenshotCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = useCallback((dir: "prev" | "next") => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.round(node.clientWidth * 0.7);
    node.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  }, []);

  return (
    <section className="mt-10">


      {/* group enables hover reveal for arrows */}
      <div className="relative group">
        {/* Track (no border/padding) */}
        <div
          ref={scrollerRef}
          className="overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

          <div className="flex gap-3 snap-x snap-mandatory">
            {shots.map((s) => (
              <div key={s.src} className="snap-center shrink-0 basis-full md:basis-[70%]">
                {/* Minimal slide: no border; soft shadow; controlled aspect */}
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.25)]">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 768px) 70vw, 100vw"
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows: small, subtle, only on hover */}
        <button
          type="button"
          onClick={() => scrollByAmount("prev")}
          className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition rounded-full border border-white/10 bg-black/40 px-2 py-1 text-sm text-zinc-200 backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-zinc-400/30"
          aria-label="Previous screenshot"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount("next")}
          className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition rounded-full border border-white/10 bg-black/40 px-2 py-1 text-sm text-zinc-200 backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-zinc-400/30"
          aria-label="Next screenshot"
        >
          →
        </button>
      </div>

      <p className="mt-2 text-xs text-zinc-500">Swipe on mobile · Use arrows on desktop</p>
    </section>
  );
}