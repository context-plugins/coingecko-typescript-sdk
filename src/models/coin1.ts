import { s, type Schema } from "../core/index.js";
import { itemSchema, type Item } from "./item.js";

export type Coin1 = {
  item: Item;
};

export const coin1Schema: Schema<Coin1> = s.object<Coin1>({
  item: itemSchema,
});
