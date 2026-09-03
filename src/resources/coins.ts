import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

export class Coins {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  coinsCategories(
    request: Coins.CoinsCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<Category1[], ResponseError> {
    return this.#rawClient.execute<Category1[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/categories"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [{ name: "order", value: request.order, schema: s.optional(s.lazy(() => order2Schema)) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => category1Schema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  coinsCategoriesList(options?: RequestOptions): ApiPromise<CategoriesList[], ResponseError> {
    return this.#rawClient.execute<CategoriesList[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/categories/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => categoriesListSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  coinsContractAddress(
    request: Coins.CoinsContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsContractAddress, ResponseError> {
    return this.#rawClient.execute<CoinsContractAddress, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/{id}/contract/{contract_address}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "id", value: request.id, schema: s.defaulted(s.string(), "ethereum") },
          {
            name: "contract_address",
            value: request.contractAddress,
            schema: s.defaulted(s.string(), "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsContractAddressSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  coinsId(request: Coins.CoinsIdRequest, options?: RequestOptions): ApiPromise<CoinsId, ResponseError> {
    return this.#rawClient.execute<CoinsId, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/{id}"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsIdSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  coinsIdHistory(
    request: Coins.CoinsIdHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsIdHistory, ResponseError> {
    return this.#rawClient.execute<CoinsIdHistory, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/{id}/history"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "bitcoin") }],
        query: [
          { name: "date", value: request.date, schema: s.defaulted(s.string(), "30-12-2025") },
          { name: "localization", value: request.localization, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsIdHistorySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  coinsIdMarketChart(
    request: Coins.CoinsIdMarketChartRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsMarketChart, ResponseError> {
    return this.#rawClient.execute<CoinsMarketChart, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/{id}/market_chart"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "bitcoin") }],
        query: [
          { name: "vs_currency", value: request.vsCurrency, schema: s.defaulted(s.string(), "usd") },
          { name: "days", value: request.days, schema: s.defaulted(s.string(), "1") },
          { name: "interval", value: request.interval, schema: s.optional(s.lazy(() => intervalSchema)) },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsMarketChartSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  coinsIdMarketChartRange(
    request: Coins.CoinsIdMarketChartRangeRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsMarketChart, ResponseError> {
    return this.#rawClient.execute<CoinsMarketChart, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/{id}/market_chart/range"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "bitcoin") }],
        query: [
          { name: "vs_currency", value: request.vsCurrency, schema: s.defaulted(s.string(), "usd") },
          { name: "from", value: request.from, schema: s.defaulted(s.number(), 1767024000) },
          { name: "to", value: request.to, schema: s.defaulted(s.number(), 1777564800) },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsMarketChartSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  coinsIdOhlc(
    request: Coins.CoinsIdOhlcRequest,
    options?: RequestOptions,
  ): ApiPromise<number[][], ResponseError> {
    return this.#rawClient.execute<number[][], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/{id}/ohlc"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "bitcoin") }],
        query: [
          { name: "vs_currency", value: request.vsCurrency, schema: s.defaulted(s.string(), "usd") },
          { name: "days", value: request.days, schema: s.defaulted(daysSchema, Days._1) },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.array(s.number())) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  coinsIdTickers(
    request: Coins.CoinsIdTickersRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsIdTickers, ResponseError> {
    return this.#rawClient.execute<CoinsIdTickers, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/{id}/tickers"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "bitcoin") }],
        query: [
          { name: "exchange_ids", value: request.exchangeIds, schema: s.optional(s.string()) },
          {
            name: "include_exchange_logo",
            value: request.includeExchangeLogo,
            schema: s.optional(s.boolean()),
          },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order1Schema)) },
          { name: "depth", value: request.depth, schema: s.optional(s.boolean()) },
          {
            name: "dex_pair_format",
            value: request.dexPairFormat,
            schema: s.optional(s.lazy(() => dexPairFormatSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsIdTickersSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  coinsList(
    request: Coins.CoinsListRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsList[], ResponseError> {
    return this.#rawClient.execute<CoinsList[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [
          { name: "include_platform", value: request.includePlatform, schema: s.optional(s.boolean()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => coinsListSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  coinsMarkets(
    request: Coins.CoinsMarketsRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsMarket[], ResponseError> {
    return this.#rawClient.execute<CoinsMarket[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/markets"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
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
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => coinsMarketSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  contractAddressMarketChart(
    request: Coins.ContractAddressMarketChartRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsMarketChart, ResponseError> {
    return this.#rawClient.execute<CoinsMarketChart, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/{id}/contract/{contract_address}/market_chart"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsMarketChartSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  contractAddressMarketChartRange(
    request: Coins.ContractAddressMarketChartRangeRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsMarketChart, ResponseError> {
    return this.#rawClient.execute<CoinsMarketChart, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/coins/{id}/contract/{contract_address}/market_chart/range"),
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
          { name: "from", value: request.from, schema: s.defaulted(s.number(), 1767024000) },
          { name: "to", value: request.to, schema: s.defaulted(s.number(), 1777564800) },
          { name: "precision", value: request.precision, schema: s.optional(s.lazy(() => precisionSchema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coinsMarketChartSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Coins {
  export type CoinsCategoriesRequest = {
    order?: Order2;
  };

  export type CoinsContractAddressRequest = {
    id?: string;
    contractAddress?: string;
  };

  export type CoinsIdRequest = {
    id?: string;
    localization?: boolean;
    tickers?: boolean;
    marketData?: boolean;
    communityData?: boolean;
    developerData?: boolean;
    sparkline?: boolean;
    includeCategoriesDetails?: boolean;
    dexPairFormat?: DexPairFormat;
  };

  export type CoinsIdHistoryRequest = {
    id?: string;
    date?: string;
    localization?: boolean;
  };

  export type CoinsIdMarketChartRequest = {
    id?: string;
    vsCurrency?: string;
    days?: string;
    interval?: Interval;
    precision?: Precision;
  };

  export type CoinsIdMarketChartRangeRequest = {
    id?: string;
    vsCurrency?: string;
    from?: number;
    to?: number;
    precision?: Precision;
  };

  export type CoinsIdOhlcRequest = {
    id?: string;
    vsCurrency?: string;
    days?: Days;
    precision?: Precision;
  };

  export type CoinsIdTickersRequest = {
    id?: string;
    exchangeIds?: string;
    includeExchangeLogo?: boolean;
    page?: number;
    order?: Order1;
    depth?: boolean;
    dexPairFormat?: DexPairFormat;
  };

  export type CoinsListRequest = {
    includePlatform?: boolean;
    status?: Status;
  };

  export type CoinsMarketsRequest = {
    vsCurrency?: string;
    ids?: string;
    names?: string;
    symbols?: string;
    includeTokens?: IncludeTokens;
    category?: string;
    order?: Order;
    perPage?: number;
    page?: number;
    sparkline?: boolean;
    priceChangePercentage?: string;
    locale?: Locale;
    precision?: Precision;
    includeRehypothecated?: boolean;
  };

  export type ContractAddressMarketChartRequest = {
    id?: string;
    contractAddress?: string;
    vsCurrency?: string;
    days?: string;
    interval?: Interval;
    precision?: Precision;
  };

  export type ContractAddressMarketChartRangeRequest = {
    id?: string;
    contractAddress?: string;
    vsCurrency?: string;
    from?: number;
    to?: number;
    precision?: Precision;
  };
}
