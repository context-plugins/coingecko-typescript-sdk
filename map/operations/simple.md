<!-- Generated file — do not edit; regenerated with the SDK. -->

# Simple — operations

Accessor: `client.simple` · Source: `src/resources/simple.ts` · 3 operations · Request types: namespace `Simple`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coin-gecko`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### simplePrice

- **Signature**: `simplePrice(request: Simple.SimplePriceRequest, options?: RequestOptions): ApiPromise<Record<string, SimplePrice>, ResponseError>`
- **Wire**: `GET /simple/price`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, SimplePrice>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Simple.SimplePriceRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `vsCurrencies` | `query` | `vs_currencies` | `string` | no | `"usd"` |
| `ids` | `query` | — | `string` | no | `"bitcoin"` |
| `names` | `query` | — | `string` | no | `"Bitcoin"` |
| `symbols` | `query` | — | `string` | no | `"btc"` |
| `includeTokens` | `query` | `include_tokens` | `IncludeTokens` | no | — |
| `includeMarketCap` | `query` | `include_market_cap` | `boolean` | no | — |
| `include24HrVol` | `query` | `include_24hr_vol` | `boolean` | no | — |
| `include24HrChange` | `query` | `include_24hr_change` | `boolean` | no | — |
| `includeLastUpdatedAt` | `query` | `include_last_updated_at` | `boolean` | no | — |
| `precision` | `query` | — | `Precision` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncludeTokens` | `includeTokensSchema` | `src/models/include-tokens.ts` |
| `Precision` | `precisionSchema` | `src/models/precision.ts` |
| `SimplePrice` | `simplePriceSchema` | `src/models/simple-price.ts` |

### simpleSupportedCurrencies

- **Signature**: `simpleSupportedCurrencies(options?: RequestOptions): ApiPromise<string[], ResponseError>`
- **Wire**: `GET /simple/supported_vs_currencies`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

### simpleTokenPrice

- **Signature**: `simpleTokenPrice(request: Simple.SimpleTokenPriceRequest, options?: RequestOptions): ApiPromise<Record<string, SimplePrice>, ResponseError>`
- **Wire**: `GET /simple/token_price/{id}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, SimplePrice>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Simple.SimpleTokenPriceRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"ethereum"` |
| `contractAddresses` | `query` | `contract_addresses` | `string` | no | `"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"` |
| `vsCurrencies` | `query` | `vs_currencies` | `string` | no | `"usd"` |
| `includeMarketCap` | `query` | `include_market_cap` | `boolean` | no | — |
| `include24HrVol` | `query` | `include_24hr_vol` | `boolean` | no | — |
| `include24HrChange` | `query` | `include_24hr_change` | `boolean` | no | — |
| `includeLastUpdatedAt` | `query` | `include_last_updated_at` | `boolean` | no | — |
| `precision` | `query` | — | `Precision` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Precision` | `precisionSchema` | `src/models/precision.ts` |
| `SimplePrice` | `simplePriceSchema` | `src/models/simple-price.ts` |

