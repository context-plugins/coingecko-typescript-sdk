import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { order6Schema, type Order6 } from "../models/order6.js";
import {
  publicTreasuryEntityChartSchema,
  type PublicTreasuryEntityChart,
} from "../models/public-treasury-entity-chart.js";
import { publicTreasuryEntitySchema, type PublicTreasuryEntity } from "../models/public-treasury-entity.js";
import {
  publicTreasuryTransactionHistorySchema,
  type PublicTreasuryTransactionHistory,
} from "../models/public-treasury-transaction-history.js";
import type { Servers } from "../servers.js";

/**
 * Public companies and entities holding crypto treasuries
 */
export class PublicTreasuryApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Crypto Treasury Holdings by Entity ID
   *
   * @remarks
   * To query public companies' and governments' cryptocurrency holdings by entity ID
   *
   * @returns Public company or government crypto treasury holdings data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  publicTreasuryEntity(
    request: PublicTreasuryApi.PublicTreasuryEntityRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicTreasuryEntity, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/public_treasury/{entity_id}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "entity_id", value: request.entityId, schema: s.defaulted(s.string(), "strategy") },
        ],
        query: [
          {
            name: "holding_amount_change",
            value: request.holdingAmountChange,
            schema: s.optional(s.string()),
          },
          {
            name: "holding_change_percentage",
            value: request.holdingChangePercentage,
            schema: s.optional(s.string()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicTreasuryEntitySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Crypto Treasury Holdings Historical Chart Data by ID
   *
   * @remarks
   * To query historical cryptocurrency holdings chart of public companies and governments by entity
   * ID and coin ID
   *
   * @returns Crypto treasury holdings historical chart data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  publicTreasuryEntityChart(
    request: PublicTreasuryApi.PublicTreasuryEntityChartRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicTreasuryEntityChart, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/public_treasury/{entity_id}/{coin_id}/holding_chart"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "entity_id", value: request.entityId, schema: s.defaulted(s.string(), "strategy") },
          { name: "coin_id", value: request.coinId, schema: s.defaulted(s.string(), "bitcoin") },
        ],
        query: [
          { name: "days", value: request.days, schema: s.defaulted(s.string(), "365") },
          {
            name: "include_empty_intervals",
            value: request.includeEmptyIntervals,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicTreasuryEntityChartSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Crypto Treasury Transaction History by Entity ID
   *
   * @remarks
   * To query public companies' and governments' cryptocurrency transaction history by entity ID
   *
   * @returns Crypto treasury transaction history data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  publicTreasuryTransactionHistory(
    request: PublicTreasuryApi.PublicTreasuryTransactionHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicTreasuryTransactionHistory, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/public_treasury/{entity_id}/transaction_history"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "entity_id", value: request.entityId, schema: s.defaulted(s.string(), "strategy") },
        ],
        query: [
          { name: "per_page", value: request.perPage, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order6Schema)) },
          { name: "coin_ids", value: request.coinIds, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicTreasuryTransactionHistorySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace PublicTreasuryApi {
  export type PublicTreasuryEntityRequest = {
    /**
     * Public company or government entity ID. *refers to
     * [`/entities/list`](/reference/entities-list).
     *
     * @default "strategy"
     */
    entityId?: string;
    /**
     * Include holding amount change for specified timeframes, comma-separated if querying more than
     * 1 timeframe. Valid values: `7d`, `14d`, `30d`, `90d`, `1y`, `ytd`
     */
    holdingAmountChange?: string;
    /**
     * Include holding change percentage for specified timeframes, comma-separated if querying more
     * than 1 timeframe. Valid values: `7d`, `14d`, `30d`, `90d`, `1y`, `ytd`
     */
    holdingChangePercentage?: string;
  };

  export type PublicTreasuryEntityChartRequest = {
    /**
     * Public company or government entity ID. *refers to
     * [`/entities/list`](/reference/entities-list).
     *
     * @default "strategy"
     */
    entityId?: string;
    /** Coin ID. e.g. `bitcoin`, `ethereum`, `solana`, `binancecoin` @default "bitcoin" */
    coinId?: string;
    /**
     * Data up to number of days ago. Valid values: `7`, `14`, `30`, `90`, `180`, `365`
     *
     * @default "365"
     */
    days?: string;
    /** Include empty intervals with no transaction data. Default: `false` */
    includeEmptyIntervals?: boolean;
  };

  export type PublicTreasuryTransactionHistoryRequest = {
    /**
     * Public company or government entity ID. *refers to
     * [`/entities/list`](/reference/entities-list).
     *
     * @default "strategy"
     */
    entityId?: string;
    /** Total results per page. Default value: 100 Valid values: 1...250 */
    perPage?: number;
    /** Page through results. Default value: 1 */
    page?: number;
    /** Sort order of transactions. Default: `date_desc` */
    order?: Order6;
    /**
     * Filter transactions by coin IDs, comma-separated if querying more than 1 coin. *refers to
     * [`/coins/list`](/reference/coins-list).
     */
    coinIds?: string;
  };
}
