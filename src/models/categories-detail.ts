import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CategoriesDetail = {
  id?: string;
  name?: string;
};

export const categoriesDetailSchema: Schema<CategoriesDetail> = s.object<CategoriesDetail>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
});
