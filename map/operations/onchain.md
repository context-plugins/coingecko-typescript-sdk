<!-- Generated file — do not edit; regenerated with the SDK. -->

# Onchain — operations

Accessor: `client.onchain` · Source: `src/resources/onchain.ts` · 20 operations · Request types: namespace `Onchain`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coin-gecko-demo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### dexesList

- **Signature**: `dexesList(request: Onchain.DexesListRequest, options?: RequestOptions): ApiPromise<DexesList, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/dexes`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DexesList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.DexesListRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `network` | `path` | `string` | no | `"eth"` |
| `page` | `query` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DexesList` | `dexesListSchema` | `src/models/dexes-list.ts` |

### latestPoolsList

- **Signature**: `latestPoolsList(request: Onchain.LatestPoolsListRequest, options?: RequestOptions): ApiPromise<Pool, ResponseError>`
- **Wire**: `GET /onchain/networks/new_pools`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Pool`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.LatestPoolsListRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `include` | `query` | — | `string` | no |
| `page` | `query` | — | `number` | no |
| `includeGtCommunityData` | `query` | `include_gt_community_data` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pool` | `poolSchema` | `src/models/pool.ts` |

### latestPoolsNetwork

- **Signature**: `latestPoolsNetwork(request: Onchain.LatestPoolsNetworkRequest, options?: RequestOptions): ApiPromise<Pool, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/new_pools`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Pool`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.LatestPoolsNetworkRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"eth"` |
| `include` | `query` | — | `string` | no | — |
| `page` | `query` | — | `number` | no | — |
| `includeGtCommunityData` | `query` | `include_gt_community_data` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pool` | `poolSchema` | `src/models/pool.ts` |

### networksList

- **Signature**: `networksList(request: Onchain.NetworksListRequest, options?: RequestOptions): ApiPromise<NetworksList, ResponseError>`
- **Wire**: `GET /onchain/networks`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NetworksList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.NetworksListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NetworksList` | `networksListSchema` | `src/models/networks-list.ts` |

### onchainSimplePrice

- **Signature**: `onchainSimplePrice(request: Onchain.OnchainSimplePriceRequest, options?: RequestOptions): ApiPromise<OnchainSimplePrice, ResponseError>`
- **Wire**: `GET /onchain/simple/networks/{network}/token_price/{addresses}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnchainSimplePrice`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.OnchainSimplePriceRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"eth"` |
| `addresses` | `path` | — | `string` | no | `"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"` |
| `includeMarketCap` | `query` | `include_market_cap` | `boolean` | no | — |
| `mcapFdvFallback` | `query` | `mcap_fdv_fallback` | `boolean` | no | — |
| `include24HrVol` | `query` | `include_24hr_vol` | `boolean` | no | — |
| `include24HrPriceChange` | `query` | `include_24hr_price_change` | `boolean` | no | — |
| `includeTotalReserveInUsd` | `query` | `include_total_reserve_in_usd` | `boolean` | no | — |
| `includeInactiveSource` | `query` | `include_inactive_source` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnchainSimplePrice` | `onchainSimplePriceSchema` | `src/models/onchain-simple-price.ts` |

### poolAddress

- **Signature**: `poolAddress(request: Onchain.PoolAddressRequest, options?: RequestOptions): ApiPromise<PoolAddressData, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/pools/{address}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PoolAddressData`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.PoolAddressRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"eth"` |
| `address` | `path` | — | `string` | no | `"0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"` |
| `include` | `query` | — | `string` | no | — |
| `includeVolumeBreakdown` | `query` | `include_volume_breakdown` | `boolean` | no | — |
| `includeComposition` | `query` | `include_composition` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoolAddressData` | `poolAddressDataSchema` | `src/models/pool-address-data.ts` |

### poolOhlcvContractAddress

- **Signature**: `poolOhlcvContractAddress(request: Onchain.PoolOhlcvContractAddressRequest, options?: RequestOptions): ApiPromise<Ohlcv, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ohlcv`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.PoolOhlcvContractAddressRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"eth"` |
| `poolAddress` | `path` | `pool_address` | `string` | no | `"0x06da0fd433c1a5d7a4faa01111c044910a184553"` |
| `timeframe` | `path` | — | `Timeframe` | no | `Timeframe.Day` |
| `aggregate` | `query` | — | `string` | no | — |
| `beforeTimestamp` | `query` | `before_timestamp` | `number` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `currency` | `query` | — | `Currency` | no | — |
| `token` | `query` | — | `string` | no | — |
| `includeEmptyIntervals` | `query` | `include_empty_intervals` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Timeframe` | `timeframeSchema` | `src/models/timeframe.ts` |
| `Currency` | `currencySchema` | `src/models/currency.ts` |
| `Ohlcv` | `ohlcvSchema` | `src/models/ohlcv.ts` |

### poolTokenInfoContractAddress

- **Signature**: `poolTokenInfoContractAddress(request: Onchain.PoolTokenInfoContractAddressRequest, options?: RequestOptions): ApiPromise<PoolTokensInfo, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/pools/{pool_address}/info`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PoolTokensInfo`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.PoolTokenInfoContractAddressRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"solana"` |
| `poolAddress` | `path` | `pool_address` | `string` | no | `"8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt"` |
| `include` | `query` | — | `Include2` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Include2` | `include2Schema` | `src/models/include2.ts` |
| `PoolTokensInfo` | `poolTokensInfoSchema` | `src/models/pool-tokens-info.ts` |

