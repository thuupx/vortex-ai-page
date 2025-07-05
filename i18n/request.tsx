import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale || "en";
  return {
    locale: safeLocale,
    timeZone: 'UTC',
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
});
