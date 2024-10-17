import { ReactNode, useState } from 'react';
import {
  getThemeClass,
  getPositionClass,
  getLabelPositionClass,
  getThumbPositionClass,
} from './styled';

interface ToggleProps {
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
 * Toggle 組件。
 *
 * @component
 * @param {Object} props - 組件的屬性。
 * @param {string} [props.themeColor=''] - 主題顏色。
 * @param {boolean} [props.isChecked=false] - 是否被選中。
 * @param {boolean} [props.isDisabled=false] - 是否禁用。
 * @param {string} [props.checkChildren='on'] - 選中時顯示的內容。
 * @param {string} [props.unCheckChildren='off'] - 未選中時顯示的內容。
 * @param {function} props.onChange - 當狀態改變時的回調函數。
 * @param {string} props.className - 自定義的 class 名稱。
 * @param {Object} rest - 其他屬性。
 */
export const Toggle: React.FC<ToggleProps> = (props: ToggleProps) => {
  const {
    themeColor = '',
    isChecked = false,
    isDisabled = false,
    checkChildren = 'on',
    unCheckChildren = 'off',
    onChange,
    className,
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
