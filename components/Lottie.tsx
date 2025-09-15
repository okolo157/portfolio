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
      src: "https://lottie.host/adb9faf1-d543-40ef-8f54-9ed33c5b6a1e/tFmBtxC2Yw.lottie",
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="absolute bottom-10 left-0">
      <canvas ref={canvasRef} className="w-[120px] h-[120px]" />
    </div>
  );
}

export default function LottieCamera() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
    if (!canvasRef.current) return;

    const player = new DotLottie({
      canvas: canvasRef.current,
      autoplay: true,
      loop: true,
      src: "https://lottie.host/47d07f91-a1c4-4664-b489-3dbcf2961ded/F9olLHMA36.lottie",
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="absolute top-2 right-1">
      <canvas ref={canvasRef} className="w-[120px] h-[120px]" />
    </div>
  );
}
