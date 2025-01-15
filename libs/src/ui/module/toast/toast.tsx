import React, { ReactNode } from 'react';
import { SvgClose } from '@src/assets';
import { Button } from '@src/ui/element/button';
import { Title } from '@src/ui/element/title';
import { getCombinedClassName } from '@src/utils/string';

export interface ToastProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  onClose?: () => void;
  title?: string;
  content: string;
  action?: ReactNode;
  prefix?: ReactNode;
  duration?: number;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  themeColor = 'primary',
  onClose = () => ({}),
  title = 'Title',
  content = 'Content',
  action,
  prefix = '',
  duration = 1000,
  className = '',
}) => {
  return (
    <div
      className={`ded-toast 
        ${getCombinedClassName('ded-toast', `border-${themeColor}`)} 
        ${className}`}
    >
      <Button
        variant="text"
        onClick={onClose}
        themeColor="neutral"
        className="ded-close-button"
      >
        <SvgClose width={20} height={20} onClick={onClose} />
      </Button>
      <div className={`ded-toast-header`}>
        <div
          className={`ded-toast-header-message 
          ${getCombinedClassName('ded-toast-header-message', themeColor)}
        `}
        >
          {prefix}
          <Title level={5} themeColor={themeColor}>
            {title}
          </Title>
        </div>
        <div className="ded-toast-header-action">{action}</div>
      </div>
      <p className="ded-description">{content}</p>
    </div>
  );
};
export default Toast;
