import { cn } from "@/lib/utils";
import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  containerClass?: string;
  withContainer?: boolean;
}

export function Section({
  className,
  as: Component = "section",
  containerClass,
  withContainer = true,
  children,
  ...props
}: SectionProps) {
  const content = withContainer ? (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", containerClass)}>
      {children}
    </div>
  ) : (
    children
  );

  return (
    <Component
      className={cn("py-16 md:py-24 lg:py-32", className)}
      {...props}
    >
      {content}
    </Component>
  );
}
