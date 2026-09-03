import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdingAmountChangeSchema, type HoldingAmountChange } from "./holding-amount-change.js";
import { holdingChangePercentageSchema, type HoldingChangePercentage } from "./holding-change-percentage.js";

export type Holding = {
  coinId: string;
  amount: number;
  percentageOfTotalSupply: number;
  amountPerShare: number;
  entityValueUsdPercentage: number;
  currentValueUsd: number;
  totalEntryValueUsd: number;
  averageEntryValueUsd: number;
  unrealizedPnl: number;
  holdingAmountChange?: HoldingAmountChange;
  holdingChangePercentage?: HoldingChangePercentage;
};

export const holdingSchema: Schema<Holding> = s.object<Holding>({
  coinId: s.string(),
  amount: s.number(),
  percentageOfTotalSupply: s.number(),
  amountPerShare: s.number(),
  entityValueUsdPercentage: s.number(),
  currentValueUsd: s.number(),
  totalEntryValueUsd: s.number(),
  averageEntryValueUsd: s.number(),
  unrealizedPnl: s.number(),
  holdingAmountChange: s.optional(s.lazy(() => holdingAmountChangeSchema)),
  holdingChangePercentage: s.optional(s.lazy(() => holdingChangePercentageSchema)),
  _keysMap: {
    coinId: "coin_id",
    percentageOfTotalSupply: "percentage_of_total_supply",
    amountPerShare: "amount_per_share",
    entityValueUsdPercentage: "entity_value_usd_percentage",
    currentValueUsd: "current_value_usd",
    totalEntryValueUsd: "total_entry_value_usd",
    averageEntryValueUsd: "average_entry_value_usd",
    unrealizedPnl: "unrealized_pnl",
    holdingAmountChange: "holding_amount_change",
    holdingChangePercentage: "holding_change_percentage",
  },
});
