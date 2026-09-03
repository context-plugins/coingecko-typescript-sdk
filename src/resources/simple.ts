import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { includeTokensSchema, type IncludeTokens } from "../models/include-tokens.js";
import { precisionSchema, type Precision } from "../models/precision.js";
import { simplePriceSchema, type SimplePrice } from "../models/simple-price.js";
import type { Servers } from "../servers.js";

export class Simple {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  simplePrice(
    request: Simple.SimplePriceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, SimplePrice>, ResponseError> {
    return this.#rawClient.execute<Record<string, SimplePrice>, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/simple/price"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  simpleSupportedCurrencies(options?: RequestOptions): ApiPromise<string[], ResponseError> {
    return this.#rawClient.execute<string[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/simple/supported_vs_currencies"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  simpleTokenPrice(
    request: Simple.SimpleTokenPriceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, SimplePrice>, ResponseError> {
    return this.#rawClient.execute<Record<string, SimplePrice>, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/simple/token_price/{id}"),
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Simple {
  export type SimplePriceRequest = {
    vsCurrencies?: string;
    ids?: string;
    names?: string;
    symbols?: string;
    includeTokens?: IncludeTokens;
    includeMarketCap?: boolean;
    include24HrVol?: boolean;
    include24HrChange?: boolean;
    includeLastUpdatedAt?: boolean;
    precision?: Precision;
  };

  export type SimpleTokenPriceRequest = {
    id?: string;
    contractAddresses?: string;
    vsCurrencies?: string;
    includeMarketCap?: boolean;
    include24HrVol?: boolean;
    include24HrChange?: boolean;
    includeLastUpdatedAt?: boolean;
    precision?: Precision;
  };
}
