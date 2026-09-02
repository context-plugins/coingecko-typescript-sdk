import { s, type Schema } from "../core/index.js";
import { data12Schema, type Data12 } from "./data12.js";
import { included3Schema, type Included3 } from "./included3.js";

export type PoolTokensInfo = {
  data: Data12[];
  included?: Included3[];
};

export const poolTokensInfoSchema: Schema<PoolTokensInfo> = s.object<PoolTokensInfo>({
  data: s.array(s.lazy(() => data12Schema)),
  included: s.optional(s.array(s.lazy(() => included3Schema))),
});
