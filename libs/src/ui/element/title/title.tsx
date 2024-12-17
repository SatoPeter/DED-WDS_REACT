import { ReactNode } from 'react';
import { getThemeClass, getLevelClass } from './styled';

/**
 * 標題組件的屬性介面。
 *
 * @interface TitleProps
 *
 * @property {('neutral' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error')} [themeColor]
 * 可選的主題顏色。可以是 'primary'、'secondary'、'neutral'、'success'、'warning'、'error' 或 'info'。
 *
 * @property {0 | 1 | 2 | 3 | 4 | 5 | 6} [level]
 * 可選的標題層級。可以是 0 到 6 之間的數字。
 *
 * @property {ReactNode} children
 * 標題的子元素內容。
 *
 * @property {string} [className]
 * 可選的自訂 CSS 類名。
 */
export interface TitleProps {
  themeColor?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'none';
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: ReactNode;
}

/**
 * Title 組件。
 *
 * @component
 * @param {TitleProps} props - Title 組件的屬性。
 * @param {string} props.themeColor - 標題的主題顏色。
 * @param {number} props.level - 標題的層級。
 * @param {string} props.className - 標題的附加 class 名稱。
 * @param {ReactNode} props.children - 標題的內容。
 * @returns {JSX.Element} 渲染的 Title 組件。
 */
export const Title: React.FC<TitleProps> = ({
  themeColor = 'none',
  level = 0,
  className = '',
  children,
}: TitleProps): JSX.Element => {
  return (
    <div
      className={`ded-title ${className} ${
        themeColor !== 'none' && getThemeClass(themeColor)
      } ${getLevelClass(level)} ${className}`}
    >
      {children}
    </div>
  );
};

export default Title;
