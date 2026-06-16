/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Kagi API Token - Optional. Needed only for the Search command (Kagi v1 Search API, billed per query, Bearer token). Generate one at kagi.com/api/keys. All other commands work without it. */
  "apiToken"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search` command */
  export type Search = ExtensionPreferences & {}
  /** Preferences accessible in the `bang` command */
  export type Bang = ExtensionPreferences & {}
  /** Preferences accessible in the `translate` command */
  export type Translate = ExtensionPreferences & {
  /** Translate From - Source language code (e.g. auto, en, ru, ja). */
  "translateFrom": string,
  /** Translate To - Target language code (e.g. en, ru, de, fr). */
  "translateTo": string,
  /** Quality - Translation quality. */
  "translateQuality": "standard" | "best",
  /** Style - Translation style. */
  "translateStyle": "natural" | "literal",
  /** Formality - Tone of the translation. */
  "translateFormality": "default" | "more" | "less"
}
  /** Preferences accessible in the `summarize` command */
  export type Summarize = ExtensionPreferences & {
  /** Summary Type - Prose summary or bulleted key takeaways. */
  "summaryType": "summary" | "takeaway",
  /** Summary Language - Target language code (e.g. EN, RU, DE). Leave empty to keep the document's language. */
  "summaryLanguage": string
}
  /** Preferences accessible in the `news` command */
  export type News = ExtensionPreferences & {}
  /** Preferences accessible in the `smallweb` command */
  export type Smallweb = ExtensionPreferences & {}
  /** Preferences accessible in the `assistant` command */
  export type Assistant = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search` command */
  export type Search = {}
  /** Arguments passed to the `bang` command */
  export type Bang = {}
  /** Arguments passed to the `translate` command */
  export type Translate = {
  /** Text to translate */
  "text": string
}
  /** Arguments passed to the `summarize` command */
  export type Summarize = {
  /** URL to summarize */
  "url": string
}
  /** Arguments passed to the `news` command */
  export type News = {}
  /** Arguments passed to the `smallweb` command */
  export type Smallweb = {}
  /** Arguments passed to the `assistant` command */
  export type Assistant = {}
}

