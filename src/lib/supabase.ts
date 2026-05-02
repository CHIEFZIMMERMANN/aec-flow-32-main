import { createClient } from "@supabase/supabase-js";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Brakuje zmiennych Supabase. Sprawdź .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Funkcja do wysyłania emaila przez Supabase Edge Function
export const sendContactEmail = async (payload: ContactPayload) => {
  try {
    const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify({
        ...payload,
        recipientEmail: contactEmail,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return { ok: true };
  } catch (error) {
    console.error("Email send error:", error);
    throw error;
  }
};
