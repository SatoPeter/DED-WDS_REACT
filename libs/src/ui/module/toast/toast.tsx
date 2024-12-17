import React, { ReactNode } from 'react';
import { CloseIcon } from '@src/assets';

export interface ToastProps {
  themeColor?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  onClose?: () => void;
  title?: string;
  content: string;
  prefix?: ReactNode;
  duration?: number;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  themeColor = 'primary',
  onClose,
  title = 'Title',
  content = 'Content',
  prefix = '',
  duration = 1000,
  className = '',
}) => {
  return (
    <div className={`ded-toast ded-toast-border-${themeColor} ${className}`}>
      <button className="ded-close-button">
        <CloseIcon width={20} height={20} onClick={onClose} />
      </button>
      <div className="ded-message">
        <span className={`ded-icon-wrapper ded-toast-${themeColor}`}>
          {prefix && <div>{prefix}</div>}
        </span>
        <span>{title}</span>
      </div>
      <p className="ded-description">{content}</p>
    </div>
  );
};
export default Toast;
