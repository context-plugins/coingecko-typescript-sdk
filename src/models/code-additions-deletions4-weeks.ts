import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Code additions and deletions in the last 4 weeks */
export type CodeAdditionsDeletions4Weeks = {
  /** Lines added */
  additions?: number | null;
  /** Lines deleted */
  deletions?: number | null;
};

export const codeAdditionsDeletions4WeeksSchema: Schema<CodeAdditionsDeletions4Weeks> =
  s.object<CodeAdditionsDeletions4Weeks>({
    additions: s.optionalNullable(s.float64()),
    deletions: s.optionalNullable(s.float64()),
  });
