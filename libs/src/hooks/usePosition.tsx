import React, { useState, useEffect } from 'react';

/**
 * 自訂 Hook，用於計算 DOM 元素的大小和位置。
 *
 * @param childrenRef - DOM 元素的引用。
 * @returns 包含 DOM 元素大小和位置的物件。
 */
export const usePosition = (childrenRef: React.RefObject<HTMLDivElement>) => {
  const [childrenSize, setChildrenSize] = useState({
    width: 0,
    height: 0,
  });

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const handleOnResize = () => {
      setChildrenSize({
        width: childrenRef.current ? childrenRef.current.offsetWidth : 0,
        height: childrenRef.current ? childrenRef.current.offsetHeight : 0,
      });

      setPosition({
        top: childrenRef.current
          ? childrenRef.current.getBoundingClientRect().top
          : 0,
        left: childrenRef.current
          ? childrenRef.current.getBoundingClientRect().left
          : 0,
      });
    };

    handleOnResize();
    window.addEventListener('resize', handleOnResize);
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, [childrenRef]);

  return { childrenSize, position };
};
