<!-- Generated file — do not edit; regenerated with the SDK. -->

# PublicTreasuryApi — operations

Accessor: `client.publicTreasuryApi` · Source: `src/resources/public-treasury-api.ts` · 3 operations · Request types: namespace `PublicTreasuryApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coin-gecko`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### publicTreasuryEntity

- **Signature**: `publicTreasuryEntity(request: PublicTreasuryApi.PublicTreasuryEntityRequest, options?: RequestOptions): ApiPromise<PublicTreasuryEntity, ApiError>`
- **Wire**: `GET /public_treasury/{entity_id}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicTreasuryEntity`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PublicTreasuryApi.PublicTreasuryEntityRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `entityId` | `path` | `entity_id` | `string` | no | `"strategy"` |
| `holdingAmountChange` | `query` | `holding_amount_change` | `string` | no | — |
| `holdingChangePercentage` | `query` | `holding_change_percentage` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicTreasuryEntity` | `publicTreasuryEntitySchema` | `src/models/public-treasury-entity.ts` |

### publicTreasuryEntityChart

- **Signature**: `publicTreasuryEntityChart(request: PublicTreasuryApi.PublicTreasuryEntityChartRequest, options?: RequestOptions): ApiPromise<PublicTreasuryEntityChart, ApiError>`
- **Wire**: `GET /public_treasury/{entity_id}/{coin_id}/holding_chart`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicTreasuryEntityChart`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PublicTreasuryApi.PublicTreasuryEntityChartRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `entityId` | `path` | `entity_id` | `string` | no | `"strategy"` |
| `coinId` | `path` | `coin_id` | `string` | no | `"bitcoin"` |
| `days` | `query` | — | `string` | no | `"365"` |
| `includeEmptyIntervals` | `query` | `include_empty_intervals` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicTreasuryEntityChart` | `publicTreasuryEntityChartSchema` | `src/models/public-treasury-entity-chart.ts` |

### publicTreasuryTransactionHistory

- **Signature**: `publicTreasuryTransactionHistory(request: PublicTreasuryApi.PublicTreasuryTransactionHistoryRequest, options?: RequestOptions): ApiPromise<PublicTreasuryTransactionHistory, ApiError>`
- **Wire**: `GET /public_treasury/{entity_id}/transaction_history`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicTreasuryTransactionHistory`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PublicTreasuryApi.PublicTreasuryTransactionHistoryRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `entityId` | `path` | `entity_id` | `string` | no | `"strategy"` |
| `perPage` | `query` | `per_page` | `number` | no | — |
| `page` | `query` | — | `number` | no | — |
| `order` | `query` | — | `Order6` | no | — |
| `coinIds` | `query` | `coin_ids` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order6` | `order6Schema` | `src/models/order6.ts` |
| `PublicTreasuryTransactionHistory` | `publicTreasuryTransactionHistorySchema` | `src/models/public-treasury-transaction-history.ts` |

