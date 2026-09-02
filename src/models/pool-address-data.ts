import { s, type Schema } from "../core/index.js";
import { includedSchema, type Included } from "./included.js";
import { poolAddressItemSchema, type PoolAddressItem } from "./pool-address-item.js";

export type PoolAddressData = {
  data: PoolAddressItem;
  included?: Included[];
};

export const poolAddressDataSchema: Schema<PoolAddressData> = s.object<PoolAddressData>({
  data: poolAddressItemSchema,
  included: s.optional(s.array(s.lazy(() => includedSchema))),
});
