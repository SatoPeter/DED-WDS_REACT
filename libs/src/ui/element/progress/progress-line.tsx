import React from 'react';
import { getThemeClass } from './styled';

/**
 * LineProgressProps 介面定義了 LineProgress 元件的屬性。
 *
 * @屬性 { 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info' } [themeColor]
 *   指定進度條的主題顏色。
 *
 * @屬性 {string} [label]
 *   進度條的標籤。
 *
 * @屬性 {number} percent
 *   進度百分比，範圍從 0 到 100。
 *
 * @屬性 {number} [height]
 *   進度條的高度，預設大小為 100。
 *
 * @屬性 {string} [className]
 *   自訂的 CSS 類名。
 */
export interface LineProgressProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  label?: string;
  percent: number; // 0 to 100
  height?: number; // default size is 100
  className?: string;
}

/**
 * LineProgress 組件
 *
 * @component
 * @param {Object} props - 組件的屬性
 * @param {string} [props.themeColor='primary'] - 主題顏色
 * @param {string} [props.label=''] - 標籤
 * @param {number} props.percent - 進度百分比
 * @param {number} [props.height=10] - 線條寬度
 * @returns {JSX.Element} - LineProgress 組件
 */
export const LineProgress: React.FC<LineProgressProps> = ({
  themeColor = 'primary',
  label = '',
  percent = 0,
  height = 10,
}) => {
  // 確保進度在0到100之間
  const normalizedProgress = Math.min(Math.max(percent, 0), 100);

  return (
    <div>
      {label && <div className="progress-line-label">{label}</div>}
      <div className="progress-line">
        <div className="progress-line-track" style={{ height }}>
          <div
            className={`${getThemeClass('line', themeColor)}`}
            style={{ width: `${normalizedProgress}%` }}
          />
        </div>
        <div className="progress-line-percent">{`${normalizedProgress}%`}</div>
      </div>
    </div>
  );
};

export default LineProgress;
