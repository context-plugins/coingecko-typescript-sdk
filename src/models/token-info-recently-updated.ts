import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data10Schema, type Data10 } from "./data10.js";
import { included2Schema, type Included2 } from "./included2.js";

export type TokenInfoRecentlyUpdated = {
  data: Data10[];
  /** Included network data, present when include=network is specified */
  included?: Included2[];
};

export const tokenInfoRecentlyUpdatedSchema: Schema<TokenInfoRecentlyUpdated> =
  s.object<TokenInfoRecentlyUpdated>({
    data: s.array(s.lazy(() => data10Schema)),
    included: s.optional(s.array(s.lazy(() => included2Schema))),
  });
