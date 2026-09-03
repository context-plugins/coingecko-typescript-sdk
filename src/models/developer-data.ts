import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  codeAdditionsDeletions4WeeksSchema,
  type CodeAdditionsDeletions4Weeks,
} from "./code-additions-deletions4-weeks.js";

export type DeveloperData = {
  forks?: number | null;
  stars?: number | null;
  subscribers?: number | null;
  totalIssues?: number | null;
  closedIssues?: number | null;
  pullRequestsMerged?: number | null;
  pullRequestContributors?: number | null;
  codeAdditionsDeletions4Weeks?: CodeAdditionsDeletions4Weeks;
  commitCount4Weeks?: number | null;
};

export const developerDataSchema: Schema<DeveloperData> = s.object<DeveloperData>({
  forks: s.optionalNullable(s.number()),
  stars: s.optionalNullable(s.number()),
  subscribers: s.optionalNullable(s.number()),
  totalIssues: s.optionalNullable(s.number()),
  closedIssues: s.optionalNullable(s.number()),
  pullRequestsMerged: s.optionalNullable(s.number()),
  pullRequestContributors: s.optionalNullable(s.number()),
  codeAdditionsDeletions4Weeks: s.optional(s.lazy(() => codeAdditionsDeletions4WeeksSchema)),
  commitCount4Weeks: s.optionalNullable(s.number()),
  _keysMap: {
    totalIssues: "total_issues",
    closedIssues: "closed_issues",
    pullRequestsMerged: "pull_requests_merged",
    pullRequestContributors: "pull_request_contributors",
    codeAdditionsDeletions4Weeks: "code_additions_deletions_4_weeks",
    commitCount4Weeks: "commit_count_4_weeks",
  },
});
