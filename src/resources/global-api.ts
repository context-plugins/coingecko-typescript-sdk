import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth } from "../core/index.js";
import { globalDeFiSchema, type GlobalDeFi } from "../models/global-de-fi.js";
import { globalSchema, type Global } from "../models/global.js";
import type { Servers } from "../servers.js";

export class GlobalApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cryptoGlobal(options?: RequestOptions): ApiPromise<Global, ResponseError> {
    return this.#rawClient.execute<Global, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/global"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: globalSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  globalDefi(options?: RequestOptions): ApiPromise<GlobalDeFi, ResponseError> {
    return this.#rawClient.execute<GlobalDeFi, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/global/decentralized_finance_defi"),
        auth: anyAuth(this.#auth.headerAuth, this.#auth.queryAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: globalDeFiSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}
