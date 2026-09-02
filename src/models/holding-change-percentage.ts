import { s, type Schema } from "../core/index.js";

export type HoldingChangePercentage = {
  D7?: number;
  D14?: number;
  D30?: number;
  D90?: number;
  Y1?: number;
  ytd?: number;
};

export const holdingChangePercentageSchema: Schema<HoldingChangePercentage> =
  s.object<HoldingChangePercentage>({
    D7: s.optional(s.number()),
    D14: s.optional(s.number()),
    D30: s.optional(s.number()),
    D90: s.optional(s.number()),
    Y1: s.optional(s.number()),
    ytd: s.optional(s.number()),
    _keysMap: {
      D7: "7d",
      D14: "14d",
      D30: "30d",
      D90: "90d",
      Y1: "1y",
    },
  });
