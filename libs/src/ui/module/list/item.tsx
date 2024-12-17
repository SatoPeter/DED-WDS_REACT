import React from 'react';

/* 組件介面參數 props */
/**
 * `ItemProps` 介面定義了列表項目的屬性。
 *
 * @property {Object} content - 列表項目的內容。
 * @property {string} content.label - 項目的標籤。
 * @property {React.ReactNode} [content.prefix] - 項目標籤前的前綴內容（可選）。
 * @property {string} content.value - 項目的值。
 * @property {string} [content.href] - 項目的鏈接（可選）。
 * @property {(value: string) => void} [onClick] - 點擊項目時的回調函數（可選）。
 * @property {string} [className] - 項目的 CSS 類名（可選）。
 */
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

/**
 * `Item` 元件是一個 React Functional Component，負責渲染一個可點擊的項目。
 *
 * @param {ItemProps} props - 組件的屬性。
 * @param {Object} props.content - 項目的內容。
 * @param {string} [props.content.label=''] - 項目的標籤。
 * @param {string} [props.content.prefix=''] - 項目的前綴圖示。
 * @param {string} [props.content.value=''] - 項目的值。
 * @param {string} [props.content.href=''] - 項目的連結。如果提供了連結，點擊項目將在新標籤頁中打開該連結。
 * @param {Function} [props.onClick=() => ({})] - 點擊項目時的回調函數。
 * @param {string} [props.className=''] - 自定義的 CSS 類名。
 *
 * @returns {JSX.Element} 返回渲染的項目。
 */
export const Item: React.FC<ItemProps> = ({
  content: { label = '', prefix = '', value = '', href = '' },
  onClick = () => ({}),
  className = '',
}: ItemProps) => {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
    onClick && onClick(value);
  };

  return (
    <li className={`ded-list-item ${className}`} onClick={handleClick}>
      {href ? (
        <a className="ded-list-item-text ded-list-item-link" href={href}>
          {prefix && <div className="ded-list-icon">{prefix}</div>}
          <div className="ded-list-item-label">{label}</div>
        </a>
      ) : (
        <div className="ded-list-item-text">
          {prefix && <div className="ded-list-icon">{prefix}</div>}
          <div className="ded-list-item-label">{label}</div>
        </div>
      )}
    </li>
  );
};
export default Item;
