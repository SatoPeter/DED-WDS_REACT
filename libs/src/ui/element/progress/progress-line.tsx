import React, { useEffect } from 'react';
import { useCounter } from '@src/hooks/useCounter';
import { getCombinedClassName } from '@src/utils/string';

/**
 * LineProgressProps 介面定義了進度條元件的屬性。
 *
 * @property {string} [label] - 進度條的標籤。
 * @property {number} percent - 進度百分比，範圍從 0 到 100。
 * @property {number} [strokeWidth] - 進度條的高度，預設大小為 100。
 * @property {string} [className] - 自訂的 CSS 類名。
 */
export interface LineProgressProps {
  label?: string;
  percent: number; // 0 to 100
  strokeWidth?: number; // default size is 100
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
 * @param {number} [props.strokeWidth=10] - 線條寬度
 * @param {string} [props.className=''] - 自訂的 CSS 類名
 * @returns {JSX.Element} - LineProgress 組件
 */
export const LineProgress: React.FC<LineProgressProps> = ({
  // themeColor = 'primary',
  label = '',
  percent = 0,
  strokeWidth = 10,
  className = '',
}: LineProgressProps): JSX.Element => {
  const [currPercent, setCurrPercent] = React.useState(0);

  useCounter({
    initialValue: 0,
    step: 1,
    delay: 0,
    limit: percent,
  });

  // 確保進度在0到100之間
  const normalizedProgress = Math.min(Math.max(currPercent, 0), 100);

  useEffect(() => {
    setCurrPercent(percent);
  }, [percent]);

  return (
    <div className={`ded-progress-line-container ${className}`}>
      {label && (
        <div className="ded-progress-line-label ded-progress-label">
          {label}
        </div>
      )}
      <div className="ded-progress-line">
        <div
          className="ded-progress-line-track"
          style={{ height: strokeWidth }}
        >
          <div
            className="ded-progress-line-percent-form"
            style={{ width: `${normalizedProgress}%` }}
          />
        </div>
        <div className="ded-progress-line-label ded-progress-percent-text">{`${normalizedProgress}%`}</div>
      </div>
    </div>
  );
};

export default LineProgress;
