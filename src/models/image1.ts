import { s, type Schema } from "../core/index.js";

export type Image1 = {
  thumb?: string;
  small?: string;
  large?: string;
};

export const image1Schema: Schema<Image1> = s.object<Image1>({
  thumb: s.optional(s.string()),
  small: s.optional(s.string()),
  large: s.optional(s.string()),
});
