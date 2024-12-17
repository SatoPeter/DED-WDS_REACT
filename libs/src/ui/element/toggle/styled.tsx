/**
 * 根據傳入的狀態值，返回對應的位置類別。
 * @param prefix - 位置類別的前綴。
 * @param checked - 指示元素是否被選中的布爾值。
 * @returns - 位置類別。
 */
export const getPositionClass = (prefix: string, checked: boolean) => {
  return `${prefix}-${checked ? 'on' : 'off'}`;
};
