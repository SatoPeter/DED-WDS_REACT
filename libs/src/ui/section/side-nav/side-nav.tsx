import React, { ReactNode, useEffect, useState } from 'react';
import { SearchIcon, ArrowDownIcon } from '@src/assets';
import { ItemProps } from '@src/hooks/useMenu';
import { Menu, Input } from '@src/ui';

interface SideNavProps {
  logo: ReactNode;
  menuData: ItemProps[];
  themeColor?: string;
  width?: string;
  className?: string;
}

const THEME_COLOR = {
  Blue: '#00467C',
  Yellow: '#F4E069',
  Grape: '#AB86D1',
  Black: '#000000',
  White: '#ffffff',
};

export const SideNav: React.FC<SideNavProps> = (props: SideNavProps) => {
  const { logo, themeColor, menuData, width, ...rest } = props;

  const [color, setColor] = useState(THEME_COLOR.White);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const coloredLogo = React.cloneElement(logo as React.ReactElement, {
    fill: color,
  });

  const applyColorToIcons = (items: ItemProps[], color: string) => {
    items.forEach((item) => {
      item.icon = React.cloneElement(item.icon as React.ReactElement, {
        fill: color,
      });
      if (item.children) {
        applyColorToIcons(item.children, color);
      }
    });
  };

  useEffect(() => {
    if (themeColor) {
      if (themeColor === THEME_COLOR.Blue) {
        setColor('#ffffff');
      }
      if (themeColor === THEME_COLOR.Yellow) {
        setColor('#004E81');
      }
      if (themeColor === THEME_COLOR.Grape) {
        setColor('#004E81');
      }
      if (themeColor === THEME_COLOR.Black) {
        setColor('#cccccc');
      }
    } else {
      setColor('#000000');
    }
  }, [color, menuData, themeColor]);

  applyColorToIcons(menuData, color);

  return (
    <div className="side-nav" style={{ backgroundColor: themeColor }}>
      <div className="side-nav-header">
        {!isCollapsed && (
          <div className="side-nav-header-logo">
            <div>{coloredLogo}</div>
            <div style={{ color: color }}>DesignLogo</div>
          </div>
        )}
        <ArrowDownIcon
          onClick={() => setIsCollapsed((prev) => !prev)}
          fill={color}
          width={24}
          height={24}
        />
      </div>
      {!isCollapsed && (
        <div>
          <Input
            onChange={() => ({})}
            placeholder="請輸項目..."
            prefix={<SearchIcon />}
            size="medium"
            type="text"
          />
        </div>
      )}
      <Menu
        {...rest}
        menuData={menuData}
        isCollapsed={isCollapsed}
        color={color}
      />
    </div>
  );
};
export default SideNav;
