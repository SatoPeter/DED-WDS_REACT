import React from 'react';
import { Portal } from '../../portal';
import { CloseIcon } from '@src/assets';
import { Mask } from '../../mask';

export interface DialogProps {
  isOpen: boolean;
  hasClose?: boolean;
  onClose?: () => void;
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen = false,
  hasClose = false,
  onClose,
  header = 'Title',
  content = 'Content',
  footer,
  className = '',
}) => {
  return (
    <Portal>
      {isOpen && (
        <Mask onClose={onClose}>
          <div
            className={`dialog-content ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {onClose && hasClose && (
              <button className="dialog-close-btn" onClick={onClose}>
                <CloseIcon width={20} height={20} />
              </button>
            )}
            <div className="dialog-header">{header}</div>
            <div className="dialog-body">{content}</div>
            <div className="dialog-footer">{footer}</div>
          </div>
        </Mask>
      )}
    </Portal>
  );
};
export default Dialog;
