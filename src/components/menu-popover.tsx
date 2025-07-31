import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import type React from "react";
import { Button } from "./ui/button";
import { Popover } from "./ui/popover";

interface MenuPopoverProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuPopover({ isOpen, setIsOpen }: MenuPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild className="md:hidden">
        <Button
          className="relative flex h-10 w-8 items-center justify-center bg-white p-0 shadow-none
            hover:cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <HamburgerIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-10 h-dvh w-dvw bg-white">
        <div className="flex h-full flex-col justify-center gap-y-5 px-5 font-sans text-4xl">
          <a href="/" className="hover:cursor-pointer">
            About
          </a>
          <a href="/work" className="hover:cursor-pointer">
            Work
          </a>
          <a href="/study" className="hover:cursor-pointer">
            Study
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function HamburgerIcon() {
  return (
    <>
      <span className="absolute top-[37.5%] h-0.75 w-8 rounded-full bg-gray-700" />
      <span className="absolute top-[62.5%] h-0.75 w-8 rounded-full bg-gray-700" />
    </>
  );
}
