import React from 'react';

/* 組件介面參數 props */
export interface ItemProps {
  // isDisabled?: boolean;
  prefix?: React.ReactNode;
  content: {
    label: string;
    value: string;
    href?: string;
  };
  suffix?: React.ReactNode;
  onClick?: (value: string) => void;
  className?: string;
}

export const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const {
    // isDisabled,
    prefix,
    content: { label, value, href },
    suffix,
    onClick,
    className,
  } = props;

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
    onClick && onClick(value);
  };

  return (
    <div
      className={`item ${href || onClick ? 'menu-link' : ''} ${className}`}
      onClick={handleClick}
    >
      {prefix && <div className="icon">{prefix}</div>}
      <div className="item-label">{label}</div>
      {suffix && <div className="icon">{suffix}</div>}
    </div>
  );
};
export default Item;
