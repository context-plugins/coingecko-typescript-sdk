import { s, type Schema } from "../core/index.js";

export type Category = {
  id: string;
  name: string;
};

export const categorySchema: Schema<Category> = s.object<Category>({
  id: s.string(),
  name: s.string(),
});
