import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/index.js";
import { apiKeyHeaderAuth, apiKeyQueryAuth } from "./core/index.js";

export type AuthSchemes = {
  readonly headerAuth: AuthScheme;
  readonly queryAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    headerAuth: apiKeyHeaderAuth({ name: "x-cg-demo-api-key", token: options.headerAuth }),
    queryAuth: apiKeyQueryAuth({ name: "x_cg_demo_api_key", token: options.queryAuth }),
  };
}
