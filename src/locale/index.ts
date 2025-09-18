import type { AbstractIntlMessages } from "next-intl";

import ar from "./ar";
import en from "./en";
import ru from "./ru";

export const messages = {
  ar,
  ru,
  en,
};

export type Locale = keyof typeof messages;

export async function getMessages(
  locale: string
): Promise<AbstractIntlMessages> {
  return messages[
    locale as keyof typeof messages
  ] as unknown as AbstractIntlMessages;
}
