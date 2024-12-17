import { isEmpty } from 'lodash';

/**
 * 根據提供的主題顏色，返回標題的 CSS 類名。
 *
 * @param themeColor - 主題顏色
 * @returns 標題的 CSS 類名
 */
export const getThemeClass = (themeColor: string) => {
  return `ded-title-${themeColor}`;
};

/**
 * 根據提供的標題級別，返回標題的 CSS 類名。
 *
 * @param level - 標題級別
 * @returns 標題的 CSS 類名
 */
export const getLevelClass = (level: number) => {
  if (!isEmpty(level)) return '';
  return `ded-title-level-${level}`;
};
