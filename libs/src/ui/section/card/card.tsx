import React, { ReactNode } from 'react';

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

export const Card: React.FC<CardProps> = (props: CardProps) => {
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
