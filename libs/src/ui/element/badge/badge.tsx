import React, { useEffect } from 'react';
import { getCombinedClassName } from '@src/utils/string';

interface BadgeProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  isShowDot?: boolean;
  children: React.ReactNode;
  value?: number;
  limit?: number;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  themeColor = 'error',
  children,
  isShowDot = false,
  value = 0,
  limit = 0,
  className = '',
}) => {
  const [msgCount, setMsgCount] = React.useState<number>(value || 0);

  useEffect(() => {
    if (value && limit && value > limit) {
      setMsgCount(limit);
      return;
    }
    return setMsgCount(value || 0);
  }, [value, limit]);

  return (
    <div className={`ded-badge-container ${className}`}>
      {children}
      <div
        className={`ded-badge 
          ${getCombinedClassName('ded-badge-color', themeColor)}
          ${isShowDot ? 'ded-badge-dot' : ''}`}
      >
        {!isShowDot && value > 0 && (
          <div className="ded-badge-content">
            <span className="ded-badge-content-text">{msgCount}</span>
            {value > limit && <span className="ded-badge-content-text">+</span>}
          </div>
        )}
      </div>
    </div>
  );
};
export default Badge;
