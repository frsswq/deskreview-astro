import { cn } from "@/lib/utils";
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
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild className="md:hidden">
        <Button
          className="relative flex h-10 w-8.5 items-end justify-center bg-transparent p-0
            shadow-none hover:cursor-pointer"
        >
          <span
            className={cn(
              `relative size-8.5 items-center justify-center overflow-hidden rounded-full
              border-[1.75px] border-white ring-[0.75px] ring-black`
            )}
          >
            <span
              className={cn(
                `bg-desk-gray-700 absolute top-1/2 left-1/2 size-8.5 -translate-1/2
                transition-transform`,
                isOpen ? "translate-y-[-50%]" : "translate-y-[-150%]"
              )}
            />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("z-10 h-dvh w-dvw")} onEscapeKeyDown={() => setIsOpen(false)}>
        <div
          className={cn(
            `mt-10 flex h-full flex-col gap-y-5 px-5 font-serif text-3xl leading-none
            font-extralight transition-colors`,
            isOpen ? "bg-white" : "bg-transparent"
          )}
        >
          <a href="/" className="w-fit whitespace-nowrap hover:cursor-pointer">
            About
          </a>
          <a href="/work" className="w-fit whitespace-nowrap hover:cursor-pointer">
            Work
          </a>
          <a href="/study" className="w-fit whitespace-nowrap hover:cursor-pointer">
            Study
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}
