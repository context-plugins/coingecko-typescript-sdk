import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Image = {
  thumb?: string;
  small?: string;
};

export const imageSchema: Schema<Image> = s.object<Image>({
  thumb: s.optional(s.string()),
  small: s.optional(s.string()),
});
