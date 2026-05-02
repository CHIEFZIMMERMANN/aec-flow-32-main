import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const tools = [
  { name: "Revit", abbr: "Rv" },
  { name: "AutoCAD", abbr: "Ac" },
  { name: "Construction Cloud", abbr: "ACC" },
  { name: "Dynamo", abbr: "Dy" },
  { name: "Navisworks", abbr: "Nw" },
  { name: "Forma", abbr: "Fo" },
];

export const Tools = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper id="tools" eyebrow="04 — Stack" title={t("tools.title")} subtitle={t("tools.subtitle")}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass glass-hover rounded-2xl p-6 flex flex-col items-center justify-center gap-3 aspect-square group"
          >
            <div className="h-14 w-14 rounded-xl bg-gradient-primary/20 border border-primary/30 flex items-center justify-center font-mono font-bold text-accent group-hover:bg-gradient-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-500">
              {tool.abbr}
            </div>
            <div className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
              {tool.name}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
