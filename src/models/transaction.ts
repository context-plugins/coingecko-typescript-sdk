import { s, type Schema } from "../core/index.js";
import { typeSchema, type Type } from "./type.js";

export type Transaction = {
  date: number;
  sourceUrl: string;
  coinId: string;
  type: Type;
  holdingNetChange: number;
  transactionValueUsd: number;
  holdingBalance: number;
  averageEntryValueUsd: number;
};

export const transactionSchema: Schema<Transaction> = s.object<Transaction>({
  date: s.number(),
  sourceUrl: s.string(),
  coinId: s.string(),
  type: typeSchema,
  holdingNetChange: s.number(),
  transactionValueUsd: s.number(),
  holdingBalance: s.number(),
  averageEntryValueUsd: s.number(),
  _keysMap: {
    sourceUrl: "source_url",
    coinId: "coin_id",
    holdingNetChange: "holding_net_change",
    transactionValueUsd: "transaction_value_usd",
    holdingBalance: "holding_balance",
    averageEntryValueUsd: "average_entry_value_usd",
  },
});
