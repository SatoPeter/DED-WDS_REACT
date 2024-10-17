import React, { useRef, useEffect } from 'react';
import { getThemeClass } from './styled';

interface CircleProgressProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  className?: string;
  label?: string;
  percent: number; // 0 to 100
  size?: number; // default size is 100
  strokeWidth?: number; // default stroke width is 10
}

/**
 * CircleProgress 組件顯示一個圓形進度條。
 *
 * @component
 * @param {string} themeColor - 進度條的顏色主題。默認為 'primary'。
 * @param {string} label - 顯示在進度條內的標籤。默認為空字符串。
 * @param {number} percent - 進度百分比。必須在 0 到 100 之間。
 * @param {number} size - 進度條的直徑。默認為 100。
 * @param {number} strokeWidth - 進度條的線條寬度。默認為 10。
 * @returns {JSX.Element} 渲染的 CircleProgress 組件。
 */
export const CircleProgress: React.FC<CircleProgressProps> = ({
  themeColor = 'primary',
  label = '',
  percent,
  size = 100,
  strokeWidth = 10,
}) => {
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
    <div className="progress-circle-container">
      <svg className="progress" width={size} height={size}>
        <circle
          className="progress-circle-track"
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
        <div className="progress-circle-label">
          <span>{label}</span>
          <span>{`${normalizedProgress}%`}</span>
        </div>
      )}
    </div>
  );
};

export default CircleProgress;
