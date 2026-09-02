import { s, type Schema } from "../core/index.js";

export type Image = {
  thumb?: string;
  small?: string;
};

export const imageSchema: Schema<Image> = s.object<Image>({
  thumb: s.optional(s.string()),
  small: s.optional(s.string()),
});
