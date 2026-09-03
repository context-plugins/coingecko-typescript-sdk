import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { searchSchema, type Search } from "../models/search.js";
import { trendingSearchSchema, type TrendingSearch } from "../models/trending-search.js";
import type { Servers } from "../servers.js";

export class SearchApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  searchData(
    request: SearchApi.SearchDataRequest,
    options?: RequestOptions,
  ): ApiPromise<Search, ResponseError> {
    return this.#rawClient.execute<Search, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/search"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [{ name: "query", value: request.query, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  trendingSearch(options?: RequestOptions): ApiPromise<TrendingSearch, ResponseError> {
    return this.#rawClient.execute<TrendingSearch, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/search/trending"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trendingSearchSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SearchApi {
  export type SearchDataRequest = {
    query: string;
  };
}
