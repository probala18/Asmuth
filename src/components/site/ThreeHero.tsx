import { useEffect, useRef } from "react";

/**
 * Subtle Three.js hero background — instanced floating points
 * forming a soft, drifting field. Cheap; capped DPR; respects prefers-reduced-motion.
 * Theme-aware: changes particle colors and blending when switching light/dark mode.
 */
export function ThreeHero({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mount = mountRef.current;
    if (!mount) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
      camera.position.z = 6;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      // Particles
      const COUNT = 1400;
      const positions = new Float32Array(COUNT * 3);
      const colors = new Float32Array(COUNT * 3);
      
      // Store types so we can swap colors dynamically
      const particleTypes = new Uint8Array(COUNT); // 1 for emerald, 0 for cyan

      for (let i = 0; i < COUNT; i++) {
        const r = 4 + Math.random() * 4;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
        positions[i * 3 + 2] = r * Math.cos(phi) * 0.7 - 1;
        
        particleTypes[i] = Math.random() < 0.5 ? 1 : 0;
      }

      // Create a round circular dot texture dynamically
      const canvas = document.createElement("canvas");
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.arc(8, 8, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }
      const texture = new THREE.CanvasTexture(canvas);

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.PointsMaterial({
        size: 0.045, // slightly larger to look natural as a circle
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        map: texture,
        alphaTest: 0.01,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);

      // Theme logic helper
      const updateThemeColors = (isDark: boolean) => {
        const colorArr = geo.attributes.color.array as Float32Array;
        const emeraldColor = new THREE.Color(isDark ? 0x10b981 : 0x0f9d84);
        const cyanColor = new THREE.Color(isDark ? 0x22d3ee : 0x38bdf8);

        for (let i = 0; i < COUNT; i++) {
          const c = particleTypes[i] === 1 ? emeraldColor : cyanColor;
          colorArr[i * 3 + 0] = c.r;
          colorArr[i * 3 + 1] = c.g;
          colorArr[i * 3 + 2] = c.b;
        }
        geo.attributes.color.needsUpdate = true;

        if (isDark) {
          mat.blending = THREE.AdditiveBlending;
          mat.opacity = 0.85;
        } else {
          mat.blending = THREE.NormalBlending;
          mat.opacity = 0.45;
        }
        mat.needsUpdate = true;
      };

      // Set initial colors
      const initialDark = document.documentElement.classList.contains("dark");
      updateThemeColors(initialDark);

      // Listen to theme changes
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.attributeName === "class") {
            const dark = document.documentElement.classList.contains("dark");
            updateThemeColors(dark);
          }
        }
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

      let mx = 0, my = 0;
      const onMove = (e: MouseEvent) => {
        const r = mount.getBoundingClientRect();
        mx = ((e.clientX - r.left) / r.width - 0.5) * 0.6;
        my = ((e.clientY - r.top) / r.height - 0.5) * 0.6;
      };
      window.addEventListener("mousemove", onMove, { passive: true });

      const start = performance.now();
      const tick = () => {
        const t = (performance.now() - start) * 0.0001;
        points.rotation.y = t * 1.2 + mx * 0.4;
        points.rotation.x = Math.sin(t * 0.8) * 0.15 + my * 0.3;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      const onResize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      cleanup = () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        geo.dispose();
        mat.dispose();
        texture.dispose();
        if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      };
    })();

    return () => cleanup?.();
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}
