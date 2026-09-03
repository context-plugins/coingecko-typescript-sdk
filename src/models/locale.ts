import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Locale = {
  Ar: "ar",
  Bg: "bg",
  Cs: "cs",
  Da: "da",
  De: "de",
  El: "el",
  En: "en",
  Es: "es",
  Fi: "fi",
  Fr: "fr",
  He: "he",
  Hi: "hi",
  Hr: "hr",
  Hu: "hu",
  Id: "id",
  It: "it",
  Ja: "ja",
  Ko: "ko",
  Lt: "lt",
  Nl: "nl",
  No: "no",
  Pl: "pl",
  Pt: "pt",
  Ro: "ro",
  Ru: "ru",
  Sk: "sk",
  Sl: "sl",
  Sv: "sv",
  Th: "th",
  Tr: "tr",
  Uk: "uk",
  Vi: "vi",
  Zh: "zh",
  ZhTw: "zh-tw",
} as const;
export type Locale = (typeof Locale)[keyof typeof Locale] | (string & {});

export const localeSchema: EnumSchema<Locale> = s.enumOf<Locale>(Locale);
