import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PublicTreasuryEntityChart = {
  /** Historical holdings data as [timestamp, amount] pairs */
  holdings: number[][];
  /** Historical holdings value in USD as [timestamp, value_usd] pairs */
  holdingValueInUsd: number[][];
};

export const publicTreasuryEntityChartSchema: Schema<PublicTreasuryEntityChart> =
  s.object<PublicTreasuryEntityChart>({
    holdings: s.array(s.array(s.float64())),
    holdingValueInUsd: s.array(s.array(s.float64())),
    _keysMap: {
      holdingValueInUsd: "holding_value_in_usd",
    },
  });
