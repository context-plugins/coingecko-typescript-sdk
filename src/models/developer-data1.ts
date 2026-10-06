import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  codeAdditionsDeletions4Weeks1Schema,
  type CodeAdditionsDeletions4Weeks1,
} from "./code-additions-deletions4-weeks1.js";

/** Developer data */
export type DeveloperData1 = {
  /** Repository forks */
  forks?: number;
  /** Repository stars */
  stars?: number;
  /** Repository subscribers */
  subscribers?: number;
  /** Repository total issues */
  totalIssues?: number;
  /** Repository closed issues */
  closedIssues?: number;
  /** Repository pull requests merged */
  pullRequestsMerged?: number;
  /** Repository pull request contributors */
  pullRequestContributors?: number;
  /** Code additions and deletions in 4 weeks */
  codeAdditionsDeletions4Weeks?: CodeAdditionsDeletions4Weeks1;
  /** Repository commit count in 4 weeks */
  commitCount4Weeks?: number;
  /** Repository last 4 weeks commit activity series */
  last4WeeksCommitActivitySeries?: number[];
};

export const developerData1Schema: Schema<DeveloperData1> = s.object<DeveloperData1>({
  forks: s.optional(s.float64()),
  stars: s.optional(s.float64()),
  subscribers: s.optional(s.float64()),
  totalIssues: s.optional(s.float64()),
  closedIssues: s.optional(s.float64()),
  pullRequestsMerged: s.optional(s.float64()),
  pullRequestContributors: s.optional(s.float64()),
  codeAdditionsDeletions4Weeks: s.optional(s.lazy(() => codeAdditionsDeletions4Weeks1Schema)),
  commitCount4Weeks: s.optional(s.float64()),
  last4WeeksCommitActivitySeries: s.optional(s.array(s.float64())),
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
