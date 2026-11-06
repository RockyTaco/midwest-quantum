import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="MidQWest — home"
      className={cn(
        "group inline-flex shrink-0 items-center transition-opacity hover:opacity-80",
        className
      )}
    >
      <Image
        src="/MQW_light_grad_black.png"
        alt="MidQWest"
        width={90}
        height={25}
        className="h-[25px] w-auto"
        priority
      />
    </Link>
  );
}
