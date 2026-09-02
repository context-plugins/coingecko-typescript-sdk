import { s, type Schema } from "../core/index.js";

export type PingServer = {
  geckoSays: string;
};

export const pingServerSchema: Schema<PingServer> = s.object<PingServer>({
  geckoSays: s.string(),
  _keysMap: {
    geckoSays: "gecko_says",
  },
});
