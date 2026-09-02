import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { entitiesListSchema, type EntitiesList } from "../models/entities-list.js";
import { entityTypeSchema, type EntityType } from "../models/entity-type.js";
import { Entity, entitySchema } from "../models/entity.js";
import { order5Schema, type Order5 } from "../models/order5.js";
import { publicTreasurySchema, type PublicTreasury } from "../models/unions/public-treasury.js";
import type { Servers } from "../servers.js";

export class Entities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  companiesPublicTreasury(
    request: Entities.CompaniesPublicTreasuryRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicTreasury, ResponseError> {
    return this.#rawClient.execute<PublicTreasury, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/{entity}/public_treasury/{coin_id}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          { name: "entity", value: request.entity, schema: s.defaulted(entitySchema, Entity.Companies) },
          { name: "coin_id", value: request.coinId, schema: s.defaulted(s.string(), "bitcoin") },
        ],
        query: [
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order5Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicTreasurySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  entitiesList(
    request: Entities.EntitiesListRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesList[], ResponseError> {
    return this.#rawClient.execute<EntitiesList[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/entities/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [
          {
            name: "entity_type",
            value: request.entityType,
            schema: s.optional(s.lazy(() => entityTypeSchema)),
          },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => entitiesListSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Entities {
  export type CompaniesPublicTreasuryRequest = {
    entity?: Entity;
    coinId?: string;
    perPage?: number;
    page?: number;
    order?: Order5;
  };

  export type EntitiesListRequest = {
    entityType?: EntityType;
    perPage?: number;
    page?: number;
  };
}
