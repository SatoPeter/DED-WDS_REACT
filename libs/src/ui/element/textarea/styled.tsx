/**
 * 根據錯誤訊息返回 textarea 邊框的 CSS 類名。
 *
 * @param error - 錯誤訊息。
 * @returns 如果錯誤訊息為空，則返回 undefined，否則返回 textarea 邊框的 CSS 類名。
 */
export const getBorderClass = (error: string) => {
  if (error.length <= 0) return;
  return 'ded-textarea-border-error';
};

/**
 * 根據錯誤訊息和描述訊息返回提示元素的 CSS 類名。
 *
 * @param error - 錯誤訊息。
 * @param description - 描述訊息。
 * @returns 提示元素的 CSS 類名。
 */
export const getHintClass = ({
  error,
  description,
}: {
  error: string;
  description: string;
}) => {
  if (error.length > 0) {
    return 'ded-textarea-hint-error';
  }

  if (description.length > 0) {
    return 'ded-textarea-hint-desc';
  }
};

/**
 * 根據值的長度返回 textarea 提示計數的 CSS 類名。
 *
 * @param value - textarea 的值。
 * @returns textarea 提示計數的 CSS 類名。
 */
export const getCountClass = (value: string) => {
  if (value.length > 0) {
    return 'ded-textarea-hint-count';
  }
};
