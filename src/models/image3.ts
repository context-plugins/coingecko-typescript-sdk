import { s, type Schema } from "../core/index.js";

export type Image3 = {
  thumb?: string;
  small?: string;
  large?: string;
};

export const image3Schema: Schema<Image3> = s.object<Image3>({
  thumb: s.optional(s.string()),
  small: s.optional(s.string()),
  large: s.optional(s.string()),
});
