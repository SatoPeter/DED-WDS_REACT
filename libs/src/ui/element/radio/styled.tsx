/**
 * 取得主題類別。
 * @param key - 鍵值。
 * @param themeColor - 主題顏色。
 * @returns 主題類別。
 */
export const getThemeClass = (key: string, themeColor: string) => {
  return `ded-radio-${key}-${themeColor} `;
};
