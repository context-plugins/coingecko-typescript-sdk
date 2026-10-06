import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { searchSchema, type Search } from "../models/search.js";
import { trendingSearchSchema, type TrendingSearch } from "../models/trending-search.js";
import type { Servers } from "../servers.js";

/**
 * Search and trending
 */
export class SearchApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search Queries
   *
   * @remarks
   * To search for coins, categories and markets listed on CoinGecko
   *
   * @returns Search results
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchData(request: SearchApi.SearchDataRequest, options?: RequestOptions): ApiPromise<Search, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [{ name: "query", value: request.query, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Trending Search List
   *
   * @remarks
   * To query trending search coins, NFTs and categories on CoinGecko in the last 24 hours
   *
   * @returns Trending search coins, NFTs and categories
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  trendingSearch(options?: RequestOptions): ApiPromise<TrendingSearch, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search/trending"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trendingSearchSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SearchApi {
  export type SearchDataRequest = {
    /** Search query */
    query: string;
  };
}
