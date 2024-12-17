import React, { useState, useRef } from 'react';
import Portal from '@src/ui/portal';
import { getTargetPosition } from '@src/utils/position';
import { getCombinedClassName } from '@src/utils/string';
import { usePosition } from '@src/hooks/usePosition';

/**
 * TooltipProps 介面定義了 Tooltip 元件的屬性。
 *
 * @interface TooltipProps
 * @property {string} content - Tooltip 顯示的內容。
 * @property {boolean} [showArrow] - 是否顯示箭頭，預設為 false。
 * @property {'top-left' | 'top' | 'top-right' | 'right-top' | 'right' | 'right-bottom' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left-bottom' | 'left' | 'left-top'} placement - Tooltip 的顯示位置。
 * @property {string} [className] - 自訂的 CSS 類名。
 * @property {React.ReactNode} children - Tooltip 的子元素。
 */
export interface TooltipProps {
  content: string;
  showArrow?: boolean;
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
  className?: string;
  children: React.ReactNode;
}

/**
 * Tooltip 元件
 *
 * @param {TooltipProps} props - Tooltip 的屬性
 * @param {string} props.content - Tooltip 的內容
 * @param {string} props.placement - Tooltip 的位置
 * @param {boolean} props.showArrow - 是否顯示箭頭
 * @param {string} [props.className] - 自訂的 CSS 類別名稱
 * @param {React.ReactNode} props.children - 觸發 Tooltip 的子元素
 *
 * @returns {JSX.Element} Tooltip 元件
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content = '',
  placement = 'top',
  showArrow = true,
  className = '',
  children,
}: TooltipProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const childrenRef = useRef<HTMLDivElement>(null);
  const { childrenSize, position } = usePosition(childrenRef);

  return (
    <>
      <div
        ref={childrenRef}
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="ded-tooltip-container"
      >
        {children}
      </div>
      <Portal>
        {isVisible && (
          <div
            style={getTargetPosition(
              position,
              childrenSize,
              placement,
              '6px',
              false
            )}
            className={`ded-tooltip ${className}`}
          >
            <div className="ded-tooltip-content">
              {content}
              {showArrow && (
                <div
                  className={`ded-tooltip-arrow 
                    ${getCombinedClassName('ded-tooltip-arrow', placement)}`}
                >
                  <div className="ded-tooltip-arrow-shape" />
                </div>
              )}
            </div>
          </div>
        )}
      </Portal>
    </>
  );
};
export default Tooltip;
