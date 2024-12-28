import React, { useState } from 'react';

export interface RowData {
  head: string;
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
}

interface TableProps<T> {
  columns: {
    key: string;
    title: string;
    width?: string;
    align?: 'left' | 'center' | 'right';
    render?: (item: T) => React.ReactNode;
  }[];
  dataSource: RowData[];
  showCheckbox?: boolean;
  showVerticalBorders?: boolean;
  isSprite: boolean;
  className?: string;
  onRowClick?: (record: T) => void;
  onSelect?: (selectedRowKeys: string[]) => void;
}

export const Table: React.FC<TableProps<any>> = ({
  columns,
  dataSource,
  showCheckbox = false,
  showVerticalBorders = false,
  isSprite = false,
  className = '',
  onRowClick,
  onSelect,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const handleClick = (record: any) => {
    console.log('record', record);
    onRowClick && onRowClick(record);
  };

  const handleSelectRow = (key: string) => {
    const newSelectedRowKeys = selectedRowKeys.includes(key)
      ? selectedRowKeys.filter((rowKey) => rowKey !== key)
      : [...selectedRowKeys, key];

    setSelectedRowKeys(newSelectedRowKeys);
    onSelect && onSelect(newSelectedRowKeys);
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allKeys = dataSource.map((item) => item.head);
      setSelectedRowKeys(allKeys);
      onSelect && onSelect(allKeys);
    } else {
      setSelectedRowKeys([]);
      onSelect && onSelect([]);
    }
  };

  return (
    <div
      style={{ overflowX: 'auto' }}
      className={`ded-table-container ${className}`}
    >
      <table className="ded-table">
        <thead className="ded-table-thead">
          <tr className="ded-table-thead-tr">
            {showCheckbox && (
              <th
                style={{ width: '30px', alignItems: 'center' }}
                className={`ded-table-thead-tr-th 
                  ${showVerticalBorders ? 'ded-table-thead-tr-th-border' : ''}
              `}
              >
                <input
                  type="checkbox"
                  className="ded-table-checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRowKeys.length === dataSource.length}
                  ref={(input) => {
                    if (input) {
                      input.indeterminate =
                        selectedRowKeys.length > 0 &&
                        selectedRowKeys.length < dataSource.length;
                    }
                  }}
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                style={{ width: col.width, textAlign: col.align || 'left' }}
                className={`ded-table-thead-tr-th 
                  ${showVerticalBorders ? 'ded-table-thead-tr-th-border' : ''}
                `}
                key={col.key}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="ded-table-tbody">
          {dataSource.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className={`ded-table-tbody-tr ${
                isSprite ? 'ded-table-tbody-tr-sprite' : ''
              }`}
              onClick={() => handleClick(item)}
            >
              {showCheckbox && (
                <td
                  style={{ width: '30px', alignItems: 'center' }}
                  className={`ded-table-tbody-tr-td 
                  ${showVerticalBorders ? 'ded-table-tbody-tr-td-border' : ''}
                `}
                >
                  <input
                    type="checkbox"
                    className="ded-table-checkbox"
                    checked={selectedRowKeys.includes(item.head)}
                    onChange={() => handleSelectRow(item.head)}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td
                  style={{ width: col.width, textAlign: col.align || 'left' }}
                  className={`ded-table-tbody-tr-td 
                  ${showVerticalBorders ? 'ded-table-tbody-tr-td-border' : ''}
                  `}
                  key={col.key}
                >
                  {col.render ? col.render(item) : (item as any)[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
