import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Token list version */
export type Version = {
  /** Major version */
  major?: number;
  /** Minor version */
  minor?: number;
  /** Patch version */
  patch?: number;
};

export const versionSchema: Schema<Version> = s.object<Version>({
  major: s.optional(s.float64()),
  minor: s.optional(s.float64()),
  patch: s.optional(s.float64()),
});
