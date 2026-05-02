import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { supabase, type ContactPayload } from "@/lib/supabase";

export const buildContactSchema = (t: (k: string) => string) =>
  z.object({
    name: z.string().trim().min(1, t("contact.validation.name")).max(100),
    email: z.string().trim().email(t("contact.validation.email")).max(255),
    message: z.string().trim().min(10, t("contact.validation.message")).max(2000),
  });

export type ContactInput = ContactPayload;

export const useContactForm = () =>
  useMutation({
    mutationFn: async (input: ContactInput) => {
      try {
        // Zapisz wiadomość do bazy danych
        const { error } = await supabase.from("contact_messages").insert([input]);
        if (error) throw error;
        
        // Wyślij email powiadomienia
        const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
        if (contactEmail) {
          // Wysyłanie email'a przez Edge Function (opcjonalne)
          try {
            await fetch(
              `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
                },
                body: JSON.stringify({
                  ...input,
                  recipientEmail: contactEmail,
                }),
              }
            );
          } catch (_err) {
            // Email Edge Function nie jest skonfigurowana - to OK, wiadomość jest w bazie
            console.info("Email notification skipped - Edge Function not configured");
          }
        }
        
        return { ok: true as const };
      } catch (error) {
        console.error("Contact form error:", error);
        throw error;
      }
    },
  });
