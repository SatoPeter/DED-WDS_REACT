/**
 * 根據按鈕的變體返回禁用類。
 * @param variant - 按鈕的變體。
 * @returns 按鈕變體的禁用類。
 */
export const getDisableClass = (variant: string) => {
  return `tag-${variant}-disabled`;
};
