import React, { ReactNode } from 'react';

/* 組件介面參數 props */
interface CardProps {
  width?: string;
  height?: string;
  hasHeaderDivider?: boolean;
  cardHeader?: ReactNode;
  children?: ReactNode;
  cardFooter?: ReactNode;
  onClick?: () => void;
  className?: string;
}

/* 定義組件 */
export const Card: React.FC<CardProps> = (props: CardProps) => {
  /* 解構組件參數 */
  const {
    width,
    height,
    cardHeader,
    hasHeaderDivider,
    children,
    cardFooter,
    onClick,
    className,
  } = props;

  /* 事件控制 */
  const handleClick = () => {
    console.log('click');
    onClick && onClick();
  };

  return (
    <div
      style={{ width: width, height: height }}
      className={`card card-container ${className}`}
      onClick={handleClick}
    >
      {cardHeader && (
        <div
          className={`card-header ${
            hasHeaderDivider ? 'card-header-divider' : ''
          }`}
        >
          {cardHeader}
        </div>
      )}
      <div className="card-body">{children}</div>
      {cardFooter && <div className="card-footer">{cardFooter}</div>}
    </div>
  );
};
export default Card;
