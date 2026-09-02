import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { nfTsListSchema, type NfTsList } from "../models/nf-ts-list.js";
import { nftDataSchema, type NftData } from "../models/nft-data.js";
import { order7Schema, type Order7 } from "../models/order7.js";
import type { Servers } from "../servers.js";

export class Nfts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nftsContractAddress(
    request: Nfts.NftsContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<NftData, ResponseError> {
    return this.#rawClient.execute<NftData, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/nfts/{asset_platform_id}/contract/{contract_address}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [
          {
            name: "asset_platform_id",
            value: request.assetPlatformId,
            schema: s.defaulted(s.string(), "ethereum"),
          },
          {
            name: "contract_address",
            value: request.contractAddress,
            schema: s.defaulted(s.string(), "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: nftDataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  nftsId(request: Nfts.NftsIdRequest, options?: RequestOptions): ApiPromise<NftData, ResponseError> {
    return this.#rawClient.execute<NftData, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/nfts/{id}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "pudgy-penguins") }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: nftDataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  nftsList(request: Nfts.NftsListRequest, options?: RequestOptions): ApiPromise<NfTsList[], ResponseError> {
    return this.#rawClient.execute<NfTsList[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/nfts/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        query: [
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order7Schema)) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => nfTsListSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Nfts {
  export type NftsContractAddressRequest = {
    assetPlatformId?: string;
    contractAddress?: string;
  };

  export type NftsIdRequest = {
    id?: string;
  };

  export type NftsListRequest = {
    order?: Order7;
    perPage?: number;
    page?: number;
  };
}
