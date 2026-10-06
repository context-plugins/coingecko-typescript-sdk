import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { includedSchema, type Included } from "./included.js";
import { poolAddressItemSchema, type PoolAddressItem } from "./pool-address-item.js";

export type PoolAddressData = {
  data: PoolAddressItem;
  /** Included related resources, present when include parameter is specified */
  included?: Included[];
};

export const poolAddressDataSchema: Schema<PoolAddressData> = s.object<PoolAddressData>({
  data: poolAddressItemSchema,
  included: s.optional(s.array(s.lazy(() => includedSchema))),
});
