import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement>[],
  callback: () => void
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.some((r) => r.current && r.current.contains(event.target as Node)))
      return;
    callback();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
};

export default useClickOutside;
