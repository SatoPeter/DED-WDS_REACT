/**
 * 取得主題類別。
 * @param themeColor - 主題顏色。
 * @param type - 類型。
 * @returns {string} - 主題類別。
 */
export const getThemeClass = (themeColor: string, type: string): string => {
  return `ded-breadcrumb-${themeColor}`;
};
