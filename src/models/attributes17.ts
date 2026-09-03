import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attributes17 = {
  name: string;
};

export const attributes17Schema: Schema<Attributes17> = s.object<Attributes17>({
  name: s.string(),
});
