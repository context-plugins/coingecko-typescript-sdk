import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { projectSchema, type Project } from "./project.js";

export type StatusUpdate2 = {
  description?: string;
  category?: string;
  createdAt?: string;
  user?: string;
  userTitle?: string;
  pin?: boolean;
  project?: Project;
};

export const statusUpdate2Schema: Schema<StatusUpdate2> = s.object<StatusUpdate2>({
  description: s.optional(s.string()),
  category: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  user: s.optional(s.string()),
  userTitle: s.optional(s.string()),
  pin: s.optional(s.boolean()),
  project: s.optional(s.lazy(() => projectSchema)),
  _keysMap: {
    createdAt: "created_at",
    userTitle: "user_title",
  },
});
