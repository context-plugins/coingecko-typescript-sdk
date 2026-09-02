# Reference

> Source: [CoinGeckoClient](src/client.ts)

## Coins

> Source: [Coins](src/resources/coins.ts)

<details>
<summary><code>coinsCategories(request: Coins.CoinsCategoriesRequest, options?: RequestOptions): ApiPromise&lt;Category1[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the coins categories with market data (market cap, volume, etc.) on CoinGecko

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsCategories();
  // TODO: Handle 'response' of type Category1[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[Category1](src/models/category1.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsCategoriesList(options?: RequestOptions): ApiPromise&lt;CategoriesList[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported coins categories on CoinGecko

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsCategoriesList();
  // TODO: Handle 'response' of type CategoriesList[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CategoriesList](src/models/categories-list.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsContractAddress(request: Coins.CoinsContractAddressRequest, options?: RequestOptions): ApiPromise&lt;CoinsContractAddress, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on an asset platform and a particular token contract address

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsContractAddress();
  // TODO: Handle 'response' of type CoinsContractAddress
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Asset platform ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list). |
| <code>contractAddress?</code> | <code>string</code> | The contract address of token. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CoinsContractAddress](src/models/coins-contract-address.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsId(request: Coins.CoinsIdRequest, options?: RequestOptions): ApiPromise&lt;CoinsId, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on a particular coin ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsId();
  // TODO: Handle 'response' of type CoinsId
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list) |
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

**OnSuccess**: <code>[CoinsId](src/models/coins-id.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsIdHistory(request: Coins.CoinsIdHistoryRequest, options?: RequestOptions): ApiPromise&lt;CoinsIdHistory, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the historical data (price, market cap, 24hrs volume, etc.) at a given date for a coin based on a particular coin ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsIdHistory();
  // TODO: Handle 'response' of type CoinsIdHistory
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list). |
| <code>date?</code> | <code>string</code> | The date of data snapshot. <br>Format: `dd-mm-yyyy` |
| <code>localization?</code> | <code>boolean</code> | Include all the localized languages in response. <br>Default: true |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CoinsIdHistory](src/models/coins-id-history.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsIdMarketChart(request: Coins.CoinsIdMarketChartRequest, options?: RequestOptions): ApiPromise&lt;CoinsMarketChart, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsIdMarketChart();
  // TODO: Handle 'response' of type CoinsMarketChart
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list). |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of market data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies). |
| <code>days?</code> | <code>string</code> | Data up to number of days ago. <br>You may use any integer or `max` for number of days. |
| <code>interval?</code> | <code>[Interval](src/models/interval.ts)</code> | Data interval, leave empty for auto granularity. |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal place for currency price value. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsIdMarketChartRange(request: Coins.CoinsIdMarketChartRangeRequest, options?: RequestOptions): ApiPromise&lt;CoinsMarketChart, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsIdMarketChartRange();
  // TODO: Handle 'response' of type CoinsMarketChart
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list). |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of market data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies). |
| <code>from?</code> | <code>number</code> | Starting date in UNIX timestamp. |
| <code>to?</code> | <code>number</code> | Ending date in UNIX timestamp. |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal place for currency price value. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsIdOhlc(request: Coins.CoinsIdOhlcRequest, options?: RequestOptions): ApiPromise&lt;number[][], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsIdOhlc();
  // TODO: Handle 'response' of type number[][]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list). |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of price data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies). |
| <code>days?</code> | <code>[Days](src/models/days.ts)</code> | Data up to number of days ago. |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal place for currency price value. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>number[][]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsIdTickers(request: Coins.CoinsIdTickersRequest, options?: RequestOptions): ApiPromise&lt;CoinsIdTickers, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsIdTickers();
  // TODO: Handle 'response' of type CoinsIdTickers
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Coin ID. <br>*refers to [`/coins/list`](/reference/coins-list) |
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

