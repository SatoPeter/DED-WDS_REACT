import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon } from '@src/assets';
import { useMenu } from '@src/hooks';
import { ItemProps } from '@src/hooks/useMenu';

export interface MenuItemProps {
  item: ItemProps;
  isCollapsed: boolean;
  color?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { item, isCollapsed, color } = props;
  const { isOpen, setIsOpen, contentRef, maxHeight, hasChildren } = useMenu(
    item,
    isCollapsed
  );

  return (
    <li>
      <div className="menu-item">
        <div
          style={{ color: color }}
          className="menu-item-content"
          onClick={() => {
            if (item.path) {
              console.log('go to', item.path);
            }
          }}
        >
          <div className="menu-item-content-icon">{item.icon}</div>
          <span
            className="menu-item-content-title"
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
        className="menu-subitem"
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

export interface MenuProps {
  className?: string;
  menuData: ItemProps[];
  isCollapsed: boolean;
  width?: string;
  color?: string;
}

export const Menu: React.FC<MenuProps> = (props) => {
  const { menuData, isCollapsed, width = '240px', color = '#000000' } = props;
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.width = isCollapsed ? '60px' : width;
    }
  }, [isCollapsed, width]);

  return (
    <div className="menu-container">
      <nav
        ref={menuRef}
        className="nav"
        style={{
          width: isCollapsed ? '60px' : '100%',
        }}
      >
        <ul className="nav-menu">
          {menuData.map((item, index) => (
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
