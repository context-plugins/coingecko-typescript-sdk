import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { entitiesListSchema, type EntitiesList } from "../models/entities-list.js";
import { entityTypeSchema, type EntityType } from "../models/entity-type.js";
import { Entity, entitySchema } from "../models/entity.js";
import { order5Schema, type Order5 } from "../models/order5.js";
import { publicTreasurySchema, type PublicTreasury } from "../models/unions/public-treasury.js";
import type { Servers } from "../servers.js";

/**
 * Entity directory and per-entity holdings
 */
export class Entities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Crypto Treasury Holdings by Coin ID
   *
   * @remarks
   * To query public companies' and governments' cryptocurrency holdings by coin ID
   *
   * @returns Public companies or governments crypto treasury holdings data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companiesPublicTreasury(
    request: Entities.CompaniesPublicTreasuryRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicTreasury, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{entity}/public_treasury/{coin_id}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "entity", value: request.entity, schema: s.defaulted(entitySchema, Entity.Companies) },
          { name: "coin_id", value: request.coinId, schema: s.defaulted(s.string(), "bitcoin") },
        ],
        query: [
          { name: "per_page", value: request.perPage, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order5Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicTreasurySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Entities List
   *
   * @remarks
   * To query all the supported entities on CoinGecko with entity ID, name, symbol, and country
   *
   * @returns List of entities with ID, name, symbol, and country
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  entitiesList(
    request: Entities.EntitiesListRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesList[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/entities/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [
          {
            name: "entity_type",
            value: request.entityType,
            schema: s.optional(s.lazy(() => entityTypeSchema)),
          },
          { name: "per_page", value: request.perPage, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => entitiesListSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Entities {
  export type CompaniesPublicTreasuryRequest = {
    /** Public company or government entity. @default Entity.Companies */
    entity?: Entity;
    /** Coin ID. e.g. `bitcoin`, `ethereum`, `solana`, `binancecoin` @default "bitcoin" */
    coinId?: string;
    /** Total results per page. Default value: 250 Valid values: 1...250 */
    perPage?: number;
    /** Page through results. Default value: 1 */
    page?: number;
    /** Sort order for results. Default: `total_holdings_usd_desc` */
    order?: Order5;
  };

  export type EntitiesListRequest = {
    /** Filter by entity type. */
    entityType?: EntityType;
    /** Total results per page. Default value: 100 Valid values: 1...250 */
    perPage?: number;
    /** Page through results. Default value: 1 */
    page?: number;
  };
}
