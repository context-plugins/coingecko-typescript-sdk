import { s, type Schema } from "../core/index.js";

export type PublicTreasuryEntityChart = {
  holdings: number[][];
  holdingValueInUsd: number[][];
};

export const publicTreasuryEntityChartSchema: Schema<PublicTreasuryEntityChart> =
  s.object<PublicTreasuryEntityChart>({
    holdings: s.array(s.array(s.number())),
    holdingValueInUsd: s.array(s.array(s.number())),
    _keysMap: {
      holdingValueInUsd: "holding_value_in_usd",
    },
  });
