import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { assetPlatformSchema, type AssetPlatform } from "../models/asset-platform.js";
import { filterSchema, type Filter } from "../models/filter.js";
import { pingServerSchema, type PingServer } from "../models/ping-server.js";
import { tokenListsSchema, type TokenLists } from "../models/token-lists.js";
import type { Servers } from "../servers.js";

/**
 * Ping, asset platforms and token lists
 */
export class Misc {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Asset Platforms List
   *
   * @remarks
   * To query all the supported asset platforms (blockchain networks) on CoinGecko
   *
   * @returns List of asset platforms
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetPlatformsList(
    request: Misc.AssetPlatformsListRequest,
    options?: RequestOptions,
  ): ApiPromise<AssetPlatform[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/asset_platforms"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filterSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => assetPlatformSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * API Server Status
   *
   * @remarks
   * To check the API server status
   *
   * @returns Server status
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pingServer(options?: RequestOptions): ApiPromise<PingServer, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ping"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pingServerSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Token Lists by Asset Platform ID
   *
   * @remarks
   * To get full list of tokens of a blockchain network (asset platform) that is supported by
   * [Ethereum token list standard](https://tokenlists.org/)
   *
   * @returns Token list by asset platform
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tokenLists(request: Misc.TokenListsRequest, options?: RequestOptions): ApiPromise<TokenLists, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/token_lists/{asset_platform_id}/all.json"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          {
            name: "asset_platform_id",
            value: request.assetPlatformId,
            schema: s.defaulted(s.string(), "ethereum"),
          },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenListsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Misc {
  export type AssetPlatformsListRequest = {
    /** Apply relevant filters to results. */
    filter?: Filter;
  };

  export type TokenListsRequest = {
    /**
     * Asset platform ID. *refers to [`/asset_platforms`](/reference/asset-platforms-list).
     *
     * @default "ethereum"
     */
    assetPlatformId?: string;
  };
}
