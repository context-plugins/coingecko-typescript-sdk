import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusUpdate2Schema, type StatusUpdate2 } from "./status-update2.js";
import { ticker3Schema, type Ticker3 } from "./ticker3.js";

export type ExchangesId = {
  name: string;
  yearEstablished: number | null;
  country: string | null;
  description: string;
  url: string;
  image: string;
  facebookUrl: string;
  redditUrl: string;
  telegramUrl: string;
  slackUrl: string;
  otherUrl1: string;
  otherUrl2: string;
  twitterHandle: string;
  hasTradingIncentive: boolean;
  centralized: boolean;
  publicNotice: string;
  alertNotice: string;
  trustScore: number | null;
  trustScoreRank: number | null;
  coins: number;
  pairs: number;
  tradeVolume24HBtc: number;
  tickers: Ticker3[];
  statusUpdates: StatusUpdate2[];
};

export const exchangesIdSchema: Schema<ExchangesId> = s.object<ExchangesId>({
  name: s.string(),
  yearEstablished: s.nullable(s.number()),
  country: s.nullable(s.string()),
  description: s.string(),
  url: s.string(),
  image: s.string(),
  facebookUrl: s.string(),
  redditUrl: s.string(),
  telegramUrl: s.string(),
  slackUrl: s.string(),
  otherUrl1: s.string(),
  otherUrl2: s.string(),
  twitterHandle: s.string(),
  hasTradingIncentive: s.boolean(),
  centralized: s.boolean(),
  publicNotice: s.string(),
  alertNotice: s.string(),
  trustScore: s.nullable(s.number()),
  trustScoreRank: s.nullable(s.number()),
  coins: s.number(),
  pairs: s.number(),
  tradeVolume24HBtc: s.number(),
  tickers: s.array(s.lazy(() => ticker3Schema)),
  statusUpdates: s.array(s.lazy(() => statusUpdate2Schema)),
  _keysMap: {
    yearEstablished: "year_established",
    facebookUrl: "facebook_url",
    redditUrl: "reddit_url",
    telegramUrl: "telegram_url",
    slackUrl: "slack_url",
    otherUrl1: "other_url_1",
    otherUrl2: "other_url_2",
    twitterHandle: "twitter_handle",
    hasTradingIncentive: "has_trading_incentive",
    publicNotice: "public_notice",
    alertNotice: "alert_notice",
    trustScore: "trust_score",
    trustScoreRank: "trust_score_rank",
    tradeVolume24HBtc: "trade_volume_24h_btc",
    statusUpdates: "status_updates",
  },
});
