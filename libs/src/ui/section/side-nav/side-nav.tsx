import React, { ReactNode, useEffect, useState } from 'react';
import { SvgSearch, SvgArrowDown, SvgLogout } from '@src/assets';
import { ItemProps } from '@src/hooks/useMenu';
import { Menu, Input, Avatar, Button } from '@src/ui';

/**
 * 側邊導航組件的屬性介面。
 *
 * @interface SideNavProps
 *
 * @property {ReactNode} logo - 導航欄的標誌。
 * @property {ItemProps[]} dataSource - 導航欄的菜單數據。
 * @property {string} [themeColor] - 可選的主題顏色。
 * @property {string} [className] - 可選的自定義樣式類名。
 */
export interface SideNavProps {
  logo: ReactNode;
  logoLink?: string;
  hasLogo?: boolean;
  hasSearch?: boolean;
  dataSource: ItemProps[];
  // menu: ReactNode;
  themeColor?: string;
  className?: string;
}

const THEME_COLOR = {
  Blue: '#00467C',
  Yellow: '#F4E069',
  Grape: '#AB86D1',
  Black: '#000000',
  White: '#ffffff',
};

/**
 * 側邊導航元件
 *
 * @component
 * @param {SideNavProps} props - 傳遞給元件的屬性
 * @param {React.ReactElement} props.logo - 導航欄的標誌
 * @param {THEME_COLOR} props.themeColor - 主題顏色
 * @param {ItemProps[]} props.dataSource - 導航菜單數據
 * @returns {JSX.Element} 側邊導航元件
 */
export const SideNav: React.FC<SideNavProps> = ({
  logo = '',
  logoLink = '',
  hasLogo = false,
  hasSearch = false,
  themeColor = THEME_COLOR.Blue,
  dataSource,
  // menu,
  className = '',
}: SideNavProps) => {
  const [color, setColor] = useState(THEME_COLOR.White);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const coloredLogo = React.cloneElement(logo as React.ReactElement, {
    fill: color,
  });

  const applyColorToIcons = (items: ItemProps[], color: string) => {
    items.forEach((item) => {
      if (item.prefix) {
        item.prefix = React.cloneElement(item.prefix as React.ReactElement, {
          fill: color,
        });
      }

      if (item.children) {
        applyColorToIcons(item.children, color);
      }
    });
  };

  useEffect(() => {
    if (!themeColor) {
      setColor('#000000');
      return;
    }

    if (themeColor === THEME_COLOR.Blue) {
      setColor('#ffffff');
      return;
    }

    if (themeColor === THEME_COLOR.Yellow) {
      setColor('#004E81');
      return;
    }

    if (themeColor === THEME_COLOR.Grape) {
      setColor('#004E81');
      return;
    }

    if (themeColor === THEME_COLOR.Black) {
      setColor('#cccccc');
      return;
    }
  }, [color, themeColor]);

  applyColorToIcons(dataSource, color);

  return (
    <div
      className={`ded-side-nav ${className} `}
      style={{
        // backgroundColor: themeColor,
        width: isCollapsed ? 'auto' : '100%',
      }}
    >
      {hasLogo && (
        <div className="ded-side-nav-header">
          {!isCollapsed && (
            <div className="ded-side-nav-header-logo">
              {logoLink ? (
                <a href={logoLink}>{coloredLogo}</a>
              ) : (
                <div>{coloredLogo}</div>
              )}
            </div>
          )}
          <button
            className="side-nav-toggle"
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            <SvgArrowDown
              style={{
                cursor: 'pointer',
                transform: isCollapsed ? 'rotate(270deg)' : 'rotate(90deg)',
              }}
              fill={color}
              width={24}
              height={24}
            />
          </button>
        </div>
      )}

      {!isCollapsed ? (
        <div className="ded-side-nav-desktop">
          <Avatar
            alt="無圖顯示"
            caption="Caption"
            isShowInfo
            shape="circle"
            size="large"
            src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
            status="online"
            userName="Name"
            className=""
          />
          <Button
            themeColor="primary"
            variant="text"
            size="large"
            prefix={<SvgLogout width={18} height={18} />}
            onClick={() => ({})}
          />
        </div>
      ) : (
        <div className="ded-side-nav-mobile">
          <Avatar
            alt="無圖顯示"
            caption="Caption"
            shape="circle"
            size="small"
            src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
            status="online"
            userName="Name"
            className=""
          />
        </div>
      )}

      {!isCollapsed && hasSearch && (
        <Input
          initValue={searchValue}
          onChange={() => ({})}
          placeholder="Search..."
          prefix={<SvgSearch />}
          size="medium"
          type="text"
        />
      )}
      {/* {menu} */}
      <Menu dataSource={dataSource} isCollapsed={isCollapsed} color={color} />
    </div>
  );
};
export default SideNav;
