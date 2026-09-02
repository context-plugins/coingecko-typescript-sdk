<!-- Generated file — do not edit; regenerated with the SDK. -->

# GlobalApi — operations

Accessor: `client.globalApi` · Source: `src/resources/global-api.ts` · 2 operations · Request types: namespace `GlobalApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coin-gecko`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cryptoGlobal

- **Signature**: `cryptoGlobal(options?: RequestOptions): ApiPromise<Global, ResponseError>`
- **Wire**: `GET /global`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Global`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Global` | `globalSchema` | `src/models/global.ts` |

### globalDefi

- **Signature**: `globalDefi(options?: RequestOptions): ApiPromise<GlobalDeFi, ResponseError>`
- **Wire**: `GET /global/decentralized_finance_defi`
- **Auth**: any of `headerAuth`, `queryAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GlobalDeFi`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `GlobalDeFi` | `globalDeFiSchema` | `src/models/global-de-fi.ts` |

