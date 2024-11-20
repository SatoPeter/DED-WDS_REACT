/**
 * 根據主題顏色和類型獲取對應的樣式類別。
 *
 * @param {string} themeColor - 主題顏色。
 * @param {string} type - 類型（例如 'card'）。
 * @returns {string} 對應的樣式類別。
 */
export const getThemeClass = (themeColor: string, type: string) => {
  if (type === 'card') {
    return `ded-tab-${type}-${themeColor}`;
  }
  return `ded-tab-${themeColor}`;
};

/**
 * 根據主題顏色和類型返回活動類名。
 * @param themeColor - 主題顏色。
 * @param type - 標籤類型。
 * @returns 活動類名。
 */
export const getActiveClass = (themeColor: string, type: string) => {
  if (type === 'card') {
    return `ded-tab-${type}-${themeColor}-active`;
  }
  return `ded-tab-${themeColor}-active`;
};
