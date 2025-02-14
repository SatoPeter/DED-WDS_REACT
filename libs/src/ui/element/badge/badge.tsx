import React, { useEffect } from 'react';
import { getCombinedClassName } from '@src/utils/string';

/**
 * Badge 元件的屬性介面
 * @interface BadgeProps
 * @property {('none'|'primary'|'secondary'|'neutral'|'info'|'success'|'warning'|'error')} [themeColor] - Badge 的主題顏色
 * @property {boolean} [isShowDot] - 是否顯示點點標記
 * @property {React.ReactNode} children - Badge 內部的子元素
 * @property {number} [value] - Badge 要顯示的數值
 * @property {number} [limit] - Badge 數值的最大限制
 * @property {string} [className] - 自定義 CSS 類別名稱
 */
export interface BadgeProps {
  themeColor?:
    | 'none'
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  isShowDot?: boolean;
  children: React.ReactNode;
  value?: number;
  limit?: number;
  className?: string;
}

/**
 * Badge 徽章元件
 * @description 用於顯示計數或狀態的徽章元件
 *
 * @component
 * @param {Object} props - Badge 元件的 props
 * @param {('error'|'warning'|'success'|'info')} [props.themeColor='error'] - 徽章的主題顏色
 * @param {ReactNode} props.children - 徽章所包含的子元素
 * @param {boolean} [props.isShowDot=false] - 是否僅顯示圓點而不顯示數字
 * @param {number} [props.value=0] - 徽章顯示的數值
 * @param {number} [props.limit=0] - 徽章顯示的數值上限，超過此值將顯示 "limit+"
 * @param {string} [props.className=''] - 自定義的 CSS 類名
 *
 * @returns {JSX.Element} 返回徽章元件
 */
export const Badge: React.FC<BadgeProps> = ({
  themeColor = 'error',
  children,
  isShowDot = false,
  value = 0,
  limit = 0,
  className = '',
}) => {
  const [msgCount, setMsgCount] = React.useState<number>(value || 0);

  useEffect(() => {
    if (value && limit && value > limit) {
      setMsgCount(limit);
      return;
    }
    return setMsgCount(value || 0);
  }, [value, limit]);

  return (
    <div className={`ded-badge-container ${className}`}>
      {children}
      <div
        className={`ded-badge 
          ${getCombinedClassName('ded-badge-color', themeColor)}
          ${isShowDot ? 'ded-badge-dot' : ''}`}
      >
        {!isShowDot && value > 0 && (
          <div className="ded-badge-content">
            <span className="ded-badge-content-text">{msgCount}</span>
            {value > limit && <span className="ded-badge-content-text">+</span>}
          </div>
        )}
      </div>
    </div>
  );
};
export default Badge;
