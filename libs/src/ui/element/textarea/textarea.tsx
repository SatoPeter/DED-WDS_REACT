import { ReactNode, useEffect, useState } from 'react';
import { getHintClass, getCountClass, getBorderClass } from './styled';

interface TextareaProps {
  label?: ReactNode;
  className?: string;
  placeholder?: string;
  isDisabled?: boolean;
  total?: number;
  hint?: { error: string; description: string };
  initValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
/**
 * Textarea 組件。
 * @component
 * @param {Object} props - 組件的屬性。
 * @param {string} props.label - Textarea 的標籤。
 * @param {string} props.className - 自定義的 CSS 類名。
 * @param {string} [props.placeholder='請輸入...'] - Textarea 的佔位符。
 * @param {boolean} [props.isDisabled=false] - 是否禁用 Textarea。
 * @param {number} [props.total=10] - Textarea 的最大字符數。
 * @param {Object} [props.hint={ error: '', description: '' }] - 提示信息。
 * @param {string} props.hint.error - 錯誤提示信息。
 * @param {string} props.hint.description - 描述提示信息。
 * @param {Function} props.onChange - 當 Textarea 的值改變時的回調函數。
 */
export const Textarea: React.FC<TextareaProps> = (props: TextareaProps) => {
  const {
    label,
    className = '',
    placeholder = '請輸入...',
    isDisabled = false,
    total = 10,
    initValue = '',
    hint = { error: '', description: '' },
    onChange,
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
          maxLength={total || undefined}
          className={`${isDisabled ? 'textarea-disable' : 'textarea'}`}
          placeholder={placeholder}
        />
        {total > 0 && (
          <small
            className={`${
              isDisabled ? 'textarea-disable' : getCountClass(value)
            }`}
          >
            {value.length > 0 && `${value.length}/${total}`}
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
