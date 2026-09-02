import { s, type Schema } from "../../core/index.js";

export type IsHoneypot = boolean | string;

export const isHoneypotSchema: Schema<IsHoneypot> = s.of<IsHoneypot>(s.union([s.boolean(), s.string()]));
