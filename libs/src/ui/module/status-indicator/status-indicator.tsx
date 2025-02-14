import React, { ReactNode } from 'react';
import { getCombinedClassName } from '@src/utils/string';

interface StatusIndicatorProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  variant: 'filled' | 'text';
  prefix: ReactNode;
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  themeColor = 'primary',
  variant = 'text',
  prefix,
  children,
  size = 'medium',
  className = '',
}) => {
  return (
    <div
      className={`status-indicator 
        ${getCombinedClassName(
          'status-indicator',
          `${variant}-${themeColor}`
        )}       
        ${className}
      `}
      role="status"
    >
      <div className="status-indicator-content">
        {prefix ? (
          <div
            className={`status-indicator-prefix 
              ${getCombinedClassName('ded-icon', size)}`}
          >
            {prefix}
          </div>
        ) : (
          <div
            className={`${!prefix ? 'status-indicator-dot' : ''}
          ${
            !prefix && variant === 'text'
              ? getCombinedClassName('status-indicator-dot', themeColor)
              : ''
          }
          ${
            !prefix && variant === 'filled' ? 'status-indicator-dot-white' : ''
          }`}
          ></div>
        )}
        {children && (
          <div className={`${getCombinedClassName('ded-text', size)}`}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
export default StatusIndicator;
