<!-- Generated file — do not edit; regenerated with the SDK. -->

# SearchApi — operations

Accessor: `client.searchApi` · Source: `src/resources/search-api.ts` · 2 operations · Request types: namespace `SearchApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coin-gecko`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchData

- **Signature**: `searchData(request: SearchApi.SearchDataRequest, options?: RequestOptions): ApiPromise<Search, ApiError>`
- **Wire**: `GET /search`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Search`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SearchApi.SearchDataRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `query` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Search` | `searchSchema` | `src/models/search.ts` |

### trendingSearch

- **Signature**: `trendingSearch(options?: RequestOptions): ApiPromise<TrendingSearch, ApiError>`
- **Wire**: `GET /search/trending`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrendingSearch`
- **Error**: `CoinGeckoError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `TrendingSearch` | `trendingSearchSchema` | `src/models/trending-search.ts` |

