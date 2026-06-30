import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-12",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-2 relative">
        <Typography variant="h2" className="border-none pb-0">
          {title}
        </Typography>
        <div
          className={cn(
            "h-1 w-12 bg-primary rounded-full",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto"
          )}
        />
      </div>
      {subtitle && (
        <Typography variant="lead" className="max-w-2xl text-muted-foreground mt-2">
          {subtitle}
        </Typography>
      )}
    </div>
  );
}
