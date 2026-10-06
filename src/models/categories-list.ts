import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CategoriesList = {
  /** Category ID */
  categoryId: string;
  /** Category name */
  name: string;
};

export const categoriesListSchema: Schema<CategoriesList> = s.object<CategoriesList>({
  categoryId: s.string(),
  name: s.string(),
  _keysMap: {
    categoryId: "category_id",
  },
});
