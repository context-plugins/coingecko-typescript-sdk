import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { categoriesListSchema, type CategoriesList } from "../models/categories-list.js";
import { category1Schema, type Category1 } from "../models/category1.js";
import { coinsContractAddressSchema, type CoinsContractAddress } from "../models/coins-contract-address.js";
import { coinsIdHistorySchema, type CoinsIdHistory } from "../models/coins-id-history.js";
import { coinsIdTickersSchema, type CoinsIdTickers } from "../models/coins-id-tickers.js";
import { coinsIdSchema, type CoinsId } from "../models/coins-id.js";
import { coinsListSchema, type CoinsList } from "../models/coins-list.js";
import { coinsMarketChartSchema, type CoinsMarketChart } from "../models/coins-market-chart.js";
import { coinsMarketSchema, type CoinsMarket } from "../models/coins-market.js";
import { Days, daysSchema } from "../models/days.js";
import { dexPairFormatSchema, type DexPairFormat } from "../models/dex-pair-format.js";
import { includeTokensSchema, type IncludeTokens } from "../models/include-tokens.js";
import { intervalSchema, type Interval } from "../models/interval.js";
import { localeSchema, type Locale } from "../models/locale.js";
import { orderSchema, type Order } from "../models/order.js";
import { order1Schema, type Order1 } from "../models/order1.js";
import { order2Schema, type Order2 } from "../models/order2.js";
import { precisionSchema, type Precision } from "../models/precision.js";
import { statusSchema, type Status } from "../models/status.js";
import type { Servers } from "../servers.js";

/**
 * Coin lists, market data, details, history, charts and OHLC
 */
