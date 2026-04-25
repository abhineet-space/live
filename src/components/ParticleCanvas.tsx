import { useEffect, useRef, useCallback } from "react";

interface MousePos {
  x: number | null;
  y: number | null;
  radius: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MousePos>({ x: null, y: null, radius: 150 });
  const animFrameRef = useRef<number>(0);

  const drawParticle = useCallback(
    (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.fillStyle = "rgba(14, 165, 233, 0.8)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    },
    [],
  );

  const updateParticle = useCallback(
    (p: Particle, canvas: HTMLCanvasElement) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      const mouse = mouseRef.current;
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          p.x -= dx / 20;
          p.y -= dy / 20;
        }
      }
    },
    [],
  );

  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2 + 1;
    const vx = (Math.random() - 0.5) * 0.5;
    const vy = (Math.random() - 0.5) * 0.5;
    return { x, y, size, vx, vy };
  }, []);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesRef.current = [];
    const count = (canvas.width * canvas.height) / 9000;
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(createParticle(canvas));
    }
  }, [createParticle]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    initCanvas();

    function connect() {
      const particles = particlesRef.current;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    const draw = drawParticle;
    const update = updateParticle;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particlesRef.current) {
        update(p, canvas);
        draw(ctx, p);
      }
      connect();
      animFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => initCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [initCanvas, drawParticle, updateParticle]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas id="canvas-bg" ref={canvasRef} />;
}
