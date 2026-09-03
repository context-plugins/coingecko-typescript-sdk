import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { currencySchema, type Currency } from "../models/currency.js";
import { dexesListSchema, type DexesList } from "../models/dexes-list.js";
import { durationSchema, type Duration } from "../models/duration.js";
import { includeSchema, type Include } from "../models/include.js";
import { include2Schema, type Include2 } from "../models/include2.js";
import { include3Schema, type Include3 } from "../models/include3.js";
import { multiPoolAddressDataSchema, type MultiPoolAddressData } from "../models/multi-pool-address-data.js";
import { multiTokenDataSchema, type MultiTokenData } from "../models/multi-token-data.js";
import { networksListSchema, type NetworksList } from "../models/networks-list.js";
import { ohlcvSchema, type Ohlcv } from "../models/ohlcv.js";
import { onchainSimplePriceSchema, type OnchainSimplePrice } from "../models/onchain-simple-price.js";
import { poolAddressDataSchema, type PoolAddressData } from "../models/pool-address-data.js";
import { poolSearchSchema, type PoolSearch } from "../models/pool-search.js";
import { poolTokensInfoSchema, type PoolTokensInfo } from "../models/pool-tokens-info.js";
import { poolSchema, type Pool } from "../models/pool.js";
import { sortSchema, type Sort } from "../models/sort.js";
import { sort2Schema, type Sort2 } from "../models/sort2.js";
import { Timeframe, timeframeSchema } from "../models/timeframe.js";
import { tokenDataSchema, type TokenData } from "../models/token-data.js";
import {
  tokenInfoRecentlyUpdatedSchema,
  type TokenInfoRecentlyUpdated,
} from "../models/token-info-recently-updated.js";
import { tokenInfoSchema, type TokenInfo } from "../models/token-info.js";
import { tradesSchema, type Trades } from "../models/trades.js";
import type { Servers } from "../servers.js";

