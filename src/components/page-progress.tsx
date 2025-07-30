import { motion, useScroll, useSpring } from "motion/react";

export default function PageProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX,
        originX: 0,
      }}
      className={`fixed top-0 right-0 left-0 z-101 h-[2px] bg-desk-blue brightness-90`}
    />
  );
}
