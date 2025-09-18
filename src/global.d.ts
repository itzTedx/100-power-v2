import { messages } from "@/locale";
import { formats } from "@/locale/request";
import { routing } from "@/locale/routing";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages.en;
    Formats: typeof formats;
  }
}
