import React, { useRef, useEffect } from 'react';
import { getThemeClass } from './styled';

/**
 * `CircleProgressProps` 介面定義了圓形進度條的屬性。
 *
 * @property {('primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info')} [themeColor] - 主題顏色，可選值包括 'primary'、'secondary'、'tertiary'、'success'、'warning'、'error' 和 'info'。
 * @property {string} [label] - 進度條的標籤。
 * @property {number} percent - 進度百分比，範圍從 0 到 100。
 * @property {number} [size] - 進度條的大小，預設大小為 100。
 * @property {number} [strokeWidth] - 進度條的線條寬度，預設寬度為 10。
 * @property {string} [className] - 自訂的 CSS 類名。
 */
export interface CircleProgressProps {
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
  size?: number; // default size is 100
  strokeWidth?: number; // default stroke width is 10
  className?: string;
}

/**
 * CircleProgress 元件
 *
 * @component
 * @param {CircleProgressProps} props - 元件屬性
 * @param {string} [props.themeColor='primary'] - 主題顏色
 * @param {string} [props.label=''] - 圓形進度條的標籤
 * @param {number} props.percent - 進度百分比
 * @param {number} [props.size=100] - 圓形進度條的大小
 * @param {number} [props.strokeWidth=10] - 圓形進度條的線條寬度
 *
 * @returns {JSX.Element} CircleProgress 元件
 */
export const CircleProgress: React.FC<CircleProgressProps> = ({
  themeColor = 'primary',
  label = '',
  percent = 0,
  size = 100,
  strokeWidth = 10,
  className = '',
}: CircleProgressProps): JSX.Element => {
  const textRef = useRef<SVGTextElement>(null);
  const [contentLength, setContentLength] = React.useState(0);
  useEffect(() => {
    if (textRef.current) {
      setContentLength(textRef.current.getComputedTextLength());
    }
  }, [label]);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  // 確保進度在0到100之間
  const normalizedProgress = Math.min(Math.max(percent, 0), 100);

  const getLimitBorder = () => {
    if (!contentLength) return 64;
    console.log(contentLength + strokeWidth + 30);

    return contentLength + strokeWidth + 30;
  };

  return (
    <div className={`ded-progress-circle-container ${className}`}>
      <svg className="ded-progress" width={size} height={size}>
        <circle
          className="ded-progress-circle-track"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`${getThemeClass('circle', themeColor)}`}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dashoffset 0.35s' }}
        />
        {size >= getLimitBorder() && (
          <text
            ref={textRef}
            x="50%"
            y="45%"
            textAnchor="middle"
            fontSize="1em"
            fill="black"
          >
            {label ?? ''}
          </text>
        )}
        {size >= getLimitBorder() && (
          <text
            x="50%"
            y={label ? '60%' : '50%'}
            textAnchor="middle"
            dy=".3em"
            fontSize="1.5em"
            fill="black"
          >
            {`${normalizedProgress}%`}
          </text>
        )}
      </svg>
      {size < getLimitBorder() && (
        <div className="ded-progress-circle-label">
          <span>{label}</span>
          <span>{`${normalizedProgress}%`}</span>
        </div>
      )}
    </div>
  );
};

export default CircleProgress;
