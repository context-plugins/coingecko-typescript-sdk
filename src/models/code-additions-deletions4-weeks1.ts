import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Code additions and deletions in 4 weeks */
export type CodeAdditionsDeletions4Weeks1 = {
  additions?: number;
  deletions?: number;
};

export const codeAdditionsDeletions4Weeks1Schema: Schema<CodeAdditionsDeletions4Weeks1> =
  s.object<CodeAdditionsDeletions4Weeks1>({
    additions: s.optional(s.float64()),
    deletions: s.optional(s.float64()),
  });
