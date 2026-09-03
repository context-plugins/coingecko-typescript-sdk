import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CommunityData = {
  facebookLikes?: number | null;
  redditAveragePosts48H?: number;
  redditAverageComments48H?: number;
  redditSubscribers?: number | null;
  redditAccountsActive48H?: number;
};

export const communityDataSchema: Schema<CommunityData> = s.object<CommunityData>({
  facebookLikes: s.optionalNullable(s.number()),
  redditAveragePosts48H: s.optional(s.number()),
  redditAverageComments48H: s.optional(s.number()),
  redditSubscribers: s.optionalNullable(s.number()),
  redditAccountsActive48H: s.optional(s.number()),
  _keysMap: {
    facebookLikes: "facebook_likes",
    redditAveragePosts48H: "reddit_average_posts_48h",
    redditAverageComments48H: "reddit_average_comments_48h",
    redditSubscribers: "reddit_subscribers",
    redditAccountsActive48H: "reddit_accounts_active_48h",
  },
});
