import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Coins } from "./resources/coins.js";
import { Derivatives } from "./resources/derivatives.js";
import { Entities } from "./resources/entities.js";
import { Exchanges } from "./resources/exchanges.js";
import { GlobalApi } from "./resources/global-api.js";
import { Misc } from "./resources/misc.js";
import { Nfts } from "./resources/nfts.js";
import { Onchain } from "./resources/onchain.js";
import { PublicTreasuryApi } from "./resources/public-treasury-api.js";
import { SearchApi } from "./resources/search-api.js";
import { Simple } from "./resources/simple.js";
import { buildServers, type Servers } from "./servers.js";

export class CoinGeckoClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #coins?: Coins;
  #derivatives?: Derivatives;
  #entities?: Entities;
  #exchanges?: Exchanges;
  #globalApi?: GlobalApi;
  #misc?: Misc;
  #nfts?: Nfts;
  #onchain?: Onchain;
  #publicTreasuryApi?: PublicTreasuryApi;
  #searchApi?: SearchApi;
  #simple?: Simple;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "COIN_GECKO_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CoinGeckoClient/3.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "3.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Coin lists, market data, details, history, charts and OHLC
   */
  get coins(): Coins {
    return (this.#coins ??= new Coins(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Derivatives exchanges and tickers
   */
  get derivatives(): Derivatives {
    return (this.#derivatives ??= new Derivatives(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Entity directory and per-entity holdings
   */
  get entities(): Entities {
    return (this.#entities ??= new Entities(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Exchange lists, details, tickers, volume charts and BTC exchange rates
   */
  get exchanges(): Exchanges {
    return (this.#exchanges ??= new Exchanges(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Global crypto market data and DeFi stats
   */
  get globalApi(): GlobalApi {
    return (this.#globalApi ??= new GlobalApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Ping, asset platforms and token lists
   */
  get misc(): Misc {
    return (this.#misc ??= new Misc(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * NFT collection lists and details
   */
  get nfts(): Nfts {
    return (this.#nfts ??= new Nfts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * On-chain DEX data (GeckoTerminal): networks, pools, tokens and OHLCV
   */
  get onchain(): Onchain {
    return (this.#onchain ??= new Onchain(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Public companies and entities holding crypto treasuries
   */
  get publicTreasuryApi(): PublicTreasuryApi {
    return (this.#publicTreasuryApi ??= new PublicTreasuryApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Search and trending
   */
  get searchApi(): SearchApi {
    return (this.#searchApi ??= new SearchApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Simple price and supported vs-currencies
   */
  get simple(): Simple {
    return (this.#simple ??= new Simple(this.#rawClient, this.#servers, this.#auth));
  }
}