### poolTradesContractAddress

- **Signature**: `poolTradesContractAddress(request: Onchain.PoolTradesContractAddressRequest, options?: RequestOptions): ApiPromise<Trades, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/pools/{pool_address}/trades`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Trades`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.PoolTradesContractAddressRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"eth"` |
| `poolAddress` | `path` | `pool_address` | `string` | no | `"0x06da0fd433c1a5d7a4faa01111c044910a184553"` |
| `tradeVolumeInUsdGreaterThan` | `query` | `trade_volume_in_usd_greater_than` | `number` | no | — |
| `token` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Trades` | `tradesSchema` | `src/models/trades.ts` |

### poolsAddresses

- **Signature**: `poolsAddresses(request: Onchain.PoolsAddressesRequest, options?: RequestOptions): ApiPromise<MultiPoolAddressData, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/pools/multi/{addresses}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MultiPoolAddressData`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.PoolsAddressesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"eth"` |
| `addresses` | `path` | — | `string` | no | `"0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"` |
| `include` | `query` | — | `string` | no | — |
| `includeVolumeBreakdown` | `query` | `include_volume_breakdown` | `boolean` | no | — |
| `includeComposition` | `query` | `include_composition` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `MultiPoolAddressData` | `multiPoolAddressDataSchema` | `src/models/multi-pool-address-data.ts` |

### searchPools

- **Signature**: `searchPools(request: Onchain.SearchPoolsRequest, options?: RequestOptions): ApiPromise<PoolSearch, ResponseError>`
- **Wire**: `GET /onchain/search/pools`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PoolSearch`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.SearchPoolsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `query` | `query` | `string` | no | `"weth"` |
| `network` | `query` | `string` | no | — |
| `include` | `query` | `string` | no | — |
| `page` | `query` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PoolSearch` | `poolSearchSchema` | `src/models/pool-search.ts` |

### tokenDataContractAddress

- **Signature**: `tokenDataContractAddress(request: Onchain.TokenDataContractAddressRequest, options?: RequestOptions): ApiPromise<TokenData, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/tokens/{address}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TokenData`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.TokenDataContractAddressRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"eth"` |
| `address` | `path` | — | `string` | no | `"0xdac17f958d2ee523a2206206994597c13d831ec7"` |
| `include` | `query` | — | `Include` | no | — |
| `includeComposition` | `query` | `include_composition` | `boolean` | no | — |
| `includeInactiveSource` | `query` | `include_inactive_source` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `TokenData` | `tokenDataSchema` | `src/models/token-data.ts` |

### tokenInfoContractAddress

- **Signature**: `tokenInfoContractAddress(request: Onchain.TokenInfoContractAddressRequest, options?: RequestOptions): ApiPromise<TokenInfo, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/tokens/{address}/info`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TokenInfo`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.TokenInfoContractAddressRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `network` | `path` | `string` | no | `"solana"` |
| `address` | `path` | `string` | no | `"Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenInfo` | `tokenInfoSchema` | `src/models/token-info.ts` |

### tokensDataContractAddresses

