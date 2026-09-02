import { s, type Schema } from "../core/index.js";
import { reposUrlSchema, type ReposUrl } from "./repos-url.js";

export type Links = {
  homepage?: string[];
  whitepaper?: string;
  blockchainSite?: string[];
  officialForumUrl?: string[];
  chatUrl?: string[];
  announcementUrl?: string[];
  snapshotUrl?: string | null;
  twitterScreenName?: string;
  facebookUsername?: string;
  bitcointalkThreadIdentifier?: number | null;
  telegramChannelIdentifier?: string;
  subredditUrl?: string;
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
  bitcointalkThreadIdentifier: s.optionalNullable(s.number()),
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
