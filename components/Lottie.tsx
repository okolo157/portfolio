"use client";

import { useEffect, useRef } from "react";
import { DotLottie } from "@lottiefiles/dotlottie-web";

export default function Lottie() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new DotLottie({
      autoplay: true,
      loop: true,
      src: "https://lottie.host/6b773300-4158-41c3-9d74-579efa66da8a/RXD3LRsYf6.lottie",
    });

    player.mount(containerRef.current);

    return () => {
      player.destroy();
    };
  }, []);

  return <div ref={containerRef} className="w-[120px] h-[120px]" />;
}
