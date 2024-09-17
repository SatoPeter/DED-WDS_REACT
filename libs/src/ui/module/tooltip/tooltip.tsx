import React, { useState, useRef } from 'react';
import Portal from '@src/ui/portal';
import { getTargetPosition } from '@src/utils/position';
import { getArrowPositionClass } from './styled';
import { usePosition } from '@src/hooks/usePosition';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
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
}

export const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const { children, content, placement, showArrow, className } = props;

  const [isVisible, setIsVisible] = useState(false);
  const childrenRef = useRef<HTMLDivElement>(null);
  const { childrenSize, position } = usePosition(childrenRef);

  return (
    <>
      <div
        ref={childrenRef}
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="tooltip-container"
      >
        {children}
      </div>
      <Portal>
        {isVisible && (
          <div
            style={getTargetPosition(position, childrenSize, placement, '6px')}
            className={`tooltip ${className}`}
          >
            <div className="tooltip-content">
              {content}
              {showArrow && (
                <div
                  className={`tooltip-arrow ${getArrowPositionClass(
                    placement
                  )}`}
                >
                  <div className="tooltip-arrow-shape" />
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
