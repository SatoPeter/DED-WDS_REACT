import React, { useState, useRef, useEffect } from 'react';
import Portal from '@src/ui/portal';
import { getTargetPosition } from '@src/utils/position';
import { usePosition } from '@src/hooks/usePosition';
import { List, Input } from '@src/ui';
import { ItemProps } from '@src/ui/module/list';

interface DropdownProps {
  // isDisabled?: boolean;
  dataSource: ItemProps[];
  placement:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'right-top'
    | 'right'
    | 'right-bottom'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left'
    | 'left-bottom'
    | 'left'
    | 'left-top';
  onClick?: () => string;
  onSelect?: (value: string) => void;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const {
    placement,
    // isDisabled,
    className,
    ...rest
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { childrenSize, position } = usePosition(dropdownRef);
  const [value, setValue] = useState('');

  const handleSelect = (value: string) => {
    setSelected((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  /* 事件控制 */
  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  const handleSelected = (value: string) => {
    console.log(value);

    setIsVisible(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
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
      <div className="dropdown" ref={dropdownRef} onClick={handleClick}>
        <Input
          initValue={value}
          type="text"
          onChange={() => console.log('change')}
          // suffix={
          //   <ArrowDownIcon
          //     className={`icon ${
          //       isVisible ? 'dropdown-icon-open' : 'dropdown-icon-close'
          //     }`}
          //   />
          // }
        />
        <span className="dropdown-selected">
          {selected.length > 0 ? selected.join(', ') : '請選擇項目'}
        </span>
      </div>
      <Portal>
        {isVisible && (
          <div
            style={getTargetPosition(position, childrenSize, placement, '8px')}
            className={`tooltip ${className}`}
          >
            <List {...rest} isMenu onSelect={handleSelected} />
          </div>
        )}
      </Portal>
    </>
  );
};
/* 修改匯出組件定義名稱 Component */
export default Dropdown;
