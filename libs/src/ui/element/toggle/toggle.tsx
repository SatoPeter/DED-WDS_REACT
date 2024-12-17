import { useEffect, useState } from 'react';
import { getCombinedClassName } from '@src/utils/string';
import { getPositionClass } from './styled';

/**
 * 切換按鈕的屬性介面。
 *
 * @interface ToggleProps
 * @property {'primary' | 'secondary' | 'neutral' | 'info' | 'success' | 'warning' | 'error'} [themeColor] - 主題顏色。
 * @property {string} [checkLabel] - 當切換按鈕被選中時顯示的子元素。
 * @property {string} [unCheckLabel] - 當切換按鈕未被選中時顯示的子元素。
 * @property {boolean} isChecked - 切換按鈕的選中狀態。
 * @property {boolean} [isDisabled] - 切換按鈕是否被禁用。
 * @property {string} [className] - 自訂的CSS類名。
 * @property {(checked: boolean) => void} [onChange] - 當切換按鈕狀態改變時的回調函數。
 */
export interface ToggleProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  checkLabel?: string;
  unCheckLabel?: string;
  isChecked: boolean;
  isDisabled?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}

/**
 * 切換元件
 *
 * @component
 * @param {ToggleProps} props - 切換元件的屬性
 * @param {string} [props.themeColor=''] - 主題顏色
 * @param {boolean} [props.isChecked=false] - 是否被選中
 * @param {boolean} [props.isDisabled=false] - 是否禁用
 * @param {React.string} [props.checkLabel='on'] - 被選中時顯示的內容
 * @param {React.string} [props.unCheckLabel='off'] - 未被選中時顯示的內容
 * @param {function} [props.onChange] - 當切換狀態改變時的回調函數
 * @param {string} [props.className=''] - 自定義樣式類名
 */
export const Toggle: React.FC<ToggleProps> = ({
  themeColor = 'primary',
  checkLabel = 'on',
  unCheckLabel = 'off',
  isChecked = false,
  isDisabled = false,
  className = '',
  onChange,
}: ToggleProps) => {
  const [checked, setChecked] = useState(isChecked);
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <div
      className={`ded-toggle 
        ${getCombinedClassName('ded-toggle', themeColor)} 
        ${getPositionClass('ded-toggle', checked)} 
        ${isDisabled ? 'ded-toggle-disabled' : ''}
        ${className} `}
      onClick={(e) => {
        setChecked((prev) => !prev);
        onChange && onChange(!checked);
      }}
    >
      <div
        className={`ded-toggle-thumb 
          ${getPositionClass('ded-toggle-thumb', checked)}
          ${isDisabled ? 'ded-toggle-thumb-disabled' : ''}`}
      />
      <label
        className={`ded-toggle-label 
          ${getPositionClass('ded-toggle-label', checked)} 
          ${isDisabled ? 'toggle-label-disabled' : ''}`}
      >
        {checked ? checkLabel : unCheckLabel}
      </label>
    </div>
  );
};

export default Toggle;
