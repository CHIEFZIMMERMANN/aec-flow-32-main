import { useTranslation } from "react-i18next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ContactForm } from "@/components/ContactForm";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper id="contact" eyebrow="06 — Contact" title={t("contact.title")} subtitle={t("contact.subtitle")}>
      <ContactForm />
    </SectionWrapper>
  );
};
