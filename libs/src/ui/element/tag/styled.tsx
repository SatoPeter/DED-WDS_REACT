/**
 * 根據按鈕的變體返回禁用類。
 * @param variant - 按鈕的變體。
 * @returns 按鈕變體的禁用類。
 */
export const getDisableClass = (variant: string) => {
  return `ded-tag-${variant}-disabled`;
};

/**
 * 根據按鈕的變體和主題顏色返回按鈕的主題類。
 *
 * @param variant - 按鈕的變體。
 * @param themeColor - 按鈕的主題顏色。
 * @returns 按鈕的主題類。
 */
export const getThemeClass = (variant: string, themeColor: string) => {
  return `ded-tag-${variant} ded-tag-${variant}-${themeColor}`;
};
