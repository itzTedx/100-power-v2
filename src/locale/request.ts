import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import ar from "./ar";
import en from "./en";
import { routing } from "./routing";
import ru from "./ru";

export const messages = {
  ar,
  ru,
  en,
};

export type Locale = keyof typeof messages;

export async function getMessages(locale: string) {
  return messages[locale as keyof typeof messages];
}

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: getMessages(locale),
  };
});
