import { ReactNode, useState, useEffect, useRef } from 'react';

export interface ItemProps {
  title: string;
  prefix?: ReactNode;
  path?: string;
  children?: ItemProps[];
}

export const useMenu = (item: ItemProps, isCollapsed: boolean) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLUListElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');
  const hasChildren = !!item.children?.length;

  useEffect(() => {
    const calculateTotalHeight = (items: ItemProps[]): number => {
      return items.reduce((total, item) => {
        const itemHeight = 42;
        if (item.children) {
          return total + itemHeight + calculateTotalHeight(item.children);
        }
        return total + itemHeight;
      }, 0);
    };

    if (contentRef.current) {
      if (isOpen) {
        const totalHeight = calculateTotalHeight(item.children || []);
        setMaxHeight(`${totalHeight}px`);
      } else {
        setMaxHeight('0px');
      }
    }
  }, [isOpen, item.children]);

  useEffect(() => {
    if (isCollapsed) {
      setIsOpen(false);
    }
  }, [isCollapsed]);

  return {
    isOpen,
    setIsOpen,
    contentRef,
    maxHeight,
    hasChildren,
  };
};
