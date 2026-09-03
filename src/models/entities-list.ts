import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EntitiesList = {
  id: string;
  symbol: string;
  name: string;
  country: string;
};

export const entitiesListSchema: Schema<EntitiesList> = s.object<EntitiesList>({
  id: s.string(),
  symbol: s.string(),
  name: s.string(),
  country: s.string(),
});
