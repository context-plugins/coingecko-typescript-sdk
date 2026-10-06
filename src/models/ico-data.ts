import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ICO data */
export type IcoData = {
  /** ICO start date */
  icoStartDate?: string;
  /** ICO end date */
  icoEndDate?: string;
  /** Short description */
  shortDesc?: string;
  /** Detailed description */
  description?: string;
  /** ICO related links */
  links?: Record<string, string>;
  /** Softcap currency */
  softcapCurrency?: string;
  /** Hardcap currency */
  hardcapCurrency?: string;
  /** Total raised currency */
  totalRaisedCurrency?: string;
  /** Softcap amount */
  softcapAmount?: number;
  /** Hardcap amount */
  hardcapAmount?: number;
  /** Total raised amount */
  totalRaised?: number;
  /** Quote pre-sale currency */
  quotePreSaleCurrency?: string;
  /** Base pre-sale amount */
  basePreSaleAmount?: number;
  /** Quote pre-sale amount */
  quotePreSaleAmount?: number;
  /** Quote public sale currency */
  quotePublicSaleCurrency?: string;
  /** Base public sale amount */
  basePublicSaleAmount?: number;
  /** Quote public sale amount */
  quotePublicSaleAmount?: number;
  /** Accepting currencies */
  acceptingCurrencies?: string;
  /** Country of origin */
  countryOrigin?: string;
  /** Pre-sale start date */
  preSaleStartDate?: string;
  /** Pre-sale end date */
  preSaleEndDate?: string;
  /** Whitelist URL */
  whitelistUrl?: string;
  /** Whitelist start date */
  whitelistStartDate?: string;
  /** Whitelist end date */
  whitelistEndDate?: string;
  /** Bounty detail URL */
  bountyDetailUrl?: string;
  /** Amount for sale */
  amountForSale?: number;
  /** KYC required */
  kycRequired?: boolean;
  /** Whitelist available */
  whitelistAvailable?: boolean;
  /** Pre-sale available */
  preSaleAvailable?: boolean;
  /** Pre-sale ended */
  preSaleEnded?: boolean;
};

export const icoDataSchema: Schema<IcoData> = s.object<IcoData>({
  icoStartDate: s.optional(s.string()),
  icoEndDate: s.optional(s.string()),
  shortDesc: s.optional(s.string()),
  description: s.optional(s.string()),
  links: s.optional(s.record(s.string(), s.string())),
  softcapCurrency: s.optional(s.string()),
  hardcapCurrency: s.optional(s.string()),
  totalRaisedCurrency: s.optional(s.string()),
  softcapAmount: s.optional(s.float64()),
  hardcapAmount: s.optional(s.float64()),
  totalRaised: s.optional(s.float64()),
  quotePreSaleCurrency: s.optional(s.string()),
  basePreSaleAmount: s.optional(s.float64()),
  quotePreSaleAmount: s.optional(s.float64()),
  quotePublicSaleCurrency: s.optional(s.string()),
  basePublicSaleAmount: s.optional(s.float64()),
  quotePublicSaleAmount: s.optional(s.float64()),
  acceptingCurrencies: s.optional(s.string()),
  countryOrigin: s.optional(s.string()),
  preSaleStartDate: s.optional(s.string()),
  preSaleEndDate: s.optional(s.string()),
  whitelistUrl: s.optional(s.string()),
  whitelistStartDate: s.optional(s.string()),
  whitelistEndDate: s.optional(s.string()),
  bountyDetailUrl: s.optional(s.string()),
  amountForSale: s.optional(s.float64()),
  kycRequired: s.optional(s.boolean()),
  whitelistAvailable: s.optional(s.boolean()),
  preSaleAvailable: s.optional(s.boolean()),
  preSaleEnded: s.optional(s.boolean()),
  _keysMap: {
    icoStartDate: "ico_start_date",
    icoEndDate: "ico_end_date",
    shortDesc: "short_desc",
    softcapCurrency: "softcap_currency",
    hardcapCurrency: "hardcap_currency",
    totalRaisedCurrency: "total_raised_currency",
    softcapAmount: "softcap_amount",
    hardcapAmount: "hardcap_amount",
    totalRaised: "total_raised",
    quotePreSaleCurrency: "quote_pre_sale_currency",
    basePreSaleAmount: "base_pre_sale_amount",
    quotePreSaleAmount: "quote_pre_sale_amount",
    quotePublicSaleCurrency: "quote_public_sale_currency",
    basePublicSaleAmount: "base_public_sale_amount",
    quotePublicSaleAmount: "quote_public_sale_amount",
    acceptingCurrencies: "accepting_currencies",
    countryOrigin: "country_origin",
    preSaleStartDate: "pre_sale_start_date",
    preSaleEndDate: "pre_sale_end_date",
    whitelistUrl: "whitelist_url",
    whitelistStartDate: "whitelist_start_date",
    whitelistEndDate: "whitelist_end_date",
    bountyDetailUrl: "bounty_detail_url",
    amountForSale: "amount_for_sale",
    kycRequired: "kyc_required",
    whitelistAvailable: "whitelist_available",
    preSaleAvailable: "pre_sale_available",
    preSaleEnded: "pre_sale_ended",
  },
});
