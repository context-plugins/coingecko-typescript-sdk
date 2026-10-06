<!-- Generated file — do not edit; regenerated with the SDK. -->

# Coins — operations

Accessor: `client.coins` · Source: `src/resources/coins.ts` · 13 operations · Request types: namespace `Coins`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coin-gecko`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### coinsCategories

- **Signature**: `coinsCategories(request: Coins.CoinsCategoriesRequest, options?: RequestOptions): ApiPromise<Category1[], ApiError>`
- **Wire**: `GET /coins/categories`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Category1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.CoinsCategoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `order` | `query` | `Order2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order2` | `order2Schema` | `src/models/order2.ts` |
| `Category1` | `category1Schema` | `src/models/category1.ts` |

### coinsCategoriesList

- **Signature**: `coinsCategoriesList(options?: RequestOptions): ApiPromise<CategoriesList[], ApiError>`
- **Wire**: `GET /coins/categories/list`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CategoriesList[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `CategoriesList` | `categoriesListSchema` | `src/models/categories-list.ts` |

### coinsContractAddress

- **Signature**: `coinsContractAddress(request: Coins.CoinsContractAddressRequest, options?: RequestOptions): ApiPromise<CoinsContractAddress, ApiError>`
- **Wire**: `GET /coins/{id}/contract/{contract_address}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoinsContractAddress`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.CoinsContractAddressRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"ethereum"` |
| `contractAddress` | `path` | `contract_address` | `string` | no | `"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CoinsContractAddress` | `coinsContractAddressSchema` | `src/models/coins-contract-address.ts` |

### coinsId

- **Signature**: `coinsId(request: Coins.CoinsIdRequest, options?: RequestOptions): ApiPromise<CoinsId, ApiError>`
- **Wire**: `GET /coins/{id}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoinsId`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.CoinsIdRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"bitcoin"` |
| `localization` | `query` | — | `boolean` | no | — |
| `tickers` | `query` | — | `boolean` | no | — |
| `marketData` | `query` | `market_data` | `boolean` | no | — |
| `communityData` | `query` | `community_data` | `boolean` | no | — |
| `developerData` | `query` | `developer_data` | `boolean` | no | — |
| `sparkline` | `query` | — | `boolean` | no | — |
| `includeCategoriesDetails` | `query` | `include_categories_details` | `boolean` | no | — |
| `dexPairFormat` | `query` | `dex_pair_format` | `DexPairFormat` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DexPairFormat` | `dexPairFormatSchema` | `src/models/dex-pair-format.ts` |
| `CoinsId` | `coinsIdSchema` | `src/models/coins-id.ts` |

### coinsIdHistory

- **Signature**: `coinsIdHistory(request: Coins.CoinsIdHistoryRequest, options?: RequestOptions): ApiPromise<CoinsIdHistory, ApiError>`
- **Wire**: `GET /coins/{id}/history`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoinsIdHistory`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.CoinsIdHistoryRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | no | `"bitcoin"` |
| `date` | `query` | `string` | no | `"30-12-2025"` |
| `localization` | `query` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CoinsIdHistory` | `coinsIdHistorySchema` | `src/models/coins-id-history.ts` |

### coinsIdMarketChart

- **Signature**: `coinsIdMarketChart(request: Coins.CoinsIdMarketChartRequest, options?: RequestOptions): ApiPromise<CoinsMarketChart, ApiError>`
- **Wire**: `GET /coins/{id}/market_chart`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoinsMarketChart`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.CoinsIdMarketChartRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"bitcoin"` |
| `vsCurrency` | `query` | `vs_currency` | `string` | no | `"usd"` |
| `days` | `query` | — | `string` | no | `"1"` |
| `interval` | `query` | — | `Interval` | no | — |
| `precision` | `query` | — | `Precision` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Interval` | `intervalSchema` | `src/models/interval.ts` |
| `Precision` | `precisionSchema` | `src/models/precision.ts` |
| `CoinsMarketChart` | `coinsMarketChartSchema` | `src/models/coins-market-chart.ts` |

### coinsIdMarketChartRange

- **Signature**: `coinsIdMarketChartRange(request: Coins.CoinsIdMarketChartRangeRequest, options?: RequestOptions): ApiPromise<CoinsMarketChart, ApiError>`
- **Wire**: `GET /coins/{id}/market_chart/range`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoinsMarketChart`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.CoinsIdMarketChartRangeRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"bitcoin"` |
| `vsCurrency` | `query` | `vs_currency` | `string` | no | `"usd"` |
| `from` | `query` | — | `number` | no | `1767024000` |
| `to` | `query` | — | `number` | no | `1777564800` |
| `precision` | `query` | — | `Precision` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Precision` | `precisionSchema` | `src/models/precision.ts` |
| `CoinsMarketChart` | `coinsMarketChartSchema` | `src/models/coins-market-chart.ts` |

### coinsIdOhlc

- **Signature**: `coinsIdOhlc(request: Coins.CoinsIdOhlcRequest, options?: RequestOptions): ApiPromise<number[][], ApiError>`
- **Wire**: `GET /coins/{id}/ohlc`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number[][]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.CoinsIdOhlcRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"bitcoin"` |
| `vsCurrency` | `query` | `vs_currency` | `string` | no | `"usd"` |
| `days` | `query` | — | `Days` | no | `Days._1` |
| `precision` | `query` | — | `Precision` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Days` | `daysSchema` | `src/models/days.ts` |
| `Precision` | `precisionSchema` | `src/models/precision.ts` |

