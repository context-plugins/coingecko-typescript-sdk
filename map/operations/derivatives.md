<!-- Generated file — do not edit; regenerated with the SDK. -->

# Derivatives — operations

Accessor: `client.derivatives` · Source: `src/resources/derivatives.ts` · 4 operations · Request types: namespace `Derivatives`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coin-gecko`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### derivativesExchanges

- **Signature**: `derivativesExchanges(request: Derivatives.DerivativesExchangesRequest, options?: RequestOptions): ApiPromise<DerivativesExchange[], ApiError>`
- **Wire**: `GET /derivatives/exchanges`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DerivativesExchange[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Derivatives.DerivativesExchangesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `order` | `query` | — | `Order4` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `page` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order4` | `order4Schema` | `src/models/order4.ts` |
| `DerivativesExchange` | `derivativesExchangeSchema` | `src/models/derivatives-exchange.ts` |

### derivativesExchangesId

- **Signature**: `derivativesExchangesId(request: Derivatives.DerivativesExchangesIdRequest, options?: RequestOptions): ApiPromise<DerivativesExchangesId, ApiError>`
- **Wire**: `GET /derivatives/exchanges/{id}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DerivativesExchangesId`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Derivatives.DerivativesExchangesIdRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"binance_futures"` |
| `includeTickers` | `query` | `include_tickers` | `IncludeTickers` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncludeTickers` | `includeTickersSchema` | `src/models/include-tickers.ts` |
| `DerivativesExchangesId` | `derivativesExchangesIdSchema` | `src/models/derivatives-exchanges-id.ts` |

### derivativesExchangesList

- **Signature**: `derivativesExchangesList(options?: RequestOptions): ApiPromise<DerivativesExchangesList[], ApiError>`
- **Wire**: `GET /derivatives/exchanges/list`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DerivativesExchangesList[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `DerivativesExchangesList` | `derivativesExchangesListSchema` | `src/models/derivatives-exchanges-list.ts` |

### derivativesTickers

- **Signature**: `derivativesTickers(options?: RequestOptions): ApiPromise<DerivativesTicker[], ApiError>`
- **Wire**: `GET /derivatives`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DerivativesTicker[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `DerivativesTicker` | `derivativesTickerSchema` | `src/models/derivatives-ticker.ts` |

