import { ReactNode, useEffect, useState } from 'react';
import { getHintClass, getCountClass, getBorderClass } from './styled';

/**
 * TextareaProps 介面定義了 Textarea 元件的屬性。
 *
 * @property {ReactNode} [label] - Textarea 的標籤。
 * @property {string} [className] - 自訂的 CSS 類名。
 * @property {string} [placeholder] - Textarea 的佔位符。
 * @property {boolean} [isDisabled] - 是否禁用 Textarea。
 * @property {number} [limit] - 字數限制。
 * @property {Object} [hint] - 提示訊息，包括錯誤訊息和描述。
 * @property {string} hint.error - 錯誤訊息。
 * @property {string} hint.description - 描述訊息。
 * @property {string} [initValue] - 初始值。
 * @property {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} [onChange] - 當 Textarea 值改變時的回調函數。
 */
export interface TextareaProps {
  label?: ReactNode;
  placeholder?: string;
  isDisabled?: boolean;
  limit?: number;
  hint?: { error: string; description: string };
  initValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}
/**
 * Textarea 組件。
 * @component
 * @param {Object} props - 組件的屬性。
 * @param {string} props.label - Textarea 的標籤。
 * @param {string} props.className - 自定義的 CSS 類名。
 * @param {string} [props.placeholder='請輸入...'] - Textarea 的佔位符。
 * @param {boolean} [props.isDisabled=false] - 是否禁用 Textarea。
 * @param {number} [props.limit=0] - Textarea 的最大字符數。
 * @param {Object} [props.hint={ error: '', description: '' }] - 提示信息。
 * @param {string} props.hint.error - 錯誤提示信息。
 * @param {string} props.hint.description - 描述提示信息。
 * @param {Function} props.onChange - 當 Textarea 的值改變時的回調函數。
 */
export const Textarea: React.FC<TextareaProps> = (props: TextareaProps) => {
  const {
    label,
    placeholder = '請輸入...',
    isDisabled = false,
    limit = 0,
    initValue = '',
    hint = { error: '', description: '' },
    onChange,
    className = '',
    ...rest
  } = props;

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  return (
    <div className={`textarea-container ${className}`}>
      {label && (
        <label
          className={`${isDisabled ? 'textarea-disable' : 'textarea-label'}`}
          htmlFor="id"
        >
          {label}
        </label>
      )}
      <div
        className={`textarea-group ${
          isDisabled ? 'textarea-disable' : getBorderClass(hint.error)
        }`}
      >
        <textarea
          {...rest}
          id="id"
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.value);
          }}
          value={value}
          maxLength={limit || undefined}
          className={`${isDisabled ? 'textarea-disable' : 'textarea'}`}
          placeholder={placeholder}
        />
        {limit > 0 && (
          <small
            className={`${
              isDisabled ? 'textarea-disable' : getCountClass(value)
            }`}
          >
            {value.length > 0 && `${value.length}/${limit}`}
          </small>
        )}
      </div>
      <small
        className={`textarea-hint ${
          isDisabled ? 'textarea-disable' : getHintClass(hint)
        }`}
      >
        {hint.error.length > 0 ? hint.error : hint.description}
      </small>
    </div>
  );
};

export default Textarea;
