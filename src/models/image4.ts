import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Image4 = {
  thumb?: string;
  small?: string;
  large?: string;
};

export const image4Schema: Schema<Image4> = s.object<Image4>({
  thumb: s.optional(s.string()),
  small: s.optional(s.string()),
  large: s.optional(s.string()),
});
