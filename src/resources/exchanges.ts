import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { coinsIdTickersSchema, type CoinsIdTickers } from "../models/coins-id-tickers.js";
import { Days, daysSchema } from "../models/days.js";
import { dexPairFormatSchema, type DexPairFormat } from "../models/dex-pair-format.js";
import { exchangeRatesSchema, type ExchangeRates } from "../models/exchange-rates.js";
import { exchange1Schema, type Exchange1 } from "../models/exchange1.js";
import { exchangesIdSchema, type ExchangesId } from "../models/exchanges-id.js";
import { exchangesListSchema, type ExchangesList } from "../models/exchanges-list.js";
import { order3Schema, type Order3 } from "../models/order3.js";
import { statusSchema, type Status } from "../models/status.js";
import {
  exchangeVolumeChartSchema,
  type ExchangeVolumeChart,
} from "../models/unions/exchange-volume-chart.js";
import type { Servers } from "../servers.js";

/**
 * Exchange lists, details, tickers, volume charts and BTC exchange rates
 */
export class Exchanges {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BTC-to-Currency Exchange Rates
   *
   * @remarks
   * To query BTC exchange rates with other currencies
   *
   * @returns BTC exchange rates with other currencies
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exchangeRates(options?: RequestOptions): ApiPromise<ExchangeRates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/exchange_rates"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: exchangeRatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Exchanges List with Data
   *
   * @remarks
   * To query all the supported exchanges with exchanges' data (ID, name, country, etc.) that have
   * active trading volumes on CoinGecko
   *
   * @returns List of exchanges with data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exchanges(
    request: Exchanges.ExchangesRequest,
    options?: RequestOptions,
  ): ApiPromise<Exchange1[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/exchanges"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => exchange1Schema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Exchange Data by ID
   *
   * @remarks
   * To query exchange's data (name, year established, country, etc.), exchange volume in BTC and
   * top 100 tickers based on exchange's ID
   *
   * @returns Exchange data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exchangesId(
    request: Exchanges.ExchangesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ExchangesId, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/exchanges/{id}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "binance") }],
        query: [
          {
            name: "dex_pair_format",
            value: request.dexPairFormat,
            schema: s.optional(s.lazy(() => dexPairFormatSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: exchangesIdSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Exchange Tickers by ID
   *
   * @remarks
   * To query exchange's tickers based on exchange's ID
   *
   * @returns Exchange tickers
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exchangesIdTickers(
    request: Exchanges.ExchangesIdTickersRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsIdTickers, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/exchanges/{id}/tickers"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "binance") }],
        query: [
          { name: "coin_ids", value: request.coinIds, schema: s.optional(s.string()) },
          {
            name: "include_exchange_logo",
            value: request.includeExchangeLogo,
            schema: s.optional(s.boolean()),
          },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "depth", value: request.depth, schema: s.optional(s.boolean()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order3Schema)) },
          {
            name: "dex_pair_format",
            value: request.dexPairFormat,
            schema: s.optional(s.lazy(() => dexPairFormatSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsIdTickersSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Exchange Volume Chart by ID
   *
   * @remarks
   * To query the historical volume chart data with time in UNIX and trading volume data in BTC
   * based on exchange's ID
   *
   * @returns Exchange volume chart data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exchangesIdVolumeChart(
    request: Exchanges.ExchangesIdVolumeChartRequest,
    options?: RequestOptions,
  ): ApiPromise<ExchangeVolumeChart[][], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/exchanges/{id}/volume_chart"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "binance") }],
        query: [{ name: "days", value: request.days, schema: s.defaulted(daysSchema, Days._1) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.array(s.lazy(() => exchangeVolumeChartSchema))) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Exchanges List
   *
   * @remarks
   * To query all the supported exchanges with ID and name
   *
   * @returns List of exchanges
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exchangesList(
    request: Exchanges.ExchangesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ExchangesList[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/exchanges/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [{ name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => exchangesListSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Exchanges {
  export type ExchangesRequest = {
    /** Total results per page. Default: 100. Valid values: 1...250 */
    perPage?: number;
    /** Page through results. Default: 1 */
    page?: number;
  };

  export type ExchangesIdRequest = {
    /**
     * Exchange ID. *refers to [`/exchanges/list`](/reference/exchanges-list).
     *
     * @default "binance"
     */
    id?: string;
    /**
     * Set to `symbol` to display DEX pair base and target as symbols. Default: `contract_address`
     */
    dexPairFormat?: DexPairFormat;
  };

  export type ExchangesIdTickersRequest = {
    /**
     * Exchange ID. *refers to [`/exchanges/list`](/reference/exchanges-list).
     *
     * @default "binance"
     */
    id?: string;
    /**
     * Filter tickers by coin IDs, comma-separated if querying more than 1 coin. *refers to
     * [`/coins/list`](/reference/coins-list).
     */
    coinIds?: string;
    /** Include exchange logo. Default: false */
    includeExchangeLogo?: boolean;
    /** Page through results. */
    page?: number;
    /**
     * Include 2% orderbook depth (cost_to_move_up_usd and cost_to_move_down_usd). Default: false
     */
    depth?: boolean;
    /** Sort the order of responses. Default: `trust_score_desc` */
    order?: Order3;
    /**
     * Set to `symbol` to display DEX pair base and target as symbols. Default: `contract_address`
     */
    dexPairFormat?: DexPairFormat;
  };

  export type ExchangesIdVolumeChartRequest = {
    /**
     * Exchange ID or derivative exchange ID. *refers to
     * [`/exchanges/list`](/reference/exchanges-list) or
     * [`/derivatives/exchanges/list`](/reference/derivatives-exchanges-list).
     *
     * @default "binance"
     */
    id?: string;
    /** Data up to number of days ago. @default Days._1 */
    days?: Days;
  };

  export type ExchangesListRequest = {
    /** Filter by status of exchanges. Default: `active` */
    status?: Status;
  };
}
