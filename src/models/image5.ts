import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection image URLs */
export type Image5 = {
  small?: string;
  small2X?: string;
};

export const image5Schema: Schema<Image5> = s.object<Image5>({
  small: s.optional(s.string()),
  small2X: s.optional(s.string()),
  _keysMap: {
    small2X: "small_2x",
  },
});
