import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Community engagement data */
export type CommunityData = {
  /** Number of Facebook likes */
  facebookLikes?: number | null;
  /** Average Reddit posts in 48 hours */
  redditAveragePosts48H?: number;
  /** Average Reddit comments in 48 hours */
  redditAverageComments48H?: number;
  /** Number of Reddit subscribers */
  redditSubscribers?: number | null;
  /** Active Reddit accounts in 48 hours */
  redditAccountsActive48H?: number;
};

export const communityDataSchema: Schema<CommunityData> = s.object<CommunityData>({
  facebookLikes: s.optionalNullable(s.float64()),
  redditAveragePosts48H: s.optional(s.float64()),
  redditAverageComments48H: s.optional(s.float64()),
  redditSubscribers: s.optionalNullable(s.float64()),
  redditAccountsActive48H: s.optional(s.float64()),
  _keysMap: {
    facebookLikes: "facebook_likes",
    redditAveragePosts48H: "reddit_average_posts_48h",
    redditAverageComments48H: "reddit_average_comments_48h",
    redditSubscribers: "reddit_subscribers",
    redditAccountsActive48H: "reddit_accounts_active_48h",
  },
});
