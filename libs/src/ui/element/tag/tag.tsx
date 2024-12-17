import React from 'react';
import { CloseIcon } from '@src/assets';
import { getDisableClass, getThemeClass } from './styled';

export interface TagProps {
  themeColor?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  variable?: 'filled' | 'ghost';
  label: string;
  href?: string;
  prefix?: React.ReactNode;
  closable?: boolean;
  isDisabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export const Tag: React.FC<TagProps> = ({
  themeColor = 'primary',
  variable = 'filled',
  label,
  href = '',
  prefix,
  closable = true,
  isDisabled = false,
  className = '',
  onClose = () => ({}),
}) => {
  return (
    <div
      className={`ded-tag ${
        isDisabled
          ? getDisableClass(variable)
          : getThemeClass(variable, themeColor)
      } ${className}`}
    >
      {href ? (
        <a href={href} className="ded-tag-text">
          {prefix && <div className="ded-tag-icon">{prefix}</div>}
          {label}
        </a>
      ) : (
        <span className="ded-tag-text">
          {prefix && <div className="ded-tag-icon">{prefix}</div>}
          {label}
        </span>
      )}
      {closable && (
        <CloseIcon
          onClick={onClose}
          className={`ded-tag-close ${
            isDisabled ? 'ded-tag-close-disabled' : ''
          }`}
        />
      )}
    </div>
  );
};
export default Tag;
