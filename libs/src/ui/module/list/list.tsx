import React from 'react';
import Item from './item';
import { ItemProps } from './item';

/**
 * 列表組件的屬性接口。
 *
 * @interface ListProps
 * @property {boolean} [hasOutline] - 是否為菜單。
 * @property {Array<ItemProps>} dataSource - 數據源，包含列表項目。
 * @property {(value: string) => void} [onSelect] - 當選擇某項時的回調函數。
 * @property {string} [className] - 自定義樣式類名。
 */
export interface ListProps {
  hasOutline?: boolean;
  dataSource: Array<ItemProps>;
  hasDivider?: boolean;
  onSelect?: (value: string) => void;
  className?: string;
}

/**
 * 列表組件
 *
 * @param {boolean} [hasOutline=false] - 是否為菜單模式
 * @param {Array} [dataSource=[]] - 列表數據源
 * @param {Function} [onSelect=() => ({})] - 選擇項目時的回調函數
 * @param {string} [className=''] - 自定義樣式類名
 *
 * @returns {JSX.Element} - 渲染的列表組件
 */
export const List: React.FC<ListProps> = ({
  hasOutline = false,
  dataSource,
  hasDivider = false,
  onSelect = () => ({}),
  className = '',
}: ListProps) => {
  return (
    <ul
      className={`ded-list 
      ${hasOutline && 'ded-outline'} 
      ${className}`}
    >
      {dataSource.map((option, index) => {
        return (
          <Item
            {...option}
            hasDivider={hasDivider}
            onClick={onSelect}
            key={index}
          ></Item>
        );
      })}
    </ul>
  );
};
export default List;
