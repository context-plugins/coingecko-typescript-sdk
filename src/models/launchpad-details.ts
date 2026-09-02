import { s, type Schema } from "../core/index.js";

export type LaunchpadDetails = {
  graduationPercentage?: number;
  completed?: boolean;
  completedAt?: string | null;
  migratedDestinationPoolAddress?: string | null;
};

export const launchpadDetailsSchema: Schema<LaunchpadDetails> = s.object<LaunchpadDetails>({
  graduationPercentage: s.optional(s.number()),
  completed: s.optional(s.boolean()),
  completedAt: s.optionalNullable(s.string()),
  migratedDestinationPoolAddress: s.optionalNullable(s.string()),
  _keysMap: {
    graduationPercentage: "graduation_percentage",
    completedAt: "completed_at",
    migratedDestinationPoolAddress: "migrated_destination_pool_address",
  },
});
