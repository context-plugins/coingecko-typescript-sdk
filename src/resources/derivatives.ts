import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
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

export class Derivatives {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  derivativesExchanges(
    request: Derivatives.DerivativesExchangesRequest,
    options?: RequestOptions,
  ): ApiPromise<DerivativesExchange[], ResponseError> {
    return this.#rawClient.execute<DerivativesExchange[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/derivatives/exchanges"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order4Schema)) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => derivativesExchangeSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  derivativesExchangesId(
    request: Derivatives.DerivativesExchangesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DerivativesExchangesId, ResponseError> {
    return this.#rawClient.execute<DerivativesExchangesId, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/derivatives/exchanges/{id}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "binance_futures") }],
        query: [
          {
            name: "include_tickers",
            value: request.includeTickers,
            schema: s.optional(s.lazy(() => includeTickersSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: derivativesExchangesIdSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  derivativesExchangesList(options?: RequestOptions): ApiPromise<DerivativesExchangesList[], ResponseError> {
    return this.#rawClient.execute<DerivativesExchangesList[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/derivatives/exchanges/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => derivativesExchangesListSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  derivativesTickers(options?: RequestOptions): ApiPromise<DerivativesTicker[], ResponseError> {
    return this.#rawClient.execute<DerivativesTicker[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/derivatives"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => derivativesTickerSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Derivatives {
  export type DerivativesExchangesRequest = {
    order?: Order4;
    perPage?: number;
    page?: number;
  };

  export type DerivativesExchangesIdRequest = {
    id?: string;
    includeTickers?: IncludeTickers;
  };
}
