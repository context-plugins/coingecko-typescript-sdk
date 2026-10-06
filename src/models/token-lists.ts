import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokenSchema, type Token } from "./token.js";
import { versionSchema, type Version } from "./version.js";

export type TokenLists = {
  /** Token list name */
  name: string;
  /** Token list logo URL */
  logoUri: string;
  /** Token list keywords */
  keywords: string[];
  /** Token list generation timestamp */
  timestamp: Date;
  /** List of tokens */
  tokens: Token[];
  /** Token list version */
  version: Version;
};

export const tokenListsSchema: Schema<TokenLists> = s.object<TokenLists>({
  name: s.string(),
  logoUri: s.string(),
  keywords: s.array(s.string()),
  timestamp: s.dateTime(),
  tokens: s.array(s.lazy(() => tokenSchema)),
  version: versionSchema,
  _keysMap: {
    logoUri: "logoURI",
  },
});
