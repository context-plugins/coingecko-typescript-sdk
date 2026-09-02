import { s, type Schema } from "../core/index.js";

export type Data5 = {
  id?: string;
  type?: string;
};

export const data5Schema: Schema<Data5> = s.object<Data5>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
});
