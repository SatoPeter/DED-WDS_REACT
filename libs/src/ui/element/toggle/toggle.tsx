import { ReactNode, useState } from 'react';
import {
  getThemeClass,
  getPositionClass,
  getLabelPositionClass,
  getThumbPositionClass,
} from './styled';

/**
 * 切換開關元件的屬性介面。
 *
 * @interface ToggleProps
 *
 * @property {('primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info')} [themeColor]
 * - 主題顏色，可選值包括 'primary'、'secondary'、'tertiary'、'success'、'warning'、'error'、'info'。
 *
 * @property {ReactNode} [checkChildren]
 * - 當切換開關處於選中狀態時顯示的子元素。
 *
 * @property {ReactNode} [unCheckChildren]
 * - 當切換開關處於未選中狀態時顯示的子元素。
 *
 * @property {boolean} isChecked
 * - 切換開關的當前狀態，true 表示選中，false 表示未選中。
 *
 * @property {boolean} [isDisabled]
 * - 是否禁用切換開關，true 表示禁用，false 表示啟用。
 *
 * @property {(checked: boolean) => void} [onChange]
 * - 當切換開關狀態改變時的回調函數，參數為新的狀態。
 *
 * @property {string} [className]
 * - 自定義的 CSS 類名。
 */
export interface ToggleProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  checkChildren?: ReactNode;
  unCheckChildren?: ReactNode;
  isChecked: boolean;
  isDisabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

/**
 * 切換元件
 *
 * @component
 * @param {ToggleProps} props - 切換元件的屬性
 * @param {string} [props.themeColor=''] - 主題顏色
 * @param {boolean} [props.isChecked=false] - 是否被選中
 * @param {boolean} [props.isDisabled=false] - 是否禁用
 * @param {React.ReactNode} [props.checkChildren='on'] - 被選中時顯示的內容
 * @param {React.ReactNode} [props.unCheckChildren='off'] - 未被選中時顯示的內容
 * @param {function} [props.onChange] - 當切換狀態改變時的回調函數
 * @param {string} [props.className=''] - 自定義樣式類名
 * @param {object} [props.rest] - 其他屬性
 *
 * @returns {JSX.Element} 切換元件的 JSX 元素
 */
export const Toggle: React.FC<ToggleProps> = (props: ToggleProps) => {
  const {
    themeColor = '',
    isChecked = false,
    isDisabled = false,
    checkChildren = 'on',
    unCheckChildren = 'off',
    onChange,
    className = '',
    ...rest
  } = props;

  const [checked, setChecked] = useState(isChecked);

  return (
    <div
      {...rest}
      className={`toggle ${getThemeClass(themeColor)} ${getPositionClass(
        checked
      )} ${className} ${isDisabled ? 'toggle-disable' : ''}`}
      onClick={(e) => {
        setChecked((prev) => !prev);
        onChange && onChange(!checked);
      }}
    >
      <div className={`toggle-thumb ${getThumbPositionClass(checked)}`} />
      <label
        className={`toggle-label ${getLabelPositionClass(checked)} ${
          isDisabled ? 'toggle-label-disable' : ''
        }`}
      >
        {checked ? checkChildren : unCheckChildren}
      </label>
    </div>
  );
};

export default Toggle;
