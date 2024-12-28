import React, { useState, useEffect } from 'react';
import { Button } from '@src/ui';
import { FirstLastPageIcon, NavigateArrowIcon } from '@src/assets';

interface PaginationProps {
  totalItems: number;
  currentPage?: number;
  itemsPerPageOptions: number[];
  defaultItemsPerPage?: number;
  isShowPageInfo?: boolean;
  className?: string;
  onPageChange?: (page: number, itemsPerPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  currentPage = 1,
  itemsPerPageOptions,
  defaultItemsPerPage = 10,
  isShowPageInfo,
  className = '',
  onPageChange,
}) => {
  const [currPage, setCurrPage] = useState(currentPage);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPageButtons = 10; // 最多顯示10個頁碼

  // 計算起始與結束頁碼
  const startPage = Math.max(1, currPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  // 動態產生頁碼
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrPage(page);
    onPageChange?.(page, itemsPerPage);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrPage(1);
    onPageChange?.(1, newItemsPerPage);
  };

  useEffect(() => {
    if (currentPage < 0 || currentPage > totalPages) return;
    setCurrPage(currentPage);
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (defaultItemsPerPage < 0) return;
    setItemsPerPage(defaultItemsPerPage);
  }, [defaultItemsPerPage]);

  return (
    <div className={`ded-pagination-container ${className}`}>
      {isShowPageInfo && (
        <div className="ded-pagination-info">
          <div className="ded-pagination-info-text">
            共{' '}
            <span className="ded-pagination-info-highline">{totalItems}</span>{' '}
            筆資料，第{' '}
            <span className="ded-pagination-info-highline">{currPage}</span> /{' '}
            <span className="ded-pagination-info-highline">{totalPages}</span>{' '}
            頁 每頁顯示
          </div>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="ded-pagination-select"
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span>筆</span>
        </div>
      )}
      <div className="ded-pagination">
        <Button
          variant="ghost"
          themeColor="neutral"
          isDisabled={currPage === 1}
          className="ded-pagination-button"
          onClick={() => handlePageChange(1)}
        >
          <FirstLastPageIcon className="ded-pagination-button-first" />
        </Button>

        <Button
          variant="ghost"
          themeColor="neutral"
          isDisabled={currPage === 1}
          className="ded-pagination-button"
          onClick={() => handlePageChange(currPage - 1)}
        >
          <NavigateArrowIcon className="ded-pagination-button-back" />
        </Button>

        {pageNumbers.map((number) => (
          <Button
            key={number}
            variant="ghost"
            themeColor="neutral"
            onClick={() => handlePageChange(number)}
            className={`ded-pagination-button
              ${currPage === number ? 'ded-pagination-active' : ''}
            `}
          >
            <div className="ded-pagination-number">{number}</div>
          </Button>
        ))}

        <Button
          variant="ghost"
          themeColor="neutral"
          isDisabled={currPage === totalPages}
          className="ded-pagination-button"
          onClick={() => handlePageChange(currPage + 1)}
        >
          <NavigateArrowIcon />
        </Button>

        <Button
          variant="ghost"
          themeColor="neutral"
          isDisabled={currPage === totalPages}
          className="ded-pagination-button"
          onClick={() => handlePageChange(totalPages)}
        >
          <FirstLastPageIcon />
        </Button>
      </div>
    </div>
  );
};
export default Pagination;
