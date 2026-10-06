# Reference

> Source: [CoinGeckoClient](src/client.ts)

## Coins

> Source: [Coins](src/resources/coins.ts)

<details>
<summary><code>coinsCategories(request: Coins.CoinsCategoriesRequest, options?: RequestOptions): ApiPromise&lt;Category1[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the coins categories with market data (market cap, volume, etc.) on CoinGecko

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsCategories();
  // TODO: Handle 'response' of type Category1[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.coinsCategories().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Category1[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order?</code> | <code>[Order2](src/models/order2.ts)</code> | Sort results by field. <br>Default: `market_cap_desc` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.coinsCategories(request)`

- **OnSuccess**: <code>[Category1](src/models/category1.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.coinsCategories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Category1[], ApiError&gt;</code>, with `result.value` of type <code>[Category1](src/models/category1.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsCategoriesList(options?: RequestOptions): ApiPromise&lt;CategoriesList[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported coins categories on CoinGecko

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsCategoriesList();
  // TODO: Handle 'response' of type CategoriesList[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.coinsCategoriesList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CategoriesList[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.coinsCategoriesList()`

- **OnSuccess**: <code>[CategoriesList](src/models/categories-list.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.coinsCategoriesList().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CategoriesList[], ApiError&gt;</code>, with `result.value` of type <code>[CategoriesList](src/models/categories-list.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsContractAddress(request: Coins.CoinsContractAddressRequest, options?: RequestOptions): ApiPromise&lt;CoinsContractAddress, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on an asset platform and a particular token contract address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsContractAddress({
    id: "some example string",
    contractAddress: "some example string",
  });
  // TODO: Handle 'response' of type CoinsContractAddress
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.coinsContractAddress({
  id: "some example string",
  contractAddress: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoinsContractAddress
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Asset platform ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list).<br>**Default**: "ethereum" |
| <code>contractAddress?</code> | <code>string</code> | The contract address of token.<br>**Default**: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.coinsContractAddress(request)`

- **OnSuccess**: <code>[CoinsContractAddress](src/models/coins-contract-address.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.coinsContractAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoinsContractAddress, ApiError&gt;</code>, with `result.value` of type <code>[CoinsContractAddress](src/models/coins-contract-address.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsId(request: Coins.CoinsIdRequest, options?: RequestOptions): ApiPromise&lt;CoinsId, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on a particular coin ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsId({ id: "bitcoin" });
  // TODO: Handle 'response' of type CoinsId
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.coinsId({ id: "bitcoin" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoinsId
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list)<br>**Default**: "bitcoin" |
| <code>localization?</code> | <code>boolean</code> | Include all localized languages in the response. <br>Default: true |
| <code>tickers?</code> | <code>boolean</code> | Include tickers data. <br>Default: true |
| <code>marketData?</code> | <code>boolean</code> | Include market data. <br>Default: true |
| <code>communityData?</code> | <code>boolean</code> | Include community data. <br>Default: true |
| <code>developerData?</code> | <code>boolean</code> | Include developer data. <br>Default: true |
| <code>sparkline?</code> | <code>boolean</code> | Include sparkline 7-day data. <br>Default: false |
| <code>includeCategoriesDetails?</code> | <code>boolean</code> | Include categories details. <br>Default: false |
| <code>dexPairFormat?</code> | <code>[DexPairFormat](src/models/dex-pair-format.ts)</code> | Set to `symbol` to display DEX pair base and target as symbols. <br>Default: `contract_address` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.coinsId(request)`

- **OnSuccess**: <code>[CoinsId](src/models/coins-id.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.coinsId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoinsId, ApiError&gt;</code>, with `result.value` of type <code>[CoinsId](src/models/coins-id.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsIdHistory(request: Coins.CoinsIdHistoryRequest, options?: RequestOptions): ApiPromise&lt;CoinsIdHistory, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the historical data (price, market cap, 24hrs volume, etc.) at a given date for a coin based on a particular coin ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsIdHistory({
    id: "some example string",
    date: "some example string",
  });
  // TODO: Handle 'response' of type CoinsIdHistory
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.coinsIdHistory({
  id: "some example string",
  date: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoinsIdHistory
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list).<br>**Default**: "bitcoin" |
| <code>date?</code> | <code>string</code> | The date of data snapshot. <br>Format: `dd-mm-yyyy`<br>**Default**: "30-12-2025" |
| <code>localization?</code> | <code>boolean</code> | Include all the localized languages in response. <br>Default: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.coinsIdHistory(request)`

- **OnSuccess**: <code>[CoinsIdHistory](src/models/coins-id-history.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.coinsIdHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoinsIdHistory, ApiError&gt;</code>, with `result.value` of type <code>[CoinsIdHistory](src/models/coins-id-history.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsIdMarketChart(request: Coins.CoinsIdMarketChartRequest, options?: RequestOptions): ApiPromise&lt;CoinsMarketChart, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsIdMarketChart({
    id: "some example string",
    vsCurrency: "some example string",
    days: "some example string",
  });
  // TODO: Handle 'response' of type CoinsMarketChart
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.coinsIdMarketChart({
  id: "some example string",
  vsCurrency: "some example string",
  days: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoinsMarketChart
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list).<br>**Default**: "bitcoin" |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of market data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).<br>**Default**: "usd" |
| <code>days?</code> | <code>string</code> | Data up to number of days ago. <br>You may use any integer or `max` for number of days.<br>**Default**: "1" |
| <code>interval?</code> | <code>[Interval](src/models/interval.ts)</code> | Data interval, leave empty for auto granularity. |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal place for currency price value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.coinsIdMarketChart(request)`

- **OnSuccess**: <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.coinsIdMarketChart(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoinsMarketChart, ApiError&gt;</code>, with `result.value` of type <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsIdMarketChartRange(request: Coins.CoinsIdMarketChartRangeRequest, options?: RequestOptions): ApiPromise&lt;CoinsMarketChart, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsIdMarketChartRange({
    id: "some example string",
    vsCurrency: "some example string",
    from: 1,
    to: 1,
  });
  // TODO: Handle 'response' of type CoinsMarketChart
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.coinsIdMarketChartRange({
  id: "some example string",
  vsCurrency: "some example string",
  from: 1,
  to: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoinsMarketChart
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list).<br>**Default**: "bitcoin" |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of market data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).<br>**Default**: "usd" |
| <code>from?</code> | <code>number</code> | Starting date in UNIX timestamp.<br>**Default**: 1767024000 |
| <code>to?</code> | <code>number</code> | Ending date in UNIX timestamp.<br>**Default**: 1777564800 |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal place for currency price value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.coinsIdMarketChartRange(request)`

- **OnSuccess**: <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.coinsIdMarketChartRange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoinsMarketChart, ApiError&gt;</code>, with `result.value` of type <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsIdOhlc(request: Coins.CoinsIdOhlcRequest, options?: RequestOptions): ApiPromise&lt;number[][], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsIdOhlc({
    id: "some example string",
    vsCurrency: "some example string",
    days: Days._1,
  });
  // TODO: Handle 'response' of type number[][]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.coinsIdOhlc({
  id: "some example string",
  vsCurrency: "some example string",
  days: Days._1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type number[][]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list).<br>**Default**: "bitcoin" |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of price data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).<br>**Default**: "usd" |
| <code>days?</code> | <code>[Days](src/models/days.ts)</code> | Data up to number of days ago.<br>**Default**: "1" |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal place for currency price value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.coinsIdOhlc(request)`

- **OnSuccess**: <code>number[][]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.coinsIdOhlc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;number[][], ApiError&gt;</code>, with `result.value` of type <code>number[][]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsIdTickers(request: Coins.CoinsIdTickersRequest, options?: RequestOptions): ApiPromise&lt;CoinsIdTickers, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsIdTickers({ id: "some example string" });
  // TODO: Handle 'response' of type CoinsIdTickers
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.coinsIdTickers({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoinsIdTickers
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list)<br>**Default**: "bitcoin" |
| <code>exchangeIds?</code> | <code>string</code> | Exchange ID. <br>*refers to [`/exchanges/list`](/reference/exchanges-list) |
| <code>includeExchangeLogo?</code> | <code>boolean</code> | Include exchange logo. <br>Default: false |
| <code>page?</code> | <code>number</code> | Page through results |
| <code>order?</code> | <code>[Order1](src/models/order1.ts)</code> | Sort the order of responses. <br>Default: trust_score_desc |
| <code>depth?</code> | <code>boolean</code> | Include 2% orderbook depth, i.e. `cost_to_move_up_usd` and `cost_to_move_down_usd`. <br>Default: false |
| <code>dexPairFormat?</code> | <code>[DexPairFormat](src/models/dex-pair-format.ts)</code> | Set to `symbol` to display DEX pair base and target as symbols. <br>Default: `contract_address` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.coinsIdTickers(request)`

- **OnSuccess**: <code>[CoinsIdTickers](src/models/coins-id-tickers.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.coinsIdTickers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoinsIdTickers, ApiError&gt;</code>, with `result.value` of type <code>[CoinsIdTickers](src/models/coins-id-tickers.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsList(request: Coins.CoinsListRequest, options?: RequestOptions): ApiPromise&lt;CoinsList[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported coins on CoinGecko with coin ID, name and symbol

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsList();
  // TODO: Handle 'response' of type CoinsList[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.coinsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoinsList[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>includePlatform?</code> | <code>boolean</code> | Include platform and token's contract addresses. <br>Default: false |
| <code>status?</code> | <code>[Status](src/models/status.ts)</code> | Filter by status of coins. <br>Default: active |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.coinsList(request)`

- **OnSuccess**: <code>[CoinsList](src/models/coins-list.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.coinsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoinsList[], ApiError&gt;</code>, with `result.value` of type <code>[CoinsList](src/models/coins-list.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsMarkets(request: Coins.CoinsMarketsRequest, options?: RequestOptions): ApiPromise&lt;CoinsMarket[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported coins with price, market cap, volume and market related data

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsMarkets({ vsCurrency: "some example string" });
  // TODO: Handle 'response' of type CoinsMarket[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.coinsMarkets({ vsCurrency: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoinsMarket[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of coins and market data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)<br>**Default**: "usd" |
| <code>ids?</code> | <code>string</code> | Coins' IDs, comma-separated if querying more than 1 coin. <br>*refers to [`/coins/list`](/reference/coins-list)<br>**Default**: "bitcoin" |
| <code>names?</code> | <code>string</code> | Coins' names, comma-separated if querying more than 1 coin.<br>**Default**: "Bitcoin" |
| <code>symbols?</code> | <code>string</code> | Coins' symbols, comma-separated if querying more than 1 coin.<br>**Default**: "btc" |
| <code>includeTokens?</code> | <code>[IncludeTokens](src/models/include-tokens.ts)</code> | For `symbols` lookups, specify `all` to include all matching tokens. <br>Default `top` returns top-ranked tokens by market cap or volume. |
| <code>category?</code> | <code>string</code> | Filter based on coins' category. <br>*refers to [`/coins/categories/list`](/reference/coins-categories-list) |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | Sort result by field. <br>Default: market_cap_desc |
| <code>perPage?</code> | <code>number</code> | Total results per page. <br>Default: 100 <br>Valid values: 1...250 |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default: 1 |
| <code>sparkline?</code> | <code>boolean</code> | Include sparkline 7-day data. <br>Default: false |
| <code>priceChangePercentage?</code> | <code>string</code> | Include price change percentage timeframe, comma-separated if querying more than 1 timeframe. <br>Valid values: `1h`, `24h`, `7d`, `14d`, `30d`, `200d`, `1y` |
| <code>locale?</code> | <code>[Locale](src/models/locale.ts)</code> | Language background. <br>Default: en |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal places for currency price value |
| <code>includeRehypothecated?</code> | <code>boolean</code> | Include rehypothecated tokens in results. When true, returns `market_cap_rank_with_rehypothecated` field. <br>Default: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.coinsMarkets(request)`

- **OnSuccess**: <code>[CoinsMarket](src/models/coins-market.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.coinsMarkets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoinsMarket[], ApiError&gt;</code>, with `result.value` of type <code>[CoinsMarket](src/models/coins-market.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contractAddressMarketChart(request: Coins.ContractAddressMarketChartRequest, options?: RequestOptions): ApiPromise&lt;CoinsMarketChart, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the historical chart data including time in UNIX, price, market cap and 24hrs volume based on asset platform and particular token contract address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.contractAddressMarketChart({
    id: "some example string",
    contractAddress: "some example string",
    vsCurrency: "some example string",
    days: "some example string",
  });
  // TODO: Handle 'response' of type CoinsMarketChart
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.contractAddressMarketChart({
  id: "some example string",
  contractAddress: "some example string",
  vsCurrency: "some example string",
  days: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoinsMarketChart
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Asset platform ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list).<br>**Default**: "ethereum" |
| <code>contractAddress?</code> | <code>string</code> | The contract address of token.<br>**Default**: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of market data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).<br>**Default**: "usd" |
| <code>days?</code> | <code>string</code> | Data up to number of days ago. <br>You may use any integer or `max` for number of days.<br>**Default**: "1" |
| <code>interval?</code> | <code>[Interval](src/models/interval.ts)</code> | Data interval, leave empty for auto granularity. |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal place for currency price value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.contractAddressMarketChart(request)`

- **OnSuccess**: <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.contractAddressMarketChart(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoinsMarketChart, ApiError&gt;</code>, with `result.value` of type <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contractAddressMarketChartRange(request: Coins.ContractAddressMarketChartRangeRequest, options?: RequestOptions): ApiPromise&lt;CoinsMarketChart, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the historical chart data within certain time range in UNIX along with price, market cap and 24hrs volume based on asset platform and particular token contract address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.contractAddressMarketChartRange({
    id: "some example string",
    contractAddress: "some example string",
    vsCurrency: "some example string",
    from: 1,
    to: 1,
  });
  // TODO: Handle 'response' of type CoinsMarketChart
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coins.contractAddressMarketChartRange({
  id: "some example string",
  contractAddress: "some example string",
  vsCurrency: "some example string",
  from: 1,
  to: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoinsMarketChart
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Asset platform ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list).<br>**Default**: "ethereum" |
| <code>contractAddress?</code> | <code>string</code> | The contract address of token.<br>**Default**: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of market data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).<br>**Default**: "usd" |
| <code>from?</code> | <code>number</code> | Starting date in UNIX timestamp.<br>**Default**: 1767024000 |
| <code>to?</code> | <code>number</code> | Ending date in UNIX timestamp.<br>**Default**: 1777564800 |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal place for currency price value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coins.contractAddressMarketChartRange(request)`

- **OnSuccess**: <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coins.contractAddressMarketChartRange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoinsMarketChart, ApiError&gt;</code>, with `result.value` of type <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Derivatives

> Source: [Derivatives](src/resources/derivatives.ts)

<details>
<summary><code>derivativesExchanges(request: Derivatives.DerivativesExchangesRequest, options?: RequestOptions): ApiPromise&lt;DerivativesExchange[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.derivatives.derivativesExchanges();
  // TODO: Handle 'response' of type DerivativesExchange[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.derivatives.derivativesExchanges().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DerivativesExchange[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order?</code> | <code>[Order4](src/models/order4.ts)</code> | Sort order of responses. <br>Default: `open_interest_btc_desc` |
| <code>perPage?</code> | <code>number</code> | Total results per page. |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.derivatives.derivativesExchanges(request)`

- **OnSuccess**: <code>[DerivativesExchange](src/models/derivatives-exchange.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.derivatives.derivativesExchanges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DerivativesExchange[], ApiError&gt;</code>, with `result.value` of type <code>[DerivativesExchange](src/models/derivatives-exchange.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>derivativesExchangesId(request: Derivatives.DerivativesExchangesIdRequest, options?: RequestOptions): ApiPromise&lt;DerivativesExchangesId, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the derivatives exchange's related data (name, open interest, trade volume, ...) based on the exchange's ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.derivatives.derivativesExchangesId({ id: "some example string" });
  // TODO: Handle 'response' of type DerivativesExchangesId
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.derivatives.derivativesExchangesId({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DerivativesExchangesId
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Derivative exchange ID. <br>*refers to [`/derivatives/exchanges/list`](/reference/derivatives-exchanges-list).<br>**Default**: "binance_futures" |
| <code>includeTickers?</code> | <code>[IncludeTickers](src/models/include-tickers.ts)</code> | Include tickers data. <br>Default: tickers data is not included. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.derivatives.derivativesExchangesId(request)`

- **OnSuccess**: <code>[DerivativesExchangesId](src/models/derivatives-exchanges-id.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.derivatives.derivativesExchangesId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DerivativesExchangesId, ApiError&gt;</code>, with `result.value` of type <code>[DerivativesExchangesId](src/models/derivatives-exchanges-id.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>derivativesExchangesList(options?: RequestOptions): ApiPromise&lt;DerivativesExchangesList[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported derivatives exchanges with ID and name on CoinGecko

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.derivatives.derivativesExchangesList();
  // TODO: Handle 'response' of type DerivativesExchangesList[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.derivatives.derivativesExchangesList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DerivativesExchangesList[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.derivatives.derivativesExchangesList()`

- **OnSuccess**: <code>[DerivativesExchangesList](src/models/derivatives-exchanges-list.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.derivatives.derivativesExchangesList().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DerivativesExchangesList[], ApiError&gt;</code>, with `result.value` of type <code>[DerivativesExchangesList](src/models/derivatives-exchanges-list.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>derivativesTickers(options?: RequestOptions): ApiPromise&lt;DerivativesTicker[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the tickers from derivatives exchanges on CoinGecko

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.derivatives.derivativesTickers();
  // TODO: Handle 'response' of type DerivativesTicker[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.derivatives.derivativesTickers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DerivativesTicker[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.derivatives.derivativesTickers()`

- **OnSuccess**: <code>[DerivativesTicker](src/models/derivatives-ticker.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.derivatives.derivativesTickers().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DerivativesTicker[], ApiError&gt;</code>, with `result.value` of type <code>[DerivativesTicker](src/models/derivatives-ticker.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Entities

> Source: [Entities](src/resources/entities.ts)

<details>
<summary><code>companiesPublicTreasury(request: Entities.CompaniesPublicTreasuryRequest, options?: RequestOptions): ApiPromise&lt;PublicTreasury, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query public companies' and governments' cryptocurrency holdings by coin ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entities.companiesPublicTreasury({
    entity: Entity.Companies,
    coinId: "some example string",
  });
  // TODO: Handle 'response' of type PublicTreasury
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entities.companiesPublicTreasury({
  entity: Entity.Companies,
  coinId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicTreasury
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity?</code> | <code>[Entity](src/models/entity.ts)</code> | Public company or government entity.<br>**Default**: "companies" |
| <code>coinId?</code> | <code>string</code> | Coin ID. <br>e.g. `bitcoin`, `ethereum`, `solana`, `binancecoin`<br>**Default**: "bitcoin" |
| <code>perPage?</code> | <code>number</code> | Total results per page. <br>Default value: 250 <br>Valid values: 1...250 |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>order?</code> | <code>[Order5](src/models/order5.ts)</code> | Sort order for results. <br>Default: `total_holdings_usd_desc` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entities.companiesPublicTreasury(request)`

- **OnSuccess**: <code>[PublicTreasury](src/models/unions/public-treasury.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.entities.companiesPublicTreasury(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicTreasury, ApiError&gt;</code>, with `result.value` of type <code>[PublicTreasury](src/models/unions/public-treasury.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>entitiesList(request: Entities.EntitiesListRequest, options?: RequestOptions): ApiPromise&lt;EntitiesList[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported entities on CoinGecko with entity ID, name, symbol, and country

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entities.entitiesList();
  // TODO: Handle 'response' of type EntitiesList[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entities.entitiesList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntitiesList[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityType?</code> | <code>[EntityType](src/models/entity-type.ts)</code> | Filter by entity type. |
| <code>perPage?</code> | <code>number</code> | Total results per page. <br>Default value: 100 <br>Valid values: 1...250 |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entities.entitiesList(request)`

- **OnSuccess**: <code>[EntitiesList](src/models/entities-list.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.entities.entitiesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntitiesList[], ApiError&gt;</code>, with `result.value` of type <code>[EntitiesList](src/models/entities-list.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Exchanges

> Source: [Exchanges](src/resources/exchanges.ts)

<details>
<summary><code>exchangeRates(options?: RequestOptions): ApiPromise&lt;ExchangeRates, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query BTC exchange rates with other currencies

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchangeRates();
  // TODO: Handle 'response' of type ExchangeRates
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchanges.exchangeRates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExchangeRates
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchanges.exchangeRates()`

- **OnSuccess**: <code>[ExchangeRates](src/models/exchange-rates.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.exchanges.exchangeRates().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExchangeRates, ApiError&gt;</code>, with `result.value` of type <code>[ExchangeRates](src/models/exchange-rates.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchanges(request: Exchanges.ExchangesRequest, options?: RequestOptions): ApiPromise&lt;Exchange1[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported exchanges with exchanges' data (ID, name, country, etc.) that have active trading volumes on CoinGecko

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchanges();
  // TODO: Handle 'response' of type Exchange1[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchanges.exchanges().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Exchange1[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>perPage?</code> | <code>number</code> | Total results per page. <br>Default: 100. <br>Valid values: 1...250 |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchanges.exchanges(request)`

- **OnSuccess**: <code>[Exchange1](src/models/exchange1.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.exchanges.exchanges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Exchange1[], ApiError&gt;</code>, with `result.value` of type <code>[Exchange1](src/models/exchange1.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchangesId(request: Exchanges.ExchangesIdRequest, options?: RequestOptions): ApiPromise&lt;ExchangesId, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query exchange's data (name, year established, country, etc.), exchange volume in BTC and top 100 tickers based on exchange's ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchangesId({ id: "some example string" });
  // TODO: Handle 'response' of type ExchangesId
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchanges.exchangesId({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExchangesId
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Exchange ID. <br>*refers to [`/exchanges/list`](/reference/exchanges-list).<br>**Default**: "binance" |
| <code>dexPairFormat?</code> | <code>[DexPairFormat](src/models/dex-pair-format.ts)</code> | Set to `symbol` to display DEX pair base and target as symbols. <br>Default: `contract_address` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchanges.exchangesId(request)`

- **OnSuccess**: <code>[ExchangesId](src/models/exchanges-id.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.exchanges.exchangesId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExchangesId, ApiError&gt;</code>, with `result.value` of type <code>[ExchangesId](src/models/exchanges-id.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchangesIdTickers(request: Exchanges.ExchangesIdTickersRequest, options?: RequestOptions): ApiPromise&lt;CoinsIdTickers, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query exchange's tickers based on exchange's ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchangesIdTickers({ id: "some example string" });
  // TODO: Handle 'response' of type CoinsIdTickers
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchanges.exchangesIdTickers({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoinsIdTickers
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Exchange ID. <br>*refers to [`/exchanges/list`](/reference/exchanges-list).<br>**Default**: "binance" |
| <code>coinIds?</code> | <code>string</code> | Filter tickers by coin IDs, comma-separated if querying more than 1 coin. <br>*refers to [`/coins/list`](/reference/coins-list). |
| <code>includeExchangeLogo?</code> | <code>boolean</code> | Include exchange logo. <br>Default: false |
| <code>page?</code> | <code>number</code> | Page through results. |
| <code>depth?</code> | <code>boolean</code> | Include 2% orderbook depth (cost_to_move_up_usd and cost_to_move_down_usd). <br>Default: false |
| <code>order?</code> | <code>[Order3](src/models/order3.ts)</code> | Sort the order of responses. <br>Default: `trust_score_desc` |
| <code>dexPairFormat?</code> | <code>[DexPairFormat](src/models/dex-pair-format.ts)</code> | Set to `symbol` to display DEX pair base and target as symbols. <br>Default: `contract_address` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchanges.exchangesIdTickers(request)`

- **OnSuccess**: <code>[CoinsIdTickers](src/models/coins-id-tickers.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.exchanges.exchangesIdTickers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoinsIdTickers, ApiError&gt;</code>, with `result.value` of type <code>[CoinsIdTickers](src/models/coins-id-tickers.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchangesIdVolumeChart(request: Exchanges.ExchangesIdVolumeChartRequest, options?: RequestOptions): ApiPromise&lt;ExchangeVolumeChart[][], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange's ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchangesIdVolumeChart({
    id: "some example string",
    days: Days._1,
  });
  // TODO: Handle 'response' of type ExchangeVolumeChart[][]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchanges.exchangesIdVolumeChart({
  id: "some example string",
  days: Days._1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExchangeVolumeChart[][]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Exchange ID or derivative exchange ID. <br>*refers to [`/exchanges/list`](/reference/exchanges-list) or [`/derivatives/exchanges/list`](/reference/derivatives-exchanges-list).<br>**Default**: "binance" |
| <code>days?</code> | <code>[Days](src/models/days.ts)</code> | Data up to number of days ago.<br>**Default**: "1" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchanges.exchangesIdVolumeChart(request)`

- **OnSuccess**: <code>[ExchangeVolumeChart](src/models/unions/exchange-volume-chart.ts)[][]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.exchanges.exchangesIdVolumeChart(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExchangeVolumeChart[][], ApiError&gt;</code>, with `result.value` of type <code>[ExchangeVolumeChart](src/models/unions/exchange-volume-chart.ts)[][]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchangesList(request: Exchanges.ExchangesListRequest, options?: RequestOptions): ApiPromise&lt;ExchangesList[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported exchanges with ID and name

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchangesList();
  // TODO: Handle 'response' of type ExchangesList[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exchanges.exchangesList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExchangesList[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status?</code> | <code>[Status](src/models/status.ts)</code> | Filter by status of exchanges. <br>Default: `active` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exchanges.exchangesList(request)`

- **OnSuccess**: <code>[ExchangesList](src/models/exchanges-list.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.exchanges.exchangesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExchangesList[], ApiError&gt;</code>, with `result.value` of type <code>[ExchangesList](src/models/exchanges-list.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GlobalApi

> Source: [GlobalApi](src/resources/global-api.ts)

<details>
<summary><code>cryptoGlobal(options?: RequestOptions): ApiPromise&lt;Global, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalApi.cryptoGlobal();
  // TODO: Handle 'response' of type Global
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.globalApi.cryptoGlobal().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Global
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.globalApi.cryptoGlobal()`

- **OnSuccess**: <code>[Global](src/models/global.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.globalApi.cryptoGlobal().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Global, ApiError&gt;</code>, with `result.value` of type <code>[Global](src/models/global.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>globalDefi(options?: RequestOptions): ApiPromise&lt;GlobalDeFi, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalApi.globalDefi();
  // TODO: Handle 'response' of type GlobalDeFi
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.globalApi.globalDefi().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GlobalDeFi
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.globalApi.globalDefi()`

- **OnSuccess**: <code>[GlobalDeFi](src/models/global-de-fi.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.globalApi.globalDefi().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GlobalDeFi, ApiError&gt;</code>, with `result.value` of type <code>[GlobalDeFi](src/models/global-de-fi.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Misc

> Source: [Misc](src/resources/misc.ts)

<details>
<summary><code>assetPlatformsList(request: Misc.AssetPlatformsListRequest, options?: RequestOptions): ApiPromise&lt;AssetPlatform[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported asset platforms (blockchain networks) on CoinGecko

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.assetPlatformsList();
  // TODO: Handle 'response' of type AssetPlatform[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.assetPlatformsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetPlatform[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>[Filter](src/models/filter.ts)</code> | Apply relevant filters to results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.assetPlatformsList(request)`

- **OnSuccess**: <code>[AssetPlatform](src/models/asset-platform.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.assetPlatformsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetPlatform[], ApiError&gt;</code>, with `result.value` of type <code>[AssetPlatform](src/models/asset-platform.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pingServer(options?: RequestOptions): ApiPromise&lt;PingServer, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To check the API server status

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.pingServer();
  // TODO: Handle 'response' of type PingServer
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.pingServer().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PingServer
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.pingServer()`

- **OnSuccess**: <code>[PingServer](src/models/ping-server.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.pingServer().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PingServer, ApiError&gt;</code>, with `result.value` of type <code>[PingServer](src/models/ping-server.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokenLists(request: Misc.TokenListsRequest, options?: RequestOptions): ApiPromise&lt;TokenLists, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.tokenLists({ assetPlatformId: "some example string" });
  // TODO: Handle 'response' of type TokenLists
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.tokenLists({ assetPlatformId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenLists
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>assetPlatformId?</code> | <code>string</code> | Asset platform ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list).<br>**Default**: "ethereum" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.tokenLists(request)`

- **OnSuccess**: <code>[TokenLists](src/models/token-lists.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.misc.tokenLists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenLists, ApiError&gt;</code>, with `result.value` of type <code>[TokenLists](src/models/token-lists.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Nfts

> Source: [Nfts](src/resources/nfts.ts)

<details>
<summary><code>nftsContractAddress(request: Nfts.NftsContractAddressRequest, options?: RequestOptions): ApiPromise&lt;NftData, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection contract address and respective asset platform

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.nfts.nftsContractAddress({
    assetPlatformId: "some example string",
    contractAddress: "some example string",
  });
  // TODO: Handle 'response' of type NftData
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.nfts.nftsContractAddress({
  assetPlatformId: "some example string",
  contractAddress: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NftData
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>assetPlatformId?</code> | <code>string</code> | Asset platform ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list).<br>**Default**: "ethereum" |
| <code>contractAddress?</code> | <code>string</code> | Contract address of the NFT collection.<br>**Default**: "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.nfts.nftsContractAddress(request)`

- **OnSuccess**: <code>[NftData](src/models/nft-data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.nfts.nftsContractAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NftData, ApiError&gt;</code>, with `result.value` of type <code>[NftData](src/models/nft-data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nftsId(request: Nfts.NftsIdRequest, options?: RequestOptions): ApiPromise&lt;NftData, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.nfts.nftsId({ id: "some example string" });
  // TODO: Handle 'response' of type NftData
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.nfts.nftsId({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NftData
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | NFT collection ID. <br>*refers to [`/nfts/list`](/reference/nfts-list).<br>**Default**: "pudgy-penguins" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.nfts.nftsId(request)`

- **OnSuccess**: <code>[NftData](src/models/nft-data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.nfts.nftsId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NftData, ApiError&gt;</code>, with `result.value` of type <code>[NftData](src/models/nft-data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nftsList(request: Nfts.NftsListRequest, options?: RequestOptions): ApiPromise&lt;NfTsList[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.nfts.nftsList();
  // TODO: Handle 'response' of type NfTsList[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.nfts.nftsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NfTsList[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order?</code> | <code>[Order7](src/models/order7.ts)</code> | Sort order of responses. |
| <code>perPage?</code> | <code>number</code> | Total results per page. <br>Valid values: 1...250 |
| <code>page?</code> | <code>number</code> | Page through results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.nfts.nftsList(request)`

- **OnSuccess**: <code>[NfTsList](src/models/nf-ts-list.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.nfts.nftsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NfTsList[], ApiError&gt;</code>, with `result.value` of type <code>[NfTsList](src/models/nf-ts-list.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Onchain

> Source: [Onchain](src/resources/onchain.ts)

<details>
<summary><code>dexesList(request: Onchain.DexesListRequest, options?: RequestOptions): ApiPromise&lt;DexesList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported decentralized exchanges (DEXs) based on the provided network on GeckoTerminal

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.dexesList({ network: "some example string" });
  // TODO: Handle 'response' of type DexesList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.dexesList({ network: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DexesList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.dexesList(request)`

- **OnSuccess**: <code>[DexesList](src/models/dexes-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.dexesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DexesList, ApiError&gt;</code>, with `result.value` of type <code>[DexesList](src/models/dexes-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>latestPoolsList(request: Onchain.LatestPoolsListRequest, options?: RequestOptions): ApiPromise&lt;Pool, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the latest pools across all networks on GeckoTerminal

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.latestPoolsList();
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.latestPoolsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Pool
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex`, `network` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>includeGtCommunityData?</code> | <code>boolean</code> | Include GeckoTerminal community data (sentiment votes, suspicious reports). <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.latestPoolsList(request)`

- **OnSuccess**: <code>[Pool](src/models/pool.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.latestPoolsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Pool, ApiError&gt;</code>, with `result.value` of type <code>[Pool](src/models/pool.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>latestPoolsNetwork(request: Onchain.LatestPoolsNetworkRequest, options?: RequestOptions): ApiPromise&lt;Pool, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the latest pools based on the provided network

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.latestPoolsNetwork({ network: "some example string" });
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.latestPoolsNetwork({ network: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Pool
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>includeGtCommunityData?</code> | <code>boolean</code> | Include GeckoTerminal community data (sentiment votes, suspicious reports). <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.latestPoolsNetwork(request)`

- **OnSuccess**: <code>[Pool](src/models/pool.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.latestPoolsNetwork(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Pool, ApiError&gt;</code>, with `result.value` of type <code>[Pool](src/models/pool.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>networksList(request: Onchain.NetworksListRequest, options?: RequestOptions): ApiPromise&lt;NetworksList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To retrieve a list of all supported networks on GeckoTerminal

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.networksList();
  // TODO: Handle 'response' of type NetworksList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.networksList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NetworksList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.networksList(request)`

- **OnSuccess**: <code>[NetworksList](src/models/networks-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.networksList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NetworksList, ApiError&gt;</code>, with `result.value` of type <code>[NetworksList](src/models/networks-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>onchainSimplePrice(request: Onchain.OnchainSimplePriceRequest, options?: RequestOptions): ApiPromise&lt;OnchainSimplePrice, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get token price based on the provided token contract address on a network

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.onchainSimplePrice({
    network: "some example string",
    addresses: "some example string",
  });
  // TODO: Handle 'response' of type OnchainSimplePrice
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.onchainSimplePrice({
  network: "some example string",
  addresses: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OnchainSimplePrice
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>addresses?</code> | <code>string</code> | Token contract address, comma-separated if more than one token contract address.<br>**Default**: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" |
| <code>includeMarketCap?</code> | <code>boolean</code> | Include market capitalization. <br>Default: `false` |
| <code>mcapFdvFallback?</code> | <code>boolean</code> | Return FDV if market cap is not available. <br>Default: `false` |
| <code>include24HrVol?</code> | <code>boolean</code> | Include 24hr volume. <br>Default: `false` |
| <code>include24HrPriceChange?</code> | <code>boolean</code> | Include 24hr price change. <br>Default: `false` |
| <code>includeTotalReserveInUsd?</code> | <code>boolean</code> | Include total reserve in USD. <br>Default: `false` |
| <code>includeInactiveSource?</code> | <code>boolean</code> | Include token price data from inactive pools using the most recent swap. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.onchainSimplePrice(request)`

- **OnSuccess**: <code>[OnchainSimplePrice](src/models/onchain-simple-price.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.onchainSimplePrice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OnchainSimplePrice, ApiError&gt;</code>, with `result.value` of type <code>[OnchainSimplePrice](src/models/onchain-simple-price.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>poolAddress(request: Onchain.PoolAddressRequest, options?: RequestOptions): ApiPromise&lt;PoolAddressData, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the specific pool based on the provided network and pool address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.poolAddress({
    network: "some example string",
    address: "some example string",
  });
  // TODO: Handle 'response' of type PoolAddressData
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.poolAddress({
  network: "some example string",
  address: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PoolAddressData
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>address?</code> | <code>string</code> | Pool address.<br>**Default**: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640" |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>includeVolumeBreakdown?</code> | <code>boolean</code> | Include volume breakdown. <br>Default: `false` |
| <code>includeComposition?</code> | <code>boolean</code> | Include pool composition. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.poolAddress(request)`

- **OnSuccess**: <code>[PoolAddressData](src/models/pool-address-data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.poolAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PoolAddressData, ApiError&gt;</code>, with `result.value` of type <code>[PoolAddressData](src/models/pool-address-data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>poolOhlcvContractAddress(request: Onchain.PoolOhlcvContractAddressRequest, options?: RequestOptions): ApiPromise&lt;Ohlcv, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.poolOhlcvContractAddress({
    network: "some example string",
    poolAddress: "some example string",
    timeframe: Timeframe.Day,
  });
  // TODO: Handle 'response' of type Ohlcv
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.poolOhlcvContractAddress({
  network: "some example string",
  poolAddress: "some example string",
  timeframe: Timeframe.Day,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ohlcv
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>poolAddress?</code> | <code>string</code> | Pool contract address.<br>**Default**: "0x06da0fd433c1a5d7a4faa01111c044910a184553" |
| <code>timeframe?</code> | <code>[Timeframe](src/models/timeframe.ts)</code> | Timeframe of the OHLCV chart.<br>**Default**: "day" |
| <code>aggregate?</code> | <code>string</code> | Time period to aggregate each OHLCV. <br>Available values (day): `1` <br>Available values (hour): `1`, `4`, `12` <br>Available values (minute): `1`, `5`, `15` <br>Default value: 1 |
| <code>beforeTimestamp?</code> | <code>number</code> | Return OHLCV data before this timestamp (integer seconds since epoch). |
| <code>limit?</code> | <code>number</code> | Number of OHLCV results to return, maximum 1000. <br>Default value: 100 |
| <code>currency?</code> | <code>[Currency](src/models/currency.ts)</code> | Return OHLCV in USD or quote token. <br>Default: `usd` |
| <code>token?</code> | <code>string</code> | Return OHLCV for token, use this to invert the chart. <br>Available values: `base`, `quote`, or token address. <br>Default: `base` |
| <code>includeEmptyIntervals?</code> | <code>boolean</code> | Include empty intervals with no trade data. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.poolOhlcvContractAddress(request)`

- **OnSuccess**: <code>[Ohlcv](src/models/ohlcv.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.poolOhlcvContractAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ohlcv, ApiError&gt;</code>, with `result.value` of type <code>[Ohlcv](src/models/ohlcv.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>poolTokenInfoContractAddress(request: Onchain.PoolTokenInfoContractAddressRequest, options?: RequestOptions): ApiPromise&lt;PoolTokensInfo, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query pool metadata (base and quote token details, image, socials, websites, description, contract address, etc.) based on a provided pool contract address on a network

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.poolTokenInfoContractAddress({
    network: "some example string",
    poolAddress: "some example string",
  });
  // TODO: Handle 'response' of type PoolTokensInfo
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.poolTokenInfoContractAddress({
  network: "some example string",
  poolAddress: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PoolTokensInfo
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "solana" |
| <code>poolAddress?</code> | <code>string</code> | Pool contract address.<br>**Default**: "8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt" |
| <code>include?</code> | <code>[Include2](src/models/include2.ts)</code> | Attributes to include. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.poolTokenInfoContractAddress(request)`

- **OnSuccess**: <code>[PoolTokensInfo](src/models/pool-tokens-info.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.poolTokenInfoContractAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PoolTokensInfo, ApiError&gt;</code>, with `result.value` of type <code>[PoolTokensInfo](src/models/pool-tokens-info.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>poolTradesContractAddress(request: Onchain.PoolTradesContractAddressRequest, options?: RequestOptions): ApiPromise&lt;Trades, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the last 300 trades in the past 24 hours based on the provided pool address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.poolTradesContractAddress({
    network: "some example string",
    poolAddress: "some example string",
  });
  // TODO: Handle 'response' of type Trades
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.poolTradesContractAddress({
  network: "some example string",
  poolAddress: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Trades
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>poolAddress?</code> | <code>string</code> | Pool contract address.<br>**Default**: "0x06da0fd433c1a5d7a4faa01111c044910a184553" |
| <code>tradeVolumeInUsdGreaterThan?</code> | <code>number</code> | Filter trades by trade volume in USD greater than this value. <br>Default value: 0 |
| <code>token?</code> | <code>string</code> | Return trades for token, use this to invert the chart. <br>Available values: `base`, `quote`, or token address. <br>Default: `base` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.poolTradesContractAddress(request)`

- **OnSuccess**: <code>[Trades](src/models/trades.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.poolTradesContractAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Trades, ApiError&gt;</code>, with `result.value` of type <code>[Trades](src/models/trades.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>poolsAddresses(request: Onchain.PoolsAddressesRequest, options?: RequestOptions): ApiPromise&lt;MultiPoolAddressData, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query multiple pools based on the provided network and pool addresses

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.poolsAddresses({
    network: "some example string",
    addresses: "some example string",
  });
  // TODO: Handle 'response' of type MultiPoolAddressData
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.poolsAddresses({
  network: "some example string",
  addresses: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MultiPoolAddressData
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>addresses?</code> | <code>string</code> | Pool contract address, comma-separated if more than one pool contract address.<br>**Default**: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640" |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>includeVolumeBreakdown?</code> | <code>boolean</code> | Include volume breakdown. <br>Default: `false` |
| <code>includeComposition?</code> | <code>boolean</code> | Include pool composition. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.poolsAddresses(request)`

- **OnSuccess**: <code>[MultiPoolAddressData](src/models/multi-pool-address-data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.poolsAddresses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MultiPoolAddressData, ApiError&gt;</code>, with `result.value` of type <code>[MultiPoolAddressData](src/models/multi-pool-address-data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchPools(request: Onchain.SearchPoolsRequest, options?: RequestOptions): ApiPromise&lt;PoolSearch, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To search for pools across all networks by pool address, token name, token symbol, or token contract address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.searchPools();
  // TODO: Handle 'response' of type PoolSearch
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.searchPools().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PoolSearch
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query?</code> | <code>string</code> | Search query: pool contract address, token name, token symbol, or token contract address.<br>**Default**: "weth" |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.searchPools(request)`

- **OnSuccess**: <code>[PoolSearch](src/models/pool-search.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.searchPools(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PoolSearch, ApiError&gt;</code>, with `result.value` of type <code>[PoolSearch](src/models/pool-search.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokenDataContractAddress(request: Onchain.TokenDataContractAddressRequest, options?: RequestOptions): ApiPromise&lt;TokenData, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query specific token data based on the provided token contract address on a network

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.tokenDataContractAddress({
    network: "some example string",
    address: "some example string",
  });
  // TODO: Handle 'response' of type TokenData
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.tokenDataContractAddress({
  network: "some example string",
  address: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenData
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>address?</code> | <code>string</code> | Token contract address.<br>**Default**: "0xdac17f958d2ee523a2206206994597c13d831ec7" |
| <code>include?</code> | <code>[Include](src/models/include.ts)</code> | Attributes to include. |
| <code>includeComposition?</code> | <code>boolean</code> | Include pool composition. <br>Default: `false` |
| <code>includeInactiveSource?</code> | <code>boolean</code> | Include token data from inactive pools using the most recent swap. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.tokenDataContractAddress(request)`

- **OnSuccess**: <code>[TokenData](src/models/token-data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.tokenDataContractAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenData, ApiError&gt;</code>, with `result.value` of type <code>[TokenData](src/models/token-data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokenInfoContractAddress(request: Onchain.TokenInfoContractAddressRequest, options?: RequestOptions): ApiPromise&lt;TokenInfo, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query token metadata (name, symbol, CoinGecko ID, image, socials, websites, description, etc.) based on a provided token contract address on a network

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.tokenInfoContractAddress({
    network: "some example string",
    address: "some example string",
  });
  // TODO: Handle 'response' of type TokenInfo
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.tokenInfoContractAddress({
  network: "some example string",
  address: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenInfo
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "solana" |
| <code>address?</code> | <code>string</code> | Token contract address.<br>**Default**: "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.tokenInfoContractAddress(request)`

- **OnSuccess**: <code>[TokenInfo](src/models/token-info.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.tokenInfoContractAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenInfo, ApiError&gt;</code>, with `result.value` of type <code>[TokenInfo](src/models/token-info.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokensDataContractAddresses(request: Onchain.TokensDataContractAddressesRequest, options?: RequestOptions): ApiPromise&lt;MultiTokenData, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query multiple tokens data based on the provided token contract addresses on a network

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.tokensDataContractAddresses({
    network: "some example string",
    addresses: "some example string",
  });
  // TODO: Handle 'response' of type MultiTokenData
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.tokensDataContractAddresses({
  network: "some example string",
  addresses: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MultiTokenData
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "solana" |
| <code>addresses?</code> | <code>string</code> | Token contract address, comma-separated if more than one token contract address.<br>**Default**: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN,2g4LS3y2myPe6vj9wTvoBE1wKqxvhnZPoZA9QU9upump" |
| <code>include?</code> | <code>[Include](src/models/include.ts)</code> | Attributes to include. |
| <code>includeComposition?</code> | <code>boolean</code> | Include pool composition. <br>Default: `false` |
| <code>includeInactiveSource?</code> | <code>boolean</code> | Include tokens from inactive pools using the most recent swap. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.tokensDataContractAddresses(request)`

- **OnSuccess**: <code>[MultiTokenData](src/models/multi-token-data.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.tokensDataContractAddresses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MultiTokenData, ApiError&gt;</code>, with `result.value` of type <code>[MultiTokenData](src/models/multi-token-data.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokensInfoRecentUpdated(request: Onchain.TokensInfoRecentUpdatedRequest, options?: RequestOptions): ApiPromise&lt;TokenInfoRecentlyUpdated, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query 100 most recently updated tokens info of a specific network or across all networks on GeckoTerminal

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.tokensInfoRecentUpdated();
  // TODO: Handle 'response' of type TokenInfoRecentlyUpdated
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.tokensInfoRecentUpdated().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenInfoRecentlyUpdated
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>include?</code> | <code>[Include3](src/models/include3.ts)</code> | Attributes for related resources to include. |
| <code>network?</code> | <code>string</code> | Filter tokens by provided network. <br>*refers to [`/onchain/networks`](/reference/networks-list). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.tokensInfoRecentUpdated(request)`

- **OnSuccess**: <code>[TokenInfoRecentlyUpdated](src/models/token-info-recently-updated.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.tokensInfoRecentUpdated(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenInfoRecentlyUpdated, ApiError&gt;</code>, with `result.value` of type <code>[TokenInfoRecentlyUpdated](src/models/token-info-recently-updated.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>topPoolsContractAddress(request: Onchain.TopPoolsContractAddressRequest, options?: RequestOptions): ApiPromise&lt;Pool, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query top pools based on the provided token contract address on a network

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.topPoolsContractAddress({
    network: "some example string",
    tokenAddress: "some example string",
  });
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.topPoolsContractAddress({
  network: "some example string",
  tokenAddress: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Pool
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>tokenAddress?</code> | <code>string</code> | Token contract address.<br>**Default**: "0xdac17f958d2ee523a2206206994597c13d831ec7" |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>includeInactiveSource?</code> | <code>boolean</code> | Include tokens from inactive pools using the most recent swap. <br>Default: `false` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>sort?</code> | <code>[Sort2](src/models/sort2.ts)</code> | Sort the pools by field. <br>Default: `h24_volume_usd_liquidity_desc` |
| <code>includeGtCommunityData?</code> | <code>boolean</code> | Include GeckoTerminal community data (sentiment votes, suspicious reports). <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.topPoolsContractAddress(request)`

- **OnSuccess**: <code>[Pool](src/models/pool.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.topPoolsContractAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Pool, ApiError&gt;</code>, with `result.value` of type <code>[Pool](src/models/pool.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>topPoolsDex(request: Onchain.TopPoolsDexRequest, options?: RequestOptions): ApiPromise&lt;Pool, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the top pools based on the provided network and decentralized exchange (DEX)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.topPoolsDex({
    network: "some example string",
    dex: "some example string",
  });
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.topPoolsDex({
  network: "some example string",
  dex: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Pool
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>dex?</code> | <code>string</code> | DEX ID. <br>*refers to [`/onchain/networks/{network}/dexes`](/reference/dexes-list).<br>**Default**: "sushiswap" |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>sort?</code> | <code>[Sort](src/models/sort.ts)</code> | Sort the pools by field. <br>Default: `h24_tx_count_desc` |
| <code>includeGtCommunityData?</code> | <code>boolean</code> | Include GeckoTerminal community data (sentiment votes, suspicious reports). <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.topPoolsDex(request)`

- **OnSuccess**: <code>[Pool](src/models/pool.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.topPoolsDex(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Pool, ApiError&gt;</code>, with `result.value` of type <code>[Pool](src/models/pool.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>topPoolsNetwork(request: Onchain.TopPoolsNetworkRequest, options?: RequestOptions): ApiPromise&lt;Pool, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the top pools based on the provided network

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.topPoolsNetwork({ network: "some example string" });
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.topPoolsNetwork({ network: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Pool
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>sort?</code> | <code>[Sort](src/models/sort.ts)</code> | Sort the pools by field. <br>Default: `h24_tx_count_desc` |
| <code>includeGtCommunityData?</code> | <code>boolean</code> | Include GeckoTerminal community data (sentiment votes, suspicious reports). <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.topPoolsNetwork(request)`

- **OnSuccess**: <code>[Pool](src/models/pool.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.topPoolsNetwork(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Pool, ApiError&gt;</code>, with `result.value` of type <code>[Pool](src/models/pool.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>trendingPoolsList(request: Onchain.TrendingPoolsListRequest, options?: RequestOptions): ApiPromise&lt;Pool, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the trending pools across all networks on GeckoTerminal

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.trendingPoolsList();
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.trendingPoolsList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Pool
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex`, `network` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>duration?</code> | <code>[Duration](src/models/duration.ts)</code> | Duration to sort trending list by. <br>Default: `24h` |
| <code>includeGtCommunityData?</code> | <code>boolean</code> | Include GeckoTerminal community data (sentiment votes, suspicious reports). <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.trendingPoolsList(request)`

- **OnSuccess**: <code>[Pool](src/models/pool.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.trendingPoolsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Pool, ApiError&gt;</code>, with `result.value` of type <code>[Pool](src/models/pool.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>trendingPoolsNetwork(request: Onchain.TrendingPoolsNetworkRequest, options?: RequestOptions): ApiPromise&lt;Pool, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the trending pools based on the provided network

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.trendingPoolsNetwork({ network: "some example string" });
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onchain.trendingPoolsNetwork({ network: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Pool
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list).<br>**Default**: "eth" |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>duration?</code> | <code>[Duration](src/models/duration.ts)</code> | Duration to sort trending list by. <br>Default: `24h` |
| <code>includeGtCommunityData?</code> | <code>boolean</code> | Include GeckoTerminal community data (sentiment votes, suspicious reports). <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onchain.trendingPoolsNetwork(request)`

- **OnSuccess**: <code>[Pool](src/models/pool.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onchain.trendingPoolsNetwork(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Pool, ApiError&gt;</code>, with `result.value` of type <code>[Pool](src/models/pool.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PublicTreasuryApi

> Source: [PublicTreasuryApi](src/resources/public-treasury-api.ts)

<details>
<summary><code>publicTreasuryEntity(request: PublicTreasuryApi.PublicTreasuryEntityRequest, options?: RequestOptions): ApiPromise&lt;PublicTreasuryEntity, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query public companies' and governments' cryptocurrency holdings by entity ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicTreasuryApi.publicTreasuryEntity({ entityId: "some example string" });
  // TODO: Handle 'response' of type PublicTreasuryEntity
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publicTreasuryApi.publicTreasuryEntity({
  entityId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicTreasuryEntity
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityId?</code> | <code>string</code> | Public company or government entity ID. <br>*refers to [`/entities/list`](/reference/entities-list).<br>**Default**: "strategy" |
| <code>holdingAmountChange?</code> | <code>string</code> | Include holding amount change for specified timeframes, comma-separated if querying more than 1 timeframe. <br>Valid values: `7d`, `14d`, `30d`, `90d`, `1y`, `ytd` |
| <code>holdingChangePercentage?</code> | <code>string</code> | Include holding change percentage for specified timeframes, comma-separated if querying more than 1 timeframe. <br>Valid values: `7d`, `14d`, `30d`, `90d`, `1y`, `ytd` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publicTreasuryApi.publicTreasuryEntity(request)`

- **OnSuccess**: <code>[PublicTreasuryEntity](src/models/public-treasury-entity.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.publicTreasuryApi.publicTreasuryEntity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicTreasuryEntity, ApiError&gt;</code>, with `result.value` of type <code>[PublicTreasuryEntity](src/models/public-treasury-entity.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publicTreasuryEntityChart(request: PublicTreasuryApi.PublicTreasuryEntityChartRequest, options?: RequestOptions): ApiPromise&lt;PublicTreasuryEntityChart, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query historical cryptocurrency holdings chart of public companies and governments by entity ID and coin ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicTreasuryApi.publicTreasuryEntityChart({
    entityId: "some example string",
    coinId: "some example string",
    days: "some example string",
  });
  // TODO: Handle 'response' of type PublicTreasuryEntityChart
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publicTreasuryApi.publicTreasuryEntityChart({
  entityId: "some example string",
  coinId: "some example string",
  days: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicTreasuryEntityChart
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityId?</code> | <code>string</code> | Public company or government entity ID. <br>*refers to [`/entities/list`](/reference/entities-list).<br>**Default**: "strategy" |
| <code>coinId?</code> | <code>string</code> | Coin ID. <br>e.g. `bitcoin`, `ethereum`, `solana`, `binancecoin`<br>**Default**: "bitcoin" |
| <code>days?</code> | <code>string</code> | Data up to number of days ago. <br>Valid values: `7`, `14`, `30`, `90`, `180`, `365`<br>**Default**: "365" |
| <code>includeEmptyIntervals?</code> | <code>boolean</code> | Include empty intervals with no transaction data. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publicTreasuryApi.publicTreasuryEntityChart(request)`

- **OnSuccess**: <code>[PublicTreasuryEntityChart](src/models/public-treasury-entity-chart.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.publicTreasuryApi.publicTreasuryEntityChart(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicTreasuryEntityChart, ApiError&gt;</code>, with `result.value` of type <code>[PublicTreasuryEntityChart](src/models/public-treasury-entity-chart.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publicTreasuryTransactionHistory(request: PublicTreasuryApi.PublicTreasuryTransactionHistoryRequest, options?: RequestOptions): ApiPromise&lt;PublicTreasuryTransactionHistory, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query public companies' and governments' cryptocurrency transaction history by entity ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicTreasuryApi.publicTreasuryTransactionHistory({
    entityId: "some example string",
  });
  // TODO: Handle 'response' of type PublicTreasuryTransactionHistory
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publicTreasuryApi.publicTreasuryTransactionHistory({
  entityId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicTreasuryTransactionHistory
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityId?</code> | <code>string</code> | Public company or government entity ID. <br>*refers to [`/entities/list`](/reference/entities-list).<br>**Default**: "strategy" |
| <code>perPage?</code> | <code>number</code> | Total results per page. <br>Default value: 100 <br>Valid values: 1...250 |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>order?</code> | <code>[Order6](src/models/order6.ts)</code> | Sort order of transactions. <br>Default: `date_desc` |
| <code>coinIds?</code> | <code>string</code> | Filter transactions by coin IDs, comma-separated if querying more than 1 coin. <br>*refers to [`/coins/list`](/reference/coins-list). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publicTreasuryApi.publicTreasuryTransactionHistory(request)`

- **OnSuccess**: <code>[PublicTreasuryTransactionHistory](src/models/public-treasury-transaction-history.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.publicTreasuryApi.publicTreasuryTransactionHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicTreasuryTransactionHistory, ApiError&gt;</code>, with `result.value` of type <code>[PublicTreasuryTransactionHistory](src/models/public-treasury-transaction-history.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SearchApi

> Source: [SearchApi](src/resources/search-api.ts)

<details>
<summary><code>searchData(request: SearchApi.SearchDataRequest, options?: RequestOptions): ApiPromise&lt;Search, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To search for coins, categories and markets listed on CoinGecko

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchApi.searchData({ query: "some example string" });
  // TODO: Handle 'response' of type Search
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchApi.searchData({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Search
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | Search query |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchApi.searchData(request)`

- **OnSuccess**: <code>[Search](src/models/search.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.searchApi.searchData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Search, ApiError&gt;</code>, with `result.value` of type <code>[Search](src/models/search.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>trendingSearch(options?: RequestOptions): ApiPromise&lt;TrendingSearch, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query trending search coins, NFTs and categories on CoinGecko in the last 24 hours

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchApi.trendingSearch();
  // TODO: Handle 'response' of type TrendingSearch
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchApi.trendingSearch().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TrendingSearch
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchApi.trendingSearch()`

- **OnSuccess**: <code>[TrendingSearch](src/models/trending-search.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.searchApi.trendingSearch().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TrendingSearch, ApiError&gt;</code>, with `result.value` of type <code>[TrendingSearch](src/models/trending-search.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Simple

> Source: [Simple](src/resources/simple.ts)

<details>
<summary><code>simplePrice(request: Simple.SimplePriceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, SimplePrice&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the prices of one or more coins by using their unique Coin API IDs, symbols, or names

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simple.simplePrice({ vsCurrencies: "some example string" });
  // TODO: Handle 'response' of type Record<string, SimplePrice>
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simple.simplePrice({ vsCurrencies: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, SimplePrice>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vsCurrencies?</code> | <code>string</code> | Target currency of coins, comma-separated if querying more than 1 currency. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)<br>**Default**: "usd" |
| <code>ids?</code> | <code>string</code> | Coins' IDs, comma-separated if querying more than 1 coin. <br>*refers to [`/coins/list`](/reference/coins-list)<br>**Default**: "bitcoin" |
| <code>names?</code> | <code>string</code> | Coins' names, comma-separated if querying more than 1 coin.<br>**Default**: "Bitcoin" |
| <code>symbols?</code> | <code>string</code> | Coins' symbols, comma-separated if querying more than 1 coin.<br>**Default**: "btc" |
| <code>includeTokens?</code> | <code>[IncludeTokens](src/models/include-tokens.ts)</code> | For `symbols` lookups, specify `all` to include all matching tokens. <br>Default `top` returns top-ranked tokens by market cap or volume. |
| <code>includeMarketCap?</code> | <code>boolean</code> | Include market capitalization. <br>Default: false |
| <code>include24HrVol?</code> | <code>boolean</code> | Include 24-hour trading volume. <br>Default: false |
| <code>include24HrChange?</code> | <code>boolean</code> | Include 24-hour change percentage. <br>Default: false |
| <code>includeLastUpdatedAt?</code> | <code>boolean</code> | Include last updated price time as a UNIX timestamp. <br>Default: false |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal places for currency price value |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simple.simplePrice(request)`

- **OnSuccess**: <code>Record&lt;string, [SimplePrice](src/models/simple-price.ts)&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.simple.simplePrice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, SimplePrice&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, [SimplePrice](src/models/simple-price.ts)&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>simpleSupportedCurrencies(options?: RequestOptions): ApiPromise&lt;string[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported currencies on CoinGecko

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simple.simpleSupportedCurrencies();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simple.simpleSupportedCurrencies().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simple.simpleSupportedCurrencies()`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.simple.simpleSupportedCurrencies().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], ApiError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>simpleTokenPrice(request: Simple.SimpleTokenPriceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, SimplePrice&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query one or more token prices by using their token contract addresses

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simple.simpleTokenPrice({
    id: "some example string",
    contractAddresses: "some example string",
    vsCurrencies: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, SimplePrice>
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simple.simpleTokenPrice({
  id: "some example string",
  contractAddresses: "some example string",
  vsCurrencies: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, SimplePrice>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Asset platform's ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list)<br>**Default**: "ethereum" |
| <code>contractAddresses?</code> | <code>string</code> | Token contract addresses, comma-separated if querying more than 1 token<br>**Default**: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599" |
| <code>vsCurrencies?</code> | <code>string</code> | Target currency of coins, comma-separated if querying more than 1 currency. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)<br>**Default**: "usd" |
| <code>includeMarketCap?</code> | <code>boolean</code> | Include market capitalization. <br>Default: false |
| <code>include24HrVol?</code> | <code>boolean</code> | Include 24-hour trading volume. <br>Default: false |
| <code>include24HrChange?</code> | <code>boolean</code> | Include 24-hour change percentage. <br>Default: false |
| <code>includeLastUpdatedAt?</code> | <code>boolean</code> | Include last updated price time as a UNIX timestamp. <br>Default: false |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal places for currency price value |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simple.simpleTokenPrice(request)`

- **OnSuccess**: <code>Record&lt;string, [SimplePrice](src/models/simple-price.ts)&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.simple.simpleTokenPrice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, SimplePrice&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, [SimplePrice](src/models/simple-price.ts)&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoinGeckoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

