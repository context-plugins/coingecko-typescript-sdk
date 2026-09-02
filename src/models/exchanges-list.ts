import { s, type Schema } from "../core/index.js";

export type ExchangesList = {
  id: string;
  name: string;
};

export const exchangesListSchema: Schema<ExchangesList> = s.object<ExchangesList>({
  id: s.string(),
  name: s.string(),
});
