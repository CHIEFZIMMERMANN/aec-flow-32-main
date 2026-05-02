import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { id: "services", key: "nav.services" },
  { id: "use-cases", key: "nav.useCases" },
  { id: "demo", key: "nav.demo" },
  { id: "tools", key: "nav.tools" },
  { id: "about", key: "nav.about" },
];

export const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="container max-w-[1200px]">
        <div className={cn(
          "flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all",
          scrolled ? "glass shadow-elegant" : "bg-transparent",
        )}>
          <button onClick={() => go("hero")} className="flex items-center gap-2 font-display font-semibold text-lg group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
              <span className="font-mono text-sm">{"</>"}</span>
            </span>
            <span className="hidden sm:inline text-gradient">AEC.dev</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors hover:bg-white/5"
              >
                {t(l.key)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              variant="hero"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => go("contact")}
            >
              {t("nav.contact")}
            </Button>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden glass mt-3 rounded-2xl p-4 flex flex-col gap-1"
            >
              {[...links, { id: "contact", key: "nav.contact" }].map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="text-left px-4 py-3 rounded-xl text-foreground hover:bg-white/5"
                >
                  {t(l.key)}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
