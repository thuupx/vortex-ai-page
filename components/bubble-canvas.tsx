"use client";
import { useEffect, useRef } from "react";

export function BubbleCanvas() {
  const bubbleCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const startBubbles = () => {
      const canvas = bubbleCanvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      let animationFrameId: number;
      let width = 0;
      let height = 0;
      const bubbles: Array<{
        x: number;
        y: number;
        r: number;
        speed: number;
        dx: number;
        opacity: number;
        color: string;
      }> = [];
      const colors = [
        "#60a5fa33", // blue-400/20
        "#818cf833", // indigo-400/20
        "#f472b633", // pink-400/20
        "#fbbf2433", // yellow-400/20
        "#34d39933", // green-400/20
      ];
      const BUBBLE_COUNT = 32;

      function resizeCanvas() {
        if (!canvas || !ctx) return;
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        ctx.setTransform(
          window.devicePixelRatio,
          0,
          0,
          window.devicePixelRatio,
          0,
          0
        );
      }

      function randomBubble() {
        const r = Math.random() * 32 + 16;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r,
          speed: Math.random() * 0.5 + 0.2,
          dx: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
      }

      function initBubbles() {
        bubbles.length = 0;
        for (let i = 0; i < BUBBLE_COUNT; i++) {
          bubbles.push(randomBubble());
        }
      }

      function animate() {
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const bubble of bubbles) {
          ctx.globalAlpha = bubble.opacity;
          ctx.beginPath();
          ctx.arc(bubble.x, bubble.y, bubble.r, 0, 2 * Math.PI);
          ctx.fillStyle = bubble.color;
          ctx.shadowColor = bubble.color;
          ctx.shadowBlur = 16;
          ctx.fill();
          ctx.shadowBlur = 0;
          // Move bubble
          bubble.y -= bubble.speed;
          bubble.x += bubble.dx;
          // Respawn if out of bounds
          if (
            bubble.y + bubble.r < 0 ||
            bubble.x + bubble.r < 0 ||
            bubble.x - bubble.r > width
          ) {
            Object.assign(bubble, randomBubble(), { y: height + bubble.r });
          }
        }
        ctx.globalAlpha = 1;
        animationFrameId = requestAnimationFrame(animate);
      }

      function handleResize() {
        resizeCanvas();
        initBubbles();
      }

      resizeCanvas();
      initBubbles();
      animate();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
      };
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback?: (cb: () => void) => void })
        .requestIdleCallback!(startBubbles);
    } else {
      setTimeout(startBubbles, 500);
    }
  }, []);

  return (
    <canvas
      ref={bubbleCanvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ display: "block" }}
      width={1920}
      height={1080}
    />
  );
}
