import { s, type Schema } from "../core/index.js";
import { included4Schema, type Included4 } from "./included4.js";
import { tokenItemSchema, type TokenItem } from "./token-item.js";

export type MultiTokenData = {
  data: TokenItem[];
  included?: Included4[];
};

export const multiTokenDataSchema: Schema<MultiTokenData> = s.object<MultiTokenData>({
  data: s.array(s.lazy(() => tokenItemSchema)),
  included: s.optional(s.array(s.lazy(() => included4Schema))),
});
