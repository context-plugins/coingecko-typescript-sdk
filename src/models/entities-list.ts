import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EntitiesList = {
  /** Entity ID */
  id: string;
  /** Ticker symbol of public company */
  symbol: string;
  /** Entity name */
  name: string;
  /** Country code */
  country: string;
};

export const entitiesListSchema: Schema<EntitiesList> = s.object<EntitiesList>({
  id: s.string(),
  symbol: s.string(),
  name: s.string(),
  country: s.string(),
});