export class Onchain {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  dexesList(
    request: Onchain.DexesListRequest,
    options?: RequestOptions,
  ): ApiPromise<DexesList, ResponseError> {
    return this.#rawClient.execute<DexesList, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/dexes"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") }],
        query: [{ name: "page", value: request.page, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dexesListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  latestPoolsList(
    request: Onchain.LatestPoolsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ResponseError> {
    return this.#rawClient.execute<Pool, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/new_pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  latestPoolsNetwork(
    request: Onchain.LatestPoolsNetworkRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ResponseError> {
    return this.#rawClient.execute<Pool, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/new_pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") }],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  networksList(
    request: Onchain.NetworksListRequest,
    options?: RequestOptions,
  ): ApiPromise<NetworksList, ResponseError> {
    return this.#rawClient.execute<NetworksList, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [{ name: "page", value: request.page, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: networksListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  onchainSimplePrice(
    request: Onchain.OnchainSimplePriceRequest,
    options?: RequestOptions,
  ): ApiPromise<OnchainSimplePrice, ResponseError> {
    return this.#rawClient.execute<OnchainSimplePrice, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/simple/networks/{network}/token_price/{addresses}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") },
          {
            name: "addresses",
            value: request.addresses,
            schema: s.defaulted(s.string(), "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
          },
        ],
        query: [
          { name: "include_market_cap", value: request.includeMarketCap, schema: s.optional(s.boolean()) },
          { name: "mcap_fdv_fallback", value: request.mcapFdvFallback, schema: s.optional(s.boolean()) },
          { name: "include_24hr_vol", value: request.include24HrVol, schema: s.optional(s.boolean()) },
          {
            name: "include_24hr_price_change",
            value: request.include24HrPriceChange,
            schema: s.optional(s.boolean()),
          },
          {
            name: "include_total_reserve_in_usd",
            value: request.includeTotalReserveInUsd,
            schema: s.optional(s.boolean()),
          },
          {
            name: "include_inactive_source",
            value: request.includeInactiveSource,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onchainSimplePriceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  poolAddress(
    request: Onchain.PoolAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<PoolAddressData, ResponseError> {
    return this.#rawClient.execute<PoolAddressData, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/pools/{address}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") },
          {
            name: "address",
            value: request.address,
            schema: s.defaulted(s.string(), "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"),
          },
        ],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          {
            name: "include_volume_breakdown",
            value: request.includeVolumeBreakdown,
            schema: s.optional(s.boolean()),
          },
          { name: "include_composition", value: request.includeComposition, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolAddressDataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  poolOhlcvContractAddress(
    request: Onchain.PoolOhlcvContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<Ohlcv, ResponseError> {
    return this.#rawClient.execute<Ohlcv, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") },
          {
            name: "pool_address",
            value: request.poolAddress,
            schema: s.defaulted(s.string(), "0x06da0fd433c1a5d7a4faa01111c044910a184553"),
          },
          {
            name: "timeframe",
            value: request.timeframe,
            schema: s.defaulted(timeframeSchema, Timeframe.Day),
          },
        ],
        query: [
          { name: "aggregate", value: request.aggregate, schema: s.optional(s.string()) },
          { name: "before_timestamp", value: request.beforeTimestamp, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "currency", value: request.currency, schema: s.optional(s.lazy(() => currencySchema)) },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          {
            name: "include_empty_intervals",
            value: request.includeEmptyIntervals,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ohlcvSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  poolTokenInfoContractAddress(
    request: Onchain.PoolTokenInfoContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<PoolTokensInfo, ResponseError> {
    return this.#rawClient.execute<PoolTokensInfo, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/pools/{pool_address}/info"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "solana") },
          {
            name: "pool_address",
            value: request.poolAddress,
            schema: s.defaulted(s.string(), "8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt"),
          },
        ],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.lazy(() => include2Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolTokensInfoSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  poolTradesContractAddress(
    request: Onchain.PoolTradesContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<Trades, ResponseError> {
    return this.#rawClient.execute<Trades, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/pools/{pool_address}/trades"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") },
          {
            name: "pool_address",
            value: request.poolAddress,
            schema: s.defaulted(s.string(), "0x06da0fd433c1a5d7a4faa01111c044910a184553"),
          },
        ],
        query: [
          {
            name: "trade_volume_in_usd_greater_than",
            value: request.tradeVolumeInUsdGreaterThan,
            schema: s.optional(s.number()),
          },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tradesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  poolsAddresses(
    request: Onchain.PoolsAddressesRequest,
    options?: RequestOptions,
  ): ApiPromise<MultiPoolAddressData, ResponseError> {
    return this.#rawClient.execute<MultiPoolAddressData, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/pools/multi/{addresses}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") },
          {
            name: "addresses",
            value: request.addresses,
            schema: s.defaulted(s.string(), "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"),
          },
        ],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          {
            name: "include_volume_breakdown",
            value: request.includeVolumeBreakdown,
            schema: s.optional(s.boolean()),
          },
          { name: "include_composition", value: request.includeComposition, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: multiPoolAddressDataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchPools(
    request: Onchain.SearchPoolsRequest,
    options?: RequestOptions,
  ): ApiPromise<PoolSearch, ResponseError> {
    return this.#rawClient.execute<PoolSearch, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/search/pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [
          { name: "query", value: request.query, schema: s.defaulted(s.string(), "weth") },
          { name: "network", value: request.network, schema: s.optional(s.string()) },
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSearchSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  tokenDataContractAddress(
    request: Onchain.TokenDataContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenData, ResponseError> {
    return this.#rawClient.execute<TokenData, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/tokens/{address}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") },
          {
            name: "address",
            value: request.address,
            schema: s.defaulted(s.string(), "0xdac17f958d2ee523a2206206994597c13d831ec7"),
          },
        ],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.lazy(() => includeSchema)) },
          { name: "include_composition", value: request.includeComposition, schema: s.optional(s.boolean()) },
          {
            name: "include_inactive_source",
            value: request.includeInactiveSource,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenDataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  tokenInfoContractAddress(
    request: Onchain.TokenInfoContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenInfo, ResponseError> {
    return this.#rawClient.execute<TokenInfo, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/tokens/{address}/info"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "solana") },
          {
            name: "address",
            value: request.address,
            schema: s.defaulted(s.string(), "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump"),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenInfoSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  tokensDataContractAddresses(
    request: Onchain.TokensDataContractAddressesRequest,
    options?: RequestOptions,
  ): ApiPromise<MultiTokenData, ResponseError> {
    return this.#rawClient.execute<MultiTokenData, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/tokens/multi/{addresses}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "solana") },
          {
            name: "addresses",
            value: request.addresses,
            schema: s.defaulted(
              s.string(),
              "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN,2g4LS3y2myPe6vj9wTvoBE1wKqxvhnZPoZA9QU9upump",
            ),
          },
        ],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.lazy(() => includeSchema)) },
          { name: "include_composition", value: request.includeComposition, schema: s.optional(s.boolean()) },
          {
            name: "include_inactive_source",
            value: request.includeInactiveSource,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: multiTokenDataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  tokensInfoRecentUpdated(
    request: Onchain.TokensInfoRecentUpdatedRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenInfoRecentlyUpdated, ResponseError> {
    return this.#rawClient.execute<TokenInfoRecentlyUpdated, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/tokens/info_recently_updated"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [
          { name: "include", value: request.include, schema: s.optional(s.lazy(() => include3Schema)) },
          { name: "network", value: request.network, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenInfoRecentlyUpdatedSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  topPoolsContractAddress(
    request: Onchain.TopPoolsContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ResponseError> {
    return this.#rawClient.execute<Pool, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/tokens/{token_address}/pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") },
          {
            name: "token_address",
            value: request.tokenAddress,
            schema: s.defaulted(s.string(), "0xdac17f958d2ee523a2206206994597c13d831ec7"),
          },
        ],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          {
            name: "include_inactive_source",
            value: request.includeInactiveSource,
            schema: s.optional(s.boolean()),
          },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort2Schema)) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  topPoolsDex(
    request: Onchain.TopPoolsDexRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ResponseError> {
    return this.#rawClient.execute<Pool, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/dexes/{dex}/pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") },
          { name: "dex", value: request.dex, schema: s.defaulted(s.string(), "sushiswap") },
        ],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  topPoolsNetwork(
    request: Onchain.TopPoolsNetworkRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ResponseError> {
    return this.#rawClient.execute<Pool, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") }],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  trendingPoolsList(
    request: Onchain.TrendingPoolsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ResponseError> {
    return this.#rawClient.execute<Pool, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/trending_pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "duration", value: request.duration, schema: s.optional(s.lazy(() => durationSchema)) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  trendingPoolsNetwork(
    request: Onchain.TrendingPoolsNetworkRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ResponseError> {
    return this.#rawClient.execute<Pool, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/onchain/networks/{network}/trending_pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") }],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "duration", value: request.duration, schema: s.optional(s.lazy(() => durationSchema)) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Onchain {
  export type DexesListRequest = {
    network?: string;
    page?: number;
  };

  export type LatestPoolsListRequest = {
    include?: string;
    page?: number;
    includeGtCommunityData?: boolean;
  };

  export type LatestPoolsNetworkRequest = {
    network?: string;
    include?: string;
    page?: number;
    includeGtCommunityData?: boolean;
  };

  export type NetworksListRequest = {
    page?: number;
  };

  export type OnchainSimplePriceRequest = {
    network?: string;
    addresses?: string;
    includeMarketCap?: boolean;
    mcapFdvFallback?: boolean;
    include24HrVol?: boolean;
    include24HrPriceChange?: boolean;
    includeTotalReserveInUsd?: boolean;
    includeInactiveSource?: boolean;
  };

  export type PoolAddressRequest = {
    network?: string;
    address?: string;
    include?: string;
    includeVolumeBreakdown?: boolean;
    includeComposition?: boolean;
  };

  export type PoolOhlcvContractAddressRequest = {
    network?: string;
    poolAddress?: string;
    timeframe?: Timeframe;
    aggregate?: string;
    beforeTimestamp?: number;
    limit?: number;
    currency?: Currency;
    token?: string;
    includeEmptyIntervals?: boolean;
  };

  export type PoolTokenInfoContractAddressRequest = {
    network?: string;
    poolAddress?: string;
    include?: Include2;
  };

  export type PoolTradesContractAddressRequest = {
    network?: string;
    poolAddress?: string;
    tradeVolumeInUsdGreaterThan?: number;
    token?: string;
  };

  export type PoolsAddressesRequest = {
    network?: string;
    addresses?: string;
    include?: string;
    includeVolumeBreakdown?: boolean;
    includeComposition?: boolean;
  };

  export type SearchPoolsRequest = {
    query?: string;
    network?: string;
    include?: string;
    page?: number;
  };

  export type TokenDataContractAddressRequest = {
    network?: string;
    address?: string;
    include?: Include;
    includeComposition?: boolean;
    includeInactiveSource?: boolean;
  };

  export type TokenInfoContractAddressRequest = {
    network?: string;
    address?: string;
  };

  export type TokensDataContractAddressesRequest = {
    network?: string;
    addresses?: string;
    include?: Include;
    includeComposition?: boolean;
    includeInactiveSource?: boolean;
  };

  export type TokensInfoRecentUpdatedRequest = {
    include?: Include3;
    network?: string;
  };

  export type TopPoolsContractAddressRequest = {
    network?: string;
    tokenAddress?: string;
    include?: string;
    includeInactiveSource?: boolean;
    page?: number;
    sort?: Sort2;
    includeGtCommunityData?: boolean;
  };

  export type TopPoolsDexRequest = {
    network?: string;
    dex?: string;
    include?: string;
    page?: number;
    sort?: Sort;
    includeGtCommunityData?: boolean;
  };

  export type TopPoolsNetworkRequest = {
    network?: string;
    include?: string;
    page?: number;
    sort?: Sort;
    includeGtCommunityData?: boolean;
  };

  export type TrendingPoolsListRequest = {
    include?: string;
    page?: number;
    duration?: Duration;
    includeGtCommunityData?: boolean;
  };

  export type TrendingPoolsNetworkRequest = {
    network?: string;
    include?: string;
    page?: number;
    duration?: Duration;
    includeGtCommunityData?: boolean;
  };
}
