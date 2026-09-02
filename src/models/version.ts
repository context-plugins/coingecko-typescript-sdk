import { s, type Schema } from "../core/index.js";

export type Version = {
  major?: number;
  minor?: number;
  patch?: number;
};

export const versionSchema: Schema<Version> = s.object<Version>({
  major: s.optional(s.number()),
  minor: s.optional(s.number()),
  patch: s.optional(s.number()),
});
