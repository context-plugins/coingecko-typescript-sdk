import { s, type Schema } from "../core/index.js";

export type Attributes3 = {
  blockNumber: number;
  txHash: string;
  txFromAddress: string;
  fromTokenAmount: string;
  toTokenAmount: string;
  priceFromInCurrencyToken: string;
  priceToInCurrencyToken: string;
  priceFromInUsd: string;
  priceToInUsd: string;
  blockTimestamp: string;
  kind: string;
  volumeInUsd: string;
  fromTokenAddress: string;
  toTokenAddress: string;
};

export const attributes3Schema: Schema<Attributes3> = s.object<Attributes3>({
  blockNumber: s.number(),
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
