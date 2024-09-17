import React, { useState, useEffect, useRef } from 'react';
import { getTargetPosition } from '@src/utils/position';
import { usePosition } from '@src/hooks/usePosition';
import Portal from '@src/ui/portal';

interface BreadcrumbItemProps {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  label,
  href,
  isCurrentPage,
}) => {
  if (isCurrentPage) {
    return <span className="breadcrumb-item-label">{label}</span>;
  }
  return (
    <a className="breadcrumb-item-link" href={href}>
      {label}
    </a>
  );
};

interface BreadcrumbProps {
  className?: string;
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
  breadcrumbItems: { label: string; href?: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = (
  props: BreadcrumbProps
) => {
  const { breadcrumbItems, placement, className } = props;
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { childrenSize, position } = usePosition(breadcrumbRef);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      breadcrumbRef.current &&
      !breadcrumbRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const itemsToShow =
    breadcrumbItems.length > 3
      ? [
          breadcrumbItems[0],
          { label: '...', href: '#' },
          ...breadcrumbItems.slice(-2),
        ]
      : breadcrumbItems;

  return (
    <>
      <nav className={`breadcrumb-container ${className}`}>
        <ol className="breadcrumb">
          {itemsToShow.map((item, index) => (
            <li className="breadcrumb-item" key={index}>
              {item.label === '...' ? (
                <div ref={breadcrumbRef} className="rest">
                  <span onClick={handleClick} className="rest-label">
                    {item.label}
                  </span>
                </div>
              ) : (
                <BreadcrumbItem
                  label={item.label}
                  href={item.href === '#' ? undefined : item.href}
                  isCurrentPage={index === itemsToShow.length - 1}
                />
              )}
            </li>
          ))}
        </ol>
      </nav>
      <Portal>
        {isVisible && (
          <div
            style={getTargetPosition(position, childrenSize, placement, '6px')}
            className={`tooltip ${className}`}
          >
            <ul className="rest-dropdown-menu">
              {breadcrumbItems
                .slice(1, -2)
                .map((dropdownItem, dropdownIndex) => (
                  <li className="drop-item" key={dropdownIndex}>
                    <a className="drop-item-link" href={dropdownItem.href}>
                      {dropdownItem.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </Portal>
    </>
  );
};

export default Breadcrumb;
