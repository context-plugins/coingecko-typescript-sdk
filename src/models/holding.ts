import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdingAmountChangeSchema, type HoldingAmountChange } from "./holding-amount-change.js";
import { holdingChangePercentageSchema, type HoldingChangePercentage } from "./holding-change-percentage.js";

export type Holding = {
  /** Coin ID */
  coinId: string;
  /** Amount of cryptocurrency held */
  amount: number;
  /** Percentage of total crypto supply */
  percentageOfTotalSupply: number;
  /** Amount of cryptocurrency per share */
  amountPerShare: number;
  /** Percentage of entity's total treasury value */
  entityValueUsdPercentage: number;
  /** Current value of holdings in USD */
  currentValueUsd: number;
  /** Total entry cost in USD */
  totalEntryValueUsd: number;
  /** Average entry cost per unit in USD */
  averageEntryValueUsd: number;
  /** Unrealized profit and loss for this holding */
  unrealizedPnl: number;
  /** Holding amount changes over different timeframes */
  holdingAmountChange?: HoldingAmountChange;
  /** Holding change percentages over different timeframes */
  holdingChangePercentage?: HoldingChangePercentage;
};

export const holdingSchema: Schema<Holding> = s.object<Holding>({
  coinId: s.string(),
  amount: s.float64(),
  percentageOfTotalSupply: s.float64(),
  amountPerShare: s.float64(),
  entityValueUsdPercentage: s.float64(),
  currentValueUsd: s.float64(),
  totalEntryValueUsd: s.float64(),
  averageEntryValueUsd: s.float64(),
  unrealizedPnl: s.float64(),
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
