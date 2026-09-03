import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CommunityData1 = {
  facebookLikes?: number | null;
  redditAveragePosts48H?: number;
  redditAverageComments48H?: number;
  redditSubscribers?: number;
  redditAccountsActive48H?: number;
  telegramChannelUserCount?: number | null;
};

export const communityData1Schema: Schema<CommunityData1> = s.object<CommunityData1>({
  facebookLikes: s.optionalNullable(s.number()),
  redditAveragePosts48H: s.optional(s.number()),
  redditAverageComments48H: s.optional(s.number()),
  redditSubscribers: s.optional(s.number()),
  redditAccountsActive48H: s.optional(s.number()),
  telegramChannelUserCount: s.optionalNullable(s.number()),
  _keysMap: {
    facebookLikes: "facebook_likes",
    redditAveragePosts48H: "reddit_average_posts_48h",
    redditAverageComments48H: "reddit_average_comments_48h",
    redditSubscribers: "reddit_subscribers",
    redditAccountsActive48H: "reddit_accounts_active_48h",
    telegramChannelUserCount: "telegram_channel_user_count",
  },
});
