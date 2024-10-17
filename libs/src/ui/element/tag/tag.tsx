import React from 'react';
import { Button } from '@src/ui';
import { CloseIcon } from '@src/assets';
import { getDisableClass } from './styled';

interface TagProps {
  isDisabled?: boolean;
  icon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = (props: TagProps) => {
  const {
    isDisabled,
    icon,
    closeIcon,
    onClose,
    closable,
    className,
    children,
  } = props;

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
