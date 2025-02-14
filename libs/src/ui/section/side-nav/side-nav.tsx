import React, { useEffect, useState } from 'react';
import { SvgSearch, SvgArrowDown, SvgLogout } from '@src/assets/icons';
import { ItemProps } from '@src/hooks/useMenu';
import { Menu, Input, Avatar, Button, Navbar } from '@src/ui';

/**
 * SideNav 元件的屬性介面
 * @interface
 * @property {string} mobileLogoSrc - 行動裝置 Logo 圖片來源路徑
 * @property {string} [desktopLogoSrc] - 桌面版 Logo 圖片來源路徑（選填）
 * @property {string} [logoLink] - Logo 點擊連結路徑（選填）
 * @property {boolean} [hasRWD] - 是否啟用響應式設計（選填）
 * @property {boolean} [hasLogo] - 是否顯示 Logo（選填）
 * @property {boolean} [hasSearch] - 是否顯示搜尋功能（選填）
 * @property {ItemProps[]} dataSource - 側邊導覽列項目資料來源陣列
 * @property {string} [themeColor] - 主題顏色（選填）
 * @property {string} [className] - 自定義 CSS 類別名稱（選填）
 */
export interface SideNavProps {
  mobileLogoSrc: string;
  desktopLogoSrc?: string;
  logoLink?: string;
  hasRWD?: boolean;
  hasLogo?: boolean;
  hasSearch?: boolean;
  dataSource: ItemProps[];
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

// 新增斷點常數
const MOBILE_BREAKPOINT = 1024;

export const SideNav: React.FC<SideNavProps> = ({
  /**
   * 側邊導航欄元件
   * @component
   *
   * @param {Object} props - 元件屬性
   * @param {string} [props.mobileLogoSrc=''] - 手機版 Logo 圖片來源
   * @param {string} [props.desktopLogoSrc=''] - 桌面版 Logo 圖片來源
   * @param {string} [props.logoLink=''] - Logo 連結網址
   * @param {boolean} [props.hasLogo=false] - 是否顯示 Logo
   * @param {boolean} [props.hasRWD=true] - 是否啟用響應式設計
   * @param {boolean} [props.hasSearch=false] - 是否顯示搜尋欄
   * @param {THEME_COLOR} [props.themeColor=THEME_COLOR.Blue] - 主題顏色
   * @param {ItemProps[]} props.dataSource - 導航選單資料來源
   * @param {string} [props.className=''] - 自定義 CSS 類別名稱
   *
   * @returns {React.ReactElement} 側邊導航欄元件
   * - 動態選單項目
   */
  mobileLogoSrc = '',
  desktopLogoSrc = '',
  logoLink = '',
  hasLogo = false,
  hasRWD = true,
  hasSearch = false,
  themeColor = THEME_COLOR.Blue,
  dataSource,
  // menu,
  className = '',
}: SideNavProps) => {
  const [color, setColor] = useState(THEME_COLOR.White);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      // 在手機版時自動收合
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setIsCollapsed(true);
        return;
      }
      setIsCollapsed(false);
    };

    // 初始化檢查
    handleResize();

    // 監聽視窗大小變化
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile && isCollapsed) {
    if (hasRWD) {
      return (
        <Navbar
          className="fixed top-0 h-[60px] w-full"
          dataSource={dataSource}
          logoSrc={mobileLogoSrc}
        />
      );
    }
    return;
  }

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
                <a href={logoLink}>
                  <img src={desktopLogoSrc} alt="logo" />
                </a>
              ) : (
                <div>
                  <img src={desktopLogoSrc} alt="logo" />
                </div>
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
      <Menu dataSource={dataSource} isCollapsed={isCollapsed} color={color} />
    </div>
  );
};
export default SideNav;
