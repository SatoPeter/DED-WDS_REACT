/**
 * 取得主題類別。
 * @param type - 進度條類型。
 * @param themeColor - 主題顏色。
 * @returns {string} - 主題類別名稱。
 */
export const getThemeClass = (type: string, themeColor: string) => {
  return `ded-progress-${type}-percent-${themeColor}`;
};
