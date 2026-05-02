import { useTranslation } from "react-i18next";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useUIStore } from "@/store/uiStore";
import { motion } from "framer-motion";

export const Demo = () => {
  const { t } = useTranslation();
  const { demoOpen, setDemoOpen } = useUIStore();

  return (
    <SectionWrapper id="demo" eyebrow="03 — Demo" title={t("demo.title")} subtitle={t("demo.subtitle")}>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative glass rounded-3xl overflow-hidden aspect-video group cursor-pointer"
        onClick={() => setDemoOpen(true)}
      >
        {/* Animated preview */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-accent/30 blur-[100px] group-hover:bg-accent/50 transition-all duration-700" />

        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/40 blur-2xl group-hover:bg-accent/60 transition-all" />
            <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-accent flex items-center justify-center shadow-accent-glow group-hover:scale-110 transition-transform duration-500">
              <Play className="h-8 w-8 md:h-10 md:w-10 text-accent-foreground fill-current ml-1" />
            </div>
          </div>
          <Button variant="glass" size="lg">{t("demo.cta")}</Button>
        </div>

        {/* Decorative code lines */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-2 opacity-40 font-mono text-[10px] md:text-xs text-accent/80">
          <span>$ revit.automate(--project)</span>
          <span className="ml-auto animate-pulse">●</span>
        </div>
      </motion.div>

      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="max-w-4xl glass border-white/10 bg-card/90">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{t("demo.modalTitle")}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5tsjFS7NUkg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-xl"
            />
          </div>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
};
