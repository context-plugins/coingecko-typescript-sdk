import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
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

export class PublicTreasuryApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  publicTreasuryEntity(
    request: PublicTreasuryApi.PublicTreasuryEntityRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicTreasuryEntity, ResponseError> {
    return this.#rawClient.execute<PublicTreasuryEntity, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/public_treasury/{entity_id}"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicTreasuryEntitySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  publicTreasuryEntityChart(
    request: PublicTreasuryApi.PublicTreasuryEntityChartRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicTreasuryEntityChart, ResponseError> {
    return this.#rawClient.execute<PublicTreasuryEntityChart, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/public_treasury/{entity_id}/{coin_id}/holding_chart"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicTreasuryEntityChartSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  publicTreasuryTransactionHistory(
    request: PublicTreasuryApi.PublicTreasuryTransactionHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicTreasuryTransactionHistory, ResponseError> {
    return this.#rawClient.execute<PublicTreasuryTransactionHistory, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/public_treasury/{entity_id}/transaction_history"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "entity_id", value: request.entityId, schema: s.defaulted(s.string(), "strategy") },
        ],
        query: [
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order6Schema)) },
          { name: "coin_ids", value: request.coinIds, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicTreasuryTransactionHistorySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace PublicTreasuryApi {
  export type PublicTreasuryEntityRequest = {
    entityId?: string;
    holdingAmountChange?: string;
    holdingChangePercentage?: string;
  };

  export type PublicTreasuryEntityChartRequest = {
    entityId?: string;
    coinId?: string;
    days?: string;
    includeEmptyIntervals?: boolean;
  };

  export type PublicTreasuryTransactionHistoryRequest = {
    entityId?: string;
    perPage?: number;
    page?: number;
    order?: Order6;
    coinIds?: string;
  };
}
