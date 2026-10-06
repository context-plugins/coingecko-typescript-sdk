import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusUpdate2Schema, type StatusUpdate2 } from "./status-update2.js";
import { ticker3Schema, type Ticker3 } from "./ticker3.js";

export type ExchangesId = {
  /** Exchange name */
  name: string;
  /** Year the exchange was established */
  yearEstablished: number | null;
  /** Country where the exchange is based */
  country: string | null;
  /** Exchange description */
  description: string;
  /** Exchange website URL */
  url: string;
  /** Exchange logo URL */
  image: string;
  /** Facebook URL */
  facebookUrl: string;
  /** Reddit URL */
  redditUrl: string;
  /** Telegram URL */
  telegramUrl: string;
  /** Slack URL */
  slackUrl: string;
  /** Other URL 1 */
  otherUrl1: string;
  /** Other URL 2 */
  otherUrl2: string;
  /** Twitter handle */
  twitterHandle: string;
  /** Whether the exchange has trading incentive */
  hasTradingIncentive: boolean;
  /** Whether the exchange is centralized */
  centralized: boolean;
  /** Public notice */
  publicNotice: string;
  /** Alert notice */
  alertNotice: string;
  /** Exchange trust score */
  trustScore: number | null;
  /** Exchange trust score rank */
  trustScoreRank: number | null;
  /** Number of coins listed */
  coins: number;
  /** Number of trading pairs */
  pairs: number;
  /** Exchange 24h trading volume in BTC */
  tradeVolume24HBtc: number;
  /** Exchange tickers */
  tickers: Ticker3[];
  /** Status updates */
  statusUpdates: StatusUpdate2[];
};

export const exchangesIdSchema: Schema<ExchangesId> = s.object<ExchangesId>({
  name: s.string(),
  yearEstablished: s.nullable(s.float64()),
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
  trustScore: s.nullable(s.float64()),
  trustScoreRank: s.nullable(s.float64()),
  coins: s.float64(),
  pairs: s.float64(),
  tradeVolume24HBtc: s.float64(),
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
