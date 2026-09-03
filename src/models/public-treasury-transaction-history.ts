import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionSchema, type Transaction } from "./transaction.js";

export type PublicTreasuryTransactionHistory = {
  transactions: Transaction[];
};

export const publicTreasuryTransactionHistorySchema: Schema<PublicTreasuryTransactionHistory> =
  s.object<PublicTreasuryTransactionHistory>({
    transactions: s.array(s.lazy(() => transactionSchema)),
  });
