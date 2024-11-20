import { ReactNode } from 'react';
import { Row } from './row';
import { Column } from './column';

/**
 * @typedef {Object} GridProps - 網格組件的屬性
 * @property {boolean} [fluid] - 是否使用流體佈局
 * @property {ReactNode} children - 子組件
 * @property {string} [className] - 自定義樣式類名
 */
export interface GridProps {
  fluid?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * GridComponent 介面，擴展自 React.FC 並包含 Row 和 Column 屬性。
 *
 * @interface GridComponent
 * @extends {React.FC<GridProps>}
 * @property {typeof Row} Row - 表示網格中的一行。
 * @property {typeof Column} Column - 表示網格中的一列。
 */
export interface GridComponent extends React.FC<GridProps> {
  Row: typeof Row;
  Column: typeof Column;
}

/**
 * `Grid` 元件是一個容器組件，用於包裝子元素並根據 `fluid` 屬性決定使用不同的 CSS 類。
 *
 * @param props - 組件的屬性。
 * @param props.fluid - 如果為 `true`，則使用 `ded-container-fluid` 類，否則使用 `ded-container` 類。
 * @param props.children - 要在容器內渲染的子元素。
 *
 * @returns 一個包含子元素的 `div` 元素，根據 `fluid` 屬性應用不同的 CSS 類。
 */
export const Grid: GridComponent = ({
  fluid = false,
  children = '',
}: GridProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      className={fluid ? 'ded-container-fluid' : 'ded-container'}
    >
      {children}
    </div>
  );
};

Grid.Row = Row;
Grid.Column = Column;

export default Grid;
