import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SparklineIn7D = {
  price?: number[];
};

export const sparklineIn7DSchema: Schema<SparklineIn7D> = s.object<SparklineIn7D>({
  price: s.optional(s.array(s.number())),
});
