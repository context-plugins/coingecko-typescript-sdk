import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Explorer = {
  name?: string;
  link?: string;
};

export const explorerSchema: Schema<Explorer> = s.object<Explorer>({
  name: s.optional(s.string()),
  link: s.optional(s.string()),
});
