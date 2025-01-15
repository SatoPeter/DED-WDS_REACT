import React, { useEffect, useRef } from 'react';
import { ItemProps } from '@src/hooks/useMenu';
import { MenuItem } from './item';

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
  hasDivider?: boolean;
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
  hasDivider = false,
  className = '',
}: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.width = isCollapsed ? '44px' : '100%';
    }
  }, [isCollapsed]);

  return (
    <div className={`ded-nav-container ${className}`}>
      <nav
        ref={menuRef}
        className="ded-nav"
        style={{
          width: isCollapsed ? '60px' : '100%',
        }}
      >
        <ul className="ded-nav-list">
          {dataSource.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              isCollapsed={isCollapsed}
              hasDivider={hasDivider}
              color={color}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
