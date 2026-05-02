import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

export const About = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper id="about" eyebrow="05 — About" title={t("about.title")}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2"
        >
          <div className="relative aspect-square max-w-sm">
            <div className="absolute inset-0 rounded-3xl bg-gradient-accent blur-3xl opacity-30" />
            <div className="relative glass rounded-3xl h-full p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative font-mono text-sm space-y-3">
                <div className="text-accent">$ whoami</div>
                <div className="text-foreground">aec.developer</div>
                <div className="text-accent mt-4">$ stack --primary</div>
                <div className="text-muted-foreground">→ C# / .NET</div>
                <div className="text-muted-foreground">→ Python</div>
                <div className="text-muted-foreground">→ TypeScript</div>
                <div className="text-muted-foreground">→ Revit API</div>
                <div className="text-accent mt-4">$ status</div>
                <div className="text-foreground flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  available for projects
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
