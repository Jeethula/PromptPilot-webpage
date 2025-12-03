import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, gradient, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10",
          gradient &&
            "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-linear-to-b before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
