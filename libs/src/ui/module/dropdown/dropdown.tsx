import React, { useState, useRef, useEffect } from 'react';
import Portal from '@src/ui/portal';
import { getTargetPosition } from '@src/utils/position';
import { usePosition } from '@src/hooks/usePosition';
import { List, Input } from '@src/ui';
import { ItemProps } from '@src/ui/module/list';
import { ArrowDownIcon } from '@src/assets';

interface DropdownProps {
  label?: string;
  dataSource: ItemProps[];
  onSelect?: (value: string) => void;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label = '',
  className = '',
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { childrenSize, position } = usePosition(dropdownRef);
  const [value, setValue] = useState('');

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  const handleSelected = (value: string) => {
    setValue(value);
    setIsVisible(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !document.getElementById('portal-root')?.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
    event.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      {label && <label className="ded-input-label">{label}</label>}
      <div
        id="dropdownRef"
        className="ded-dropdown"
        ref={dropdownRef}
        onClick={handleClick}
      >
        <Input
          initValue={value}
          isOpen={isVisible}
          type="text"
          className="ded-dropdown-input"
        />
      </div>
      <Portal>
        {isVisible && (
          <div
            style={getTargetPosition(
              position,
              childrenSize,
              'bottom',
              '8px',
              true
            )}
            className={`ded-tooltip ${className}`}
          >
            <List {...rest} hasOutline onSelect={handleSelected} />
          </div>
        )}
      </Portal>
    </>
  );
};
export default Dropdown;
