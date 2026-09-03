import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data31Schema, type Data31 } from "./data31.js";

export type OnchainSimplePrice = {
  data: Data31;
};

export const onchainSimplePriceSchema: Schema<OnchainSimplePrice> = s.object<OnchainSimplePrice>({
  data: data31Schema,
});
