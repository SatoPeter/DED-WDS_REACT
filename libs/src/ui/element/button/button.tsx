import { MouseEventHandler, ReactNode } from 'react';
import { getDisableClass, getThemeClass } from './styled';
import { getSizeClass } from '@src/utils/style';

/**
 * 按鈕屬性介面。
 *
 * @interface ButtonProps
 * @property {'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info'} [themeColor] - 按鈕的主題顏色。
 * @property {'contained' | 'outlined' | 'text'} variant - 按鈕的樣式變體。
 * @property {ReactNode} [prefix] - 按鈕前綴的圖標或元素。
 * @property {ReactNode} [suffix] - 按鈕後綴的圖標或元素。
 * @property {'small' | 'medium' | 'large'} [size] - 按鈕的大小。
 * @property {'fit' | 'fluid'} [width] - 按鈕的寬度。
 * @property {boolean} [isDisabled] - 按鈕是否被禁用。
 * @property {string} [className] - 按鈕的自定義樣式類名。
 * @property {ReactNode} children - 按鈕的子元素。
 * @property {MouseEventHandler<HTMLButtonElement>} [onClick] - 按鈕的點擊事件處理函數。
 */
export interface ButtonProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  variant: 'contained' | 'outlined' | 'text';
  isDisabled?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  width?: 'fit' | 'fluid';
  className?: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * 按鈕元件
 *
 * @component
 * @param {Object} props - 按鈕的屬性
 * @param {'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info'} [props.themeColor] - 按鈕的主題顏色
 * @param {'contained' | 'outlined' | 'text'} props.variant - 按鈕的樣式變體
 * @param {boolean} [props.isDisabled] - 按鈕是否禁用
 * @param {ReactNode} [props.prefix] - 按鈕前綴圖標
 * @param {ReactNode} [props.suffix] - 按鈕後綴圖標
 * @param {'small' | 'medium' | 'large'} [props.size] - 按鈕的大小
 * @param {'fit' | 'fluid'} [props.width] - 按鈕的寬度
 * @param {string} [props.className] - 按鈕的自定義類名
 * @param {ReactNode} props.children - 按鈕的子元素
 * @param {MouseEventHandler<HTMLButtonElement>} [props.onClick] - 按鈕的點擊事件處理函數
 */
export const Button: React.FC<ButtonProps> = ({
  variant,
  themeColor = 'primary',
  isDisabled = false,
  prefix,
  suffix,
  size = 'medium',
  width = 'fit',
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      style={{ width: `${width === 'fit' ? 'fit-content' : '100%'}` }}
      className={`ded-button 
        ${getSizeClass('ded-component', size)}
        ${
          isDisabled
            ? getDisableClass(variant)
            : getThemeClass(variant, themeColor)
        } ${className}`}
      onClick={onClick}
    >
      {prefix && <div className={getSizeClass('ded-icon', size)}>{prefix}</div>}
      {children && (
        <div className={getSizeClass('ded-text', size)}>{children}</div>
      )}
      {suffix && <div className={getSizeClass('ded-icon', size)}>{suffix}</div>}
    </button>
  );
};

export default Button;
