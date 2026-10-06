import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

/**
 * On-chain DEX data (GeckoTerminal): networks, pools, tokens and OHLCV
 */
export class Onchain {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * DEXs List by Network
   *
   * @remarks
   * To query all the supported decentralized exchanges (DEXs) based on the provided network on
   * GeckoTerminal
   *
   * @returns List of supported DEXs on a network
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dexesList(request: Onchain.DexesListRequest, options?: RequestOptions): ApiPromise<DexesList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/dexes"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") }],
        query: [{ name: "page", value: request.page, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dexesListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * New Pools List
   *
   * @remarks
   * To query all the latest pools across all networks on GeckoTerminal
   *
   * @returns Latest pools across all networks
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  latestPoolsList(
    request: Onchain.LatestPoolsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/new_pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * New Pools by Network
   *
   * @remarks
   * To query all the latest pools based on the provided network
   *
   * @returns Latest pools on a network
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  latestPoolsNetwork(
    request: Onchain.LatestPoolsNetworkRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/new_pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") }],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Networks List
   *
   * @remarks
   * To retrieve a list of all supported networks on GeckoTerminal
   *
   * @returns List of supported networks
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  networksList(
    request: Onchain.NetworksListRequest,
    options?: RequestOptions,
  ): ApiPromise<NetworksList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [{ name: "page", value: request.page, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: networksListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Token Price by Token Addresses
   *
   * @remarks
   * To get token price based on the provided token contract address on a network
   *
   * @returns Token price data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  onchainSimplePrice(
    request: Onchain.OnchainSimplePriceRequest,
    options?: RequestOptions,
  ): ApiPromise<OnchainSimplePrice, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/simple/networks/{network}/token_price/{addresses}"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onchainSimplePriceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Specific Pool Data by Pool Address
   *
   * @remarks
   * To query the specific pool based on the provided network and pool address
   *
   * @returns Specific pool data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  poolAddress(
    request: Onchain.PoolAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<PoolAddressData, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/pools/{address}"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolAddressDataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Pool OHLCV Chart by Pool Address
   *
   * @remarks
   * To get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool
   * address on a network
   *
   * @returns Pool OHLCV chart data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  poolOhlcvContractAddress(
    request: Onchain.PoolOhlcvContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<Ohlcv, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}",
        ),
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
          { name: "before_timestamp", value: request.beforeTimestamp, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "currency", value: request.currency, schema: s.optional(s.lazy(() => currencySchema)) },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          {
            name: "include_empty_intervals",
            value: request.includeEmptyIntervals,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ohlcvSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Pool Tokens Info by Pool Address
   *
   * @remarks
   * To query pool metadata (base and quote token details, image, socials, websites, description,
   * contract address, etc.) based on a provided pool contract address on a network
   *
   * @returns Pool tokens info data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  poolTokenInfoContractAddress(
    request: Onchain.PoolTokenInfoContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<PoolTokensInfo, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/pools/{pool_address}/info"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolTokensInfoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Past 24 Hour Trades by Pool Address
   *
   * @remarks
   * To query the last 300 trades in the past 24 hours based on the provided pool address
   *
   * @returns Last 300 trades in past 24 hours from a pool
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  poolTradesContractAddress(
    request: Onchain.PoolTradesContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<Trades, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/pools/{pool_address}/trades"),
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
            schema: s.optional(s.float64()),
          },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tradesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Multiple Pools Data by Pool Addresses
   *
   * @remarks
   * To query multiple pools based on the provided network and pool addresses
   *
   * @returns Multiple pools data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  poolsAddresses(
    request: Onchain.PoolsAddressesRequest,
    options?: RequestOptions,
  ): ApiPromise<MultiPoolAddressData, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/pools/multi/{addresses}"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: multiPoolAddressDataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search Pools & Tokens
   *
   * @remarks
   * To search for pools across all networks by pool address, token name, token symbol, or token
   * contract address
   *
   * @returns Pool search results
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchPools(
    request: Onchain.SearchPoolsRequest,
    options?: RequestOptions,
  ): ApiPromise<PoolSearch, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/search/pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.defaulted(s.string(), "weth") },
          { name: "network", value: request.network, schema: s.optional(s.string()) },
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSearchSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Token Data by Token Address
   *
   * @remarks
   * To query specific token data based on the provided token contract address on a network
   *
   * @returns Token data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tokenDataContractAddress(
    request: Onchain.TokenDataContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenData, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/tokens/{address}"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenDataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Token Info by Token Address
   *
   * @remarks
   * To query token metadata (name, symbol, CoinGecko ID, image, socials, websites, description,
   * etc.) based on a provided token contract address on a network
   *
   * @returns Token info data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tokenInfoContractAddress(
    request: Onchain.TokenInfoContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenInfo, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/tokens/{address}/info"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "solana") },
          {
            name: "address",
            value: request.address,
            schema: s.defaulted(s.string(), "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump"),
          },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenInfoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Tokens Data by Token Addresses
   *
   * @remarks
   * To query multiple tokens data based on the provided token contract addresses on a network
   *
   * @returns Multiple tokens data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tokensDataContractAddresses(
    request: Onchain.TokensDataContractAddressesRequest,
    options?: RequestOptions,
  ): ApiPromise<MultiTokenData, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/tokens/multi/{addresses}"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: multiTokenDataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Most Recently Updated Tokens List
   *
   * @remarks
   * To query 100 most recently updated tokens info of a specific network or across all networks on
   * GeckoTerminal
   *
   * @returns Most recently updated tokens info
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tokensInfoRecentUpdated(
    request: Onchain.TokensInfoRecentUpdatedRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenInfoRecentlyUpdated, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/tokens/info_recently_updated"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.lazy(() => include3Schema)) },
          { name: "network", value: request.network, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenInfoRecentlyUpdatedSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Top Pools by Token Address
   *
   * @remarks
   * To query top pools based on the provided token contract address on a network
   *
   * @returns Top pools for a token
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  topPoolsContractAddress(
    request: Onchain.TopPoolsContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/tokens/{token_address}/pools"),
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
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort2Schema)) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Top Pools by DEX
   *
   * @remarks
   * To query all the top pools based on the provided network and decentralized exchange (DEX)
   *
   * @returns Top pools on a network's DEX
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  topPoolsDex(request: Onchain.TopPoolsDexRequest, options?: RequestOptions): ApiPromise<Pool, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/dexes/{dex}/pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") },
          { name: "dex", value: request.dex, schema: s.defaulted(s.string(), "sushiswap") },
        ],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Top Pools by Network
   *
   * @remarks
   * To query all the top pools based on the provided network
   *
   * @returns Top pools on a network
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  topPoolsNetwork(
    request: Onchain.TopPoolsNetworkRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") }],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Trending Pools List
   *
   * @remarks
   * To query all the trending pools across all networks on GeckoTerminal
   *
   * @returns Trending pools across all networks
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  trendingPoolsList(
    request: Onchain.TrendingPoolsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/trending_pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "duration", value: request.duration, schema: s.optional(s.lazy(() => durationSchema)) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Trending Pools by Network
   *
   * @remarks
   * To query the trending pools based on the provided network
   *
   * @returns Trending pools on a network
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  trendingPoolsNetwork(
    request: Onchain.TrendingPoolsNetworkRequest,
    options?: RequestOptions,
  ): ApiPromise<Pool, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/onchain/networks/{network}/trending_pools"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "network", value: request.network, schema: s.defaulted(s.string(), "eth") }],
        query: [
          { name: "include", value: request.include, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "duration", value: request.duration, schema: s.optional(s.lazy(() => durationSchema)) },
          {
            name: "include_gt_community_data",
            value: request.includeGtCommunityData,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: poolSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Onchain {
  export type DexesListRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /** Page through results. Default value: 1 */
    page?: number;
  };

  export type LatestPoolsListRequest = {
    /**
     * Attributes to include, comma-separated if more than one. Available values: `base_token`,
     * `quote_token`, `dex`, `network`
     */
    include?: string;
    /** Page through results. Default value: 1 */
    page?: number;
    /**
     * Include GeckoTerminal community data (sentiment votes, suspicious reports). Default: `false`
     */
    includeGtCommunityData?: boolean;
  };

  export type LatestPoolsNetworkRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /**
     * Attributes to include, comma-separated if more than one. Available values: `base_token`,
     * `quote_token`, `dex`
     */
    include?: string;
    /** Page through results. Default value: 1 */
    page?: number;
    /**
     * Include GeckoTerminal community data (sentiment votes, suspicious reports). Default: `false`
     */
    includeGtCommunityData?: boolean;
  };

  export type NetworksListRequest = {
    /** Page through results. Default value: 1 */
    page?: number;
  };

  export type OnchainSimplePriceRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /**
     * Token contract address, comma-separated if more than one token contract address.
     *
     * @default "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
     */
    addresses?: string;
    /** Include market capitalization. Default: `false` */
    includeMarketCap?: boolean;
    /** Return FDV if market cap is not available. Default: `false` */
    mcapFdvFallback?: boolean;
    /** Include 24hr volume. Default: `false` */
    include24HrVol?: boolean;
    /** Include 24hr price change. Default: `false` */
    include24HrPriceChange?: boolean;
    /** Include total reserve in USD. Default: `false` */
    includeTotalReserveInUsd?: boolean;
    /** Include token price data from inactive pools using the most recent swap. Default: `false` */
    includeInactiveSource?: boolean;
  };

  export type PoolAddressRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /** Pool address. @default "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640" */
    address?: string;
    /**
     * Attributes to include, comma-separated if more than one. Available values: `base_token`,
     * `quote_token`, `dex`
     */
    include?: string;
    /** Include volume breakdown. Default: `false` */
    includeVolumeBreakdown?: boolean;
    /** Include pool composition. Default: `false` */
    includeComposition?: boolean;
  };

  export type PoolOhlcvContractAddressRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /** Pool contract address. @default "0x06da0fd433c1a5d7a4faa01111c044910a184553" */
    poolAddress?: string;
    /** Timeframe of the OHLCV chart. @default Timeframe.Day */
    timeframe?: Timeframe;
    /**
     * Time period to aggregate each OHLCV. Available values (day): `1` Available values (hour):
     * `1`, `4`, `12` Available values (minute): `1`, `5`, `15` Default value: 1
     */
    aggregate?: string;
    /** Return OHLCV data before this timestamp (integer seconds since epoch). */
    beforeTimestamp?: number;
    /** Number of OHLCV results to return, maximum 1000. Default value: 100 */
    limit?: number;
    /** Return OHLCV in USD or quote token. Default: `usd` */
    currency?: Currency;
    /**
     * Return OHLCV for token, use this to invert the chart. Available values: `base`, `quote`, or
     * token address. Default: `base`
     */
    token?: string;
    /** Include empty intervals with no trade data. Default: `false` */
    includeEmptyIntervals?: boolean;
  };

  export type PoolTokenInfoContractAddressRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "solana" */
    network?: string;
    /** Pool contract address. @default "8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt" */
    poolAddress?: string;
    /** Attributes to include. */
    include?: Include2;
  };

  export type PoolTradesContractAddressRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /** Pool contract address. @default "0x06da0fd433c1a5d7a4faa01111c044910a184553" */
    poolAddress?: string;
    /** Filter trades by trade volume in USD greater than this value. Default value: 0 */
    tradeVolumeInUsdGreaterThan?: number;
    /**
     * Return trades for token, use this to invert the chart. Available values: `base`, `quote`, or
     * token address. Default: `base`
     */
    token?: string;
  };

  export type PoolsAddressesRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /**
     * Pool contract address, comma-separated if more than one pool contract address.
     *
     * @default "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"
     */
    addresses?: string;
    /**
     * Attributes to include, comma-separated if more than one. Available values: `base_token`,
     * `quote_token`, `dex`
     */
    include?: string;
    /** Include volume breakdown. Default: `false` */
    includeVolumeBreakdown?: boolean;
    /** Include pool composition. Default: `false` */
    includeComposition?: boolean;
  };

  export type SearchPoolsRequest = {
    /**
     * Search query: pool contract address, token name, token symbol, or token contract address.
     *
     * @default "weth"
     */
    query?: string;
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). */
    network?: string;
    /**
     * Attributes to include, comma-separated if more than one. Available values: `base_token`,
     * `quote_token`, `dex`
     */
    include?: string;
    /** Page through results. Default value: 1 */
    page?: number;
  };

  export type TokenDataContractAddressRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /** Token contract address. @default "0xdac17f958d2ee523a2206206994597c13d831ec7" */
    address?: string;
    /** Attributes to include. */
    include?: Include;
    /** Include pool composition. Default: `false` */
    includeComposition?: boolean;
    /** Include token data from inactive pools using the most recent swap. Default: `false` */
    includeInactiveSource?: boolean;
  };

  export type TokenInfoContractAddressRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "solana" */
    network?: string;
    /** Token contract address. @default "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump" */
    address?: string;
  };

  export type TokensDataContractAddressesRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "solana" */
    network?: string;
    /**
     * Token contract address, comma-separated if more than one token contract address.
     *
     * @default
     * "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN,2g4LS3y2myPe6vj9wTvoBE1wKqxvhnZPoZA9QU9upump"
     */
    addresses?: string;
    /** Attributes to include. */
    include?: Include;
    /** Include pool composition. Default: `false` */
    includeComposition?: boolean;
    /** Include tokens from inactive pools using the most recent swap. Default: `false` */
    includeInactiveSource?: boolean;
  };

  export type TokensInfoRecentUpdatedRequest = {
    /** Attributes for related resources to include. */
    include?: Include3;
    /**
     * Filter tokens by provided network. *refers to
     * [`/onchain/networks`](/reference/networks-list).
     */
    network?: string;
  };

  export type TopPoolsContractAddressRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /** Token contract address. @default "0xdac17f958d2ee523a2206206994597c13d831ec7" */
    tokenAddress?: string;
    /**
     * Attributes to include, comma-separated if more than one. Available values: `base_token`,
     * `quote_token`, `dex`
     */
    include?: string;
    /** Include tokens from inactive pools using the most recent swap. Default: `false` */
    includeInactiveSource?: boolean;
    /** Page through results. Default value: 1 */
    page?: number;
    /** Sort the pools by field. Default: `h24_volume_usd_liquidity_desc` */
    sort?: Sort2;
    /**
     * Include GeckoTerminal community data (sentiment votes, suspicious reports). Default: `false`
     */
    includeGtCommunityData?: boolean;
  };

  export type TopPoolsDexRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /**
     * DEX ID. *refers to [`/onchain/networks/{network}/dexes`](/reference/dexes-list).
     *
     * @default "sushiswap"
     */
    dex?: string;
    /**
     * Attributes to include, comma-separated if more than one. Available values: `base_token`,
     * `quote_token`, `dex`
     */
    include?: string;
    /** Page through results. Default value: 1 */
    page?: number;
    /** Sort the pools by field. Default: `h24_tx_count_desc` */
    sort?: Sort;
    /**
     * Include GeckoTerminal community data (sentiment votes, suspicious reports). Default: `false`
     */
    includeGtCommunityData?: boolean;
  };

  export type TopPoolsNetworkRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /**
     * Attributes to include, comma-separated if more than one. Available values: `base_token`,
     * `quote_token`, `dex`
     */
    include?: string;
    /** Page through results. Default value: 1 */
    page?: number;
    /** Sort the pools by field. Default: `h24_tx_count_desc` */
    sort?: Sort;
    /**
     * Include GeckoTerminal community data (sentiment votes, suspicious reports). Default: `false`
     */
    includeGtCommunityData?: boolean;
  };

  export type TrendingPoolsListRequest = {
    /**
     * Attributes to include, comma-separated if more than one. Available values: `base_token`,
     * `quote_token`, `dex`, `network`
     */
    include?: string;
    /** Page through results. Default value: 1 */
    page?: number;
    /** Duration to sort trending list by. Default: `24h` */
    duration?: Duration;
    /**
     * Include GeckoTerminal community data (sentiment votes, suspicious reports). Default: `false`
     */
    includeGtCommunityData?: boolean;
  };

  export type TrendingPoolsNetworkRequest = {
    /** Network ID. *refers to [`/onchain/networks`](/reference/networks-list). @default "eth" */
    network?: string;
    /**
     * Attributes to include, comma-separated if more than one. Available values: `base_token`,
     * `quote_token`, `dex`
     */
    include?: string;
    /** Page through results. Default value: 1 */
    page?: number;
    /** Duration to sort trending list by. Default: `24h` */
    duration?: Duration;
    /**
     * Include GeckoTerminal community data (sentiment votes, suspicious reports). Default: `false`
     */
    includeGtCommunityData?: boolean;
  };
}
