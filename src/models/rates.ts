import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Rates = {
  name: string;
  unit: string;
  value: number;
  type: string;
};

export const ratesSchema: Schema<Rates> = s.object<Rates>({
  name: s.string(),
  unit: s.string(),
  value: s.number(),
  type: s.string(),
});
