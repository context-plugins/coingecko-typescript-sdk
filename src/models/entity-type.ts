import { s, type EnumSchema } from "../core/index.js";

export const EntityType = {
  Company: "company",
  Government: "government",
} as const;
export type EntityType = (typeof EntityType)[keyof typeof EntityType] | (string & {});

export const entityTypeSchema: EnumSchema<EntityType> = s.enumOf<EntityType>(EntityType);
