import { s, type Schema } from "../core/index.js";
import { data32Schema, type Data32 } from "./data32.js";

export type DexesList = {
  data: Data32[];
};

export const dexesListSchema: Schema<DexesList> = s.object<DexesList>({
  data: s.array(s.lazy(() => data32Schema)),
});
