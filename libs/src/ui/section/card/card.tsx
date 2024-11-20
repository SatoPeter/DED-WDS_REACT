import React, { ReactNode } from 'react';

/**
 * 卡片元件的屬性介面。
 *
 * @interface CardProps
 *
 * @property {string} [width] - 卡片的寬度。
 * @property {string} [height] - 卡片的高度。
 * @property {boolean} [hasHeaderDivider] - 是否顯示標題分隔線。
 * @property {ReactNode} [cardHeader] - 卡片的標題內容。
 * @property {ReactNode} [children] - 卡片的主要內容。
 * @property {ReactNode} [cardFooter] - 卡片的底部內容。
 * @property {() => void} [onClick] - 點擊卡片時觸發的事件處理函數。
 * @property {string} [className] - 卡片的自訂樣式類別。
 */
export interface CardProps {
  width?: string;
  height?: string;
  hasHeaderDivider?: boolean;
  cardHeader?: ReactNode;
  children?: ReactNode;
  cardFooter?: ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * 卡片元件
 *
 * @component
 * @param {CardProps} props - 卡片元件的屬性
 * @param {string} props.width - 卡片的寬度
 * @param {string} props.height - 卡片的高度
 * @param {React.ReactNode} props.cardHeader - 卡片的標題內容
 * @param {boolean} props.hasHeaderDivider - 是否顯示標題分隔線
 * @param {React.ReactNode} props.children - 卡片的主要內容
 * @param {React.ReactNode} props.cardFooter - 卡片的底部內容
 * @param {() => void} [props.onClick] - 點擊卡片時的回調函數
 * @param {string} [props.className] - 卡片的自訂樣式類別
 *
 * @returns {JSX.Element} 回傳卡片元件
 */
export const Card: React.FC<CardProps> = ({
  width = '100%',
  height = '100%',
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
      style={{ width: width, height: height }}
      className={`ded-card ded-card-container ${className}`}
      onClick={handleClick}
    >
      {cardHeader && (
        <div
          className={`ded-card-header ${
            hasHeaderDivider ? 'ded-card-header-divider' : ''
          }`}
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