- **Signature**: `tokensDataContractAddresses(request: Onchain.TokensDataContractAddressesRequest, options?: RequestOptions): ApiPromise<MultiTokenData, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/tokens/multi/{addresses}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MultiTokenData`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.TokensDataContractAddressesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"solana"` |
| `addresses` | `path` | — | `string` | no | `"6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN,2g4LS3y2myPe6vj9wTvoBE1wKqxvhnZPoZA9QU9upump"` |
| `include` | `query` | — | `Include` | no | — |
| `includeComposition` | `query` | `include_composition` | `boolean` | no | — |
| `includeInactiveSource` | `query` | `include_inactive_source` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `MultiTokenData` | `multiTokenDataSchema` | `src/models/multi-token-data.ts` |

### tokensInfoRecentUpdated

- **Signature**: `tokensInfoRecentUpdated(request: Onchain.TokensInfoRecentUpdatedRequest, options?: RequestOptions): ApiPromise<TokenInfoRecentlyUpdated, ResponseError>`
- **Wire**: `GET /onchain/tokens/info_recently_updated`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TokenInfoRecentlyUpdated`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.TokensInfoRecentUpdatedRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `include` | `query` | `Include3` | no |
| `network` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Include3` | `include3Schema` | `src/models/include3.ts` |
| `TokenInfoRecentlyUpdated` | `tokenInfoRecentlyUpdatedSchema` | `src/models/token-info-recently-updated.ts` |

### topPoolsContractAddress

- **Signature**: `topPoolsContractAddress(request: Onchain.TopPoolsContractAddressRequest, options?: RequestOptions): ApiPromise<Pool, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/tokens/{token_address}/pools`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Pool`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.TopPoolsContractAddressRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"eth"` |
| `tokenAddress` | `path` | `token_address` | `string` | no | `"0xdac17f958d2ee523a2206206994597c13d831ec7"` |
| `include` | `query` | — | `string` | no | — |
| `includeInactiveSource` | `query` | `include_inactive_source` | `boolean` | no | — |
| `page` | `query` | — | `number` | no | — |
| `sort` | `query` | — | `Sort2` | no | — |
| `includeGtCommunityData` | `query` | `include_gt_community_data` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort2` | `sort2Schema` | `src/models/sort2.ts` |
| `Pool` | `poolSchema` | `src/models/pool.ts` |

### topPoolsDex

- **Signature**: `topPoolsDex(request: Onchain.TopPoolsDexRequest, options?: RequestOptions): ApiPromise<Pool, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/dexes/{dex}/pools`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Pool`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.TopPoolsDexRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"eth"` |
| `dex` | `path` | — | `string` | no | `"sushiswap"` |
| `include` | `query` | — | `string` | no | — |
| `page` | `query` | — | `number` | no | — |
| `sort` | `query` | — | `Sort` | no | — |
| `includeGtCommunityData` | `query` | `include_gt_community_data` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `Pool` | `poolSchema` | `src/models/pool.ts` |

### topPoolsNetwork

- **Signature**: `topPoolsNetwork(request: Onchain.TopPoolsNetworkRequest, options?: RequestOptions): ApiPromise<Pool, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/pools`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Pool`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.TopPoolsNetworkRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"eth"` |
| `include` | `query` | — | `string` | no | — |
| `page` | `query` | — | `number` | no | — |
| `sort` | `query` | — | `Sort` | no | — |
| `includeGtCommunityData` | `query` | `include_gt_community_data` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `Pool` | `poolSchema` | `src/models/pool.ts` |

### trendingPoolsList

- **Signature**: `trendingPoolsList(request: Onchain.TrendingPoolsListRequest, options?: RequestOptions): ApiPromise<Pool, ResponseError>`
- **Wire**: `GET /onchain/networks/trending_pools`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Pool`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.TrendingPoolsListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `include` | `query` | — | `string` | no |
| `page` | `query` | — | `number` | no |
| `duration` | `query` | — | `Duration` | no |
| `includeGtCommunityData` | `query` | `include_gt_community_data` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Duration` | `durationSchema` | `src/models/duration.ts` |
| `Pool` | `poolSchema` | `src/models/pool.ts` |

### trendingPoolsNetwork

- **Signature**: `trendingPoolsNetwork(request: Onchain.TrendingPoolsNetworkRequest, options?: RequestOptions): ApiPromise<Pool, ResponseError>`
- **Wire**: `GET /onchain/networks/{network}/trending_pools`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Pool`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Onchain.TrendingPoolsNetworkRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `network` | `path` | — | `string` | no | `"eth"` |
| `include` | `query` | — | `string` | no | — |
| `page` | `query` | — | `number` | no | — |
| `duration` | `query` | — | `Duration` | no | — |
| `includeGtCommunityData` | `query` | `include_gt_community_data` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Duration` | `durationSchema` | `src/models/duration.ts` |
| `Pool` | `poolSchema` | `src/models/pool.ts` |

