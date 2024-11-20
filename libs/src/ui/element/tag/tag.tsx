import React from 'react';
import { Button } from '@src/ui';
import { CloseIcon } from '@src/assets';
import { getDisableClass, getThemeClass } from './styled';

export interface TagProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  label: string;
  prefix?: React.ReactNode;
  closable?: boolean;
  isDisabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export const Tag: React.FC<TagProps> = ({
  themeColor = 'primary',
  label,
  prefix,
  closable = true,
  isDisabled = false,
  className,
  onClose = () => ({}),
}) => {
  return (
    <div
      className={`ded-tag ${className} ${
        isDisabled
          ? getDisableClass('outlined')
          : getThemeClass('contained', themeColor)
      }`}
    >
      {prefix && <div className="ded-tag-icon">{prefix}</div>}
      <span className="ded-tag-text">{label}</span>
      {closable && (
        <Button variant="text" onClick={onClose}>
          <CloseIcon
            className={`ded-tag-close ${
              isDisabled ? 'ded-tag-close-disabled' : ''
            }`}
          />
        </Button>
      )}
    </div>
  );
};
export default Tag;
