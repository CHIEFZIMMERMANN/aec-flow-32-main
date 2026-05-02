import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type Props = HTMLMotionProps<"div"> & { hover?: boolean };

export const GlassCard = forwardRef<HTMLDivElement, Props>(
  ({ className, hover = true, children, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn(
        "glass rounded-2xl p-6 md:p-8",
        hover && "glass-hover",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  ),
);
GlassCard.displayName = "GlassCard";
