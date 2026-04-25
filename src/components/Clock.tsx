import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="px-4 py-1 bg-white/5 rounded-full border border-white/10 text-blue-400 text-sm font-mono tracking-wider">
      {time}
    </div>
  );
}
