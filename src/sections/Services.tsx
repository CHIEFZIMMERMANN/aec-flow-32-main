import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Cpu, Puzzle, Workflow, Globe2 } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { GlassCard } from "@/components/GlassCard";

const ease = [0.22, 1, 0.36, 1] as const;

export const Services = () => {
  const { t } = useTranslation();
  const items = [
    { key: "automation", icon: Workflow },
    { key: "plugins", icon: Puzzle },
    { key: "dynamo", icon: Cpu },
    { key: "web", icon: Globe2 },
  ];

  return (
    <SectionWrapper
      id="services"
      eyebrow="01 — Services"
      title={t("services.title")}
      subtitle={t("services.subtitle")}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {items.map(({ key, icon: Icon }, i) => (
          <GlassCard
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
            className="group relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary/10 border border-primary/30 text-accent mb-5">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">
                {t(`services.items.${key}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`services.items.${key}.desc`)}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
