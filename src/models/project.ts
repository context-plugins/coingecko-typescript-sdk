import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { image4Schema, type Image4 } from "./image4.js";

/** Project information */
export type Project = {
  /** Project type */
  type?: string;
  /** Project ID */
  id?: string;
  /** Project name */
  name?: string;
  /** Project image URLs */
  image?: Image4;
};

export const projectSchema: Schema<Project> = s.object<Project>({
  type: s.optional(s.string()),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  image: s.optional(s.lazy(() => image4Schema)),
});
