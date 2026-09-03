import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { assetPlatformSchema, type AssetPlatform } from "../models/asset-platform.js";
import { filterSchema, type Filter } from "../models/filter.js";
import { pingServerSchema, type PingServer } from "../models/ping-server.js";
import { tokenListsSchema, type TokenLists } from "../models/token-lists.js";
import type { Servers } from "../servers.js";

export class Misc {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  assetPlatformsList(
    request: Misc.AssetPlatformsListRequest,
    options?: RequestOptions,
  ): ApiPromise<AssetPlatform[], ResponseError> {
    return this.#rawClient.execute<AssetPlatform[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/asset_platforms"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filterSchema)) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => assetPlatformSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  pingServer(options?: RequestOptions): ApiPromise<PingServer, ResponseError> {
    return this.#rawClient.execute<PingServer, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/ping"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pingServerSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  tokenLists(
    request: Misc.TokenListsRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenLists, ResponseError> {
    return this.#rawClient.execute<TokenLists, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/token_lists/{asset_platform_id}/all.json"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          {
            name: "asset_platform_id",
            value: request.assetPlatformId,
            schema: s.defaulted(s.string(), "ethereum"),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenListsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Misc {
  export type AssetPlatformsListRequest = {
    filter?: Filter;
  };

  export type TokenListsRequest = {
    assetPlatformId?: string;
  };
}
