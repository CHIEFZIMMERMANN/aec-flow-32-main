import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buildContactSchema, useContactForm, type ContactInput } from "@/hooks/useContactForm";

export const ContactForm = () => {
  const { t } = useTranslation();
  const schema = buildContactSchema(t);
  const form = useForm<ContactInput>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });
  const mutation = useContactForm();

  const onSubmit = (values: ContactInput) => {
    mutation.mutate(values, {
      onSuccess: () => {
        toast.success(t("contact.success"));
        form.reset();
      },
      onError: () => toast.error(t("contact.error")),
    });
  };

  return (
    <motion.form
      onSubmit={form.handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-3xl p-6 md:p-10 space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
            {t("contact.name")}
          </label>
          <Input
            {...form.register("name")}
            className="bg-background/50 border-white/10 h-12 rounded-xl"
            placeholder="Anna Kowalska"
          />
          {form.formState.errors.name && (
            <p className="mt-1.5 text-xs text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
            {t("contact.email")}
          </label>
          <Input
            {...form.register("email")}
            type="email"
            className="bg-background/50 border-white/10 h-12 rounded-xl"
            placeholder="anna@studio.com"
          />
          {form.formState.errors.email && (
            <p className="mt-1.5 text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
          {t("contact.message")}
        </label>
        <Textarea
          {...form.register("message")}
          rows={5}
          className="bg-background/50 border-white/10 rounded-xl resize-none"
          placeholder="..."
        />
        {form.formState.errors.message && (
          <p className="mt-1.5 text-xs text-destructive">{form.formState.errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="font-mono text-xs uppercase tracking-[0.18em]">{t("contact.or")}</span>
          <a href="mailto:zbyszek1718@gmail.com" className="text-foreground hover:text-accent transition-colors">
            <Mail className="h-4 w-4 inline" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-foreground hover:text-accent transition-colors">
            <Linkedin className="h-4 w-4 inline" />
          </a>
        </div>
        <Button type="submit" variant="hero" size="lg" disabled={mutation.isPending}>
          {mutation.isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {t("contact.sending")}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t("contact.send")}
            </>
          )}
        </Button>
      </div>
    </motion.form>
  );
};
