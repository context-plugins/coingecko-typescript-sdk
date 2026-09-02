import { s, type Schema } from "../../core/index.js";

export type ExchangeVolumeChart = number | string;

export const exchangeVolumeChartSchema: Schema<ExchangeVolumeChart> = s.of<ExchangeVolumeChart>(
  s.union([s.number(), s.string()]),
);
