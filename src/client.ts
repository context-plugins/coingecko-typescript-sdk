import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/index.js";
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

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options);
  }

  get coins(): Coins {
    return (this.#coins ??= new Coins(this.#rawClient, this.#servers, this.#auth));
  }

  get derivatives(): Derivatives {
    return (this.#derivatives ??= new Derivatives(this.#rawClient, this.#servers, this.#auth));
  }

  get entities(): Entities {
    return (this.#entities ??= new Entities(this.#rawClient, this.#servers, this.#auth));
  }

  get exchanges(): Exchanges {
    return (this.#exchanges ??= new Exchanges(this.#rawClient, this.#servers, this.#auth));
  }

  get globalApi(): GlobalApi {
    return (this.#globalApi ??= new GlobalApi(this.#rawClient, this.#servers, this.#auth));
  }

  get misc(): Misc {
    return (this.#misc ??= new Misc(this.#rawClient, this.#servers, this.#auth));
  }

  get nfts(): Nfts {
    return (this.#nfts ??= new Nfts(this.#rawClient, this.#servers, this.#auth));
  }

  get onchain(): Onchain {
    return (this.#onchain ??= new Onchain(this.#rawClient, this.#servers, this.#auth));
  }

  get publicTreasuryApi(): PublicTreasuryApi {
    return (this.#publicTreasuryApi ??= new PublicTreasuryApi(this.#rawClient, this.#servers, this.#auth));
  }

  get searchApi(): SearchApi {
    return (this.#searchApi ??= new SearchApi(this.#rawClient, this.#servers, this.#auth));
  }

  get simple(): Simple {
    return (this.#simple ??= new Simple(this.#rawClient, this.#servers, this.#auth));
  }
}
