import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

export class Exchanges {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  exchangeRates(options?: RequestOptions): ApiPromise<ExchangeRates, ResponseError> {
    return this.#rawClient.execute<ExchangeRates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/exchange_rates"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: exchangeRatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  exchanges(
    request: Exchanges.ExchangesRequest,
    options?: RequestOptions,
  ): ApiPromise<Exchange1[], ResponseError> {
    return this.#rawClient.execute<Exchange1[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/exchanges"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => exchange1Schema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  exchangesId(
    request: Exchanges.ExchangesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ExchangesId, ResponseError> {
    return this.#rawClient.execute<ExchangesId, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/exchanges/{id}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "binance") }],
        query: [
          {
            name: "dex_pair_format",
            value: request.dexPairFormat,
            schema: s.optional(s.lazy(() => dexPairFormatSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: exchangesIdSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  exchangesIdTickers(
    request: Exchanges.ExchangesIdTickersRequest,
    options?: RequestOptions,
  ): ApiPromise<CoinsIdTickers, ResponseError> {
    return this.#rawClient.execute<CoinsIdTickers, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/exchanges/{id}/tickers"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "binance") }],
        query: [
          { name: "coin_ids", value: request.coinIds, schema: s.optional(s.string()) },
          {
            name: "include_exchange_logo",
            value: request.includeExchangeLogo,
            schema: s.optional(s.boolean()),
          },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "depth", value: request.depth, schema: s.optional(s.boolean()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order3Schema)) },
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

  exchangesIdVolumeChart(
    request: Exchanges.ExchangesIdVolumeChartRequest,
    options?: RequestOptions,
  ): ApiPromise<ExchangeVolumeChart[][], ResponseError> {
    return this.#rawClient.execute<ExchangeVolumeChart[][], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/exchanges/{id}/volume_chart"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "binance") }],
        query: [{ name: "days", value: request.days, schema: s.defaulted(daysSchema, Days._1) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.array(s.lazy(() => exchangeVolumeChartSchema))) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  exchangesList(
    request: Exchanges.ExchangesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ExchangesList[], ResponseError> {
    return this.#rawClient.execute<ExchangesList[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/exchanges/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [{ name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => exchangesListSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Exchanges {
  export type ExchangesRequest = {
    perPage?: number;
    page?: number;
  };

  export type ExchangesIdRequest = {
    id?: string;
    dexPairFormat?: DexPairFormat;
  };

  export type ExchangesIdTickersRequest = {
    id?: string;
    coinIds?: string;
    includeExchangeLogo?: boolean;
    page?: number;
    depth?: boolean;
    order?: Order3;
    dexPairFormat?: DexPairFormat;
  };

  export type ExchangesIdVolumeChartRequest = {
    id?: string;
    days?: Days;
  };

  export type ExchangesListRequest = {
    status?: Status;
  };
}
