import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Token = {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoUri: string;
};

export const tokenSchema: Schema<Token> = s.object<Token>({
  chainId: s.number(),
  address: s.string(),
  name: s.string(),
  symbol: s.string(),
  decimals: s.number(),
  logoUri: s.string(),
  _keysMap: {
    logoUri: "logoURI",
  },
});
