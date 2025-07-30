"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { useMobile } from "../hooks/use-mobile";
import LogoFull from "../image/svg/logo_full_navbar.svg?react";
import LogoIcon from "../image/svg/logo_icon.svg?react";

export default function Navbar() {
  const isMobile = useMobile();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-100 flex max-h-[80px] min-h-[72px] justify-center border border-transparent border-b-slate-300 bg-white"
    >
      <div className="flex h-full w-full max-w-[1440px] items-center justify-between px-5 py-5 md:px-15">
        <a href="/" className="flex h-full hover:cursor-pointer">
          {isMobile ? (
            <LogoIcon
              width="36"
              height="36"
              className="-mt-1 block h-full object-contain md:hidden"
            />
          ) : (
            <LogoFull
              width="201"
              height="36"
              className="-mt-1 hidden h-full object-contain md:block"
            />
          )}
        </a>

        {!isMobile && (
          <div className="hidden items-center gap-x-10 font-[350] font-sans text-lg leading-none tracking-[-0.01em] md:flex">
            <a
              href="/"
              className="hover:cursor-pointer hover:text-desk-blue/90 hover:underline"
            >
              About
            </a>
            <a
              href="/work"
              className="hover:cursor-pointer hover:text-desk-blue/90 hover:underline"
            >
              Work
            </a>
            <a
              href="/study"
              className="hover:cursor-pointer hover:text-desk-blue/90 hover:underline"
            >
              Study
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
