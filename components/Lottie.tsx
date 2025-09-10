"use client";
import { useEffect, useRef } from "react";
import { DotLottie } from "@lottiefiles/dotlottie-web";

export default function Lottie() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const player = new DotLottie({
      canvas: canvasRef.current,
      autoplay: true,
      loop: true,
      src: "https://lottie.host/6b773300-4158-41c3-9d74-579efa66da8a/RXD3LRsYf6.lottie",
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="absolute bottom-10 left-0 animate-floatRight">
      <canvas ref={canvasRef} className="w-[120px] h-[120px]" />
    </div>
  );
}
