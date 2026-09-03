import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Content = {
  title?: string;
  description?: string;
};

export const contentSchema: Schema<Content> = s.object<Content>({
  title: s.optional(s.string()),
  description: s.optional(s.string()),
});
