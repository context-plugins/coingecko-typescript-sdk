import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Transaction = {
  /** Transaction date in UNIX timestamp */
  date: number;
  /** Source document URL */
  sourceUrl: string;
  /** Coin ID */
  coinId: string;
  /** Transaction type */
  type: Type;
  /** Net change in holdings after the transaction */
  holdingNetChange: number;
  /** Transaction value in USD */
  transactionValueUsd: number;
  /** Total holding balance after the transaction */
  holdingBalance: number;
  /** Average entry value in USD after the transaction */
  averageEntryValueUsd: number;
};

export const transactionSchema: Schema<Transaction> = s.object<Transaction>({
  date: s.float64(),
  sourceUrl: s.string(),
  coinId: s.string(),
  type: typeSchema,
  holdingNetChange: s.float64(),
  transactionValueUsd: s.float64(),
  holdingBalance: s.float64(),
  averageEntryValueUsd: s.float64(),
  _keysMap: {
    sourceUrl: "source_url",
    coinId: "coin_id",
    holdingNetChange: "holding_net_change",
    transactionValueUsd: "transaction_value_usd",
    holdingBalance: "holding_balance",
    averageEntryValueUsd: "average_entry_value_usd",
  },
});
