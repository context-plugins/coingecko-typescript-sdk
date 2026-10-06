import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { derivativesExchangeSchema, type DerivativesExchange } from "../models/derivatives-exchange.js";
import {
  derivativesExchangesIdSchema,
  type DerivativesExchangesId,
} from "../models/derivatives-exchanges-id.js";
import {
  derivativesExchangesListSchema,
  type DerivativesExchangesList,
} from "../models/derivatives-exchanges-list.js";
import { derivativesTickerSchema, type DerivativesTicker } from "../models/derivatives-ticker.js";
import { includeTickersSchema, type IncludeTickers } from "../models/include-tickers.js";
import { order4Schema, type Order4 } from "../models/order4.js";
import type { Servers } from "../servers.js";

/**
 * Derivatives exchanges and tickers
 */
export class Derivatives {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Derivatives Exchanges List with Data
   *
   * @remarks
   * To query all the derivatives exchanges with related data (ID, name, open interest, ...) on
   * CoinGecko
   *
   * @returns List of derivative exchanges with data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  derivativesExchanges(
    request: Derivatives.DerivativesExchangesRequest,
    options?: RequestOptions,
  ): ApiPromise<DerivativesExchange[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/derivatives/exchanges"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order4Schema)) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => derivativesExchangeSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Derivatives Exchange Data by ID
   *
   * @remarks
   * To query the derivatives exchange's related data (name, open interest, trade volume, ...) based
   * on the exchange's ID
   *
   * @returns Derivative exchange data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  derivativesExchangesId(
    request: Derivatives.DerivativesExchangesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DerivativesExchangesId, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/derivatives/exchanges/{id}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "binance_futures") }],
        query: [
          {
            name: "include_tickers",
            value: request.includeTickers,
            schema: s.optional(s.lazy(() => includeTickersSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: derivativesExchangesIdSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Derivatives Exchanges List
   *
   * @remarks
   * To query all the supported derivatives exchanges with ID and name on CoinGecko
   *
   * @returns List of derivative exchange identifiers and names
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  derivativesExchangesList(options?: RequestOptions): ApiPromise<DerivativesExchangesList[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/derivatives/exchanges/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => derivativesExchangesListSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Derivatives Tickers List
   *
   * @remarks
   * To query all the tickers from derivatives exchanges on CoinGecko
   *
   * @returns List of derivative tickers
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  derivativesTickers(options?: RequestOptions): ApiPromise<DerivativesTicker[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/derivatives"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => derivativesTickerSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Derivatives {
  export type DerivativesExchangesRequest = {
    /** Sort order of responses. Default: `open_interest_btc_desc` */
    order?: Order4;
    /** Total results per page. */
    perPage?: number;
    /** Page through results. Default value: 1 */
    page?: number;
  };

  export type DerivativesExchangesIdRequest = {
    /**
     * Derivative exchange ID. *refers to
     * [`/derivatives/exchanges/list`](/reference/derivatives-exchanges-list).
     *
     * @default "binance_futures"
     */
    id?: string;
    /** Include tickers data. Default: tickers data is not included. */
    includeTickers?: IncludeTickers;
  };
}
