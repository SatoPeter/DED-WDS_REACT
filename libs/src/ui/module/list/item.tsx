import React from 'react';

/* 組件介面參數 props */
export interface ItemProps {
  content: {
    label: string;
    prefix?: React.ReactNode;
    value: string;
    href?: string;
  };
  onClick?: (value: string) => void;
  className?: string;
}

export const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const {
    content: { label, prefix, value, href },
    onClick,
    className = '',
  } = props;

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
    onClick && onClick(value);
  };

  return (
    <div
      className={`item ${href ? 'item-link' : ''} ${className}`}
      onClick={handleClick}
    >
      {prefix && <div className="icon">{prefix}</div>}
      <div className="item-label">{label}</div>
    </div>
  );
};
export default Item;
