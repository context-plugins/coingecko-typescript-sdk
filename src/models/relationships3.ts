import { s, type Schema } from "../core/index.js";
import { topPoolsSchema, type TopPools } from "./top-pools.js";

export type Relationships3 = {
  topPools?: TopPools;
};

export const relationships3Schema: Schema<Relationships3> = s.object<Relationships3>({
  topPools: s.optional(s.lazy(() => topPoolsSchema)),
  _keysMap: {
    topPools: "top_pools",
  },
});
