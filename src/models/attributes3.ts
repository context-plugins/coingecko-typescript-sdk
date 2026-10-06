import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attributes3 = {
  /** Block number of the trade */
  blockNumber: number;
  /** Transaction hash */
  txHash: string;
  /** Transaction sender address */
  txFromAddress: string;
  /** Amount of token sent */
  fromTokenAmount: string;
  /** Amount of token received */
  toTokenAmount: string;
  /** Price of from-token in currency token */
  priceFromInCurrencyToken: string;
  /** Price of to-token in currency token */
  priceToInCurrencyToken: string;
  /** Price of from-token in USD */
  priceFromInUsd: string;
  /** Price of to-token in USD */
  priceToInUsd: string;
  /** Block timestamp */
  blockTimestamp: string;
  /** Trade kind (buy or sell) */
  kind: string;
  /** Trade volume in USD */
  volumeInUsd: string;
  /** From-token contract address */
  fromTokenAddress: string;
  /** To-token contract address */
  toTokenAddress: string;
};

export const attributes3Schema: Schema<Attributes3> = s.object<Attributes3>({
  blockNumber: s.int(),
  txHash: s.string(),
  txFromAddress: s.string(),
  fromTokenAmount: s.string(),
  toTokenAmount: s.string(),
  priceFromInCurrencyToken: s.string(),
  priceToInCurrencyToken: s.string(),
  priceFromInUsd: s.string(),
  priceToInUsd: s.string(),
  blockTimestamp: s.string(),
  kind: s.string(),
  volumeInUsd: s.string(),
  fromTokenAddress: s.string(),
  toTokenAddress: s.string(),
  _keysMap: {
    blockNumber: "block_number",
    txHash: "tx_hash",
    txFromAddress: "tx_from_address",
    fromTokenAmount: "from_token_amount",
    toTokenAmount: "to_token_amount",
    priceFromInCurrencyToken: "price_from_in_currency_token",
    priceToInCurrencyToken: "price_to_in_currency_token",
    priceFromInUsd: "price_from_in_usd",
    priceToInUsd: "price_to_in_usd",
    blockTimestamp: "block_timestamp",
    volumeInUsd: "volume_in_usd",
    fromTokenAddress: "from_token_address",
    toTokenAddress: "to_token_address",
  },
});
