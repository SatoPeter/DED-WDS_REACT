import { Button } from '@src/ui';
import { getActiveClass, getThemeClass } from './styled';
import { ReactNode, MouseEvent } from 'react';

/**
 * TabItemProps 介面定義了標籤項目的屬性。
 *
 * @property {'primary' | 'secondary' | 'neutral' | 'info' | 'success' | 'warning' | 'error'} [themeColor] - 標籤的主題顏色。
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
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  type?: 'default' | 'card';
  title: string;
  prefix?: ReactNode;
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
export const TabItem: React.FC<TabItemProps> = ({
  themeColor = 'primary',
  type = 'default',
  title = '',
  prefix = '',
  isActive,
  isDisabled = false,
  className = '',
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
    {prefix && <span className="ded-icon">{prefix}</span>}
    <span>{title}</span>
  </Button>
);
