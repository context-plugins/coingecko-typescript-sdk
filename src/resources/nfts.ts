import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { nfTsListSchema, type NfTsList } from "../models/nf-ts-list.js";
import { nftDataSchema, type NftData } from "../models/nft-data.js";
import { order7Schema, type Order7 } from "../models/order7.js";
import type { Servers } from "../servers.js";

/**
 * NFT collection lists and details
 */
export class Nfts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * NFTs Collection Data by Contract Address
   *
   * @remarks
   * To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection
   * contract address and respective asset platform
   *
   * @returns NFT collection data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nftsContractAddress(
    request: Nfts.NftsContractAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<NftData, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nfts/{asset_platform_id}/contract/{contract_address}"),
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
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: nftDataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * NFTs Collection Data by ID
   *
   * @remarks
   * To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection ID
   *
   * @returns NFT collection data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nftsId(request: Nfts.NftsIdRequest, options?: RequestOptions): ApiPromise<NftData, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nfts/{id}"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.defaulted(s.string(), "pudgy-penguins") }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: nftDataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * NFTs List
   *
   * @remarks
   * To query all supported NFTs with ID, contract address, name, asset platform ID and symbol on
   * CoinGecko
   *
   * @returns List of supported NFTs
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoinGeckoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nftsList(request: Nfts.NftsListRequest, options?: RequestOptions): ApiPromise<NfTsList[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nfts/list"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        pathParams: [],
        query: [
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order7Schema)) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => nfTsListSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Nfts {
  export type NftsContractAddressRequest = {
    /**
     * Asset platform ID. *refers to [`/asset_platforms`](/reference/asset-platforms-list).
     *
     * @default "ethereum"
     */
    assetPlatformId?: string;
    /**
     * Contract address of the NFT collection.
     *
     * @default "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"
     */
    contractAddress?: string;
  };

  export type NftsIdRequest = {
    /**
     * NFT collection ID. *refers to [`/nfts/list`](/reference/nfts-list).
     *
     * @default "pudgy-penguins"
     */
    id?: string;
  };

  export type NftsListRequest = {
    /** Sort order of responses. */
    order?: Order7;
    /** Total results per page. Valid values: 1...250 */
    perPage?: number;
    /** Page through results. */
    page?: number;
  };
}
