import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusUpdate = {
  /** Status update description */
  description?: string;
  /** Status update category */
  category?: string;
  /** Status update creation time */
  createdAt?: string;
  /** Status update user */
  user?: string;
  /** Status update user title */
  userTitle?: string;
};

export const statusUpdateSchema: Schema<StatusUpdate> = s.object<StatusUpdate>({
  description: s.optional(s.string()),
  category: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  user: s.optional(s.string()),
  userTitle: s.optional(s.string()),
  _keysMap: {
    createdAt: "created_at",
    userTitle: "user_title",
  },
});
