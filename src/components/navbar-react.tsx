"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { useScrollLock } from "usehooks-ts";

import LogoIcon from "../image/svg/logo_icon.svg?react";
import LogoText from "../image/svg/logo_text.svg?react";
import MenuPopover from "./menu-popover";

import { cn } from "../lib/utils";

function ScrollLock() {
  useScrollLock();
  return null;
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isOpen) return;

    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {isOpen && <ScrollLock />}
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={[hidden ? "hidden" : "visible"]}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          `sticky top-0 z-10 flex min-h-[72px] w-full items-center overflow-hidden border
          border-transparent border-b-slate-300 bg-white`,
          isOpen ? "border-b-transparent" : ""
        )}
      >
        <div className="flex h-full w-full max-w-[1440px] justify-between px-5 md:px-15">
          <a href="/" className="flex h-full items-center gap-x-1 text-black hover:cursor-pointer">
            <LogoIcon width={40} height={40} className="block object-contain md:ml-0" />
            <LogoText width={188} height={36} className="hidden object-contain md:block" />
          </a>

          <MenuPopover isOpen={isOpen} setIsOpen={setIsOpen} />
          <div
            className={cn(
              `hidden items-center gap-x-10 font-sans text-lg leading-none font-[350]
              tracking-[-0.01em] md:flex`
            )}
          >
            <a href="/" className="hover:text-desk-blue/90 hover:cursor-pointer hover:underline">
              About
            </a>
            <a
              href="/work"
              className="hover:text-desk-blue/90 hover:cursor-pointer hover:underline"
            >
              Work
            </a>
            <a
              href="/study"
              className="hover:text-desk-blue/90 hover:cursor-pointer hover:underline"
            >
              Study
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
