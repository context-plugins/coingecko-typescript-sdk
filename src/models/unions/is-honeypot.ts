import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type IsHoneypot = boolean | string;

export const isHoneypotSchema: Schema<IsHoneypot> = s.of<IsHoneypot>(s.union([s.boolean(), s.string()]));
