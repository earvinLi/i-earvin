export const i18nConfig = {
  defaultLocale: "en-US",
  locales: ["en-US", "zh-CN", "ja-JP"],
} as const;

// export type Locale = (typeof i18nConfig)["locales"][number];
export default i18nConfig;
