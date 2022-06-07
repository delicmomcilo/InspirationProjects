import { Browser } from "detect-browser";

export const unsupportedBrowser = (browser: Browser | null ): boolean => {
  return browser === "facebook";
}