### coinsIdTickers

- **Signature**: `coinsIdTickers(request: Coins.CoinsIdTickersRequest, options?: RequestOptions): ApiPromise<CoinsIdTickers, ApiError>`
- **Wire**: `GET /coins/{id}/tickers`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoinsIdTickers`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.CoinsIdTickersRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"bitcoin"` |
| `exchangeIds` | `query` | `exchange_ids` | `string` | no | — |
| `includeExchangeLogo` | `query` | `include_exchange_logo` | `boolean` | no | — |
| `page` | `query` | — | `number` | no | — |
| `order` | `query` | — | `Order1` | no | — |
| `depth` | `query` | — | `boolean` | no | — |
| `dexPairFormat` | `query` | `dex_pair_format` | `DexPairFormat` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order1` | `order1Schema` | `src/models/order1.ts` |
| `DexPairFormat` | `dexPairFormatSchema` | `src/models/dex-pair-format.ts` |
| `CoinsIdTickers` | `coinsIdTickersSchema` | `src/models/coins-id-tickers.ts` |

### coinsList

- **Signature**: `coinsList(request: Coins.CoinsListRequest, options?: RequestOptions): ApiPromise<CoinsList[], ApiError>`
- **Wire**: `GET /coins/list`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoinsList[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.CoinsListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `includePlatform` | `query` | `include_platform` | `boolean` | no |
| `status` | `query` | — | `Status` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `CoinsList` | `coinsListSchema` | `src/models/coins-list.ts` |

### coinsMarkets

- **Signature**: `coinsMarkets(request: Coins.CoinsMarketsRequest, options?: RequestOptions): ApiPromise<CoinsMarket[], ApiError>`
- **Wire**: `GET /coins/markets`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoinsMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.CoinsMarketsRequest` (14):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `vsCurrency` | `query` | `vs_currency` | `string` | no | `"usd"` |
| `ids` | `query` | — | `string` | no | `"bitcoin"` |
| `names` | `query` | — | `string` | no | `"Bitcoin"` |
| `symbols` | `query` | — | `string` | no | `"btc"` |
| `includeTokens` | `query` | `include_tokens` | `IncludeTokens` | no | — |
| `category` | `query` | — | `string` | no | — |
| `order` | `query` | — | `Order` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | — |
| `page` | `query` | — | `number` | no | — |
| `sparkline` | `query` | — | `boolean` | no | — |
| `priceChangePercentage` | `query` | `price_change_percentage` | `string` | no | — |
| `locale` | `query` | — | `Locale` | no | — |
| `precision` | `query` | — | `Precision` | no | — |
| `includeRehypothecated` | `query` | `include_rehypothecated` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncludeTokens` | `includeTokensSchema` | `src/models/include-tokens.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `Locale` | `localeSchema` | `src/models/locale.ts` |
| `Precision` | `precisionSchema` | `src/models/precision.ts` |
| `CoinsMarket` | `coinsMarketSchema` | `src/models/coins-market.ts` |

### contractAddressMarketChart

- **Signature**: `contractAddressMarketChart(request: Coins.ContractAddressMarketChartRequest, options?: RequestOptions): ApiPromise<CoinsMarketChart, ApiError>`
- **Wire**: `GET /coins/{id}/contract/{contract_address}/market_chart`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoinsMarketChart`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.ContractAddressMarketChartRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"ethereum"` |
| `contractAddress` | `path` | `contract_address` | `string` | no | `"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"` |
| `vsCurrency` | `query` | `vs_currency` | `string` | no | `"usd"` |
| `days` | `query` | — | `string` | no | `"1"` |
| `interval` | `query` | — | `Interval` | no | — |
| `precision` | `query` | — | `Precision` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Interval` | `intervalSchema` | `src/models/interval.ts` |
| `Precision` | `precisionSchema` | `src/models/precision.ts` |
| `CoinsMarketChart` | `coinsMarketChartSchema` | `src/models/coins-market-chart.ts` |

### contractAddressMarketChartRange

- **Signature**: `contractAddressMarketChartRange(request: Coins.ContractAddressMarketChartRangeRequest, options?: RequestOptions): ApiPromise<CoinsMarketChart, ApiError>`
- **Wire**: `GET /coins/{id}/contract/{contract_address}/market_chart/range`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoinsMarketChart`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Coins.ContractAddressMarketChartRangeRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"ethereum"` |
| `contractAddress` | `path` | `contract_address` | `string` | no | `"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"` |
| `vsCurrency` | `query` | `vs_currency` | `string` | no | `"usd"` |
| `from` | `query` | — | `number` | no | `1767024000` |
| `to` | `query` | — | `number` | no | `1777564800` |
| `precision` | `query` | — | `Precision` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Precision` | `precisionSchema` | `src/models/precision.ts` |
| `CoinsMarketChart` | `coinsMarketChartSchema` | `src/models/coins-market-chart.ts` |

