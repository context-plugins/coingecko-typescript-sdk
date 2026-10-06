import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Category = {
  /** Category ID */
  id: string;
  /** Category name */
  name: string;
};

export const categorySchema: Schema<Category> = s.object<Category>({
  id: s.string(),
  name: s.string(),
});
