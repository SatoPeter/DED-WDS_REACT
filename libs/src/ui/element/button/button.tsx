import { MouseEventHandler, ReactNode } from 'react';
import { getDisableClass, getThemeClass } from './styled';
import { getSizeClass } from '@src/utils/style';

/**
 * 按鈕屬性介面。
 *
 * @interface ButtonProps
 * @property {'contained' | 'outlined' | 'text'} variant - 按鈕的樣式變體。
 * @property {'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info'} [themeColor] - 按鈕的主題顏色。
 * @property {boolean} [isDisabled] - 按鈕是否被禁用。
 * @property {ReactNode} children - 按鈕的子元素。
 * @property {'small' | 'medium' | 'large'} [size] - 按鈕的大小。
 * @property {ReactNode} [prefix] - 按鈕前綴的圖標或元素。
 * @property {ReactNode} [suffix] - 按鈕後綴的圖標或元素。
 * @property {MouseEventHandler<HTMLButtonElement>} [onClick] - 按鈕的點擊事件處理函數。
 * @property {string} [className] - 按鈕的自定義樣式類名。
 */
export interface ButtonProps {
  variant: 'contained' | 'outlined' | 'text';
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  isDisabled?: boolean;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  prefix?: ReactNode;
  suffix?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

/**
 * 按鈕元件
 *
 * @component
 * @param {Object} props - 按鈕的屬性
 * @param {'contained' | 'outlined' | 'text'} props.variant - 按鈕的樣式變體
 * @param {'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info'} [props.themeColor] - 按鈕的主題顏色
 * @param {boolean} [props.isDisabled] - 按鈕是否禁用
 * @param {ReactNode} props.children - 按鈕的子元素
 * @param {'small' | 'medium' | 'large'} [props.size] - 按鈕的大小
 * @param {ReactNode} [props.prefix] - 按鈕前綴圖標
 * @param {ReactNode} [props.suffix] - 按鈕後綴圖標
 * @param {MouseEventHandler<HTMLButtonElement>} [props.onClick] - 按鈕的點擊事件處理函數
 * @param {string} [props.className] - 按鈕的自定義類名
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    variant = 'contained',
    themeColor = 'primary',
    isDisabled = false,
    children = '按鈕',
    size = 'medium',
    prefix,
    suffix,
    className,
    onClick,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={`button 
        ${getSizeClass('component', size)}
        ${
          isDisabled
            ? getDisableClass(variant)
            : getThemeClass(variant, themeColor)
        } ${className}`}
      onClick={onClick}
    >
      {prefix && <div className={getSizeClass('icon', size)}>{prefix}</div>}
      {children && <div className={getSizeClass('text', size)}>{children}</div>}
      {suffix && <div className={getSizeClass('icon', size)}>{suffix}</div>}
    </button>
  );
};

export default Button;
