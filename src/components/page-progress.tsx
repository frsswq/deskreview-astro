import { motion, useScroll, useSpring } from "motion/react";
import { useMobile } from "../hooks/use-mobile";

export default function PageProgress() {
  const isMobile = useMobile();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {!isMobile && (
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX,
            originX: 0,
          }}
          className={`fixed top-0 right-0 left-0 z-101 h-[2px] bg-desk-blue brightness-90`}
        />
      )}
    </>
  );
}
