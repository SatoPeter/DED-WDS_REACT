import React from 'react';
import { Button } from '@src/ui';
import { CloseIcon } from '@src/assets';
import { getDisableClass } from './styled';

interface TagProps {
  // size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  icon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  closable?: boolean;
  // themeColor?:
  //   | 'primary'
  //   | 'secondary'
  //   | 'tertiary'
  //   | 'success'
  //   | 'warning'
  //   | 'error'
  //   | 'info';
  // bordered?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = (props: TagProps) => {
  /* 解構組件參數 */
  const {
    // size,
    isDisabled,
    icon,
    closeIcon,
    // themeColor = 'primary',
    // bordered,
    onClose,
    closable,
    className,
    children,
  } = props;

  /* 事件控制 */

  return (
    <div
      className={`tag ${className} ${
        isDisabled ? getDisableClass('outlined') : ''
      }`}
    >
      {icon && <div className="tag-icon">{icon}</div>}
      <span className="tag-text">{children}</span>
      {closable && (
        <Button variant="text" onClick={onClose}>
          {closeIcon ? (
            closeIcon
          ) : (
            <CloseIcon
              className={`tag-close ${isDisabled ? 'tag-close-disabled' : ''}`}
            />
          )}
        </Button>
      )}
    </div>
  );
};
export default Tag;
