import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage?.startsWith("en") ? "en" : "pl";
  const toggle = (lng: "en" | "pl") => i18n.changeLanguage(lng);

  return (
    <div className="glass inline-flex items-center rounded-full p-1 text-xs font-mono">
      {(["en", "pl"] as const).map((lng) => (
        <button
          key={lng}
          onClick={() => toggle(lng)}
          className={cn(
            "px-3 py-1.5 rounded-full uppercase tracking-wider transition-all",
            current === lng
              ? "bg-gradient-accent text-accent-foreground shadow-accent-glow"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {lng}
        </button>
      ))}
    </div>
  );
};
