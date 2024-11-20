import React, { useState, MouseEvent, useEffect } from 'react';
import { Button } from '@src/ui';
import { getActiveClass, getThemeClass } from './styled';

/**
 * TabItemProps 介面定義了標籤項目的屬性。
 *
 * @property { 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info' } [themeColor] - 標籤的主題顏色。
 * @property { 'card' | 'default' } [type] - 標籤的類型，可以是卡片或預設。
 * @property {string} title - 標籤的標題。
 * @property {number} index - 標籤的索引。
 * @property {boolean} isActive - 標籤是否處於活動狀態。
 * @property {boolean} [isDisabled] - 標籤是否被禁用。
 * @property {(event: MouseEvent<HTMLButtonElement>) => void} onClick - 點擊標籤時的回調函數。
 * @property {string} [className] - 標籤的自定義 CSS 類名。
 */
export interface TabItemProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  type?: 'default' | 'card';
  title: string;
  isActive: boolean;
  isDisabled?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

/**
 * TabItem 組件代表標籤組中的單個標籤項目。
 *
 * @component
 * @param {Object} props - 組件的屬性。
 * @param {string} props.label - 標籤的顯示文字。
 * @param {boolean} props.isActive - 標籤是否處於活動狀態。
 * @param {Function} props.onClick - 當標籤被點擊時觸發的回調函數。
 */
const TabItem: React.FC<TabItemProps> = ({
  themeColor = 'primary',
  type = 'default',
  title = '',
  isActive,
  isDisabled = false,
  className,
  onClick,
}: TabItemProps) => (
  <Button
    className={`ded-tab ${isActive ? getActiveClass(themeColor, type) : ''} ${
      isDisabled
        ? 'ded-tab-disable'
        : className || getThemeClass(themeColor, type)
    }`}
    variant="text"
    onClick={onClick}
  >
    {title}
  </Button>
);

/**
 * TabsProps 介面定義了 Tabs 組件的屬性。
 *
 * @property {('primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info')} [themeColor] - 選擇 Tabs 的主題顏色。
 * @property {Tab[]} dataSource - Tabs 的數據陣列，每個 Tab 包含標題和內容。
 * @property {number} [activeIndex] - 設定當前活躍的 Tab 索引。
 * @property {('card' | 'default')} [type] - 設定 Tabs 的類型，可以是卡片樣式或預設樣式。
 * @property {boolean} [isDisabled] - 設定 Tabs 是否被禁用。
 * @property {string} [className] - 自定義的 CSS 類名。
 * @property {(event: MouseEvent<HTMLButtonElement>) => void} [onClick] - 點擊事件的處理函數。
 */
export interface TabsProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  dataSource: {
    title: string;
    content: string;
  }[];
  activeIndex: number;
  type?: 'default' | 'card';
  isDisabled?: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
/**
 * 渲染帶有相關內容的標籤組。
 *
 * @component
 * @param {TabsProps} props - Tabs 組件的屬性。
 * @param {string} props.themeColor - 標籤的顏色主題。
 * @param {Tab[]} props.dataSource - 包含標籤標題和內容的標籤對象數組。
 * @param {number} props.activeIndex - 當前活動標籤的索引。
 * @param {string} props.type - 要渲染的標籤類型。
 * @param {boolean} props.isDisabled - 是否禁用標籤。
 * @param {function} props.onClick - 標籤的點擊事件處理程序。
 * @returns {JSX.Element} 渲染的 Tabs 組件。
 */
export const Tabs: React.FC<TabsProps> = ({
  themeColor = 'primary',
  dataSource,
  activeIndex = 0,
  type = 'default',
  isDisabled = false,
  className = '',
  onClick,
}: TabsProps): JSX.Element => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleClick = (event: MouseEvent<HTMLButtonElement>, index: number) => {
    setActiveTabIndex(index);
    event.currentTarget.blur();
    onClick && onClick(event);
  };

  useEffect(() => {
    setActiveTabIndex(activeIndex || 0);
  }, [activeIndex]);

  return (
    <div className={`ded-tabs-container ${className}`}>
      <div className="ded-tabs">
        {dataSource.map((tab, index) => (
          <TabItem
            key={index}
            title={tab.title}
            themeColor={themeColor}
            type={type}
            isDisabled={isDisabled}
            isActive={index === activeTabIndex}
            onClick={(e) => handleClick(e, index)}
          />
        ))}
      </div>
      <div className={`ded-tab-content ${isDisabled && 'ded-tab-disable'}`}>
        {dataSource[activeTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
