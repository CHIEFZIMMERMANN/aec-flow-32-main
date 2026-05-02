import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10 mt-10">
      <div className="container max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="h-7 w-7 rounded-md bg-gradient-primary grid place-items-center font-mono text-xs">{"</>"}</span>
          <span className="font-display font-semibold text-foreground">AEC.dev</span>
          <span className="hidden sm:inline">— {t("footer.tagline")}</span>
        </div>
        <div>© {year} · {t("footer.rights")}</div>
      </div>
    </footer>
  );
};
