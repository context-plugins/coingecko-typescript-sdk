import { s, type Schema } from "../core/index.js";

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
