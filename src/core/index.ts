export { RawClient } from "./raw-client.js";
export type { ApiPromise, ApiResult } from "./api-promise.js";

export * as s from "./validation/index.js";
export { decodeResponse } from "./response-decoder.js";
export type {
  ResponseDecoder,
  JsonResponseDecoder,
  TextResponseDecoder,
  EmptyResponseDecoder,
  AnyResponseDecoder,
} from "./response-decoder.js";
export { SchemaError } from "./validation/schema-error.js";
export type { Schema, EnumSchema, Encoded, Entry } from "./validation/schema.js";

export { ResponseError } from "./response-error.js";
export type { ErrorPayload, ErrorDecoders, Declared } from "./response-error.js";

export { CoreError, ConnectionError, TimeoutError, AbortError, SdkError, AuthError } from "./errors.js";
export type { ErrorKind } from "./errors.js";

export type {
  ApiRequest,
  FetchLike,
  RequestOptions,
  UrlTemplate,
  AuthScheme,
  AuthParams,
} from "./api-request.js";

export {
  noneAuth,
  bearerAuth,
  basicAuth,
  apiKeyHeaderAuth,
  apiKeyQueryAuth,
  apiKeyCookieAuth,
  allAuth,
  anyAuth,
  oauth2Scheme,
  oauth2RefreshableScheme,
  oauth2ClientCredentialsStrategy,
  oauth2PasswordStrategy,
  oauth2AuthorizationCodeStrategy,
  PkceMethod,
} from "./auth/index.js";
export type {
  TokenProvider,
  BasicAuthCredentials,
  OAuth2ClientCredentials,
  OAuth2PasswordCredentials,
  OAuth2AuthorizationCodeCredentials,
  AuthorizationCodePrompt,
  OAuthToken,
  OAuthTokenRefreshable,
  OAuth2TokenStrategy,
  OAuth2RefreshableTokenStrategy,
  OAuth2CredentialPlacement,
} from "./auth/index.js";
export type { RequestBody } from "./request-body.js";

export type { Param, ParamStyle, ParamValue, StyledParam } from "./param-value.js";
