import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { included5Schema, type Included5 } from "./included5.js";
import { tokenItemSchema, type TokenItem } from "./token-item.js";

export type TokenData = {
  data: TokenItem;
  /** Included top pool data, present when include=top_pools is specified */
  included?: Included5[];
};

export const tokenDataSchema: Schema<TokenData> = s.object<TokenData>({
  data: tokenItemSchema,
  included: s.optional(s.array(s.lazy(() => included5Schema))),
});
