import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
};

export const SectionWrapper = ({ id, className, children, eyebrow, title, subtitle }: Props) => (
  <section
    id={id}
    className={cn("relative py-24 md:py-36 scroll-mt-24", className)}
  >
    <div className="container max-w-[1200px]">
      {(eyebrow || title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20 max-w-2xl"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
              <span className="h-px w-8 bg-accent/60" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient leading-[1.05]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      )}
      {children}
    </div>
  </section>
);