**OnSuccess**: <code>[CoinsIdTickers](src/models/coins-id-tickers.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsList(request: Coins.CoinsListRequest, options?: RequestOptions): ApiPromise&lt;CoinsList[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported coins on CoinGecko with coin ID, name and symbol

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsList();
  // TODO: Handle 'response' of type CoinsList[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[CoinsList](src/models/coins-list.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinsMarkets(request: Coins.CoinsMarketsRequest, options?: RequestOptions): ApiPromise&lt;CoinsMarket[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported coins with price, market cap, volume and market related data

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.coinsMarkets();
  // TODO: Handle 'response' of type CoinsMarket[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of coins and market data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies) |
| <code>ids?</code> | <code>string</code> | Coins' IDs, comma-separated if querying more than 1 coin. <br>*refers to [`/coins/list`](/reference/coins-list) |
| <code>names?</code> | <code>string</code> | Coins' names, comma-separated if querying more than 1 coin. |
| <code>symbols?</code> | <code>string</code> | Coins' symbols, comma-separated if querying more than 1 coin. |
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

**OnSuccess**: <code>[CoinsMarket](src/models/coins-market.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contractAddressMarketChart(request: Coins.ContractAddressMarketChartRequest, options?: RequestOptions): ApiPromise&lt;CoinsMarketChart, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the historical chart data including time in UNIX, price, market cap and 24hrs volume based on asset platform and particular token contract address

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.contractAddressMarketChart();
  // TODO: Handle 'response' of type CoinsMarketChart
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Asset platform ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list). |
| <code>contractAddress?</code> | <code>string</code> | The contract address of token. |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of market data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies). |
| <code>days?</code> | <code>string</code> | Data up to number of days ago. <br>You may use any integer or `max` for number of days. |
| <code>interval?</code> | <code>[Interval](src/models/interval.ts)</code> | Data interval, leave empty for auto granularity. |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal place for currency price value. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contractAddressMarketChartRange(request: Coins.ContractAddressMarketChartRangeRequest, options?: RequestOptions): ApiPromise&lt;CoinsMarketChart, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the historical chart data within certain time range in UNIX along with price, market cap and 24hrs volume based on asset platform and particular token contract address

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.coins.contractAddressMarketChartRange();
  // TODO: Handle 'response' of type CoinsMarketChart
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Asset platform ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list). |
| <code>contractAddress?</code> | <code>string</code> | The contract address of token. |
| <code>vsCurrency?</code> | <code>string</code> | Target currency of market data. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies). |
| <code>from?</code> | <code>number</code> | Starting date in UNIX timestamp. |
| <code>to?</code> | <code>number</code> | Ending date in UNIX timestamp. |
| <code>precision?</code> | <code>[Precision](src/models/precision.ts)</code> | Decimal place for currency price value. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CoinsMarketChart](src/models/coins-market-chart.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Derivatives

> Source: [Derivatives](src/resources/derivatives.ts)

<details>
<summary><code>derivativesExchanges(request: Derivatives.DerivativesExchangesRequest, options?: RequestOptions): ApiPromise&lt;DerivativesExchange[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.derivatives.derivativesExchanges();
  // TODO: Handle 'response' of type DerivativesExchange[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[DerivativesExchange](src/models/derivatives-exchange.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>derivativesExchangesId(request: Derivatives.DerivativesExchangesIdRequest, options?: RequestOptions): ApiPromise&lt;DerivativesExchangesId, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the derivatives exchange's related data (name, open interest, trade volume, ...) based on the exchange's ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.derivatives.derivativesExchangesId();
  // TODO: Handle 'response' of type DerivativesExchangesId
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Derivative exchange ID. <br>*refers to [`/derivatives/exchanges/list`](/reference/derivatives-exchanges-list). |
| <code>includeTickers?</code> | <code>[IncludeTickers](src/models/include-tickers.ts)</code> | Include tickers data. <br>Default: tickers data is not included. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DerivativesExchangesId](src/models/derivatives-exchanges-id.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>derivativesExchangesList(options?: RequestOptions): ApiPromise&lt;DerivativesExchangesList[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported derivatives exchanges with ID and name on CoinGecko

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.derivatives.derivativesExchangesList();
  // TODO: Handle 'response' of type DerivativesExchangesList[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DerivativesExchangesList](src/models/derivatives-exchanges-list.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>derivativesTickers(options?: RequestOptions): ApiPromise&lt;DerivativesTicker[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the tickers from derivatives exchanges on CoinGecko

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.derivatives.derivativesTickers();
  // TODO: Handle 'response' of type DerivativesTicker[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DerivativesTicker](src/models/derivatives-ticker.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Entities

> Source: [Entities](src/resources/entities.ts)

<details>
<summary><code>companiesPublicTreasury(request: Entities.CompaniesPublicTreasuryRequest, options?: RequestOptions): ApiPromise&lt;PublicTreasury, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query public companies' and governments' cryptocurrency holdings by coin ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.entities.companiesPublicTreasury();
  // TODO: Handle 'response' of type PublicTreasury
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity?</code> | <code>[Entity](src/models/entity.ts)</code> | Public company or government entity. |
| <code>coinId?</code> | <code>string</code> | Coin ID. <br>e.g. `bitcoin`, `ethereum`, `solana`, `binancecoin` |
| <code>perPage?</code> | <code>number</code> | Total results per page. <br>Default value: 250 <br>Valid values: 1...250 |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>order?</code> | <code>[Order5](src/models/order5.ts)</code> | Sort order for results. <br>Default: `total_holdings_usd_desc` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicTreasury](src/models/unions/public-treasury.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>entitiesList(request: Entities.EntitiesListRequest, options?: RequestOptions): ApiPromise&lt;EntitiesList[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported entities on CoinGecko with entity ID, name, symbol, and country

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.entities.entitiesList();
  // TODO: Handle 'response' of type EntitiesList[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[EntitiesList](src/models/entities-list.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Exchanges

> Source: [Exchanges](src/resources/exchanges.ts)

<details>
<summary><code>exchangeRates(options?: RequestOptions): ApiPromise&lt;ExchangeRates, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query BTC exchange rates with other currencies

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchangeRates();
  // TODO: Handle 'response' of type ExchangeRates
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExchangeRates](src/models/exchange-rates.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchanges(request: Exchanges.ExchangesRequest, options?: RequestOptions): ApiPromise&lt;Exchange1[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported exchanges with exchanges' data (ID, name, country, etc.) that have active trading volumes on CoinGecko

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchanges();
  // TODO: Handle 'response' of type Exchange1[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[Exchange1](src/models/exchange1.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchangesId(request: Exchanges.ExchangesIdRequest, options?: RequestOptions): ApiPromise&lt;ExchangesId, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query exchange's data (name, year established, country, etc.), exchange volume in BTC and top 100 tickers based on exchange's ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchangesId();
  // TODO: Handle 'response' of type ExchangesId
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Exchange ID. <br>*refers to [`/exchanges/list`](/reference/exchanges-list). |
| <code>dexPairFormat?</code> | <code>[DexPairFormat](src/models/dex-pair-format.ts)</code> | Set to `symbol` to display DEX pair base and target as symbols. <br>Default: `contract_address` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExchangesId](src/models/exchanges-id.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchangesIdTickers(request: Exchanges.ExchangesIdTickersRequest, options?: RequestOptions): ApiPromise&lt;CoinsIdTickers, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query exchange's tickers based on exchange's ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchangesIdTickers();
  // TODO: Handle 'response' of type CoinsIdTickers
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Exchange ID. <br>*refers to [`/exchanges/list`](/reference/exchanges-list). |
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

**OnSuccess**: <code>[CoinsIdTickers](src/models/coins-id-tickers.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchangesIdVolumeChart(request: Exchanges.ExchangesIdVolumeChartRequest, options?: RequestOptions): ApiPromise&lt;ExchangeVolumeChart[][], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange's ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchangesIdVolumeChart();
  // TODO: Handle 'response' of type ExchangeVolumeChart[][]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Exchange ID or derivative exchange ID. <br>*refers to [`/exchanges/list`](/reference/exchanges-list) or [`/derivatives/exchanges/list`](/reference/derivatives-exchanges-list). |
| <code>days?</code> | <code>[Days](src/models/days.ts)</code> | Data up to number of days ago. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExchangeVolumeChart](src/models/unions/exchange-volume-chart.ts)[][]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchangesList(request: Exchanges.ExchangesListRequest, options?: RequestOptions): ApiPromise&lt;ExchangesList[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported exchanges with ID and name

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exchanges.exchangesList();
  // TODO: Handle 'response' of type ExchangesList[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[ExchangesList](src/models/exchanges-list.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GlobalApi

> Source: [GlobalApi](src/resources/global-api.ts)

<details>
<summary><code>cryptoGlobal(options?: RequestOptions): ApiPromise&lt;Global, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalApi.cryptoGlobal();
  // TODO: Handle 'response' of type Global
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Global](src/models/global.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>globalDefi(options?: RequestOptions): ApiPromise&lt;GlobalDeFi, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalApi.globalDefi();
  // TODO: Handle 'response' of type GlobalDeFi
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GlobalDeFi](src/models/global-de-fi.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Misc

> Source: [Misc](src/resources/misc.ts)

<details>
<summary><code>assetPlatformsList(request: Misc.AssetPlatformsListRequest, options?: RequestOptions): ApiPromise&lt;AssetPlatform[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported asset platforms (blockchain networks) on CoinGecko

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.assetPlatformsList();
  // TODO: Handle 'response' of type AssetPlatform[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AssetPlatform](src/models/asset-platform.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pingServer(options?: RequestOptions): ApiPromise&lt;PingServer, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To check the API server status

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.pingServer();
  // TODO: Handle 'response' of type PingServer
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PingServer](src/models/ping-server.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokenLists(request: Misc.TokenListsRequest, options?: RequestOptions): ApiPromise&lt;TokenLists, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.tokenLists();
  // TODO: Handle 'response' of type TokenLists
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>assetPlatformId?</code> | <code>string</code> | Asset platform ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list). |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenLists](src/models/token-lists.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Nfts

> Source: [Nfts](src/resources/nfts.ts)

<details>
<summary><code>nftsContractAddress(request: Nfts.NftsContractAddressRequest, options?: RequestOptions): ApiPromise&lt;NftData, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection contract address and respective asset platform

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.nfts.nftsContractAddress();
  // TODO: Handle 'response' of type NftData
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>assetPlatformId?</code> | <code>string</code> | Asset platform ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list). |
| <code>contractAddress?</code> | <code>string</code> | Contract address of the NFT collection. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NftData](src/models/nft-data.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nftsId(request: Nfts.NftsIdRequest, options?: RequestOptions): ApiPromise&lt;NftData, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.nfts.nftsId();
  // TODO: Handle 'response' of type NftData
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | NFT collection ID. <br>*refers to [`/nfts/list`](/reference/nfts-list). |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NftData](src/models/nft-data.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nftsList(request: Nfts.NftsListRequest, options?: RequestOptions): ApiPromise&lt;NfTsList[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.nfts.nftsList();
  // TODO: Handle 'response' of type NfTsList[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[NfTsList](src/models/nf-ts-list.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Onchain

> Source: [Onchain](src/resources/onchain.ts)

<details>
<summary><code>dexesList(request: Onchain.DexesListRequest, options?: RequestOptions): ApiPromise&lt;DexesList, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported decentralized exchanges (DEXs) based on the provided network on GeckoTerminal

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.dexesList();
  // TODO: Handle 'response' of type DexesList
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DexesList](src/models/dexes-list.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>latestPoolsList(request: Onchain.LatestPoolsListRequest, options?: RequestOptions): ApiPromise&lt;Pool, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the latest pools across all networks on GeckoTerminal

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.latestPoolsList();
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[Pool](src/models/pool.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>latestPoolsNetwork(request: Onchain.LatestPoolsNetworkRequest, options?: RequestOptions): ApiPromise&lt;Pool, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the latest pools based on the provided network

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.latestPoolsNetwork();
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>includeGtCommunityData?</code> | <code>boolean</code> | Include GeckoTerminal community data (sentiment votes, suspicious reports). <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pool](src/models/pool.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>networksList(request: Onchain.NetworksListRequest, options?: RequestOptions): ApiPromise&lt;NetworksList, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To retrieve a list of all supported networks on GeckoTerminal

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.networksList();
  // TODO: Handle 'response' of type NetworksList
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[NetworksList](src/models/networks-list.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>onchainSimplePrice(request: Onchain.OnchainSimplePriceRequest, options?: RequestOptions): ApiPromise&lt;OnchainSimplePrice, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get token price based on the provided token contract address on a network

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.onchainSimplePrice();
  // TODO: Handle 'response' of type OnchainSimplePrice
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>addresses?</code> | <code>string</code> | Token contract address, comma-separated if more than one token contract address. |
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

**OnSuccess**: <code>[OnchainSimplePrice](src/models/onchain-simple-price.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>poolAddress(request: Onchain.PoolAddressRequest, options?: RequestOptions): ApiPromise&lt;PoolAddressData, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the specific pool based on the provided network and pool address

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.poolAddress();
  // TODO: Handle 'response' of type PoolAddressData
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>address?</code> | <code>string</code> | Pool address. |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>includeVolumeBreakdown?</code> | <code>boolean</code> | Include volume breakdown. <br>Default: `false` |
| <code>includeComposition?</code> | <code>boolean</code> | Include pool composition. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PoolAddressData](src/models/pool-address-data.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>poolOhlcvContractAddress(request: Onchain.PoolOhlcvContractAddressRequest, options?: RequestOptions): ApiPromise&lt;Ohlcv, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.poolOhlcvContractAddress();
  // TODO: Handle 'response' of type Ohlcv
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>poolAddress?</code> | <code>string</code> | Pool contract address. |
| <code>timeframe?</code> | <code>[Timeframe](src/models/timeframe.ts)</code> | Timeframe of the OHLCV chart. |
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

**OnSuccess**: <code>[Ohlcv](src/models/ohlcv.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>poolTokenInfoContractAddress(request: Onchain.PoolTokenInfoContractAddressRequest, options?: RequestOptions): ApiPromise&lt;PoolTokensInfo, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query pool metadata (base and quote token details, image, socials, websites, description, contract address, etc.) based on a provided pool contract address on a network

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.poolTokenInfoContractAddress();
  // TODO: Handle 'response' of type PoolTokensInfo
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>poolAddress?</code> | <code>string</code> | Pool contract address. |
| <code>include?</code> | <code>[Include2](src/models/include2.ts)</code> | Attributes to include. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PoolTokensInfo](src/models/pool-tokens-info.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>poolTradesContractAddress(request: Onchain.PoolTradesContractAddressRequest, options?: RequestOptions): ApiPromise&lt;Trades, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the last 300 trades in the past 24 hours based on the provided pool address

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.poolTradesContractAddress();
  // TODO: Handle 'response' of type Trades
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>poolAddress?</code> | <code>string</code> | Pool contract address. |
| <code>tradeVolumeInUsdGreaterThan?</code> | <code>number</code> | Filter trades by trade volume in USD greater than this value. <br>Default value: 0 |
| <code>token?</code> | <code>string</code> | Return trades for token, use this to invert the chart. <br>Available values: `base`, `quote`, or token address. <br>Default: `base` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Trades](src/models/trades.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>poolsAddresses(request: Onchain.PoolsAddressesRequest, options?: RequestOptions): ApiPromise&lt;MultiPoolAddressData, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query multiple pools based on the provided network and pool addresses

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.poolsAddresses();
  // TODO: Handle 'response' of type MultiPoolAddressData
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>addresses?</code> | <code>string</code> | Pool contract address, comma-separated if more than one pool contract address. |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>includeVolumeBreakdown?</code> | <code>boolean</code> | Include volume breakdown. <br>Default: `false` |
| <code>includeComposition?</code> | <code>boolean</code> | Include pool composition. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MultiPoolAddressData](src/models/multi-pool-address-data.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchPools(request: Onchain.SearchPoolsRequest, options?: RequestOptions): ApiPromise&lt;PoolSearch, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To search for pools across all networks by pool address, token name, token symbol, or token contract address

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.searchPools();
  // TODO: Handle 'response' of type PoolSearch
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query?</code> | <code>string</code> | Search query: pool contract address, token name, token symbol, or token contract address. |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PoolSearch](src/models/pool-search.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokenDataContractAddress(request: Onchain.TokenDataContractAddressRequest, options?: RequestOptions): ApiPromise&lt;TokenData, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query specific token data based on the provided token contract address on a network

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.tokenDataContractAddress();
  // TODO: Handle 'response' of type TokenData
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>address?</code> | <code>string</code> | Token contract address. |
| <code>include?</code> | <code>[Include](src/models/include.ts)</code> | Attributes to include. |
| <code>includeComposition?</code> | <code>boolean</code> | Include pool composition. <br>Default: `false` |
| <code>includeInactiveSource?</code> | <code>boolean</code> | Include token data from inactive pools using the most recent swap. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenData](src/models/token-data.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokenInfoContractAddress(request: Onchain.TokenInfoContractAddressRequest, options?: RequestOptions): ApiPromise&lt;TokenInfo, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query token metadata (name, symbol, CoinGecko ID, image, socials, websites, description, etc.) based on a provided token contract address on a network

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.tokenInfoContractAddress();
  // TODO: Handle 'response' of type TokenInfo
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>address?</code> | <code>string</code> | Token contract address. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenInfo](src/models/token-info.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokensDataContractAddresses(request: Onchain.TokensDataContractAddressesRequest, options?: RequestOptions): ApiPromise&lt;MultiTokenData, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query multiple tokens data based on the provided token contract addresses on a network

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.tokensDataContractAddresses();
  // TODO: Handle 'response' of type MultiTokenData
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>addresses?</code> | <code>string</code> | Token contract address, comma-separated if more than one token contract address. |
| <code>include?</code> | <code>[Include](src/models/include.ts)</code> | Attributes to include. |
| <code>includeComposition?</code> | <code>boolean</code> | Include pool composition. <br>Default: `false` |
| <code>includeInactiveSource?</code> | <code>boolean</code> | Include tokens from inactive pools using the most recent swap. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MultiTokenData](src/models/multi-token-data.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokensInfoRecentUpdated(request: Onchain.TokensInfoRecentUpdatedRequest, options?: RequestOptions): ApiPromise&lt;TokenInfoRecentlyUpdated, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query 100 most recently updated tokens info of a specific network or across all networks on GeckoTerminal

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.tokensInfoRecentUpdated();
  // TODO: Handle 'response' of type TokenInfoRecentlyUpdated
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TokenInfoRecentlyUpdated](src/models/token-info-recently-updated.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>topPoolsContractAddress(request: Onchain.TopPoolsContractAddressRequest, options?: RequestOptions): ApiPromise&lt;Pool, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query top pools based on the provided token contract address on a network

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.topPoolsContractAddress();
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>tokenAddress?</code> | <code>string</code> | Token contract address. |
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

**OnSuccess**: <code>[Pool](src/models/pool.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>topPoolsDex(request: Onchain.TopPoolsDexRequest, options?: RequestOptions): ApiPromise&lt;Pool, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the top pools based on the provided network and decentralized exchange (DEX)

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.topPoolsDex();
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>dex?</code> | <code>string</code> | DEX ID. <br>*refers to [`/onchain/networks/{network}/dexes`](/reference/dexes-list). |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>sort?</code> | <code>[Sort](src/models/sort.ts)</code> | Sort the pools by field. <br>Default: `h24_tx_count_desc` |
| <code>includeGtCommunityData?</code> | <code>boolean</code> | Include GeckoTerminal community data (sentiment votes, suspicious reports). <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pool](src/models/pool.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>topPoolsNetwork(request: Onchain.TopPoolsNetworkRequest, options?: RequestOptions): ApiPromise&lt;Pool, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the top pools based on the provided network

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.topPoolsNetwork();
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>sort?</code> | <code>[Sort](src/models/sort.ts)</code> | Sort the pools by field. <br>Default: `h24_tx_count_desc` |
| <code>includeGtCommunityData?</code> | <code>boolean</code> | Include GeckoTerminal community data (sentiment votes, suspicious reports). <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pool](src/models/pool.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>trendingPoolsList(request: Onchain.TrendingPoolsListRequest, options?: RequestOptions): ApiPromise&lt;Pool, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the trending pools across all networks on GeckoTerminal

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.trendingPoolsList();
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[Pool](src/models/pool.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>trendingPoolsNetwork(request: Onchain.TrendingPoolsNetworkRequest, options?: RequestOptions): ApiPromise&lt;Pool, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the trending pools based on the provided network

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.onchain.trendingPoolsNetwork();
  // TODO: Handle 'response' of type Pool
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network?</code> | <code>string</code> | Network ID. <br>*refers to [`/onchain/networks`](/reference/networks-list). |
| <code>include?</code> | <code>string</code> | Attributes to include, comma-separated if more than one. <br>Available values: `base_token`, `quote_token`, `dex` |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>duration?</code> | <code>[Duration](src/models/duration.ts)</code> | Duration to sort trending list by. <br>Default: `24h` |
| <code>includeGtCommunityData?</code> | <code>boolean</code> | Include GeckoTerminal community data (sentiment votes, suspicious reports). <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pool](src/models/pool.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PublicTreasuryApi

> Source: [PublicTreasuryApi](src/resources/public-treasury-api.ts)

<details>
<summary><code>publicTreasuryEntity(request: PublicTreasuryApi.PublicTreasuryEntityRequest, options?: RequestOptions): ApiPromise&lt;PublicTreasuryEntity, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query public companies' and governments' cryptocurrency holdings by entity ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicTreasuryApi.publicTreasuryEntity();
  // TODO: Handle 'response' of type PublicTreasuryEntity
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityId?</code> | <code>string</code> | Public company or government entity ID. <br>*refers to [`/entities/list`](/reference/entities-list). |
| <code>holdingAmountChange?</code> | <code>string</code> | Include holding amount change for specified timeframes, comma-separated if querying more than 1 timeframe. <br>Valid values: `7d`, `14d`, `30d`, `90d`, `1y`, `ytd` |
| <code>holdingChangePercentage?</code> | <code>string</code> | Include holding change percentage for specified timeframes, comma-separated if querying more than 1 timeframe. <br>Valid values: `7d`, `14d`, `30d`, `90d`, `1y`, `ytd` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicTreasuryEntity](src/models/public-treasury-entity.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publicTreasuryEntityChart(request: PublicTreasuryApi.PublicTreasuryEntityChartRequest, options?: RequestOptions): ApiPromise&lt;PublicTreasuryEntityChart, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query historical cryptocurrency holdings chart of public companies and governments by entity ID and coin ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicTreasuryApi.publicTreasuryEntityChart();
  // TODO: Handle 'response' of type PublicTreasuryEntityChart
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityId?</code> | <code>string</code> | Public company or government entity ID. <br>*refers to [`/entities/list`](/reference/entities-list). |
| <code>coinId?</code> | <code>string</code> | Coin ID. <br>e.g. `bitcoin`, `ethereum`, `solana`, `binancecoin` |
| <code>days?</code> | <code>string</code> | Data up to number of days ago. <br>Valid values: `7`, `14`, `30`, `90`, `180`, `365` |
| <code>includeEmptyIntervals?</code> | <code>boolean</code> | Include empty intervals with no transaction data. <br>Default: `false` |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicTreasuryEntityChart](src/models/public-treasury-entity-chart.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publicTreasuryTransactionHistory(request: PublicTreasuryApi.PublicTreasuryTransactionHistoryRequest, options?: RequestOptions): ApiPromise&lt;PublicTreasuryTransactionHistory, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query public companies' and governments' cryptocurrency transaction history by entity ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.publicTreasuryApi.publicTreasuryTransactionHistory();
  // TODO: Handle 'response' of type PublicTreasuryTransactionHistory
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityId?</code> | <code>string</code> | Public company or government entity ID. <br>*refers to [`/entities/list`](/reference/entities-list). |
| <code>perPage?</code> | <code>number</code> | Total results per page. <br>Default value: 100 <br>Valid values: 1...250 |
| <code>page?</code> | <code>number</code> | Page through results. <br>Default value: 1 |
| <code>order?</code> | <code>[Order6](src/models/order6.ts)</code> | Sort order of transactions. <br>Default: `date_desc` |
| <code>coinIds?</code> | <code>string</code> | Filter transactions by coin IDs, comma-separated if querying more than 1 coin. <br>*refers to [`/coins/list`](/reference/coins-list). |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicTreasuryTransactionHistory](src/models/public-treasury-transaction-history.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SearchApi

> Source: [SearchApi](src/resources/search-api.ts)

<details>
<summary><code>searchData(request: SearchApi.SearchDataRequest, options?: RequestOptions): ApiPromise&lt;Search, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To search for coins, categories and markets listed on CoinGecko

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchApi.searchData({ query });
  // TODO: Handle 'response' of type Search
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[Search](src/models/search.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>trendingSearch(options?: RequestOptions): ApiPromise&lt;TrendingSearch, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query trending search coins, NFTs and categories on CoinGecko in the last 24 hours

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchApi.trendingSearch();
  // TODO: Handle 'response' of type TrendingSearch
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrendingSearch](src/models/trending-search.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Simple

> Source: [Simple](src/resources/simple.ts)

<details>
<summary><code>simplePrice(request: Simple.SimplePriceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, SimplePrice&gt;, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query the prices of one or more coins by using their unique Coin API IDs, symbols, or names

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simple.simplePrice();
  // TODO: Handle 'response' of type Record<string, SimplePrice>
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vsCurrencies?</code> | <code>string</code> | Target currency of coins, comma-separated if querying more than 1 currency. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies) |
| <code>ids?</code> | <code>string</code> | Coins' IDs, comma-separated if querying more than 1 coin. <br>*refers to [`/coins/list`](/reference/coins-list) |
| <code>names?</code> | <code>string</code> | Coins' names, comma-separated if querying more than 1 coin. |
| <code>symbols?</code> | <code>string</code> | Coins' symbols, comma-separated if querying more than 1 coin. |
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

**OnSuccess**: <code>Record&lt;string, [SimplePrice](src/models/simple-price.ts)&gt;</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>simpleSupportedCurrencies(options?: RequestOptions): ApiPromise&lt;string[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query all the supported currencies on CoinGecko

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simple.simpleSupportedCurrencies();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>simpleTokenPrice(request: Simple.SimpleTokenPriceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, SimplePrice&gt;, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To query one or more token prices by using their token contract addresses

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simple.simpleTokenPrice();
  // TODO: Handle 'response' of type Record<string, SimplePrice>
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Asset platform's ID. <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list) |
| <code>contractAddresses?</code> | <code>string</code> | Token contract addresses, comma-separated if querying more than 1 token |
| <code>vsCurrencies?</code> | <code>string</code> | Target currency of coins, comma-separated if querying more than 1 currency. <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies) |
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

**OnSuccess**: <code>Record&lt;string, [SimplePrice](src/models/simple-price.ts)&gt;</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

