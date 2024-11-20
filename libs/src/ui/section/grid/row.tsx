import { ReactNode } from 'react';

/**
 * RowProps 介面定義了 Row 元件的屬性。
 *
 * @property {ReactNode} children - 子元素。
 * @property {boolean} [hasGap] - 是否有間隙。
 * @property {'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'} [justify] - 主軸對齊方式。
 * @property {'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline'} [alignItems] - 交叉軸對齊方式。
 * @property {string} [rowGap] - 行間距。
 */
export interface RowProps {
  children: ReactNode;
  hasGap?: boolean;
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  rowGap?: string;
}

/**
 * Row 元件是一個 React 函數型元件，用於建立一個彈性佈局的行容器。
 *
 * @param {React.ReactNode} children - 子元素，將被渲染在行容器內。
 * @param {boolean} [hasGap=true] - 是否有間距，預設為 true。
 * @param {string} [justify='flex-start'] - 設定主軸對齊方式，預設為 'flex-start'。
 * @param {string} [alignItems='stretch'] - 設定交叉軸對齊方式，預設為 'stretch'。
 * @param {string} [rowGap='16px'] - 設定行間距，預設為 '16px'。
 *
 * @returns {JSX.Element} - 返回一個包含子元素的 div，並應用相應的樣式。
 */
export const Row: React.FC<RowProps> = ({
  children = '',
  hasGap = true,
  justify = 'flex-start',
  alignItems = 'stretch',
  rowGap = '16px',
}: RowProps): JSX.Element => {
  return (
    <div
      className={`ded-row ${hasGap ? '' : 'ded-gap-0'}`}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: justify,
        alignItems: alignItems,
        rowGap: rowGap,
      }}
    >
      {children}
    </div>
  );
};

export default Row;
