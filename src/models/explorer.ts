import { s, type Schema } from "../core/index.js";

export type Explorer = {
  name?: string;
  link?: string;
};

export const explorerSchema: Schema<Explorer> = s.object<Explorer>({
  name: s.optional(s.string()),
  link: s.optional(s.string()),
});
