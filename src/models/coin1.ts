import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

export type Coin1 = {
  item: Item;
};

export const coin1Schema: Schema<Coin1> = s.object<Coin1>({
  item: itemSchema,
});
