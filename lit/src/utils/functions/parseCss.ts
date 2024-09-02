import { css, CSSResult, unsafeCSS } from "lit";

export const parseCss = (value: unknown): CSSResult => css`${unsafeCSS(value)}`;
