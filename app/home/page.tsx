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
      {/* Fixed container with Flexbox for centering */}
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none mix-blend-difference">
        <div className="font-bold text-[100px]">*</div>
      </div>
    </div>
  );
}
