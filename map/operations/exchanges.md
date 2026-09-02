<!-- Generated file — do not edit; regenerated with the SDK. -->

# Exchanges — operations

Accessor: `client.exchanges` · Source: `src/resources/exchanges.ts` · 6 operations · Request types: namespace `Exchanges`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coin-gecko`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### exchangeRates

- **Signature**: `exchangeRates(options?: RequestOptions): ApiPromise<ExchangeRates, ResponseError>`
- **Wire**: `GET /exchange_rates`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExchangeRates`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ExchangeRates` | `exchangeRatesSchema` | `src/models/exchange-rates.ts` |

### exchanges

- **Signature**: `exchanges(request: Exchanges.ExchangesRequest, options?: RequestOptions): ApiPromise<Exchange1[], ResponseError>`
- **Wire**: `GET /exchanges`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Exchange1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Exchanges.ExchangesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `perPage` | `query` | `per_page` | `number` | no |
| `page` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Exchange1` | `exchange1Schema` | `src/models/exchange1.ts` |

### exchangesId

- **Signature**: `exchangesId(request: Exchanges.ExchangesIdRequest, options?: RequestOptions): ApiPromise<ExchangesId, ResponseError>`
- **Wire**: `GET /exchanges/{id}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExchangesId`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Exchanges.ExchangesIdRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"binance"` |
| `dexPairFormat` | `query` | `dex_pair_format` | `DexPairFormat` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DexPairFormat` | `dexPairFormatSchema` | `src/models/dex-pair-format.ts` |
| `ExchangesId` | `exchangesIdSchema` | `src/models/exchanges-id.ts` |

### exchangesIdTickers

- **Signature**: `exchangesIdTickers(request: Exchanges.ExchangesIdTickersRequest, options?: RequestOptions): ApiPromise<CoinsIdTickers, ResponseError>`
- **Wire**: `GET /exchanges/{id}/tickers`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CoinsIdTickers`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Exchanges.ExchangesIdTickersRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"binance"` |
| `coinIds` | `query` | `coin_ids` | `string` | no | — |
| `includeExchangeLogo` | `query` | `include_exchange_logo` | `boolean` | no | — |
| `page` | `query` | — | `number` | no | — |
| `depth` | `query` | — | `boolean` | no | — |
| `order` | `query` | — | `Order3` | no | — |
| `dexPairFormat` | `query` | `dex_pair_format` | `DexPairFormat` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order3` | `order3Schema` | `src/models/order3.ts` |
| `DexPairFormat` | `dexPairFormatSchema` | `src/models/dex-pair-format.ts` |
| `CoinsIdTickers` | `coinsIdTickersSchema` | `src/models/coins-id-tickers.ts` |

### exchangesIdVolumeChart

- **Signature**: `exchangesIdVolumeChart(request: Exchanges.ExchangesIdVolumeChartRequest, options?: RequestOptions): ApiPromise<ExchangeVolumeChart[][], ResponseError>`
- **Wire**: `GET /exchanges/{id}/volume_chart`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExchangeVolumeChart[][]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Exchanges.ExchangesIdVolumeChartRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | no | `"binance"` |
| `days` | `query` | `Days` | no | `Days._1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Days` | `daysSchema` | `src/models/days.ts` |
| `ExchangeVolumeChart` | `exchangeVolumeChartSchema` | `src/models/unions/exchange-volume-chart.ts` |

### exchangesList

- **Signature**: `exchangesList(request: Exchanges.ExchangesListRequest, options?: RequestOptions): ApiPromise<ExchangesList[], ResponseError>`
- **Wire**: `GET /exchanges/list`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExchangesList[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Exchanges.ExchangesListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `status` | `query` | `Status` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `ExchangesList` | `exchangesListSchema` | `src/models/exchanges-list.ts` |

