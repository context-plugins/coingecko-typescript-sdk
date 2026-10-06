import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  codeAdditionsDeletions4WeeksSchema,
  type CodeAdditionsDeletions4Weeks,
} from "./code-additions-deletions4-weeks.js";

/** Developer activity data */
export type DeveloperData = {
  /** Repository forks */
  forks?: number | null;
  /** Repository stars */
  stars?: number | null;
  /** Repository subscribers */
  subscribers?: number | null;
  /** Total issues */
  totalIssues?: number | null;
  /** Closed issues */
  closedIssues?: number | null;
  /** Pull requests merged */
  pullRequestsMerged?: number | null;
  /** Pull request contributors */
  pullRequestContributors?: number | null;
  /** Code additions and deletions in the last 4 weeks */
  codeAdditionsDeletions4Weeks?: CodeAdditionsDeletions4Weeks;
  /** Commit count in the last 4 weeks */
  commitCount4Weeks?: number | null;
};

export const developerDataSchema: Schema<DeveloperData> = s.object<DeveloperData>({
  forks: s.optionalNullable(s.float64()),
  stars: s.optionalNullable(s.float64()),
  subscribers: s.optionalNullable(s.float64()),
  totalIssues: s.optionalNullable(s.float64()),
  closedIssues: s.optionalNullable(s.float64()),
  pullRequestsMerged: s.optionalNullable(s.float64()),
  pullRequestContributors: s.optionalNullable(s.float64()),
  codeAdditionsDeletions4Weeks: s.optional(s.lazy(() => codeAdditionsDeletions4WeeksSchema)),
  commitCount4Weeks: s.optionalNullable(s.float64()),
  _keysMap: {
    totalIssues: "total_issues",
    closedIssues: "closed_issues",
    pullRequestsMerged: "pull_requests_merged",
    pullRequestContributors: "pull_request_contributors",
    codeAdditionsDeletions4Weeks: "code_additions_deletions_4_weeks",
    commitCount4Weeks: "commit_count_4_weeks",
  },
});
