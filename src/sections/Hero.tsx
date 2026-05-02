import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/uiStore";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  const { t } = useTranslation();
  const setDemoOpen = useUIStore((s) => s.setDemoOpen);
  const goContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  const stats = [
    { value: "200+", label: t("hero.stats.hours") },
    { value: "85%", label: t("hero.stats.errors") },
    { value: "30+", label: t("hero.stats.teams") },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container max-w-[1200px] relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-xs font-mono uppercase tracking-[0.18em]"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-muted-foreground">{t("hero.badge")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02]"
          >
            <span className="text-gradient">{t("hero.title")}</span>{" "}
            <span className="text-gradient-accent">{t("hero.titleAccent")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl" onClick={() => setDemoOpen(true)}>
              <Play className="h-4 w-4" />
              {t("hero.ctaDemo")}
            </Button>
            <Button variant="glass" size="xl" onClick={goContact}>
              {t("hero.ctaContact")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.6 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5">
                <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-accent">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
