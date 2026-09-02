import { s, type Schema } from "../core/index.js";
import { data31Schema, type Data31 } from "./data31.js";

export type OnchainSimplePrice = {
  data: Data31;
};

export const onchainSimplePriceSchema: Schema<OnchainSimplePrice> = s.object<OnchainSimplePrice>({
  data: data31Schema,
});
