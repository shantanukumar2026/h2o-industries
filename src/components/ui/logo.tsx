"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const isLarge = size === "lg";
  const isSmall = size === "sm";

  // Match the dimensions to the original logo's aspect ratio
  const width = isLarge ? 200 : isSmall ? 100 : 140;
  const height = isLarge ? 114 : isSmall ? 57 : 80;

  return (
    <div className={cn("flex items-center select-none w-fit", className)}>
      <Image
        src="/logo.png"
        alt="H2O Industries Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
}
