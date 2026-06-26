import { useEffect, type ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenisInstance: any = null;
    let gsapTickerCallback: ((time: number) => void) | null = null;
    let localRafId = 0;

    (async () => {
      const { default: Lenis } = await import("lenis");
      
      const instance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisInstance = instance;

      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        instance.on("scroll", () => {
          ScrollTrigger.update();
        });

        // Use GSAP ticker as the single animation loop
        gsapTickerCallback = (time: number) => {
          instance.raf(time * 1000);
        };
        gsap.ticker.add(gsapTickerCallback);
        gsap.ticker.lagSmoothing(0);
      } catch (err) {
        // Fallback to native requestAnimationFrame loop if GSAP fails to load
        const loop = (time: number) => {
          instance.raf(time);
          localRafId = requestAnimationFrame(loop);
        };
        localRafId = requestAnimationFrame(loop);
      }
    })();

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
      if (localRafId) {
        cancelAnimationFrame(localRafId);
      }
      if (gsapTickerCallback) {
        import("gsap").then(({ gsap }) => {
          if (gsapTickerCallback) gsap.ticker.remove(gsapTickerCallback);
        }).catch(() => {});
      }
    };
  }, []);

  return <>{children}</>;
}