export class Coins {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Coins Categories List with Market Data
   *
   * @remarks
   * To query all the coins categories with market data (market cap, volume, etc.) on CoinGecko
   *
   * @returns List of coin categories with market data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinsCategories(
    request: Coins.CoinsCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<Category1[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/categories"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [{ name: "order", value: request.order, schema: s.optional(s.lazy(() => order2Schema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => category1Schema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coins Categories List
   *
   * @remarks
   * To query all the supported coins categories on CoinGecko
   *
   * @returns List of coin categories
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinsCategoriesList(options?: RequestOptions): ApiPromise<CategoriesList[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/categories/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => categoriesListSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coin Data by Token Address
   *
   * @remarks
   * To query all the metadata (image, websites, socials, description, contract address, etc.) and
   * market data (price, ATH, exchange tickers, etc.) of a coin based on an asset platform and a
   * particular token contract address
   *
   * @returns Coin data by token contract address
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinsContractAddress(
    request: Coins.CoinsContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsContractAddress, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/{id}/contract/{contract_address}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "id", value: request.id, schema: s.defaulted(s.string(), "ethereum") },
          {
            name: "contract_address",
            value: request.contractAddress,
            schema: s.defaulted(s.string(), "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
          },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsContractAddressSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coin Data by ID
   *
   * @remarks
   * To query all the metadata (image, websites, socials, description, contract address, etc.) and
   * market data (price, ATH, exchange tickers, etc.) of a coin based on a particular coin ID
   *
   * @returns Coin data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinsId(request: Coins.CoinsIdRequest, options?: RequestOptions): ApiPromise<CoinsId, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/{id}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "bitcoin") }],
        query: [
          { name: "localization", value: request.localization, schema: s.optional(s.boolean()) },
          { name: "tickers", value: request.tickers, schema: s.optional(s.boolean()) },
          { name: "market_data", value: request.marketData, schema: s.optional(s.boolean()) },
          { name: "community_data", value: request.communityData, schema: s.optional(s.boolean()) },
          { name: "developer_data", value: request.developerData, schema: s.optional(s.boolean()) },
          { name: "sparkline", value: request.sparkline, schema: s.optional(s.boolean()) },
          {
            name: "include_categories_details",
            value: request.includeCategoriesDetails,
            schema: s.optional(s.boolean()),
          },
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
        success: { kind: "json", schema: coinsIdSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coin Historical Data by ID
   *
   * @remarks
   * To query the historical data (price, market cap, 24hrs volume, etc.) at a given date for a coin
   * based on a particular coin ID
   *
   * @returns Coin historical data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinsIdHistory(
    request: Coins.CoinsIdHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsIdHistory, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/{id}/history"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "bitcoin") }],
        query: [
          { name: "date", value: request.date, schema: s.defaulted(s.string(), "30-12-2025") },
          { name: "localization", value: request.localization, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsIdHistorySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coin Historical Chart Data by ID
   *
   * @remarks
   * To get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs
   * volume based on particular coin ID
   *
   * @returns Coin historical chart data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinsIdMarketChart(
    request: Coins.CoinsIdMarketChartRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsMarketChart, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/{id}/market_chart"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "bitcoin") }],
        query: [
          { name: "vs_currency", value: request.vsCurrency, schema: s.defaulted(s.string(), "usd") },
          { name: "days", value: request.days, schema: s.defaulted(s.string(), "1") },
          { name: "interval", value: request.interval, schema: s.optional(s.lazy(() => intervalSchema)) },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsMarketChartSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coin Historical Chart Data within Time Range by ID
   *
   * @remarks
   * To get the historical chart data of a coin within certain time range in UNIX along with price,
   * market cap and 24hrs volume based on particular coin ID
   *
   * @returns Coin historical chart data within time range
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinsIdMarketChartRange(
    request: Coins.CoinsIdMarketChartRangeRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsMarketChart, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/{id}/market_chart/range"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "bitcoin") }],
        query: [
          { name: "vs_currency", value: request.vsCurrency, schema: s.defaulted(s.string(), "usd") },
          { name: "from", value: request.from, schema: s.defaulted(s.int(), 1767024000) },
          { name: "to", value: request.to, schema: s.defaulted(s.int(), 1777564800) },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsMarketChartSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coin OHLC Chart by ID
   *
   * @remarks
   * To get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID
   *
   * @returns Coin OHLC chart data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinsIdOhlc(request: Coins.CoinsIdOhlcRequest, options?: RequestOptions): ApiPromise<number[][], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/{id}/ohlc"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "bitcoin") }],
        query: [
          { name: "vs_currency", value: request.vsCurrency, schema: s.defaulted(s.string(), "usd") },
          { name: "days", value: request.days, schema: s.defaulted(daysSchema, Days._1) },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.array(s.float64())) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coin Tickers by ID
   *
   * @remarks
   * To query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX)
   * based on a particular coin ID
   *
   * @returns Coin tickers
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinsIdTickers(
    request: Coins.CoinsIdTickersRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsIdTickers, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/{id}/tickers"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "bitcoin") }],
        query: [
          { name: "exchange_ids", value: request.exchangeIds, schema: s.optional(s.string()) },
          {
            name: "include_exchange_logo",
            value: request.includeExchangeLogo,
            schema: s.optional(s.boolean()),
          },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order1Schema)) },
          { name: "depth", value: request.depth, schema: s.optional(s.boolean()) },
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
   * Coins List
   *
   * @remarks
   * To query all the supported coins on CoinGecko with coin ID, name and symbol
   *
   * @returns List of coins
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinsList(request: Coins.CoinsListRequest, options?: RequestOptions): ApiPromise<CoinsList[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [
          { name: "include_platform", value: request.includePlatform, schema: s.optional(s.boolean()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => coinsListSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coins List with Market Data
   *
   * @remarks
   * To query all the supported coins with price, market cap, volume and market related data
   *
   * @returns List of coins with market data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinsMarkets(
    request: Coins.CoinsMarketsRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsMarket[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/markets"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [
          { name: "vs_currency", value: request.vsCurrency, schema: s.defaulted(s.string(), "usd") },
          { name: "ids", value: request.ids, schema: s.defaulted(s.string(), "bitcoin") },
          { name: "names", value: request.names, schema: s.defaulted(s.string(), "Bitcoin") },
          { name: "symbols", value: request.symbols, schema: s.defaulted(s.string(), "btc") },
          {
            name: "include_tokens",
            value: request.includeTokens,
            schema: s.optional(s.lazy(() => includeTokensSchema)),
          },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => orderSchema)) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "sparkline", value: request.sparkline, schema: s.optional(s.boolean()) },
          {
            name: "price_change_percentage",
            value: request.priceChangePercentage,
            schema: s.optional(s.string()),
          },
          { name: "locale", value: request.locale, schema: s.optional(s.lazy(() => localeSchema)) },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
          {
            name: "include_rehypothecated",
            value: request.includeRehypothecated,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => coinsMarketSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coin Historical Chart Data by Token Address
   *
   * @remarks
   * To get the historical chart data including time in UNIX, price, market cap and 24hrs volume
   * based on asset platform and particular token contract address
   *
   * @returns Coin historical chart data by token address
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contractAddressMarketChart(
    request: Coins.ContractAddressMarketChartRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsMarketChart, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/{id}/contract/{contract_address}/market_chart"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "id", value: request.id, schema: s.defaulted(s.string(), "ethereum") },
          {
            name: "contract_address",
            value: request.contractAddress,
            schema: s.defaulted(s.string(), "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
          },
        ],
        query: [
          { name: "vs_currency", value: request.vsCurrency, schema: s.defaulted(s.string(), "usd") },
          { name: "days", value: request.days, schema: s.defaulted(s.string(), "1") },
          { name: "interval", value: request.interval, schema: s.optional(s.lazy(() => intervalSchema)) },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsMarketChartSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Coin Historical Chart Data within Time Range by Token Address
   *
   * @remarks
   * To get the historical chart data within certain time range in UNIX along with price, market cap
   * and 24hrs volume based on asset platform and particular token contract address
   *
   * @returns Coin historical chart data within time range by token address
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contractAddressMarketChartRange(
    request: Coins.ContractAddressMarketChartRangeRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsMarketChart, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/coins/{id}/contract/{contract_address}/market_chart/range"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "id", value: request.id, schema: s.defaulted(s.string(), "ethereum") },
          {
            name: "contract_address",
            value: request.contractAddress,
            schema: s.defaulted(s.string(), "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
          },
        ],
        query: [
          { name: "vs_currency", value: request.vsCurrency, schema: s.defaulted(s.string(), "usd") },
          { name: "from", value: request.from, schema: s.defaulted(s.int(), 1767024000) },
          { name: "to", value: request.to, schema: s.defaulted(s.int(), 1777564800) },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsMarketChartSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Coins {
  export type CoinsCategoriesRequest = {
    /** Sort results by field. Default: `market_cap_desc` */
    order?: Order2;
  };

  export type CoinsContractAddressRequest = {
    /**
     * Asset platform ID. *refers to [`/asset_platforms`](/reference/asset-platforms-list).
     *
     * @default "ethereum"
     */
    id?: string;
    /** The contract address of token. @default "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" */
    contractAddress?: string;
  };

  export type CoinsIdRequest = {
    /** Coin ID. *refers to [`/coins/list`](/reference/coins-list) @default "bitcoin" */
    id?: string;
    /** Include all localized languages in the response. Default: true */
    localization?: boolean;
    /** Include tickers data. Default: true */
    tickers?: boolean;
    /** Include market data. Default: true */
    marketData?: boolean;
    /** Include community data. Default: true */
    communityData?: boolean;
    /** Include developer data. Default: true */
    developerData?: boolean;
    /** Include sparkline 7-day data. Default: false */
    sparkline?: boolean;
    /** Include categories details. Default: false */
    includeCategoriesDetails?: boolean;
    /**
     * Set to `symbol` to display DEX pair base and target as symbols. Default: `contract_address`
     */
    dexPairFormat?: DexPairFormat;
  };

  export type CoinsIdHistoryRequest = {
    /** Coin ID. *refers to [`/coins/list`](/reference/coins-list). @default "bitcoin" */
    id?: string;
    /** The date of data snapshot. Format: `dd-mm-yyyy` @default "30-12-2025" */
    date?: string;
    /** Include all the localized languages in response. Default: true */
    localization?: boolean;
  };

  export type CoinsIdMarketChartRequest = {
    /** Coin ID. *refers to [`/coins/list`](/reference/coins-list). @default "bitcoin" */
    id?: string;
    /**
     * Target currency of market data. *refers to
     * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
     *
     * @default "usd"
     */
    vsCurrency?: string;
    /**
     * Data up to number of days ago. You may use any integer or `max` for number of days.
     *
     * @default "1"
     */
    days?: string;
    /** Data interval, leave empty for auto granularity. */
    interval?: Interval;
    /** Decimal place for currency price value. */
    precision?: Precision;
  };

  export type CoinsIdMarketChartRangeRequest = {
    /** Coin ID. *refers to [`/coins/list`](/reference/coins-list). @default "bitcoin" */
    id?: string;
    /**
     * Target currency of market data. *refers to
     * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
     *
     * @default "usd"
     */
    vsCurrency?: string;
    /** Starting date in UNIX timestamp. @default 1767024000 */
    from?: number;
    /** Ending date in UNIX timestamp. @default 1777564800 */
    to?: number;
    /** Decimal place for currency price value. */
    precision?: Precision;
  };

  export type CoinsIdOhlcRequest = {
    /** Coin ID. *refers to [`/coins/list`](/reference/coins-list). @default "bitcoin" */
    id?: string;
    /**
     * Target currency of price data. *refers to
     * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
     *
     * @default "usd"
     */
    vsCurrency?: string;
    /** Data up to number of days ago. @default Days._1 */
    days?: Days;
    /** Decimal place for currency price value. */
    precision?: Precision;
  };

  export type CoinsIdTickersRequest = {
    /** Coin ID. *refers to [`/coins/list`](/reference/coins-list) @default "bitcoin" */
    id?: string;
    /** Exchange ID. *refers to [`/exchanges/list`](/reference/exchanges-list) */
    exchangeIds?: string;
    /** Include exchange logo. Default: false */
    includeExchangeLogo?: boolean;
    /** Page through results */
    page?: number;
    /** Sort the order of responses. Default: trust_score_desc */
    order?: Order1;
    /**
     * Include 2% orderbook depth, i.e. `cost_to_move_up_usd` and `cost_to_move_down_usd`. Default:
     * false
     */
    depth?: boolean;
    /**
     * Set to `symbol` to display DEX pair base and target as symbols. Default: `contract_address`
     */
    dexPairFormat?: DexPairFormat;
  };

  export type CoinsListRequest = {
    /** Include platform and token's contract addresses. Default: false */
    includePlatform?: boolean;
    /** Filter by status of coins. Default: active */
    status?: Status;
  };

  export type CoinsMarketsRequest = {
    /**
     * Target currency of coins and market data. *refers to
     * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
     *
     * @default "usd"
     */
    vsCurrency?: string;
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
    /**
     * Filter based on coins' category. *refers to
     * [`/coins/categories/list`](/reference/coins-categories-list)
     */
    category?: string;
    /** Sort result by field. Default: market_cap_desc */
    order?: Order;
    /** Total results per page. Default: 100 Valid values: 1...250 */
    perPage?: number;
    /** Page through results. Default: 1 */
    page?: number;
    /** Include sparkline 7-day data. Default: false */
    sparkline?: boolean;
    /**
     * Include price change percentage timeframe, comma-separated if querying more than 1 timeframe.
     * Valid values: `1h`, `24h`, `7d`, `14d`, `30d`, `200d`, `1y`
     */
    priceChangePercentage?: string;
    /** Language background. Default: en */
    locale?: Locale;
    /** Decimal places for currency price value */
    precision?: Precision;
    /**
     * Include rehypothecated tokens in results. When true, returns
     * `market_cap_rank_with_rehypothecated` field. Default: false
     */
    includeRehypothecated?: boolean;
  };

  export type ContractAddressMarketChartRequest = {
    /**
     * Asset platform ID. *refers to [`/asset_platforms`](/reference/asset-platforms-list).
     *
     * @default "ethereum"
     */
    id?: string;
    /** The contract address of token. @default "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" */
    contractAddress?: string;
    /**
     * Target currency of market data. *refers to
     * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
     *
     * @default "usd"
     */
    vsCurrency?: string;
    /**
     * Data up to number of days ago. You may use any integer or `max` for number of days.
     *
     * @default "1"
     */
    days?: string;
    /** Data interval, leave empty for auto granularity. */
    interval?: Interval;
    /** Decimal place for currency price value. */
    precision?: Precision;
  };

  export type ContractAddressMarketChartRangeRequest = {
    /**
     * Asset platform ID. *refers to [`/asset_platforms`](/reference/asset-platforms-list).
     *
     * @default "ethereum"
     */
    id?: string;
    /** The contract address of token. @default "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" */
    contractAddress?: string;
    /**
     * Target currency of market data. *refers to
     * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
     *
     * @default "usd"
     */
    vsCurrency?: string;
    /** Starting date in UNIX timestamp. @default 1767024000 */
    from?: number;
    /** Ending date in UNIX timestamp. @default 1777564800 */
    to?: number;
    /** Decimal place for currency price value. */
    precision?: Precision;
  };
}
