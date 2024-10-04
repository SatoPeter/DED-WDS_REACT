/* 根據參數開發組件對應樣式 */
export const getSizeClass = (size: string) => {
  if (size === 'small') {
    return 'input-group-small';
  }
  if (size === 'large') {
    return 'input-group-large';
  }
  return 'input-group-medium';
};

/**
 * 取得主題類別。
 * @param themeColor - 主題顏色。
 * @returns {string} - 主題類別。
 */
export const getThemeClass = (themeColor: string, type: string) => {
  return `${type}-${themeColor}`;
};
