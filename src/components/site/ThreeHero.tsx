import { useEffect, useRef } from "react";

interface ThreeHeroProps {
  className?: string;
}

/**
 * Subtle Three.js hero background with instanced floating particles forming
 * a soft, drifting field. Optimized for performance, accessibility, and theme awareness.
 *
 * Features:
 * - Respects prefers-reduced-motion
 * - Theme-aware (light/dark mode with appropriate colors and blending)
 * - Mobile-optimized (reduced particles, device-specific rendering)
 * - Robust error handling and cleanup
 * - Mouse interaction with parallax effect
 * - Responsive to window resizing
 */
export function ThreeHero({ className = "" }: ThreeHeroProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mount = mountRef.current;
    if (!mount) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Disable on very low-end devices or low memory situations
    const deviceMemory = (navigator as any).deviceMemory;
    if (deviceMemory && deviceMemory < 2) return;

    // Initialize Three.js scene
    const initScene = async () => {
      try {
        const THREE = await import("three");

        const width = Math.max(mount.clientWidth, 1);
        const height = Math.max(mount.clientHeight, 1);

        if (width === 0 || height === 0) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
        camera.position.z = 6;

        // Renderer configuration
        const isMobile = /iPhone|iPad|Android|webOS/i.test(navigator.userAgent);
        const dpr = Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.6);
        const particleCount = isMobile ? 800 : 1400;

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          precision: "mediump",
          powerPreference: isMobile ? "low-power" : "default",
        });

        renderer.setPixelRatio(dpr);
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        // Particle geometry setup
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const particleTypes = new Uint8Array(particleCount); // 1 = emerald, 0 = cyan

        // Generate particle positions in a spherical distribution
        for (let i = 0; i < particleCount; i++) {
          const radius = 4 + Math.random() * 4;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);

          positions[i * 3 + 0] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.55;
          positions[i * 3 + 2] = radius * Math.cos(phi) * 0.7 - 1;

          particleTypes[i] = Math.random() < 0.5 ? 1 : 0;
        }

        // Create circular dot texture
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
        texture.colorSpace = THREE.SRGBColorSpace;

        // Geometry and material
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
          size: isMobile ? 0.018 : 0.020,
          vertexColors: true,
          transparent: true,
          depthWrite: false,
          map: texture,
          alphaTest: 0.01,
          sizeAttenuation: true,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Theme color management
        const updateThemeColors = (isDark: boolean) => {
          const colorArray = geometry.attributes.color.array as Float32Array;

          if (isDark) {
            // Restore dark mode settings EXACTLY as they were originally
            material.size = isMobile ? 0.018 : 0.020;
            material.sizeAttenuation = true;
            material.opacity = 0.85;
            material.blending = THREE.AdditiveBlending;

            const emeraldColor = new THREE.Color(0x10b981);
            const cyanColor = new THREE.Color(0x22d3ee);

            for (let i = 0; i < particleCount; i++) {
              const color = particleTypes[i] === 1 ? emeraldColor : cyanColor;
              colorArray[i * 3 + 0] = color.r;
              colorArray[i * 3 + 1] = color.g;
              colorArray[i * 3 + 2] = color.b;
            }
          } else {
            // Light mode: Make them extremely subtle, faint, and desaturated
            // to prevent them from looking like dust/noise on the light background
            material.size = isMobile ? 0.010 : 0.012;
            material.sizeAttenuation = true;
            material.opacity = 0.08; // Very faint, almost invisible
            material.blending = THREE.NormalBlending;

            const lightColor1 = new THREE.Color(0x94a3b8); // Slate-400
            const lightColor2 = new THREE.Color(0xcbd5e1); // Slate-300

            for (let i = 0; i < particleCount; i++) {
              const color = particleTypes[i] === 1 ? lightColor1 : lightColor2;
              colorArray[i * 3 + 0] = color.r;
              colorArray[i * 3 + 1] = color.g;
              colorArray[i * 3 + 2] = color.b;
            }
          }

          geometry.attributes.color.needsUpdate = true;
          material.needsUpdate = true;
        };

        // Initialize with current theme
        const isDarkMode = document.documentElement.classList.contains("dark");
        updateThemeColors(isDarkMode);

        // Listen for theme changes
        const observer = new MutationObserver(() => {
          const dark = document.documentElement.classList.contains("dark");
          updateThemeColors(dark);
        });

        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["class"],
        });

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event: MouseEvent) => {
          const rect = mount.getBoundingClientRect();
          mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.6;
          mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.6;
        };

        window.addEventListener("mousemove", handleMouseMove, {
          passive: true,
        });

        // Animation loop
        const startTime = performance.now();
        let animationFrameId = 0;

        const animate = () => {
          const elapsed = (performance.now() - startTime) * 0.0001;

          points.rotation.y = elapsed * 1.2 + mouseX * 0.4;
          points.rotation.x = Math.sin(elapsed * 0.8) * 0.15 + mouseY * 0.3;

          renderer.render(scene, camera);
          animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        // Handle window resize
        const handleResize = () => {
          const newWidth = Math.max(mount.clientWidth, 1);
          const newHeight = Math.max(mount.clientHeight, 1);

          if (newWidth > 0 && newHeight > 0) {
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
          }
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function
        cleanupRef.current = () => {
          cancelAnimationFrame(animationFrameId);
          observer.disconnect();
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("resize", handleResize);

          // Dispose Three.js resources
          geometry.dispose();
          material.dispose();
          texture.dispose();
          renderer.dispose();

          // Remove canvas from DOM
          if (renderer.domElement.parentNode === mount) {
            mount.removeChild(renderer.domElement);
          }
        };
      } catch (error) {
        console.error("Three.js scene initialization failed:", error);
      }
    };

    initScene();

    return () => {
      cleanupRef.current?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      role="presentation"
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}