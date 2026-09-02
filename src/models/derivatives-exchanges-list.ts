import { s, type Schema } from "../core/index.js";

export type DerivativesExchangesList = {
  id: string;
  name: string;
};

export const derivativesExchangesListSchema: Schema<DerivativesExchangesList> =
  s.object<DerivativesExchangesList>({
    id: s.string(),
    name: s.string(),
  });
