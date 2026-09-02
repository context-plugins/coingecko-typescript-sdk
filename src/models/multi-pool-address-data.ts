import { s, type Schema } from "../core/index.js";
import { includedSchema, type Included } from "./included.js";
import { poolAddressItemSchema, type PoolAddressItem } from "./pool-address-item.js";

export type MultiPoolAddressData = {
  data: PoolAddressItem[];
  included?: Included[];
};

export const multiPoolAddressDataSchema: Schema<MultiPoolAddressData> = s.object<MultiPoolAddressData>({
  data: s.array(s.lazy(() => poolAddressItemSchema)),
  included: s.optional(s.array(s.lazy(() => includedSchema))),
});
