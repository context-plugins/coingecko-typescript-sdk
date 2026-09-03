import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReposUrl = {
  github?: string[];
  bitbucket?: string[];
};

export const reposUrlSchema: Schema<ReposUrl> = s.object<ReposUrl>({
  github: s.optional(s.array(s.string())),
  bitbucket: s.optional(s.array(s.string())),
});
