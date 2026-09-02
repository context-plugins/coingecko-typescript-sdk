import { s, type Schema } from "../core/index.js";

export type CodeAdditionsDeletions4Weeks = {
  additions?: number | null;
  deletions?: number | null;
};

export const codeAdditionsDeletions4WeeksSchema: Schema<CodeAdditionsDeletions4Weeks> =
  s.object<CodeAdditionsDeletions4Weeks>({
    additions: s.optionalNullable(s.number()),
    deletions: s.optionalNullable(s.number()),
  });
