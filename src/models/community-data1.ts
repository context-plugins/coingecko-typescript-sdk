import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Community data */
export type CommunityData1 = {
  /** Facebook likes */
  facebookLikes?: number | null;
  /** Reddit average posts in 48 hours */
  redditAveragePosts48H?: number;
  /** Reddit average comments in 48 hours */
  redditAverageComments48H?: number;
  /** Reddit subscribers */
  redditSubscribers?: number;
  /** Reddit active accounts in 48 hours */
  redditAccountsActive48H?: number;
  /** Telegram channel user count */
  telegramChannelUserCount?: number | null;
};

export const communityData1Schema: Schema<CommunityData1> = s.object<CommunityData1>({
  facebookLikes: s.optionalNullable(s.float64()),
  redditAveragePosts48H: s.optional(s.float64()),
  redditAverageComments48H: s.optional(s.float64()),
  redditSubscribers: s.optional(s.float64()),
  redditAccountsActive48H: s.optional(s.float64()),
  telegramChannelUserCount: s.optionalNullable(s.float64()),
  _keysMap: {
    facebookLikes: "facebook_likes",
    redditAveragePosts48H: "reddit_average_posts_48h",
    redditAverageComments48H: "reddit_average_comments_48h",
    redditSubscribers: "reddit_subscribers",
    redditAccountsActive48H: "reddit_accounts_active_48h",
    telegramChannelUserCount: "telegram_channel_user_count",
  },
});
