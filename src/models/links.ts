import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reposUrlSchema, type ReposUrl } from "./repos-url.js";

/** Links */
export type Links = {
  /** Website URL */
  homepage?: string[];
  /** Whitepaper URL */
  whitepaper?: string;
  /** Block explorer URL */
  blockchainSite?: string[];
  /** Official forum URL */
  officialForumUrl?: string[];
  /** Chat URL */
  chatUrl?: string[];
  /** Announcement URL */
  announcementUrl?: string[];
  /** Snapshot URL */
  snapshotUrl?: string | null;
  /** Twitter handle */
  twitterScreenName?: string;
  /** Facebook username */
  facebookUsername?: string;
  /** Bitcointalk thread identifier */
  bitcointalkThreadIdentifier?: number | null;
  /** Telegram channel identifier */
  telegramChannelIdentifier?: string;
  /** Subreddit URL */
  subredditUrl?: string;
  /** Repository URL */
  reposUrl?: ReposUrl;
};

export const linksSchema: Schema<Links> = s.object<Links>({
  homepage: s.optional(s.array(s.string())),
  whitepaper: s.optional(s.string()),
  blockchainSite: s.optional(s.array(s.string())),
  officialForumUrl: s.optional(s.array(s.string())),
  chatUrl: s.optional(s.array(s.string())),
  announcementUrl: s.optional(s.array(s.string())),
  snapshotUrl: s.optionalNullable(s.string()),
  twitterScreenName: s.optional(s.string()),
  facebookUsername: s.optional(s.string()),
  bitcointalkThreadIdentifier: s.optionalNullable(s.int()),
  telegramChannelIdentifier: s.optional(s.string()),
  subredditUrl: s.optional(s.string()),
  reposUrl: s.optional(s.lazy(() => reposUrlSchema)),
  _keysMap: {
    blockchainSite: "blockchain_site",
    officialForumUrl: "official_forum_url",
    chatUrl: "chat_url",
    announcementUrl: "announcement_url",
    snapshotUrl: "snapshot_url",
    twitterScreenName: "twitter_screen_name",
    facebookUsername: "facebook_username",
    bitcointalkThreadIdentifier: "bitcointalk_thread_identifier",
    telegramChannelIdentifier: "telegram_channel_identifier",
    subredditUrl: "subreddit_url",
    reposUrl: "repos_url",
  },
});
