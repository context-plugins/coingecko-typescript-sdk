import { s, type EnumSchema } from "../core/index.js";

export const Status = {
  Active: "active",
  Inactive: "inactive",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
