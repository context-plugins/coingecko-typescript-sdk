import { s, type Schema } from "../core/index.js";

export type Links2 = {
  homepage?: string;
  twitter?: string;
  discord?: string;
};

export const links2Schema: Schema<Links2> = s.object<Links2>({
  homepage: s.optional(s.string()),
  twitter: s.optional(s.string()),
  discord: s.optional(s.string()),
});
