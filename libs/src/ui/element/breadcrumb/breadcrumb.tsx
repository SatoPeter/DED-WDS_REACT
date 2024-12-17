import React, { useState, useRef } from 'react';
import { getTargetPosition } from '@src/utils/position';
import { usePosition } from '@src/hooks/usePosition';
import Portal from '@src/ui/portal';
import { useClickOutside } from '@src/hooks';

/**
 * 面包屑項目屬性介面。
 *
 * @interface BreadcrumbItemProps
 * @property {string} label - 項目的標籤。
 * @property {string} [href] - 項目的連結（可選）。
 * @property {boolean} [isCurrentPage] - 是否為當前頁面（可選）。
 */
interface BreadcrumbItemProps {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

/**
 * 麵包屑項目元件。
 *
 * @param {BreadcrumbItemProps} props - 麵包屑項目的屬性。
 * @param {string} [props.label=''] - 項目的標籤文字。
 * @param {string} [props.href='#'] - 項目的連結 URL。
 * @param {boolean} [props.isCurrentPage=false] - 是否為當前頁面。
 * @returns {JSX.Element} 麵包屑項目元件。
 */
const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  label = '',
  href = '#',
  isCurrentPage = false,
}: BreadcrumbItemProps): JSX.Element => {
  if (isCurrentPage) {
    return <span className="ded-breadcrumb-item-label">{label}</span>;
  }
  return (
    <a className="ded-breadcrumb-item-link" href={href}>
      {label}
    </a>
  );
};

/**
 * `BreadcrumbProps` 是麵包屑導航元件的屬性接口。
 *
 * @property {{ label: string; href?: string }[]} dataSource - 包含麵包屑導航項目的數據源，每個項目包含一個標籤和一個可選的鏈接。
 * @property {string} [className] - 可選的CSS類名，用於自定義樣式。
 */
interface BreadcrumbProps {
  dataSource: { label: string; href?: string }[];
  className?: string;
}

/**
 * `Breadcrumb` 元件用於顯示導航路徑。
 *
 * @param {BreadcrumbProps} props - 元件的屬性。
 * @param {Array} props.dataSource - 導航路徑的資料來源。
 * @param {string} [props.className=''] - 自訂的 CSS 類別名稱。
 *
 * @returns {JSX.Element} - 渲染的 `Breadcrumb` 元件。
 *
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  dataSource,
  className = '',
}: BreadcrumbProps): JSX.Element => {
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { childrenSize, position } = usePosition(breadcrumbRef);

  useClickOutside([menuRef], () => setIsVisible(false));

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  const itemsToShow =
    dataSource.length > 3
      ? [dataSource[0], { label: '...', href: '#' }, ...dataSource.slice(-2)]
      : dataSource;

  return (
    <>
      <nav className={`ded-breadcrumb-container ${className}`}>
        <ol className="ded-breadcrumb">
          {itemsToShow.map((item, index) => (
            <li className="ded-breadcrumb-item" key={index}>
              {item.label === '...' ? (
                <div ref={breadcrumbRef} className="ded-rest">
                  <span onClick={handleClick} className="ded-rest-label">
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
            ref={menuRef}
            style={getTargetPosition(
              position,
              childrenSize,
              'bottom-left',
              '6px',
              false
            )}
            className={`ded-dropdown-menu ${className}`}
          >
            <ul className="ded-rest-dropdown-menu">
              {dataSource.slice(1, -2).map((dropdownItem, dropdownIndex) => (
                <li className="ded-drop-item" key={dropdownIndex}>
                  <a className="ded-drop-item-link" href={dropdownItem.href}>
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
