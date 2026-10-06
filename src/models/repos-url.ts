import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Repository URL */
export type ReposUrl = {
  /** GitHub repository URL */
  github?: string[];
  /** Bitbucket repository URL */
  bitbucket?: string[];
};

export const reposUrlSchema: Schema<ReposUrl> = s.object<ReposUrl>({
  github: s.optional(s.array(s.string())),
  bitbucket: s.optional(s.array(s.string())),
});
