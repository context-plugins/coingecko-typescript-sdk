import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { includeTokensSchema, type IncludeTokens } from "../models/include-tokens.js";
import { precisionSchema, type Precision } from "../models/precision.js";
import { simplePriceSchema, type SimplePrice } from "../models/simple-price.js";
import type { Servers } from "../servers.js";

/**
 * Simple price and supported vs-currencies
 */
export class Simple {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Coin Price by IDs, Symbols, or Names
   *
   * @remarks
   * To query the prices of one or more coins by using their unique Coin API IDs, symbols, or names
   *
   * @returns Coin prices
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  simplePrice(
    request: Simple.SimplePriceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, SimplePrice>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/simple/price"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [
          { name: "vs_currencies", value: request.vsCurrencies, schema: s.defaulted(s.string(), "usd") },
          { name: "ids", value: request.ids, schema: s.defaulted(s.string(), "bitcoin") },
          { name: "names", value: request.names, schema: s.defaulted(s.string(), "Bitcoin") },
          { name: "symbols", value: request.symbols, schema: s.defaulted(s.string(), "btc") },
          {
            name: "include_tokens",
            value: request.includeTokens,
            schema: s.optional(s.lazy(() => includeTokensSchema)),
          },
          { name: "include_market_cap", value: request.includeMarketCap, schema: s.optional(s.boolean()) },
          { name: "include_24hr_vol", value: request.include24HrVol, schema: s.optional(s.boolean()) },
          { name: "include_24hr_change", value: request.include24HrChange, schema: s.optional(s.boolean()) },
          {
            name: "include_last_updated_at",
            value: request.includeLastUpdatedAt,
            schema: s.optional(s.boolean()),
          },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.record(
            s.string(),
            s.lazy(() => simplePriceSchema),
          ),
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Currencies List
   *
   * @remarks
   * To query all the supported currencies on CoinGecko
   *
   * @returns List of supported currencies
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  simpleSupportedCurrencies(options?: RequestOptions): ApiPromise<string[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/simple/supported_vs_currencies"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coin Price by Token Addresses
   *
   * @remarks
   * To query one or more token prices by using their token contract addresses
   *
   * @returns Token prices
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  simpleTokenPrice(
    request: Simple.SimpleTokenPriceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, SimplePrice>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/simple/token_price/{id}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "ethereum") }],
        query: [
          {
            name: "contract_addresses",
            value: request.contractAddresses,
            schema: s.defaulted(s.string(), "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"),
          },
          { name: "vs_currencies", value: request.vsCurrencies, schema: s.defaulted(s.string(), "usd") },
          { name: "include_market_cap", value: request.includeMarketCap, schema: s.optional(s.boolean()) },
          { name: "include_24hr_vol", value: request.include24HrVol, schema: s.optional(s.boolean()) },
          { name: "include_24hr_change", value: request.include24HrChange, schema: s.optional(s.boolean()) },
          {
            name: "include_last_updated_at",
            value: request.includeLastUpdatedAt,
            schema: s.optional(s.boolean()),
          },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.record(
            s.string(),
            s.lazy(() => simplePriceSchema),
          ),
        },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Simple {
  export type SimplePriceRequest = {
    /**
     * Target currency of coins, comma-separated if querying more than 1 currency. *refers to
     * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
     *
     * @default "usd"
     */
    vsCurrencies?: string;
    /**
     * Coins' IDs, comma-separated if querying more than 1 coin. *refers to
     * [`/coins/list`](/reference/coins-list)
     *
     * @default "bitcoin"
     */
    ids?: string;
    /** Coins' names, comma-separated if querying more than 1 coin. @default "Bitcoin" */
    names?: string;
    /** Coins' symbols, comma-separated if querying more than 1 coin. @default "btc" */
    symbols?: string;
    /**
     * For `symbols` lookups, specify `all` to include all matching tokens. Default `top` returns
     * top-ranked tokens by market cap or volume.
     */
    includeTokens?: IncludeTokens;
    /** Include market capitalization. Default: false */
    includeMarketCap?: boolean;
    /** Include 24-hour trading volume. Default: false */
    include24HrVol?: boolean;
    /** Include 24-hour change percentage. Default: false */
    include24HrChange?: boolean;
    /** Include last updated price time as a UNIX timestamp. Default: false */
    includeLastUpdatedAt?: boolean;
    /** Decimal places for currency price value */
    precision?: Precision;
  };

  export type SimpleTokenPriceRequest = {
    /**
     * Asset platform's ID. *refers to [`/asset_platforms`](/reference/asset-platforms-list)
     *
     * @default "ethereum"
     */
    id?: string;
    /**
     * Token contract addresses, comma-separated if querying more than 1 token
     *
     * @default "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
     */
    contractAddresses?: string;
    /**
     * Target currency of coins, comma-separated if querying more than 1 currency. *refers to
     * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
     *
     * @default "usd"
     */
    vsCurrencies?: string;
    /** Include market capitalization. Default: false */
    includeMarketCap?: boolean;
    /** Include 24-hour trading volume. Default: false */
    include24HrVol?: boolean;
    /** Include 24-hour change percentage. Default: false */
    include24HrChange?: boolean;
    /** Include last updated price time as a UNIX timestamp. Default: false */
    includeLastUpdatedAt?: boolean;
    /** Decimal places for currency price value */
    precision?: Precision;
  };
}
