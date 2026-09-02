import { s, type Schema } from "../core/index.js";

export type Image6 = {
  thumb?: string;
  small?: string;
  large?: string;
};

export const image6Schema: Schema<Image6> = s.object<Image6>({
  thumb: s.optional(s.string()),
  small: s.optional(s.string()),
  large: s.optional(s.string()),
});
