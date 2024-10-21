import React from 'react';
import Item from './item';
import { ItemProps } from './item';

export interface ListProps {
  isMenu?: boolean;
  options: Array<ItemProps>;
  onSelect?: (value: string) => void;
  className?: string;
}

export const List: React.FC<ListProps> = (props: ListProps) => {
  const { isMenu, options, onSelect, className } = props;

  return (
    <ul className={`list ${isMenu && 'menu'} ${className}`}>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <Item {...option} onClick={onSelect} key={index}></Item>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
