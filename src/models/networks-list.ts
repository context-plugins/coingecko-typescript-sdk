import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data33Schema, type Data33 } from "./data33.js";

export type NetworksList = {
  data: Data33[];
};

export const networksListSchema: Schema<NetworksList> = s.object<NetworksList>({
  data: s.array(s.lazy(() => data33Schema)),
});
