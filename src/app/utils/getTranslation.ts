import id from "../locales/id.json";
import en from "../locales/en.json";

export function getTranslation(locale: string) {
  if (locale === "id") return id;
  return en;
}
