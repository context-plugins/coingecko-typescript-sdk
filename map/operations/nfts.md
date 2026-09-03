<!-- Generated file — do not edit; regenerated with the SDK. -->

# Nfts — operations

Accessor: `client.nfts` · Source: `src/resources/nfts.ts` · 3 operations · Request types: namespace `Nfts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coin-gecko-demo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nftsContractAddress

- **Signature**: `nftsContractAddress(request: Nfts.NftsContractAddressRequest, options?: RequestOptions): ApiPromise<NftData, ResponseError>`
- **Wire**: `GET /nfts/{asset_platform_id}/contract/{contract_address}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NftData`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Nfts.NftsContractAddressRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `assetPlatformId` | `path` | `asset_platform_id` | `string` | no | `"ethereum"` |
| `contractAddress` | `path` | `contract_address` | `string` | no | `"0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `NftData` | `nftDataSchema` | `src/models/nft-data.ts` |

### nftsId

- **Signature**: `nftsId(request: Nfts.NftsIdRequest, options?: RequestOptions): ApiPromise<NftData, ResponseError>`
- **Wire**: `GET /nfts/{id}`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NftData`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Nfts.NftsIdRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | no | `"pudgy-penguins"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `NftData` | `nftDataSchema` | `src/models/nft-data.ts` |

### nftsList

- **Signature**: `nftsList(request: Nfts.NftsListRequest, options?: RequestOptions): ApiPromise<NfTsList[], ResponseError>`
- **Wire**: `GET /nfts/list`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NfTsList[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Nfts.NftsListRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `order` | `query` | — | `Order7` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `page` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order7` | `order7Schema` | `src/models/order7.ts` |
| `NfTsList` | `nfTsListSchema` | `src/models/nf-ts-list.ts` |

