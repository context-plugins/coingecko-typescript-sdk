<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — CoinGecko Demo API (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | CoinGecko Demo API |
| Package | `coin-gecko-demo-api` |
| Package version | `3.0.0` |
| API spec version | `3.0.0` |
| Import specifier | `coin-gecko-demo-api` — the package root is the **only** entry. Deep imports (`coin-gecko-demo-api/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/coin-gecko-demo-api/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { CoinGeckoDemoApiClient, ServerEnvironment } from "coin-gecko-demo-api";

const client = new CoinGeckoDemoApiClient({
  serverEnvironment: ServerEnvironment.Production,
  headerAuth: "YOUR_API_KEY",
  queryAuth: "YOUR_API_KEY",
});
```

The only constructor is `new CoinGeckoDemoApiClient(clientOptions: Partial<ClientOptions> = {})`, so `new CoinGeckoDemoApiClient()` is valid. Resources are memoized lazy getters on the client — `client.coins`, `client.derivatives`, `client.entities`, `client.exchanges`, `client.globalApi`, `client.misc`, `client.nfts`, `client.onchain`, `client.publicTreasuryApi`, `client.searchApi`, `client.simple` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `headerAuth` | `TokenProvider \| undefined` | unset |
| `queryAuth` | `TokenProvider \| undefined` | unset |

The 2 auth fields are all optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `CoinGeckoDemoApiError` set. `CoinGeckoDemoApiError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `CoinGeckoDemoApiError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.coins.coinsCategories();
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof CoinGeckoDemoApiError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **61 operations**, **0** declare typed error bodies and **61** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (11 groups, 61 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `coins` | 13 | [map/operations/coins.md](map/operations/coins.md) |
| `derivatives` | 4 | [map/operations/derivatives.md](map/operations/derivatives.md) |
| `entities` | 2 | [map/operations/entities.md](map/operations/entities.md) |
| `exchanges` | 6 | [map/operations/exchanges.md](map/operations/exchanges.md) |
| `globalApi` | 2 | [map/operations/global-api.md](map/operations/global-api.md) |
| `misc` | 3 | [map/operations/misc.md](map/operations/misc.md) |
| `nfts` | 3 | [map/operations/nfts.md](map/operations/nfts.md) |
| `onchain` | 20 | [map/operations/onchain.md](map/operations/onchain.md) |
| `publicTreasuryApi` | 3 | [map/operations/public-treasury-api.md](map/operations/public-treasury-api.md) |
| `searchApi` | 2 | [map/operations/search-api.md](map/operations/search-api.md) |
| `simple` | 3 | [map/operations/simple.md](map/operations/simple.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type AssetPlatform, assetPlatformSchema } from "coin-gecko-demo-api";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 192 | `src/models/` |
| Enums (open; const companion plus schema) | 28 | `src/models/` |
| Unions without a discriminant | 3 | `src/models/unions/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `Type` | `Buy` to `"buy"` · `Sell` to `"sell"` | `typeSchema` |
| `Currency` | `Usd` to `"usd"` · `Token` to `"token"` | `currencySchema` |
| `Days` | `_1` to `"1"` · `_7` to `"7"` · `_14` to `"14"` · `_30` to `"30"` · `_90` to `"90"` · `_180` to `"180"` · `_365` to `"365"` | `daysSchema` |
| `DexPairFormat` | `ContractAddress` to `"contract_address"` · `Symbol` to `"symbol"` | `dexPairFormatSchema` |
| `Duration` | `_5M` to `"5m"` · `_1H` to `"1h"` · `_6H` to `"6h"` · `_24H` to `"24h"` | `durationSchema` |
| `Entity` | `Companies` to `"companies"` · `Governments` to `"governments"` | `entitySchema` |
| `EntityType` | `Company` to `"company"` · `Government` to `"government"` | `entityTypeSchema` |
| `Filter` | `Nft` to `"nft"` | `filterSchema` |
| `Include` | `TopPools` to `"top_pools"` | `includeSchema` |
| `Include2` | `Pool` to `"pool"` | `include2Schema` |
| `Include3` | `Network` to `"network"` | `include3Schema` |
| `IncludeTickers` | `All` to `"all"` · `Unexpired` to `"unexpired"` | `includeTickersSchema` |
| `IncludeTokens` | `Top` to `"top"` · `All` to `"all"` | `includeTokensSchema` |
| `Interval` | `Hourly` to `"hourly"` · `Daily` to `"daily"` | `intervalSchema` |
| `Locale` | `Ar` to `"ar"` · `Bg` to `"bg"` · `Cs` to `"cs"` · `Da` to `"da"` · `De` to `"de"` · `El` to `"el"` · `En` to `"en"` · `Es` to `"es"` · `Fi` to `"fi"` · `Fr` to `"fr"` · `He` to `"he"` · `Hi` to `"hi"` · `Hr` to `"hr"` · `Hu` to `"hu"` · `Id` to `"id"` · `It` to `"it"` · `Ja` to `"ja"` · `Ko` to `"ko"` · `Lt` to `"lt"` · `Nl` to `"nl"` · `No` to `"no"` · `Pl` to `"pl"` · `Pt` to `"pt"` · `Ro` to `"ro"` · `Ru` to `"ru"` · `Sk` to `"sk"` · `Sl` to `"sl"` · `Sv` to `"sv"` · `Th` to `"th"` · `Tr` to `"tr"` · `Uk` to `"uk"` · `Vi` to `"vi"` · `Zh` to `"zh"` · `ZhTw` to `"zh-tw"` | `localeSchema` |
| `Order` | `MarketCapAsc` to `"market_cap_asc"` · `MarketCapDesc` to `"market_cap_desc"` · `VolumeAsc` to `"volume_asc"` · `VolumeDesc` to `"volume_desc"` · `IdAsc` to `"id_asc"` · `IdDesc` to `"id_desc"` | `orderSchema` |
| `Order1` | `TrustScoreDesc` to `"trust_score_desc"` · `TrustScoreAsc` to `"trust_score_asc"` · `VolumeDesc` to `"volume_desc"` · `VolumeAsc` to `"volume_asc"` | `order1Schema` |
| `Order2` | `MarketCapDesc` to `"market_cap_desc"` · `MarketCapAsc` to `"market_cap_asc"` · `NameDesc` to `"name_desc"` · `NameAsc` to `"name_asc"` · `MarketCapChange24HDesc` to `"market_cap_change_24h_desc"` · `MarketCapChange24HAsc` to `"market_cap_change_24h_asc"` | `order2Schema` |
| `Order3` | `MarketCapAsc` to `"market_cap_asc"` · `MarketCapDesc` to `"market_cap_desc"` · `TrustScoreDesc` to `"trust_score_desc"` · `TrustScoreAsc` to `"trust_score_asc"` · `VolumeDesc` to `"volume_desc"` · `VolumeAsc` to `"volume_asc"` · `BaseTarget` to `"base_target"` | `order3Schema` |
| `Order4` | `NameAsc` to `"name_asc"` · `NameDesc` to `"name_desc"` · `OpenInterestBtcAsc` to `"open_interest_btc_asc"` · `OpenInterestBtcDesc` to `"open_interest_btc_desc"` · `TradeVolume24HBtcAsc` to `"trade_volume_24h_btc_asc"` · `TradeVolume24HBtcDesc` to `"trade_volume_24h_btc_desc"` | `order4Schema` |
| `Order5` | `TotalHoldingsUsdDesc` to `"total_holdings_usd_desc"` · `TotalHoldingsUsdAsc` to `"total_holdings_usd_asc"` | `order5Schema` |
| `Order6` | `DateDesc` to `"date_desc"` · `DateAsc` to `"date_asc"` · `HoldingNetChangeDesc` to `"holding_net_change_desc"` · `HoldingNetChangeAsc` to `"holding_net_change_asc"` · `TransactionValueUsdDesc` to `"transaction_value_usd_desc"` · `TransactionValueUsdAsc` to `"transaction_value_usd_asc"` · `AverageCostDesc` to `"average_cost_desc"` · `AverageCostAsc` to `"average_cost_asc"` | `order6Schema` |
| `Order7` | `H24VolumeUsdAsc` to `"h24_volume_usd_asc"` · `H24VolumeUsdDesc` to `"h24_volume_usd_desc"` · `H24VolumeNativeAsc` to `"h24_volume_native_asc"` · `H24VolumeNativeDesc` to `"h24_volume_native_desc"` · `FloorPriceNativeAsc` to `"floor_price_native_asc"` · `FloorPriceNativeDesc` to `"floor_price_native_desc"` · `MarketCapNativeAsc` to `"market_cap_native_asc"` · `MarketCapNativeDesc` to `"market_cap_native_desc"` · `MarketCapUsdAsc` to `"market_cap_usd_asc"` · `MarketCapUsdDesc` to `"market_cap_usd_desc"` | `order7Schema` |
| `Precision` | `Full` to `"full"` · `_0` to `"0"` · `_1` to `"1"` · `_2` to `"2"` · `_3` to `"3"` · `_4` to `"4"` · `_5` to `"5"` · `_6` to `"6"` · `_7` to `"7"` · `_8` to `"8"` · `_9` to `"9"` · `_10` to `"10"` · `_11` to `"11"` · `_12` to `"12"` · `_13` to `"13"` · `_14` to `"14"` · `_15` to `"15"` · `_16` to `"16"` · `_17` to `"17"` · `_18` to `"18"` | `precisionSchema` |
| `Sort` | `H24TxCountDesc` to `"h24_tx_count_desc"` · `H24VolumeUsdDesc` to `"h24_volume_usd_desc"` | `sortSchema` |
| `Sort2` | `H24VolumeUsdLiquidityDesc` to `"h24_volume_usd_liquidity_desc"` · `H24TxCountDesc` to `"h24_tx_count_desc"` · `H24VolumeUsdDesc` to `"h24_volume_usd_desc"` | `sort2Schema` |
| `Status` | `Active` to `"active"` · `Inactive` to `"inactive"` | `statusSchema` |
| `Timeframe` | `Day` to `"day"` · `Hour` to `"hour"` · `Minute` to `"minute"` | `timeframeSchema` |

**Unions.** A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import. One without a discriminant is narrowed on the shape of its arms.

| Union | Variants | Narrow with | Source |
| --- | --- | --- | --- |
| `ExchangeVolumeChart` | no discriminant | `typeof`, or an `in` check | `src/models/unions/exchange-volume-chart.ts` |
| `IsHoneypot` | no discriminant | `typeof`, or an `in` check | `src/models/unions/is-honeypot.ts` |
| `PublicTreasury` | no discriminant | `typeof`, or an `in` check | `src/models/unions/public-treasury.ts` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `AssetPlatform` | `chainIdentifier` | `chain_identifier` |
| `AssetPlatform` | `nativeCoinId` | `native_coin_id` |
| `Ath` | `nativeCurrency` | `native_currency` |
| `AthChangePercentage` | `nativeCurrency` | `native_currency` |
| `AthDate` | `nativeCurrency` | `native_currency` |
| `Attributes` | `baseTokenPriceUsd` | `base_token_price_usd` |
| `Attributes` | `baseTokenPriceNativeCurrency` | `base_token_price_native_currency` |
| `Attributes` | `baseTokenBalance` | `base_token_balance` |
| `Attributes` | `baseTokenLiquidityUsd` | `base_token_liquidity_usd` |
| `Attributes` | `quoteTokenPriceUsd` | `quote_token_price_usd` |
| `Attributes` | `quoteTokenPriceNativeCurrency` | `quote_token_price_native_currency` |
| `Attributes` | `quoteTokenBalance` | `quote_token_balance` |
| `Attributes` | `quoteTokenLiquidityUsd` | `quote_token_liquidity_usd` |
| `Attributes` | `baseTokenPriceQuoteToken` | `base_token_price_quote_token` |
| `Attributes` | `quoteTokenPriceBaseToken` | `quote_token_price_base_token` |
| `Attributes` | `poolName` | `pool_name` |
| `Attributes` | `poolFeePercentage` | `pool_fee_percentage` |
| `Attributes` | `poolCreatedAt` | `pool_created_at` |
| `Attributes` | `fdvUsd` | `fdv_usd` |
| `Attributes` | `marketCapUsd` | `market_cap_usd` |
| `Attributes` | `priceChangePercentage` | `price_change_percentage` |
| `Attributes` | `volumeUsd` | `volume_usd` |
| `Attributes` | `netBuyVolumeUsd` | `net_buy_volume_usd` |
| `Attributes` | `buyVolumeUsd` | `buy_volume_usd` |
| `Attributes` | `sellVolumeUsd` | `sell_volume_usd` |
| `Attributes` | `reserveInUsd` | `reserve_in_usd` |
| `Attributes` | `lockedLiquidityPercentage` | `locked_liquidity_percentage` |
| `Attributes1` | `imageUrl` | `image_url` |
| `Attributes1` | `coingeckoCoinId` | `coingecko_coin_id` |
| `Attributes10` | `baseTokenPriceUsd` | `base_token_price_usd` |
| `Attributes10` | `baseTokenPriceNativeCurrency` | `base_token_price_native_currency` |
| `Attributes10` | `quoteTokenPriceUsd` | `quote_token_price_usd` |
| `Attributes10` | `quoteTokenPriceNativeCurrency` | `quote_token_price_native_currency` |
| `Attributes10` | `baseTokenPriceQuoteToken` | `base_token_price_quote_token` |
| `Attributes10` | `quoteTokenPriceBaseToken` | `quote_token_price_base_token` |
| `Attributes10` | `poolCreatedAt` | `pool_created_at` |
| `Attributes10` | `fdvUsd` | `fdv_usd` |
| `Attributes10` | `marketCapUsd` | `market_cap_usd` |
| `Attributes10` | `priceChangePercentage` | `price_change_percentage` |
| `Attributes10` | `volumeUsd` | `volume_usd` |
| `Attributes10` | `reserveInUsd` | `reserve_in_usd` |
| `Attributes11` | `baseTokenPriceUsd` | `base_token_price_usd` |
| `Attributes11` | `baseTokenPriceNativeCurrency` | `base_token_price_native_currency` |
| `Attributes11` | `quoteTokenPriceUsd` | `quote_token_price_usd` |
| `Attributes11` | `quoteTokenPriceNativeCurrency` | `quote_token_price_native_currency` |
| `Attributes11` | `baseTokenPriceQuoteToken` | `base_token_price_quote_token` |
| `Attributes11` | `quoteTokenPriceBaseToken` | `quote_token_price_base_token` |
| `Attributes11` | `poolCreatedAt` | `pool_created_at` |
| `Attributes11` | `tokenPriceUsd` | `token_price_usd` |
| `Attributes11` | `fdvUsd` | `fdv_usd` |
| `Attributes11` | `marketCapUsd` | `market_cap_usd` |
| `Attributes11` | `priceChangePercentage` | `price_change_percentage` |
| `Attributes11` | `volumeUsd` | `volume_usd` |
| `Attributes11` | `reserveInUsd` | `reserve_in_usd` |
| `Attributes11` | `lastTradeTimestamp` | `last_trade_timestamp` |
| `Attributes12` | `baseTokenPriceUsd` | `base_token_price_usd` |
| `Attributes12` | `baseTokenPriceNativeCurrency` | `base_token_price_native_currency` |
| `Attributes12` | `quoteTokenPriceUsd` | `quote_token_price_usd` |
| `Attributes12` | `quoteTokenPriceNativeCurrency` | `quote_token_price_native_currency` |
| `Attributes12` | `baseTokenPriceQuoteToken` | `base_token_price_quote_token` |
| `Attributes12` | `quoteTokenPriceBaseToken` | `quote_token_price_base_token` |
| `Attributes12` | `poolCreatedAt` | `pool_created_at` |
| `Attributes12` | `fdvUsd` | `fdv_usd` |
| `Attributes12` | `marketCapUsd` | `market_cap_usd` |
| `Attributes12` | `priceChangePercentage` | `price_change_percentage` |
| `Attributes12` | `volumeUsd` | `volume_usd` |
| `Attributes12` | `reserveInUsd` | `reserve_in_usd` |
| `Attributes12` | `tokenPriceUsd` | `token_price_usd` |
| `Attributes12` | `sentimentVotePositivePercentage` | `sentiment_vote_positive_percentage` |
| `Attributes12` | `sentimentVoteNegativePercentage` | `sentiment_vote_negative_percentage` |
| `Attributes12` | `communitySusReport` | `community_sus_report` |
| `Attributes13` | `imageUrl` | `image_url` |
| `Attributes13` | `coingeckoCoinId` | `coingecko_coin_id` |
| `Attributes13` | `coingeckoAssetPlatformId` | `coingecko_asset_platform_id` |
| `Attributes14` | `baseTokenPriceUsd` | `base_token_price_usd` |
| `Attributes14` | `baseTokenPriceNativeCurrency` | `base_token_price_native_currency` |
| `Attributes14` | `quoteTokenPriceUsd` | `quote_token_price_usd` |
| `Attributes14` | `quoteTokenPriceNativeCurrency` | `quote_token_price_native_currency` |
| `Attributes14` | `baseTokenPriceQuoteToken` | `base_token_price_quote_token` |
| `Attributes14` | `quoteTokenPriceBaseToken` | `quote_token_price_base_token` |
| `Attributes14` | `poolCreatedAt` | `pool_created_at` |
| `Attributes14` | `fdvUsd` | `fdv_usd` |
| `Attributes14` | `marketCapUsd` | `market_cap_usd` |
| `Attributes14` | `priceChangePercentage` | `price_change_percentage` |
| `Attributes14` | `volumeUsd` | `volume_usd` |
| `Attributes14` | `reserveInUsd` | `reserve_in_usd` |
| `Attributes16` | `tokenPrices` | `token_prices` |
| `Attributes16` | `marketCapUsd` | `market_cap_usd` |
| `Attributes16` | `h24VolumeUsd` | `h24_volume_usd` |
| `Attributes16` | `h24PriceChangePercentage` | `h24_price_change_percentage` |
| `Attributes16` | `totalReserveInUsd` | `total_reserve_in_usd` |
| `Attributes16` | `lastTradeTimestamp` | `last_trade_timestamp` |
| `Attributes18` | `coingeckoAssetPlatformId` | `coingecko_asset_platform_id` |
| `Attributes3` | `blockNumber` | `block_number` |
| `Attributes3` | `txHash` | `tx_hash` |
| `Attributes3` | `txFromAddress` | `tx_from_address` |
| `Attributes3` | `fromTokenAmount` | `from_token_amount` |
| `Attributes3` | `toTokenAmount` | `to_token_amount` |
| `Attributes3` | `priceFromInCurrencyToken` | `price_from_in_currency_token` |
| `Attributes3` | `priceToInCurrencyToken` | `price_to_in_currency_token` |
| `Attributes3` | `priceFromInUsd` | `price_from_in_usd` |
| `Attributes3` | `priceToInUsd` | `price_to_in_usd` |
| `Attributes3` | `blockTimestamp` | `block_timestamp` |
| `Attributes3` | `volumeInUsd` | `volume_in_usd` |
| `Attributes3` | `fromTokenAddress` | `from_token_address` |
| `Attributes3` | `toTokenAddress` | `to_token_address` |
| `Attributes4` | `ohlcvList` | `ohlcv_list` |
| `Attributes5` | `imageUrl` | `image_url` |
| `Attributes5` | `coingeckoCoinId` | `coingecko_coin_id` |
| `Attributes5` | `discordUrl` | `discord_url` |
| `Attributes5` | `farcasterUrl` | `farcaster_url` |
| `Attributes5` | `zoraUrl` | `zora_url` |
| `Attributes5` | `telegramHandle` | `telegram_handle` |
| `Attributes5` | `twitterHandle` | `twitter_handle` |
| `Attributes5` | `gtScore` | `gt_score` |
| `Attributes5` | `metadataUpdatedAt` | `metadata_updated_at` |
| `Attributes6` | `coingeckoAssetPlatformId` | `coingecko_asset_platform_id` |
| `Attributes7` | `imageUrl` | `image_url` |
| `Attributes7` | `bannerImageUrl` | `banner_image_url` |
| `Attributes7` | `coingeckoCoinId` | `coingecko_coin_id` |
| `Attributes7` | `discordUrl` | `discord_url` |
| `Attributes7` | `farcasterUrl` | `farcaster_url` |
| `Attributes7` | `zoraUrl` | `zora_url` |
| `Attributes7` | `telegramHandle` | `telegram_handle` |
| `Attributes7` | `twitterHandle` | `twitter_handle` |
| `Attributes7` | `gtScore` | `gt_score` |
| `Attributes7` | `gtScoreDetails` | `gt_score_details` |
| `Attributes7` | `gtVerified` | `gt_verified` |
| `Attributes7` | `gtCategoryIds` | `gt_category_ids` |
| `Attributes7` | `mintAuthority` | `mint_authority` |
| `Attributes7` | `freezeAuthority` | `freeze_authority` |
| `Attributes7` | `isHoneypot` | `is_honeypot` |
| `Attributes7` | `developerAddress` | `developer_address` |
| `Attributes7` | `developerHoldingPercentage` | `developer_holding_percentage` |
| `Attributes8` | `baseTokenAddress` | `base_token_address` |
| `Attributes8` | `quoteTokenAddress` | `quote_token_address` |
| `Attributes8` | `quoteTokenAddresses` | `quote_token_addresses` |
| `Attributes8` | `sentimentVotePositivePercentage` | `sentiment_vote_positive_percentage` |
| `Attributes8` | `sentimentVoteNegativePercentage` | `sentiment_vote_negative_percentage` |
| `Attributes8` | `communitySusReport` | `community_sus_report` |
| `Attributes9` | `imageUrl` | `image_url` |
| `Attributes9` | `coingeckoCoinId` | `coingecko_coin_id` |
| `Attributes9` | `totalSupply` | `total_supply` |
| `Attributes9` | `normalizedTotalSupply` | `normalized_total_supply` |
| `Attributes9` | `priceUsd` | `price_usd` |
| `Attributes9` | `fdvUsd` | `fdv_usd` |
| `Attributes9` | `totalReserveInUsd` | `total_reserve_in_usd` |
| `Attributes9` | `volumeUsd` | `volume_usd` |
| `Attributes9` | `marketCapUsd` | `market_cap_usd` |
| `Attributes9` | `lastTradeTimestamp` | `last_trade_timestamp` |
| `Attributes9` | `launchpadDetails` | `launchpad_details` |
| `Base` | `coingeckoCoinId` | `coingecko_coin_id` |
| `CategoriesList` | `categoryId` | `category_id` |
| `Category1` | `marketCap` | `market_cap` |
| `Category1` | `marketCapChange24H` | `market_cap_change_24h` |
| `Category1` | `top3CoinsId` | `top_3_coins_id` |
| `Category1` | `top3Coins` | `top_3_coins` |
| `Category1` | `volume24H` | `volume_24h` |
| `Category1` | `updatedAt` | `updated_at` |
| `Category2` | `top3CoinsImages` | `top_3_coins_images` |
| `Category2` | `marketCap1HChange` | `market_cap_1h_change` |
| `Category2` | `coinsCount` | `coins_count` |
| `Coin` | `apiSymbol` | `api_symbol` |
| `Coin` | `marketCapRank` | `market_cap_rank` |
| `CoinsContractAddress` | `webSlug` | `web_slug` |
| `CoinsContractAddress` | `assetPlatformId` | `asset_platform_id` |
| `CoinsContractAddress` | `detailPlatforms` | `detail_platforms` |
| `CoinsContractAddress` | `blockTimeInMinutes` | `block_time_in_minutes` |
| `CoinsContractAddress` | `hashingAlgorithm` | `hashing_algorithm` |
| `CoinsContractAddress` | `previewListing` | `preview_listing` |
| `CoinsContractAddress` | `publicNotice` | `public_notice` |
| `CoinsContractAddress` | `additionalNotices` | `additional_notices` |
| `CoinsContractAddress` | `hasSupplyBreakdown` | `has_supply_breakdown` |
| `CoinsContractAddress` | `countryOrigin` | `country_origin` |
| `CoinsContractAddress` | `genesisDate` | `genesis_date` |
| `CoinsContractAddress` | `contractAddress` | `contract_address` |
| `CoinsContractAddress` | `sentimentVotesUpPercentage` | `sentiment_votes_up_percentage` |
| `CoinsContractAddress` | `sentimentVotesDownPercentage` | `sentiment_votes_down_percentage` |
| `CoinsContractAddress` | `watchlistPortfolioUsers` | `watchlist_portfolio_users` |
| `CoinsContractAddress` | `marketCapRank` | `market_cap_rank` |
| `CoinsContractAddress` | `marketCapRankWithRehypothecated` | `market_cap_rank_with_rehypothecated` |
| `CoinsContractAddress` | `marketData` | `market_data` |
| `CoinsContractAddress` | `communityData` | `community_data` |
| `CoinsContractAddress` | `developerData` | `developer_data` |
| `CoinsContractAddress` | `statusUpdates` | `status_updates` |
| `CoinsContractAddress` | `lastUpdated` | `last_updated` |
| `CoinsId` | `webSlug` | `web_slug` |
| `CoinsId` | `assetPlatformId` | `asset_platform_id` |
| `CoinsId` | `detailPlatforms` | `detail_platforms` |
| `CoinsId` | `blockTimeInMinutes` | `block_time_in_minutes` |
| `CoinsId` | `hashingAlgorithm` | `hashing_algorithm` |
| `CoinsId` | `categoriesDetails` | `categories_details` |
| `CoinsId` | `previewListing` | `preview_listing` |
| `CoinsId` | `publicNotice` | `public_notice` |
| `CoinsId` | `additionalNotices` | `additional_notices` |
| `CoinsId` | `hasSupplyBreakdown` | `has_supply_breakdown` |
| `CoinsId` | `countryOrigin` | `country_origin` |
| `CoinsId` | `genesisDate` | `genesis_date` |
| `CoinsId` | `sentimentVotesUpPercentage` | `sentiment_votes_up_percentage` |
| `CoinsId` | `sentimentVotesDownPercentage` | `sentiment_votes_down_percentage` |
| `CoinsId` | `icoData` | `ico_data` |
| `CoinsId` | `watchlistPortfolioUsers` | `watchlist_portfolio_users` |
| `CoinsId` | `marketCapRank` | `market_cap_rank` |
| `CoinsId` | `marketCapRankWithRehypothecated` | `market_cap_rank_with_rehypothecated` |
| `CoinsId` | `marketData` | `market_data` |
| `CoinsId` | `communityData` | `community_data` |
| `CoinsId` | `developerData` | `developer_data` |
| `CoinsId` | `statusUpdates` | `status_updates` |
| `CoinsId` | `lastUpdated` | `last_updated` |
| `CoinsIdHistory` | `marketData` | `market_data` |
| `CoinsIdHistory` | `communityData` | `community_data` |
| `CoinsIdHistory` | `developerData` | `developer_data` |
| `CoinsIdHistory` | `publicInterestStats` | `public_interest_stats` |
| `CoinsMarket` | `currentPrice` | `current_price` |
| `CoinsMarket` | `marketCap` | `market_cap` |
| `CoinsMarket` | `marketCapRank` | `market_cap_rank` |
| `CoinsMarket` | `fullyDilutedValuation` | `fully_diluted_valuation` |
| `CoinsMarket` | `totalVolume` | `total_volume` |
| `CoinsMarket` | `high24H` | `high_24h` |
| `CoinsMarket` | `low24H` | `low_24h` |
| `CoinsMarket` | `priceChange24H` | `price_change_24h` |
| `CoinsMarket` | `priceChangePercentage24H` | `price_change_percentage_24h` |
| `CoinsMarket` | `marketCapChange24H` | `market_cap_change_24h` |
| `CoinsMarket` | `marketCapChangePercentage24H` | `market_cap_change_percentage_24h` |
| `CoinsMarket` | `circulatingSupply` | `circulating_supply` |
| `CoinsMarket` | `totalSupply` | `total_supply` |
| `CoinsMarket` | `maxSupply` | `max_supply` |
| `CoinsMarket` | `athChangePercentage` | `ath_change_percentage` |
| `CoinsMarket` | `athDate` | `ath_date` |
| `CoinsMarket` | `atlChangePercentage` | `atl_change_percentage` |
| `CoinsMarket` | `atlDate` | `atl_date` |
| `CoinsMarket` | `lastUpdated` | `last_updated` |
| `CoinsMarket` | `marketCapRankWithRehypothecated` | `market_cap_rank_with_rehypothecated` |
| `CoinsMarket` | `sparklineIn7D` | `sparkline_in_7d` |
| `CoinsMarket` | `priceChangePercentage1HInCurrency` | `price_change_percentage_1h_in_currency` |
| `CoinsMarket` | `priceChangePercentage24HInCurrency` | `price_change_percentage_24h_in_currency` |
| `CoinsMarket` | `priceChangePercentage7DInCurrency` | `price_change_percentage_7d_in_currency` |
| `CoinsMarket` | `priceChangePercentage14DInCurrency` | `price_change_percentage_14d_in_currency` |
| `CoinsMarket` | `priceChangePercentage30DInCurrency` | `price_change_percentage_30d_in_currency` |
| `CoinsMarket` | `priceChangePercentage200DInCurrency` | `price_change_percentage_200d_in_currency` |
| `CoinsMarket` | `priceChangePercentage1YInCurrency` | `price_change_percentage_1y_in_currency` |
| `CoinsMarketChart` | `marketCaps` | `market_caps` |
| `CoinsMarketChart` | `totalVolumes` | `total_volumes` |
| `CommunityData` | `facebookLikes` | `facebook_likes` |
| `CommunityData` | `redditAveragePosts48H` | `reddit_average_posts_48h` |
| `CommunityData` | `redditAverageComments48H` | `reddit_average_comments_48h` |
| `CommunityData` | `redditSubscribers` | `reddit_subscribers` |
| `CommunityData` | `redditAccountsActive48H` | `reddit_accounts_active_48h` |
| `CommunityData1` | `facebookLikes` | `facebook_likes` |
| `CommunityData1` | `redditAveragePosts48H` | `reddit_average_posts_48h` |
| `CommunityData1` | `redditAverageComments48H` | `reddit_average_comments_48h` |
| `CommunityData1` | `redditSubscribers` | `reddit_subscribers` |
| `CommunityData1` | `redditAccountsActive48H` | `reddit_accounts_active_48h` |
| `CommunityData1` | `telegramChannelUserCount` | `telegram_channel_user_count` |
| `Company` | `totalHoldings` | `total_holdings` |
| `Company` | `totalEntryValueUsd` | `total_entry_value_usd` |
| `Company` | `totalCurrentValueUsd` | `total_current_value_usd` |
| `Company` | `percentageOfTotalSupply` | `percentage_of_total_supply` |
| `CompanyTreasury` | `totalHoldings` | `total_holdings` |
| `CompanyTreasury` | `totalValueUsd` | `total_value_usd` |
| `CompanyTreasury` | `marketCapDominance` | `market_cap_dominance` |
| `Data` | `activeCryptocurrencies` | `active_cryptocurrencies` |
| `Data` | `upcomingIcos` | `upcoming_icos` |
| `Data` | `ongoingIcos` | `ongoing_icos` |
| `Data` | `endedIcos` | `ended_icos` |
| `Data` | `totalMarketCap` | `total_market_cap` |
| `Data` | `totalVolume` | `total_volume` |
| `Data` | `marketCapPercentage` | `market_cap_percentage` |
| `Data` | `marketCapChangePercentage24HUsd` | `market_cap_change_percentage_24h_usd` |
| `Data` | `volumeChangePercentage24HUsd` | `volume_change_percentage_24h_usd` |
| `Data` | `updatedAt` | `updated_at` |
| `Data1` | `defiMarketCap` | `defi_market_cap` |
| `Data1` | `ethMarketCap` | `eth_market_cap` |
| `Data1` | `defiToEthRatio` | `defi_to_eth_ratio` |
| `Data1` | `tradingVolume24H` | `trading_volume_24h` |
| `Data1` | `defiDominance` | `defi_dominance` |
| `Data1` | `topCoinName` | `top_coin_name` |
| `Data1` | `topCoinDefiDominance` | `top_coin_defi_dominance` |
| `Data2` | `priceBtc` | `price_btc` |
| `Data2` | `priceChangePercentage24H` | `price_change_percentage_24h` |
| `Data2` | `marketCap` | `market_cap` |
| `Data2` | `marketCapBtc` | `market_cap_btc` |
| `Data2` | `totalVolume` | `total_volume` |
| `Data2` | `totalVolumeBtc` | `total_volume_btc` |
| `Data3` | `floorPrice` | `floor_price` |
| `Data3` | `floorPriceInUsd24HPercentageChange` | `floor_price_in_usd_24h_percentage_change` |
| `Data3` | `h24Volume` | `h24_volume` |
| `Data3` | `h24AverageSalePrice` | `h24_average_sale_price` |
| `Data4` | `marketCap` | `market_cap` |
| `Data4` | `marketCapBtc` | `market_cap_btc` |
| `Data4` | `totalVolume` | `total_volume` |
| `Data4` | `totalVolumeBtc` | `total_volume_btc` |
| `Data4` | `marketCapChangePercentage24H` | `market_cap_change_percentage_24h` |
| `DerivativesExchange` | `openInterestBtc` | `open_interest_btc` |
| `DerivativesExchange` | `tradeVolume24HBtc` | `trade_volume_24h_btc` |
| `DerivativesExchange` | `numberOfPerpetualPairs` | `number_of_perpetual_pairs` |
| `DerivativesExchange` | `numberOfFuturesPairs` | `number_of_futures_pairs` |
| `DerivativesExchange` | `yearEstablished` | `year_established` |
| `DerivativesExchangesId` | `openInterestBtc` | `open_interest_btc` |
| `DerivativesExchangesId` | `tradeVolume24HBtc` | `trade_volume_24h_btc` |
| `DerivativesExchangesId` | `numberOfPerpetualPairs` | `number_of_perpetual_pairs` |
| `DerivativesExchangesId` | `numberOfFuturesPairs` | `number_of_futures_pairs` |
| `DerivativesExchangesId` | `yearEstablished` | `year_established` |
| `DerivativesTicker` | `indexId` | `index_id` |
| `DerivativesTicker` | `pricePercentageChange24H` | `price_percentage_change_24h` |
| `DerivativesTicker` | `contractType` | `contract_type` |
| `DerivativesTicker` | `fundingRate` | `funding_rate` |
| `DerivativesTicker` | `openInterest` | `open_interest` |
| `DerivativesTicker` | `volume24H` | `volume_24h` |
| `DerivativesTicker` | `lastTradedAt` | `last_traded_at` |
| `DerivativesTicker` | `expiredAt` | `expired_at` |
| `DetailPlatforms` | `decimalPlace` | `decimal_place` |
| `DetailPlatforms` | `contractAddress` | `contract_address` |
| `DetailPlatforms` | `geckoterminalUrl` | `geckoterminal_url` |
| `DetailPlatforms1` | `decimalPlace` | `decimal_place` |
| `DetailPlatforms1` | `contractAddress` | `contract_address` |
| `DeveloperData` | `totalIssues` | `total_issues` |
| `DeveloperData` | `closedIssues` | `closed_issues` |
| `DeveloperData` | `pullRequestsMerged` | `pull_requests_merged` |
| `DeveloperData` | `pullRequestContributors` | `pull_request_contributors` |
| `DeveloperData` | `codeAdditionsDeletions4Weeks` | `code_additions_deletions_4_weeks` |
| `DeveloperData` | `commitCount4Weeks` | `commit_count_4_weeks` |
| `DeveloperData1` | `totalIssues` | `total_issues` |
| `DeveloperData1` | `closedIssues` | `closed_issues` |
| `DeveloperData1` | `pullRequestsMerged` | `pull_requests_merged` |
| `DeveloperData1` | `pullRequestContributors` | `pull_request_contributors` |
| `DeveloperData1` | `codeAdditionsDeletions4Weeks` | `code_additions_deletions_4_weeks` |
| `DeveloperData1` | `commitCount4Weeks` | `commit_count_4_weeks` |
| `DeveloperData1` | `last4WeeksCommitActivitySeries` | `last_4_weeks_commit_activity_series` |
| `Exchange` | `marketType` | `market_type` |
| `Exchange1` | `yearEstablished` | `year_established` |
| `Exchange1` | `hasTradingIncentive` | `has_trading_incentive` |
| `Exchange1` | `trustScore` | `trust_score` |
| `Exchange1` | `trustScoreRank` | `trust_score_rank` |
| `Exchange1` | `tradeVolume24HBtc` | `trade_volume_24h_btc` |
| `ExchangesId` | `yearEstablished` | `year_established` |
| `ExchangesId` | `facebookUrl` | `facebook_url` |
| `ExchangesId` | `redditUrl` | `reddit_url` |
| `ExchangesId` | `telegramUrl` | `telegram_url` |
| `ExchangesId` | `slackUrl` | `slack_url` |
| `ExchangesId` | `otherUrl1` | `other_url_1` |
| `ExchangesId` | `otherUrl2` | `other_url_2` |
| `ExchangesId` | `twitterHandle` | `twitter_handle` |
| `ExchangesId` | `hasTradingIncentive` | `has_trading_incentive` |
| `ExchangesId` | `publicNotice` | `public_notice` |
| `ExchangesId` | `alertNotice` | `alert_notice` |
| `ExchangesId` | `trustScore` | `trust_score` |
| `ExchangesId` | `trustScoreRank` | `trust_score_rank` |
| `ExchangesId` | `tradeVolume24HBtc` | `trade_volume_24h_btc` |
| `ExchangesId` | `statusUpdates` | `status_updates` |
| `FloorPrice` | `nativeCurrency` | `native_currency` |
| `FloorPrice14DPercentageChange` | `nativeCurrency` | `native_currency` |
| `FloorPrice1YPercentageChange` | `nativeCurrency` | `native_currency` |
| `FloorPrice24HPercentageChange` | `nativeCurrency` | `native_currency` |
| `FloorPrice30DPercentageChange` | `nativeCurrency` | `native_currency` |
| `FloorPrice60DPercentageChange` | `nativeCurrency` | `native_currency` |
| `FloorPrice7DPercentageChange` | `nativeCurrency` | `native_currency` |
| `Government` | `totalHoldings` | `total_holdings` |
| `Government` | `totalEntryValueUsd` | `total_entry_value_usd` |
| `Government` | `totalCurrentValueUsd` | `total_current_value_usd` |
| `Government` | `percentageOfTotalSupply` | `percentage_of_total_supply` |
| `GovernmentTreasury` | `totalHoldings` | `total_holdings` |
| `GovernmentTreasury` | `totalValueUsd` | `total_value_usd` |
| `GovernmentTreasury` | `marketCapDominance` | `market_cap_dominance` |
| `Holders` | `distributionPercentage` | `distribution_percentage` |
| `Holders` | `lastUpdated` | `last_updated` |
| `Holding` | `coinId` | `coin_id` |
| `Holding` | `percentageOfTotalSupply` | `percentage_of_total_supply` |
| `Holding` | `amountPerShare` | `amount_per_share` |
| `Holding` | `entityValueUsdPercentage` | `entity_value_usd_percentage` |
| `Holding` | `currentValueUsd` | `current_value_usd` |
| `Holding` | `totalEntryValueUsd` | `total_entry_value_usd` |
| `Holding` | `averageEntryValueUsd` | `average_entry_value_usd` |
| `Holding` | `unrealizedPnl` | `unrealized_pnl` |
| `Holding` | `holdingAmountChange` | `holding_amount_change` |
| `Holding` | `holdingChangePercentage` | `holding_change_percentage` |
| `HoldingAmountChange` | `D7` | `7d` |
| `HoldingAmountChange` | `D14` | `14d` |
| `HoldingAmountChange` | `D30` | `30d` |
| `HoldingAmountChange` | `D90` | `90d` |
| `HoldingAmountChange` | `Y1` | `1y` |
| `HoldingChangePercentage` | `D7` | `7d` |
| `HoldingChangePercentage` | `D14` | `14d` |
| `HoldingChangePercentage` | `D30` | `30d` |
| `HoldingChangePercentage` | `D90` | `90d` |
| `HoldingChangePercentage` | `Y1` | `1y` |
| `IcoData` | `icoStartDate` | `ico_start_date` |
| `IcoData` | `icoEndDate` | `ico_end_date` |
| `IcoData` | `shortDesc` | `short_desc` |
| `IcoData` | `softcapCurrency` | `softcap_currency` |
| `IcoData` | `hardcapCurrency` | `hardcap_currency` |
| `IcoData` | `totalRaisedCurrency` | `total_raised_currency` |
| `IcoData` | `softcapAmount` | `softcap_amount` |
| `IcoData` | `hardcapAmount` | `hardcap_amount` |
| `IcoData` | `totalRaised` | `total_raised` |
| `IcoData` | `quotePreSaleCurrency` | `quote_pre_sale_currency` |
| `IcoData` | `basePreSaleAmount` | `base_pre_sale_amount` |
| `IcoData` | `quotePreSaleAmount` | `quote_pre_sale_amount` |
| `IcoData` | `quotePublicSaleCurrency` | `quote_public_sale_currency` |
| `IcoData` | `basePublicSaleAmount` | `base_public_sale_amount` |
| `IcoData` | `quotePublicSaleAmount` | `quote_public_sale_amount` |
| `IcoData` | `acceptingCurrencies` | `accepting_currencies` |
| `IcoData` | `countryOrigin` | `country_origin` |
| `IcoData` | `preSaleStartDate` | `pre_sale_start_date` |
| `IcoData` | `preSaleEndDate` | `pre_sale_end_date` |
| `IcoData` | `whitelistUrl` | `whitelist_url` |
| `IcoData` | `whitelistStartDate` | `whitelist_start_date` |
| `IcoData` | `whitelistEndDate` | `whitelist_end_date` |
| `IcoData` | `bountyDetailUrl` | `bounty_detail_url` |
| `IcoData` | `amountForSale` | `amount_for_sale` |
| `IcoData` | `kycRequired` | `kyc_required` |
| `IcoData` | `whitelistAvailable` | `whitelist_available` |
| `IcoData` | `preSaleAvailable` | `pre_sale_available` |
| `IcoData` | `preSaleEnded` | `pre_sale_ended` |
| `Image5` | `small2X` | `small_2x` |
| `Item` | `coinId` | `coin_id` |
| `Item` | `marketCapRank` | `market_cap_rank` |
| `Item` | `priceBtc` | `price_btc` |
| `LaunchpadDetails` | `graduationPercentage` | `graduation_percentage` |
| `LaunchpadDetails` | `completedAt` | `completed_at` |
| `LaunchpadDetails` | `migratedDestinationPoolAddress` | `migrated_destination_pool_address` |
| `Links` | `blockchainSite` | `blockchain_site` |
| `Links` | `officialForumUrl` | `official_forum_url` |
| `Links` | `chatUrl` | `chat_url` |
| `Links` | `announcementUrl` | `announcement_url` |
| `Links` | `snapshotUrl` | `snapshot_url` |
| `Links` | `twitterScreenName` | `twitter_screen_name` |
| `Links` | `facebookUsername` | `facebook_username` |
| `Links` | `bitcointalkThreadIdentifier` | `bitcointalk_thread_identifier` |
| `Links` | `telegramChannelIdentifier` | `telegram_channel_identifier` |
| `Links` | `subredditUrl` | `subreddit_url` |
| `Links` | `reposUrl` | `repos_url` |
| `Market` | `hasTradingIncentive` | `has_trading_incentive` |
| `Market1` | `hasTradingIncentive` | `has_trading_incentive` |
| `Market3` | `hasTradingIncentive` | `has_trading_incentive` |
| `MarketCap` | `nativeCurrency` | `native_currency` |
| `MarketCap24HPercentageChange` | `nativeCurrency` | `native_currency` |
| `MarketData` | `currentPrice` | `current_price` |
| `MarketData` | `marketCap` | `market_cap` |
| `MarketData` | `totalVolume` | `total_volume` |
| `MarketData1` | `currentPrice` | `current_price` |
| `MarketData1` | `totalValueLocked` | `total_value_locked` |
| `MarketData1` | `mcapToTvlRatio` | `mcap_to_tvl_ratio` |
| `MarketData1` | `fdvToTvlRatio` | `fdv_to_tvl_ratio` |
| `MarketData1` | `athChangePercentage` | `ath_change_percentage` |
| `MarketData1` | `athDate` | `ath_date` |
| `MarketData1` | `atlChangePercentage` | `atl_change_percentage` |
| `MarketData1` | `atlDate` | `atl_date` |
| `MarketData1` | `marketCap` | `market_cap` |
| `MarketData1` | `fullyDilutedValuation` | `fully_diluted_valuation` |
| `MarketData1` | `marketCapFdvRatio` | `market_cap_fdv_ratio` |
| `MarketData1` | `marketCapRank` | `market_cap_rank` |
| `MarketData1` | `outstandingTokenValueUsd` | `outstanding_token_value_usd` |
| `MarketData1` | `marketCapRankWithRehypothecated` | `market_cap_rank_with_rehypothecated` |
| `MarketData1` | `totalVolume` | `total_volume` |
| `MarketData1` | `high24H` | `high_24h` |
| `MarketData1` | `low24H` | `low_24h` |
| `MarketData1` | `priceChange24H` | `price_change_24h` |
| `MarketData1` | `priceChangePercentage24H` | `price_change_percentage_24h` |
| `MarketData1` | `priceChangePercentage7D` | `price_change_percentage_7d` |
| `MarketData1` | `priceChangePercentage14D` | `price_change_percentage_14d` |
| `MarketData1` | `priceChangePercentage30D` | `price_change_percentage_30d` |
| `MarketData1` | `priceChangePercentage60D` | `price_change_percentage_60d` |
| `MarketData1` | `priceChangePercentage200D` | `price_change_percentage_200d` |
| `MarketData1` | `priceChangePercentage1Y` | `price_change_percentage_1y` |
| `MarketData1` | `marketCapChange24H` | `market_cap_change_24h` |
| `MarketData1` | `marketCapChangePercentage24H` | `market_cap_change_percentage_24h` |
| `MarketData1` | `priceChange24HInCurrency` | `price_change_24h_in_currency` |
| `MarketData1` | `priceChangePercentage1HInCurrency` | `price_change_percentage_1h_in_currency` |
| `MarketData1` | `priceChangePercentage24HInCurrency` | `price_change_percentage_24h_in_currency` |
| `MarketData1` | `priceChangePercentage7DInCurrency` | `price_change_percentage_7d_in_currency` |
| `MarketData1` | `priceChangePercentage14DInCurrency` | `price_change_percentage_14d_in_currency` |
| `MarketData1` | `priceChangePercentage30DInCurrency` | `price_change_percentage_30d_in_currency` |
| `MarketData1` | `priceChangePercentage60DInCurrency` | `price_change_percentage_60d_in_currency` |
| `MarketData1` | `priceChangePercentage200DInCurrency` | `price_change_percentage_200d_in_currency` |
| `MarketData1` | `priceChangePercentage1YInCurrency` | `price_change_percentage_1y_in_currency` |
| `MarketData1` | `marketCapChange24HInCurrency` | `market_cap_change_24h_in_currency` |
| `MarketData1` | `marketCapChangePercentage24HInCurrency` | `market_cap_change_percentage_24h_in_currency` |
| `MarketData1` | `totalSupply` | `total_supply` |
| `MarketData1` | `maxSupply` | `max_supply` |
| `MarketData1` | `maxSupplyInfinite` | `max_supply_infinite` |
| `MarketData1` | `circulatingSupply` | `circulating_supply` |
| `MarketData1` | `outstandingSupply` | `outstanding_supply` |
| `MarketData1` | `lastUpdated` | `last_updated` |
| `MarketData1` | `sparkline7D` | `sparkline_7d` |
| `NftData` | `webSlug` | `web_slug` |
| `NftData` | `contractAddress` | `contract_address` |
| `NftData` | `assetPlatformId` | `asset_platform_id` |
| `NftData` | `bannerImage` | `banner_image` |
| `NftData` | `nativeCurrency` | `native_currency` |
| `NftData` | `nativeCurrencySymbol` | `native_currency_symbol` |
| `NftData` | `marketCapRank` | `market_cap_rank` |
| `NftData` | `floorPrice` | `floor_price` |
| `NftData` | `marketCap` | `market_cap` |
| `NftData` | `volume24H` | `volume_24h` |
| `NftData` | `floorPriceInUsd24HPercentageChange` | `floor_price_in_usd_24h_percentage_change` |
| `NftData` | `floorPrice24HPercentageChange` | `floor_price_24h_percentage_change` |
| `NftData` | `marketCap24HPercentageChange` | `market_cap_24h_percentage_change` |
| `NftData` | `volume24HPercentageChange` | `volume_24h_percentage_change` |
| `NftData` | `numberOfUniqueAddresses` | `number_of_unique_addresses` |
| `NftData` | `numberOfUniqueAddresses24HPercentageChange` | `number_of_unique_addresses_24h_percentage_change` |
| `NftData` | `volumeInUsd24HPercentageChange` | `volume_in_usd_24h_percentage_change` |
| `NftData` | `totalSupply` | `total_supply` |
| `NftData` | `oneDaySales` | `one_day_sales` |
| `NftData` | `oneDaySales24HPercentageChange` | `one_day_sales_24h_percentage_change` |
| `NftData` | `oneDayAverageSalePrice` | `one_day_average_sale_price` |
| `NftData` | `oneDayAverageSalePrice24HPercentageChange` | `one_day_average_sale_price_24h_percentage_change` |
| `NftData` | `floorPrice7DPercentageChange` | `floor_price_7d_percentage_change` |
| `NftData` | `floorPrice14DPercentageChange` | `floor_price_14d_percentage_change` |
| `NftData` | `floorPrice30DPercentageChange` | `floor_price_30d_percentage_change` |
| `NftData` | `floorPrice60DPercentageChange` | `floor_price_60d_percentage_change` |
| `NftData` | `floorPrice1YPercentageChange` | `floor_price_1y_percentage_change` |
| `NftData` | `userFavoritesCount` | `user_favorites_count` |
| `NftData` | `athChangePercentage` | `ath_change_percentage` |
| `NftData` | `athDate` | `ath_date` |
| `NfTsList` | `contractAddress` | `contract_address` |
| `NfTsList` | `assetPlatformId` | `asset_platform_id` |
| `Nft1` | `nftContractId` | `nft_contract_id` |
| `Nft1` | `nativeCurrencySymbol` | `native_currency_symbol` |
| `Nft1` | `floorPriceInNativeCurrency` | `floor_price_in_native_currency` |
| `Nft1` | `floorPrice24HPercentageChange` | `floor_price_24h_percentage_change` |
| `PingServer` | `geckoSays` | `gecko_says` |
| `PublicInterestStats` | `alexaRank` | `alexa_rank` |
| `PublicInterestStats` | `bingMatches` | `bing_matches` |
| `PublicTreasuryEntity` | `websiteUrl` | `website_url` |
| `PublicTreasuryEntity` | `twitterScreenName` | `twitter_screen_name` |
| `PublicTreasuryEntity` | `totalTreasuryValueUsd` | `total_treasury_value_usd` |
| `PublicTreasuryEntity` | `unrealizedPnl` | `unrealized_pnl` |
| `PublicTreasuryEntity` | `mNav` | `m_nav` |
| `PublicTreasuryEntity` | `totalAssetValuePerShareUsd` | `total_asset_value_per_share_usd` |
| `PublicTreasuryEntityChart` | `holdingValueInUsd` | `holding_value_in_usd` |
| `Quote` | `coingeckoCoinId` | `coingecko_coin_id` |
| `Relationships` | `baseToken` | `base_token` |
| `Relationships` | `quoteToken` | `quote_token` |
| `Relationships3` | `topPools` | `top_pools` |
| `Relationships4` | `baseToken` | `base_token` |
| `Relationships4` | `quoteToken` | `quote_token` |
| `Relationships6` | `baseToken` | `base_token` |
| `Relationships6` | `quoteToken` | `quote_token` |
| `SimplePrice` | `usdMarketCap` | `usd_market_cap` |
| `SimplePrice` | `usd24HVol` | `usd_24h_vol` |
| `SimplePrice` | `usd24HChange` | `usd_24h_change` |
| `SimplePrice` | `lastUpdatedAt` | `last_updated_at` |
| `StatusUpdate` | `createdAt` | `created_at` |
| `StatusUpdate` | `userTitle` | `user_title` |
| `StatusUpdate2` | `createdAt` | `created_at` |
| `StatusUpdate2` | `userTitle` | `user_title` |
| `Ticker` | `costToMoveUpUsd` | `cost_to_move_up_usd` |
| `Ticker` | `costToMoveDownUsd` | `cost_to_move_down_usd` |
| `Ticker` | `convertedLast` | `converted_last` |
| `Ticker` | `convertedVolume` | `converted_volume` |
| `Ticker` | `trustScore` | `trust_score` |
| `Ticker` | `bidAskSpreadPercentage` | `bid_ask_spread_percentage` |
| `Ticker` | `lastTradedAt` | `last_traded_at` |
| `Ticker` | `lastFetchAt` | `last_fetch_at` |
| `Ticker` | `isAnomaly` | `is_anomaly` |
| `Ticker` | `isStale` | `is_stale` |
| `Ticker` | `tradeUrl` | `trade_url` |
| `Ticker` | `tokenInfoUrl` | `token_info_url` |
| `Ticker` | `coinId` | `coin_id` |
| `Ticker` | `targetCoinId` | `target_coin_id` |
| `Ticker` | `coinMcapUsd` | `coin_mcap_usd` |
| `Ticker1` | `convertedLast` | `converted_last` |
| `Ticker1` | `convertedVolume` | `converted_volume` |
| `Ticker1` | `trustScore` | `trust_score` |
| `Ticker1` | `bidAskSpreadPercentage` | `bid_ask_spread_percentage` |
| `Ticker1` | `lastTradedAt` | `last_traded_at` |
| `Ticker1` | `lastFetchAt` | `last_fetch_at` |
| `Ticker1` | `isAnomaly` | `is_anomaly` |
| `Ticker1` | `isStale` | `is_stale` |
| `Ticker1` | `tradeUrl` | `trade_url` |
| `Ticker1` | `tokenInfoUrl` | `token_info_url` |
| `Ticker1` | `coinId` | `coin_id` |
| `Ticker1` | `targetCoinId` | `target_coin_id` |
| `Ticker1` | `coinMcapUsd` | `coin_mcap_usd` |
| `Ticker3` | `convertedLast` | `converted_last` |
| `Ticker3` | `convertedVolume` | `converted_volume` |
| `Ticker3` | `trustScore` | `trust_score` |
| `Ticker3` | `bidAskSpreadPercentage` | `bid_ask_spread_percentage` |
| `Ticker3` | `lastTradedAt` | `last_traded_at` |
| `Ticker3` | `lastFetchAt` | `last_fetch_at` |
| `Ticker3` | `isAnomaly` | `is_anomaly` |
| `Ticker3` | `isStale` | `is_stale` |
| `Ticker3` | `tradeUrl` | `trade_url` |
| `Ticker3` | `tokenInfoUrl` | `token_info_url` |
| `Ticker3` | `coinId` | `coin_id` |
| `Ticker3` | `targetCoinId` | `target_coin_id` |
| `Ticker3` | `coinMcapUsd` | `coin_mcap_usd` |
| `Ticker4` | `coinId` | `coin_id` |
| `Ticker4` | `targetCoinId` | `target_coin_id` |
| `Ticker4` | `tradeUrl` | `trade_url` |
| `Ticker4` | `contractType` | `contract_type` |
| `Ticker4` | `h24PercentageChange` | `h24_percentage_change` |
| `Ticker4` | `indexBasisPercentage` | `index_basis_percentage` |
| `Ticker4` | `bidAskSpread` | `bid_ask_spread` |
| `Ticker4` | `fundingRate` | `funding_rate` |
| `Ticker4` | `openInterestUsd` | `open_interest_usd` |
| `Ticker4` | `h24Volume` | `h24_volume` |
| `Ticker4` | `convertedVolume` | `converted_volume` |
| `Ticker4` | `convertedLast` | `converted_last` |
| `Ticker4` | `lastTraded` | `last_traded` |
| `Ticker4` | `expiredAt` | `expired_at` |
| `Token` | `logoUri` | `logoURI` |
| `TokenLists` | `logoUri` | `logoURI` |
| `Transaction` | `sourceUrl` | `source_url` |
| `Transaction` | `coinId` | `coin_id` |
| `Transaction` | `holdingNetChange` | `holding_net_change` |
| `Transaction` | `transactionValueUsd` | `transaction_value_usd` |
| `Transaction` | `holdingBalance` | `holding_balance` |
| `Transaction` | `averageEntryValueUsd` | `average_entry_value_usd` |
| `Volume24H` | `nativeCurrency` | `native_currency` |
| `Volume24HPercentageChange` | `nativeCurrency` | `native_currency` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **61 of the 61 operations** require a credential and **0** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `headerAuth` | `headerAuth` | header `x-cg-demo-api-key: <key>` |
| `queryAuth` | `queryAuth` | query `x_cg_demo_api_key=<key>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |

**Server groups.** 1 logical server; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `production` | `https://api.coingecko.com/api/v3` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("coin-gecko-demo-api")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Nothing else — no credential this SDK sends reaches for a further global. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

