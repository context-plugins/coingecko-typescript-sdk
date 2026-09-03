import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IcoData = {
  icoStartDate?: string;
  icoEndDate?: string;
  shortDesc?: string;
  description?: string;
  links?: Record<string, string>;
  softcapCurrency?: string;
  hardcapCurrency?: string;
  totalRaisedCurrency?: string;
  softcapAmount?: number;
  hardcapAmount?: number;
  totalRaised?: number;
  quotePreSaleCurrency?: string;
  basePreSaleAmount?: number;
  quotePreSaleAmount?: number;
  quotePublicSaleCurrency?: string;
  basePublicSaleAmount?: number;
  quotePublicSaleAmount?: number;
  acceptingCurrencies?: string;
  countryOrigin?: string;
  preSaleStartDate?: string;
  preSaleEndDate?: string;
  whitelistUrl?: string;
  whitelistStartDate?: string;
  whitelistEndDate?: string;
  bountyDetailUrl?: string;
  amountForSale?: number;
  kycRequired?: boolean;
  whitelistAvailable?: boolean;
  preSaleAvailable?: boolean;
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
  softcapAmount: s.optional(s.number()),
  hardcapAmount: s.optional(s.number()),
  totalRaised: s.optional(s.number()),
  quotePreSaleCurrency: s.optional(s.string()),
  basePreSaleAmount: s.optional(s.number()),
  quotePreSaleAmount: s.optional(s.number()),
  quotePublicSaleCurrency: s.optional(s.string()),
  basePublicSaleAmount: s.optional(s.number()),
  quotePublicSaleAmount: s.optional(s.number()),
  acceptingCurrencies: s.optional(s.string()),
  countryOrigin: s.optional(s.string()),
  preSaleStartDate: s.optional(s.string()),
  preSaleEndDate: s.optional(s.string()),
  whitelistUrl: s.optional(s.string()),
  whitelistStartDate: s.optional(s.string()),
  whitelistEndDate: s.optional(s.string()),
  bountyDetailUrl: s.optional(s.string()),
  amountForSale: s.optional(s.number()),
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
