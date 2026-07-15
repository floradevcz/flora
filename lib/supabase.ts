import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(url && key);

// Bez těchto proměnných necháme projít statické sestavení. Komunitní funkce
// se v takovém případě místo pádu aplikace zobrazí s instrukcemi k nastavení.
export const supabase = createClient(
  url ?? "https://placeholder.supabase.co",
  key ?? "placeholder-publishable-key",
);
