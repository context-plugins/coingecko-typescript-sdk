import { s, type Schema } from "../core/index.js";
import { image4Schema, type Image4 } from "./image4.js";

export type Project = {
  type?: string;
  id?: string;
  name?: string;
  image?: Image4;
};

export const projectSchema: Schema<Project> = s.object<Project>({
  type: s.optional(s.string()),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  image: s.optional(s.lazy(() => image4Schema)),
});
