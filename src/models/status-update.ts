import { s, type Schema } from "../core/index.js";

export type StatusUpdate = {
  description?: string;
  category?: string;
  createdAt?: string;
  user?: string;
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
