import { s, type Schema } from "../core/index.js";
import { networkSchema, type Network } from "./network.js";

export type Relationships1 = {
  network?: Network;
};

export const relationships1Schema: Schema<Relationships1> = s.object<Relationships1>({
  network: s.optional(s.lazy(() => networkSchema)),
});
