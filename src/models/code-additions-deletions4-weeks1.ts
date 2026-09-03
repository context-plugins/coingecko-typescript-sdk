import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CodeAdditionsDeletions4Weeks1 = {
  additions?: number;
  deletions?: number;
};

export const codeAdditionsDeletions4Weeks1Schema: Schema<CodeAdditionsDeletions4Weeks1> =
  s.object<CodeAdditionsDeletions4Weeks1>({
    additions: s.optional(s.number()),
    deletions: s.optional(s.number()),
  });
