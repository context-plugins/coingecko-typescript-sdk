import { s, type Schema } from "../core/index.js";

export type SparklineIn7D = {
  price?: number[];
};

export const sparklineIn7DSchema: Schema<SparklineIn7D> = s.object<SparklineIn7D>({
  price: s.optional(s.array(s.number())),
});
