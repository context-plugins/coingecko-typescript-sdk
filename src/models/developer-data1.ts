import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  codeAdditionsDeletions4Weeks1Schema,
  type CodeAdditionsDeletions4Weeks1,
} from "./code-additions-deletions4-weeks1.js";

export type DeveloperData1 = {
  forks?: number;
  stars?: number;
  subscribers?: number;
  totalIssues?: number;
  closedIssues?: number;
  pullRequestsMerged?: number;
  pullRequestContributors?: number;
  codeAdditionsDeletions4Weeks?: CodeAdditionsDeletions4Weeks1;
  commitCount4Weeks?: number;
  last4WeeksCommitActivitySeries?: number[];
};

export const developerData1Schema: Schema<DeveloperData1> = s.object<DeveloperData1>({
  forks: s.optional(s.number()),
  stars: s.optional(s.number()),
  subscribers: s.optional(s.number()),
  totalIssues: s.optional(s.number()),
  closedIssues: s.optional(s.number()),
  pullRequestsMerged: s.optional(s.number()),
  pullRequestContributors: s.optional(s.number()),
  codeAdditionsDeletions4Weeks: s.optional(s.lazy(() => codeAdditionsDeletions4Weeks1Schema)),
  commitCount4Weeks: s.optional(s.number()),
  last4WeeksCommitActivitySeries: s.optional(s.array(s.number())),
  _keysMap: {
    totalIssues: "total_issues",
    closedIssues: "closed_issues",
    pullRequestsMerged: "pull_requests_merged",
    pullRequestContributors: "pull_request_contributors",
    codeAdditionsDeletions4Weeks: "code_additions_deletions_4_weeks",
    commitCount4Weeks: "commit_count_4_weeks",
    last4WeeksCommitActivitySeries: "last_4_weeks_commit_activity_series",
  },
});
