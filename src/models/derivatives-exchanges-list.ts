import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DerivativesExchangesList = {
  id: string;
  name: string;
};

export const derivativesExchangesListSchema: Schema<DerivativesExchangesList> =
  s.object<DerivativesExchangesList>({
    id: s.string(),
    name: s.string(),
  });
