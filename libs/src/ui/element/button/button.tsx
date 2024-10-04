import { MouseEventHandler, ReactNode } from 'react';
import { getDisableClass, getThemeClass } from './styled';
import { getSizeClass } from '@src/utils/style';

interface ButtonProps {
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
 * @param {string} props.variant - 按鈕的樣式變體
 * @param {string} props.themeColor - 按鈕的主題顏色
 * @param {function} props.onClick - 按鈕的點擊事件處理函數
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    variant,
    themeColor = 'primary',
    isDisabled = false,
    children,
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
