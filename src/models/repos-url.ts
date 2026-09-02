import { s, type Schema } from "../core/index.js";

export type ReposUrl = {
  github?: string[];
  bitbucket?: string[];
};

export const reposUrlSchema: Schema<ReposUrl> = s.object<ReposUrl>({
  github: s.optional(s.array(s.string())),
  bitbucket: s.optional(s.array(s.string())),
});
