/**
 * 計算給定位置和間隙的目標位置。
 *
 * @param position - 目標元素的位置。
 * @param childrenSize - 目標元素的大小。
 * @param placement - 目標元素的期望位置。
 * @param gap - 目標元素與其參考元素之間的間隙。
 * @returns 目標元素位置和變換的 CSS 屬性。
 */
export const getTargetPosition = (
  position: { top: number; left: number },
  childrenSize: { width: number; height: number },
  placement: string,
  gap: string
) => {
  if (placement === 'top') {
    return {
      top: `${position.top}px`,
      left: `${position.left}px`,
      transform: `translate(calc(${
        childrenSize.width / 2
      }px - 50%), calc(-100% - ${gap}))`,
      width: `${childrenSize.width}px`,
    };
  }

  if (placement === 'bottom') {
    return {
      top: `${position.top + childrenSize.height}px`,
      left: `${position.left}px`,
      transform: `translate(calc(${childrenSize.width / 2}px - 50%), ${gap})`,
      width: `${childrenSize.width}px`,
    };
  }

  if (placement === 'left') {
    return {
      top: `${position.top}px`,
      left: `${position.left}px`,
      transform: `translate(calc(-100% - ${gap}), calc(${
        childrenSize.height / 2
      }px - 50%))`,
      width: `${childrenSize.width}px`,
    };
  }

  if (placement === 'right') {
    return {
      top: `${position.top}px`,
      left: `${position.left + childrenSize.width}px`,
      transform: `translate(${gap}, calc(${childrenSize.height / 2}px - 50%))`,
      width: `${childrenSize.width}px`,
    };
  }

  if (placement === 'top-left') {
    return {
      top: `${position.top}px`,
      left: `${position.left}px`,
      transform: `translate(0, calc(-100% - ${gap}))`,
      width: `${childrenSize.width}px`,
    };
  }

  if (placement === 'top-right') {
    return {
      top: `${position.top}px`,
      left: `${position.left + childrenSize.width}px`,
      transform: `translate(calc(-100%), calc(-100% - ${gap}))`,
      width: `${childrenSize.width}px`,
    };
  }

  if (placement === 'bottom-left') {
    return {
      top: `${position.top + childrenSize.height}px`,
      left: `${position.left}px`,
      transform: `translate(0, ${gap})`,
      width: `${childrenSize.width}px`,
    };
  }

  if (placement === 'bottom-right') {
    return {
      top: `${position.top + childrenSize.height}px`,
      left: `${position.left + childrenSize.width}px`,
      transform: `translate(calc(-100%), ${gap})`,
      width: `${childrenSize.width}px`,
    };
  }

  if (placement === 'left-top') {
    return {
      top: `${position.top}px`,
      left: `${position.left}px`,
      transform: `translate(calc(-100% - ${gap}), 0)`,
      width: `${childrenSize.width}px`,
    };
  }

  if (placement === 'left-bottom') {
    return {
      top: `${position.top + childrenSize.height}px`,
      left: `${position.left}px`,
      transform: `translate(calc(-100% - ${gap}), -100%)`,
      width: `${childrenSize.width}px`,
    };
  }

  if (placement === 'right-top') {
    return {
      top: `${position.top}px`,
      left: `${position.left + childrenSize.width}px`,
      transform: `translate(${gap}, 0)`,
      width: `${childrenSize.width}px`,
    };
  }

  if (placement === 'right-bottom') {
    return {
      top: `${position.top + childrenSize.height}px`,
      left: `${position.left + childrenSize.width}px`,
      transform: `translate(${gap}, -100%)`,
      width: `${childrenSize.width}px`,
    };
  }
};
