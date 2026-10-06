import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Coin image URLs */
export type Image = {
  /** Thumbnail image URL */
  thumb?: string;
  /** Small image URL */
  small?: string;
};

export const imageSchema: Schema<Image> = s.object<Image>({
  thumb: s.optional(s.string()),
  small: s.optional(s.string()),
});
