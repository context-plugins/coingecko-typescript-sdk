import { s, type Schema } from "../core/index.js";
import { pool2Schema, type Pool2 } from "./pool2.js";

export type Relationships2 = {
  pool?: Pool2;
};

export const relationships2Schema: Schema<Relationships2> = s.object<Relationships2>({
  pool: s.optional(s.lazy(() => pool2Schema)),
});
