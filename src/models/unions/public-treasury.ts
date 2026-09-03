import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { companyTreasurySchema, type CompanyTreasury } from "../company-treasury.js";
import { governmentTreasurySchema, type GovernmentTreasury } from "../government-treasury.js";

export type PublicTreasury = CompanyTreasury | GovernmentTreasury;

export const publicTreasurySchema: Schema<PublicTreasury> = s.of<PublicTreasury>(
  s.union([s.lazy(() => companyTreasurySchema), s.lazy(() => governmentTreasurySchema)]),
);
