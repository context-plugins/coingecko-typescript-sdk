import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributes1Schema, type Attributes1 } from "./attributes1.js";

export type Included = {
  id?: string;
  type?: string;
  attributes?: Attributes1;
};

export const includedSchema: Schema<Included> = s.object<Included>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  attributes: s.optional(s.lazy(() => attributes1Schema)),
});
