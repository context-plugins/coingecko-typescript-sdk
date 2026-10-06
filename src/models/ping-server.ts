import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PingServer = {
  /** API server status message */
  geckoSays: string;
};

export const pingServerSchema: Schema<PingServer> = s.object<PingServer>({
  geckoSays: s.string(),
  _keysMap: {
    geckoSays: "gecko_says",
  },
});
