import { isEmpty } from 'lodash';

/**
 * 根據錯誤和描述值返回適當的邊框類別。
 *
 * @param {Object} options - 選項對象。
 * @param {string} options.error - 錯誤值。
 * @param {string} options.description - 描述值。
 * @returns {string | undefined} 邊框類別。
 */
export const getBorderClass = ({
  error,
  description,
}: {
  error: string;
  description: string;
}) => {
  if (isEmpty(error) && isEmpty(description)) return;

  return error.length > 0 ? 'ded-input-border-error' : 'ded-input-border-desc';
};

/**
 * 根據錯誤訊息和描述訊息返回提示元素的 CSS 類別。
 * @param error - 錯誤訊息。
 * @param description - 描述訊息。
 * @returns 提示元素的 CSS 類別。
 */
export const getHintClass = ({
  error,
  description,
}: {
  error: string;
  description: string;
}) => {
  if (error.length > 0) {
    return 'ded-input-hint-error';
  }

  if (description.length > 0) {
    return 'ded-input-hint-desc';
  }
};

/**
 * 根據指定的大小，返回對應的 CSS class。
 * @param size - 大小，可選值為 'small'、'large' 或其他。
 * @returns 對應的 CSS class。
 */
export const getSizeClass = (size: string) => {
  return `ded-input-group-${size}`;
};
