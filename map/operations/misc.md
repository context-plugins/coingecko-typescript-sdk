<!-- Generated file — do not edit; regenerated with the SDK. -->

# Misc — operations

Accessor: `client.misc` · Source: `src/resources/misc.ts` · 3 operations · Request types: namespace `Misc`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coin-gecko`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### assetPlatformsList

- **Signature**: `assetPlatformsList(request: Misc.AssetPlatformsListRequest, options?: RequestOptions): ApiPromise<AssetPlatform[], ApiError>`
- **Wire**: `GET /asset_platforms`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AssetPlatform[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Misc.AssetPlatformsListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filter` | `query` | `Filter` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter` | `filterSchema` | `src/models/filter.ts` |
| `AssetPlatform` | `assetPlatformSchema` | `src/models/asset-platform.ts` |

### pingServer

- **Signature**: `pingServer(options?: RequestOptions): ApiPromise<PingServer, ApiError>`
- **Wire**: `GET /ping`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PingServer`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `PingServer` | `pingServerSchema` | `src/models/ping-server.ts` |

### tokenLists

- **Signature**: `tokenLists(request: Misc.TokenListsRequest, options?: RequestOptions): ApiPromise<TokenLists, ApiError>`
- **Wire**: `GET /token_lists/{asset_platform_id}/all.json`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TokenLists`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Misc.TokenListsRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `assetPlatformId` | `path` | `asset_platform_id` | `string` | no | `"ethereum"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenLists` | `tokenListsSchema` | `src/models/token-lists.ts` |

