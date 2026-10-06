import type { TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Learn how to [set up your API key](https://docs.coingecko.com/docs/setting-up-your-api-key) */
  readonly headerAuth?: TokenProvider | undefined;
  /** Learn how to [set up your API key](https://docs.coingecko.com/docs/setting-up-your-api-key) */
  readonly queryAuth?: TokenProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
