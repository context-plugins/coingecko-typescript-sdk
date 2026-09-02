<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entities — operations

Accessor: `client.entities` · Source: `src/resources/entities.ts` · 2 operations · Request types: namespace `Entities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coin-gecko`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### companiesPublicTreasury

- **Signature**: `companiesPublicTreasury(request: Entities.CompaniesPublicTreasuryRequest, options?: RequestOptions): ApiPromise<PublicTreasury, ResponseError>`
- **Wire**: `GET /{entity}/public_treasury/{coin_id}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicTreasury`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Entities.CompaniesPublicTreasuryRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `entity` | `path` | — | `Entity` | no | `Entity.Companies` |
| `coinId` | `path` | `coin_id` | `string` | no | `"bitcoin"` |
| `perPage` | `query` | `per_page` | `number` | no | — |
| `page` | `query` | — | `number` | no | — |
| `order` | `query` | — | `Order5` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Entity` | `entitySchema` | `src/models/entity.ts` |
| `Order5` | `order5Schema` | `src/models/order5.ts` |
| `PublicTreasury` | `publicTreasurySchema` | `src/models/unions/public-treasury.ts` |

### entitiesList

- **Signature**: `entitiesList(request: Entities.EntitiesListRequest, options?: RequestOptions): ApiPromise<EntitiesList[], ResponseError>`
- **Wire**: `GET /entities/list`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntitiesList[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Entities.EntitiesListRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `entityType` | `query` | `entity_type` | `EntityType` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `page` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `EntitiesList` | `entitiesListSchema` | `src/models/entities-list.ts` |

