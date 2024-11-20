/**
 * 取得主題類別。
 * @param themeColor - 主題顏色。
 * @returns {string} - 主題類別。
 */
export const getThemeClass = (themeColor: string) => {
  return `ded-toggle-${themeColor}`;
};

/**
 * 根據傳入的狀態值，返回對應的位置類別。
 * @param checked - 指示元素是否被選中的布爾值。
 * @returns - 位置類別，如果元素被選中則返回 'toggle-on'，否則返回 'toggle-off'。
 */
export const getPositionClass = (checked: boolean) => {
  return checked ? 'ded-toggle-on' : 'ded-toggle-off';
};

/**
 * 取得標籤位置的 CSS 類別。
 * @param checked - 標籤是否被選中。
 * @returns - 標籤位置的 CSS 類別。
 */
export const getLabelPositionClass = (checked: boolean) => {
  return checked ? 'ded-toggle-label-on' : 'ded-toggle-label-off';
};

/**
 * 取得滑桿位置的 CSS 類別。
 * @param checked - 指示滑桿是否為選中狀態。
 * @returns - 滑桿位置的 CSS 類別。
 */
export const getThumbPositionClass = (checked: boolean) => {
  return checked ? 'ded-toggle-thumb-on' : 'ded-toggle-thumb-off';
};
