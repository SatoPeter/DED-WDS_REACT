/**
 * 取得主題類別。
 * @param themeColor - 主題顏色。
 * @returns {string} - 主題類別。
 */
export const getThemeClass = (themeColor: string, type: string) => {
  return `${type}-${themeColor}`;
};
