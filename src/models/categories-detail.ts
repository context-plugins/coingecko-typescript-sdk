import { s, type Schema } from "../core/index.js";

export type CategoriesDetail = {
  id?: string;
  name?: string;
};

export const categoriesDetailSchema: Schema<CategoriesDetail> = s.object<CategoriesDetail>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
});
