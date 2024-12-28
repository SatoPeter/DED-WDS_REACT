import React, { useState, MouseEvent, useEffect, ReactNode } from 'react';
import { TabItem } from './tab-item';

/**
 * TabsProps 介面定義了 Tabs 組件的屬性。
 *
 * @property {('neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info')} [themeColor] - 選擇 Tabs 的主題顏色。
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
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  dataSource: {
    title: string;
    content: string;
  }[];
  activeIndex: number;
  type?: 'default' | 'card';
  prefix?: ReactNode;
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
  prefix = '',
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
            prefix={prefix}
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
