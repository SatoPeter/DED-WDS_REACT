import { isEmpty } from 'lodash';

/**
 * 根據提供的主題顏色和標題級別，返回標題的 CSS 類名。
 *
 * @param themeColor - 主題顏色
 * @param level - 標題級別
 * @returns 標題的 CSS 類名
 */
export const getTitleClass = (themeColor: string, level: number) => {
  if (!isEmpty(level)) return '';
  return `ded-title-${themeColor} ded-title-level-${level}`;
};
