import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FileCheck2, ShieldCheck, GitBranch, Wrench } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";

const ease = [0.22, 1, 0.36, 1] as const;

export const UseCases = () => {
  const { t } = useTranslation();
  const items = [
    { key: "docs", icon: FileCheck2, num: "01" },
    { key: "errors", icon: ShieldCheck, num: "02" },
    { key: "workflow", icon: GitBranch, num: "03" },
    { key: "tools", icon: Wrench, num: "04" },
  ];

  return (
    <SectionWrapper
      id="use-cases"
      eyebrow="02 — Use cases"
      title={t("useCases.title")}
      subtitle={t("useCases.subtitle")}
    >
      <div className="glass rounded-3xl p-2 md:p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {items.map(({ key, icon: Icon, num }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              className="bg-card/60 p-8 md:p-10 hover:bg-card/90 transition-colors group"
            >
              <div className="flex items-start justify-between mb-6">
                <Icon className="h-8 w-8 text-accent" />
                <span className="font-mono text-xs text-muted-foreground tracking-[0.2em]">{num}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 group-hover:text-gradient-accent transition-all">
                {t(`useCases.items.${key}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`useCases.items.${key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
