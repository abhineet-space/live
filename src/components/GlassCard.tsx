import {
  useRef,
  useCallback,
  useMemo,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";

interface GlassCardProps {
  children: ReactNode;
  tiltDivisor?: number;
}

export default function GlassCard({
  children,
  tiltDivisor = 25,
}: GlassCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const isTouchDevice = useMemo(
    () => !window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    [],
  );

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLElement>) => {
      if (isTouchDevice) return;
      const card = cardRef.current;
      if (!card) return;
      card.classList.remove("card-hover-transition");
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      const xAxis = (window.innerWidth / 2 - e.pageX) / tiltDivisor;
      const yAxis = (window.innerHeight / 2 - e.pageY) / tiltDivisor;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    },
    [tiltDivisor, isTouchDevice],
  );

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    const card = cardRef.current;
    if (!card) return;
    card.classList.add("card-hover-transition");
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  }, [isTouchDevice]);

  return (
    <main
      ref={cardRef as React.RefObject<HTMLElement>}
      className="glass-container p-12 rounded-[2.5rem] max-w-lg text-center my-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="spotlight" />
      {children}
    </main>
  );
}
