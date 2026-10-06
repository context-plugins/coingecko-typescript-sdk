import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Token = {
  /** Chainlist's chain ID */
  chainId: number;
  /** Token contract address */
  address: string;
  /** Token name */
  name: string;
  /** Token symbol */
  symbol: string;
  /** Token decimals */
  decimals: number;
  /** Token image URL */
  logoUri: string;
};

export const tokenSchema: Schema<Token> = s.object<Token>({
  chainId: s.float64(),
  address: s.string(),
  name: s.string(),
  symbol: s.string(),
  decimals: s.float64(),
  logoUri: s.string(),
  _keysMap: {
    logoUri: "logoURI",
  },
});
