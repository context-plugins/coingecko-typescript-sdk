import { s, type Schema } from "../core/index.js";

export type CategoriesList = {
  categoryId: string;
  name: string;
};

export const categoriesListSchema: Schema<CategoriesList> = s.object<CategoriesList>({
  categoryId: s.string(),
  name: s.string(),
  _keysMap: {
    categoryId: "category_id",
  },
});
