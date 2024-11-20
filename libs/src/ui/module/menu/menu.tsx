import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon } from '@src/assets';
import { useMenu } from '@src/hooks';
import { ItemProps } from '@src/hooks/useMenu';

/**
 * @interface MenuItemProps
 * @description 表示菜單項目的屬性。
 *
 * @property {ItemProps} item - 菜單項目的詳細信息。
 * @property {boolean} isCollapsed - 指示菜單是否折疊。
 * @property {string} [color] - 菜單項目的顏色（可選）。
 */
export interface MenuItemProps {
  item: ItemProps;
  isCollapsed: boolean;
  color?: string;
}

/**
 * `MenuItem` 是一個 React Functional Component，用於渲染菜單項目。
 *
 * @param {MenuItemProps} props - 組件的屬性。
 * @param {Object} props.item - 菜單項目的資料，包含 `title` 和 `icon`。
 * @param {string} [props.item.title=''] - 菜單項目的標題。
 * @param {string} [props.item.icon=''] - 菜單項目的圖標。
 * @param {boolean} [props.isCollapsed=false] - 指示菜單是否折疊。
 * @param {string} [props.color='#000000'] - 菜單項目的顏色。
 *
 * @returns {JSX.Element} 返回一個渲染的菜單項目。
 */
const MenuItem: React.FC<MenuItemProps> = ({
  item = { title: '', prefix: '' },
  isCollapsed = false,
  color = '#000000',
}: MenuItemProps) => {
  const { isOpen, setIsOpen, contentRef, maxHeight, hasChildren } = useMenu(
    item,
    isCollapsed
  );

  return (
    <li>
      <div className="ded-menu-item">
        <div
          style={{ color: color }}
          className="ded-menu-item-content"
          onClick={() => {
            if (item.path) {
              console.log('go to', item.path);
            }
          }}
        >
          <div className="ded-menu-item-content-icon">{item.prefix}</div>
          <span
            className="ded-menu-item-content-title"
            style={{
              opacity: isCollapsed ? 0 : 1,
            }}
          >
            {item.title}
          </span>
        </div>

        {!isCollapsed && hasChildren && (
          <ArrowDownIcon
            width={24}
            height={24}
            fill={color}
            style={{
              transition: 'transform 0.3s',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
      </div>

      <ul
        ref={contentRef}
        className="ded-menu-subitem"
        style={{
          maxHeight: maxHeight,
        }}
      >
        {hasChildren &&
          item.children?.map((child, index) => (
            <MenuItem
              key={index}
              item={child}
              isCollapsed={isCollapsed}
              color={color}
            />
          ))}
      </ul>
    </li>
  );
};

/**
 * @interface MenuProps
 * @description 定義 Menu 組件的屬性
 * @property {ItemProps[]} dataSource - 菜單項目數據源
 * @property {boolean} isCollapsed - 菜單是否折疊
 * @property {string} [color] - 菜單顏色（可選）
 * @property {string} [className] - 自定義 CSS 類名（可選）
 */
export interface MenuProps {
  dataSource: ItemProps[];
  isCollapsed: boolean;
  color?: string;
  className?: string;
}

/**
 * Menu 組件
 *
 * @param {MenuProps} props - 組件的屬性
 * @param {Array} props.dataSource - 菜單項目數據源，默認為空數組
 * @param {boolean} props.isCollapsed - 是否折疊菜單，默認為 false
 * @param {string} props.color - 菜單項目顏色，默認為 '#000000'
 *
 * @returns {JSX.Element} - 返回渲染的菜單組件
 *
 */
export const Menu: React.FC<MenuProps> = ({
  dataSource,
  isCollapsed = false,
  color = '#000000',
}: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.width = isCollapsed ? '60px' : '100%';
    }
  }, [isCollapsed]);

  return (
    <div className="ded-menu-container">
      <nav
        ref={menuRef}
        className="ded-nav"
        style={{
          width: isCollapsed ? '60px' : '100%',
        }}
      >
        <ul className="ded-nav-menu">
          {dataSource.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              isCollapsed={isCollapsed}
              color={color}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
