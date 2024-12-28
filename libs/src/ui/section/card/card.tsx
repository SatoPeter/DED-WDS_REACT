import React, { ReactNode } from 'react';

/**
 * 卡片元件的屬性介面。
 *
 * @interface CardProps
 * @property {boolean} [hasHeaderDivider] - 是否顯示標題分隔線。
 * @property {string} [className] - 卡片的自訂樣式類別。
 * @property {ReactNode} [cardHeader] - 卡片的標題內容。
 * @property {ReactNode} [children] - 卡片的主要內容。
 * @property {ReactNode} [cardFooter] - 卡片的底部內容。
 * @property {() => void} [onClick] - 點擊卡片時觸發的事件處理函數。
 */
export interface CardProps {
  hasHeaderDivider?: boolean;
  className?: string;
  cardHeader?: ReactNode;
  children?: ReactNode;
  cardFooter?: ReactNode;
  onClick?: () => void;
}

/**
 * 卡片元件
 *
 * @component
 * @param {CardProps} props - 卡片元件的屬性
 * @param {string} [props.className] - 卡片的自訂樣式類別
 * @param {boolean} props.hasHeaderDivider - 是否顯示標題分隔線
 * @param {React.ReactNode} props.cardHeader - 卡片的標題內容
 * @param {React.ReactNode} props.children - 卡片的主要內容
 * @param {React.ReactNode} props.cardFooter - 卡片的底部內容
 * @param {() => void} [props.onClick] - 點擊卡片時的回調函數
 *
 * @returns {JSX.Element} 回傳卡片元件
 */
export const Card: React.FC<CardProps> = ({
  cardHeader = null,
  hasHeaderDivider = false,
  children = null,
  cardFooter = null,
  onClick = () => ({}),
  className = '',
}: CardProps): JSX.Element => {
  const handleClick = () => {
    console.log('click');
    onClick && onClick();
  };

  return (
    <div
      className={`ded-card ded-card-container ${className}`}
      onClick={handleClick}
    >
      {cardHeader && (
        <div
          className={`ded-card-header 
            ${hasHeaderDivider ? 'ded-card-header-divider' : ''}
          `}
        >
          {cardHeader}
        </div>
      )}
      <div className="ded-card-body">{children}</div>
      {cardFooter && <div className="ded-card-footer">{cardFooter}</div>}
    </div>
  );
};
export default Card;
