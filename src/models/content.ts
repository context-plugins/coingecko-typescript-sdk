import { s, type Schema } from "../core/index.js";

export type Content = {
  title?: string;
  description?: string;
};

export const contentSchema: Schema<Content> = s.object<Content>({
  title: s.optional(s.string()),
  description: s.optional(s.string()),
});
