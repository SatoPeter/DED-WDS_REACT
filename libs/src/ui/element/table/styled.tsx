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
