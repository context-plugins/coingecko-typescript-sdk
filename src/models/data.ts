import { s, type Schema } from "../core/index.js";

export type Data = {
  activeCryptocurrencies: number;
  upcomingIcos: number;
  ongoingIcos: number;
  endedIcos: number;
  markets: number;
  totalMarketCap: Record<string, number>;
  totalVolume: Record<string, number>;
  marketCapPercentage: Record<string, number>;
  marketCapChangePercentage24HUsd: number;
  volumeChangePercentage24HUsd: number;
  updatedAt: number;
};

export const dataSchema: Schema<Data> = s.object<Data>({
  activeCryptocurrencies: s.number(),
  upcomingIcos: s.number(),
  ongoingIcos: s.number(),
  endedIcos: s.number(),
  markets: s.number(),
  totalMarketCap: s.record(s.string(), s.number()),
  totalVolume: s.record(s.string(), s.number()),
  marketCapPercentage: s.record(s.string(), s.number()),
  marketCapChangePercentage24HUsd: s.number(),
  volumeChangePercentage24HUsd: s.number(),
  updatedAt: s.number(),
  _keysMap: {
    activeCryptocurrencies: "active_cryptocurrencies",
    upcomingIcos: "upcoming_icos",
    ongoingIcos: "ongoing_icos",
    endedIcos: "ended_icos",
    totalMarketCap: "total_market_cap",
    totalVolume: "total_volume",
    marketCapPercentage: "market_cap_percentage",
    marketCapChangePercentage24HUsd: "market_cap_change_percentage_24h_usd",
    volumeChangePercentage24HUsd: "volume_change_percentage_24h_usd",
    updatedAt: "updated_at",
  },
});
