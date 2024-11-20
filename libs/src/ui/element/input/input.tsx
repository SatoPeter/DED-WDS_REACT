import { getBorderClass, getHintClass } from './styled';
import { getSizeClass } from '@src/utils/style';
import { ChangeEventHandler, ReactNode } from 'react';
import { useInput } from '@src/hooks';
import { VisibilityIcon, VisibilityOffIcon, CloseIcon } from '@src/assets';
import { isEmpty } from 'lodash';

/**
 * `InputProps` 介面定義了輸入元件的屬性。
 *
 * @property {ReactNode} [label] - 輸入框的標籤。
 * @property {string} [initValue] - 輸入框的值。
 * @property {'text' | 'password' | 'email' | 'number'} type - 輸入框的類型。
 * @property {string} [placeholder] - 輸入框的佔位符。
 * @property {ReactNode} [prefix] - 輸入框前綴的圖示或文字。
 * @property {'small' | 'medium' | 'large'} [size] - 輸入框的大小。
 * @property {{ error: string; description: string }} [hint] - 錯誤提示和描述信息。
 * @property {boolean} [isDisabled] - 是否禁用輸入框。
 * @property {ChangeEventHandler<HTMLInputElement>} onChange - 當輸入框值改變時的回調函數。
 * @property {string} [className] - 自訂的 CSS 類名。
 */
export interface InputProps {
  label?: string;
  type: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  prefix?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  initValue: string;
  hint?: { error: string; description: string };
  isDisabled?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

/**
 * Input 組件。
 * @component
 * @param {Object} props - 組件的屬性。
 * @param {string} props.label - 輸入框的標籤。
 * @param {string} [props.type='text'] - 輸入框的類型。
 * @param {string} [props.placeholder='請輸入...'] - 輸入框的佔位符。
 * @param {React.ReactNode} [props.prefix] - 輸入框前綴圖標。
 * @param {string} [props.size='medium'] - 輸入框的大小。
 * @param {string} props.initValue - 輸入框的值。
 * @param {Object} [props.hint={ error: '', description: '' }] - 提示信息。
 * @param {string} props.hint.error - 錯誤提示信息。
 * @param {string} props.hint.description - 描述提示信息。
 * @param {boolean} [props.isDisabled=false] - 是否禁用輸入框。
 * @param {string} [props.className] - 自定義的 CSS 類名。
 * @param {function} props.onChange - 當輸入框值改變時的回調函數。
 */
export const Input: React.FC<InputProps> = ({
  label = '',
  type = 'text',
  placeholder = 'Placeholder...',
  prefix = '',
  size = 'medium',
  initValue,
  hint = { error: '', description: '' },
  isDisabled = false,
  className = '',
  onChange = () => ({}),
}: InputProps) => {
  const { inputType, value, action, handleInputChange } = useInput(
    initValue,
    type,
    onChange
  );

  return (
    <div className={`ded-input-container ${className}`}>
      {label && (
        <label
          className={`${isDisabled ? 'ded-input-disable' : 'ded-input-label'}`}
        >
          {label}
        </label>
      )}
      <div
        className={` 
          ded-input-group
          ${getSizeClass('ded-component', size)} 
          ${isDisabled ? 'ded-input-disable' : getBorderClass(hint)}
          ${className ? className : ''}`}
      >
        {prefix && (
          <div className={getSizeClass('ded-icon', size)}>{prefix}</div>
        )}
        <input
          value={value}
          onChange={handleInputChange}
          type={inputType}
          className={`${
            isDisabled
              ? 'ded-input-disable'
              : `ded-input ${getSizeClass('ded-text', size)}`
          }`}
          placeholder={placeholder}
        />

        {!isEmpty(value) && (
          <div
            onClick={action}
            style={{ cursor: 'pointer' }}
            className={getSizeClass('ded-icon', size)}
          >
            {type === 'text' ? (
              <CloseIcon />
            ) : type === 'password' && inputType === 'password' ? (
              <VisibilityOffIcon />
            ) : (
              <VisibilityIcon />
            )}
          </div>
        )}
      </div>
      <small
        className={`ded-input-hint ${
          isDisabled ? 'ded-input-disable' : getHintClass(hint)
        }`}
      >
        {hint.error.length > 0 ? hint.error : hint.description}
      </small>
    </div>
  );
};

export default Input;
