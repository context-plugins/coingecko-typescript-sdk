import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { globalDeFiSchema, type GlobalDeFi } from "../models/global-de-fi.js";
import { globalSchema, type Global } from "../models/global.js";
import type { Servers } from "../servers.js";

/**
 * Global crypto market data and DeFi stats
 */
export class GlobalApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Crypto Global Market Data
   *
   * @remarks
   * To query cryptocurrency global data including active cryptocurrencies, markets, total crypto
   * market cap and etc
   *
   * @returns Cryptocurrency global market data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cryptoGlobal(options?: RequestOptions): ApiPromise<Global, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/global"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: globalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Global DeFi Market Data
   *
   * @remarks
   * To query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market
   * cap, trading volume
   *
   * @returns Global decentralized finance (DeFi) market data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  globalDefi(options?: RequestOptions): ApiPromise<GlobalDeFi, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/global/decentralized_finance_defi"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: globalDeFiSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
