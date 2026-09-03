import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExchangeVolumeChart = number | string;

export const exchangeVolumeChartSchema: Schema<ExchangeVolumeChart> = s.of<ExchangeVolumeChart>(
  s.union([s.number(), s.string()]),
);
