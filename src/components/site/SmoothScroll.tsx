import { useEffect, type ReactNode } from "react";

let lenisInstance: any = null;
let gsapTickerCallback: ((time: number) => void) | null = null;
let localRafId = 0;

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (lenisInstance) return undefined;

    let isActive = true;
    let instance: any = null;

    const init = async () => {
      const { default: Lenis } = await import("lenis");

      instance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      if (!isActive) {
        instance.destroy();
        return;
      }

      lenisInstance = instance;

      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        instance.on("scroll", () => {
          ScrollTrigger.update();
        });

        gsapTickerCallback = (time: number) => {
          instance.raf(time * 1000);
        };
        gsap.ticker.add(gsapTickerCallback);
        gsap.ticker.lagSmoothing(0);
      } catch {
        const loop = (time: number) => {
          instance.raf(time);
          localRafId = window.requestAnimationFrame(loop);
        };
        localRafId = window.requestAnimationFrame(loop);
      }
    };

    void init();

    return () => {
      isActive = false;

      if (instance && lenisInstance === instance) {
        instance.destroy();
        lenisInstance = null;
      }

      if (localRafId) {
        window.cancelAnimationFrame(localRafId);
        localRafId = 0;
      }

      if (gsapTickerCallback) {
        void import("gsap")
          .then(({ gsap }) => {
            if (gsapTickerCallback) {
              gsap.ticker.remove(gsapTickerCallback);
            }
            gsapTickerCallback = null;
          })
          .catch(() => {});
      }
    };
  }, []);

  return <>{children}</>;
}
