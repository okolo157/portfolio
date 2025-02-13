import About from "@/components/About";
import Intro from "@/components/IntroScreen";
import Stack from "@/components/Stack";

export default function Homepage() {
  return (
    <div>
      <div className="relative">
        <Intro />
        <Stack />
        <About />
      </div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[100px] mix-blend-difference pointer-events-none">
        *
      </div>
    </div>
  );
}
