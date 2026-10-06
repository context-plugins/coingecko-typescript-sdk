import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Asset platform image URLs */
export type Image3 = {
  /** Thumbnail image URL */
  thumb?: string;
  /** Small image URL */
  small?: string;
  /** Large image URL */
  large?: string;
};

export const image3Schema: Schema<Image3> = s.object<Image3>({
  thumb: s.optional(s.string()),
  small: s.optional(s.string()),
  large: s.optional(s.string()),
});
