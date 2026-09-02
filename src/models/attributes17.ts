import { s, type Schema } from "../core/index.js";

export type Attributes17 = {
  name: string;
};

export const attributes17Schema: Schema<Attributes17> = s.object<Attributes17>({
  name: s.string(),
});
