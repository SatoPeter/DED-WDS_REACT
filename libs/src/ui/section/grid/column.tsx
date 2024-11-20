import { ReactNode } from 'react';

/**
 * `ColumnProps` 介面定義了 Column 元件的屬性。
 *
 * @property {('start' | 'center' | 'end')} [align] - 設定內容對齊方式，可選值為 'start'、'center' 或 'end'。
 * @property {number} [xs] - 設定在超小螢幕尺寸下的欄位寬度。
 * @property {number} [sm] - 設定在小螢幕尺寸下的欄位寬度。
 * @property {number} [md] - 設定在中螢幕尺寸下的欄位寬度。
 * @property {number} [lg] - 設定在大螢幕尺寸下的欄位寬度。
 * @property {number} [xl] - 設定在超大螢幕尺寸下的欄位寬度。
 * @property {ReactNode} children - 欄位內的子元素。
 */
interface ColumnProps {
  align?: 'start' | 'center' | 'end';
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children: ReactNode;
  className?: string;
}

/**
 * Column 元件
 *
 * @param {ColumnProps} props - Column 元件的屬性
 * @param {number} [props.xs] - xs 尺寸的欄位數量
 * @param {number} [props.sm] - sm 尺寸的欄位數量
 * @param {number} [props.md] - md 尺寸的欄位數量
 * @param {number} [props.lg] - lg 尺寸的欄位數量
 * @param {number} [props.xl] - xl 尺寸的欄位數量
 * @param {string} [props.align='start'] - 對齊方式，預設為 'start'
 * @param {React.ReactNode} props.children - 子元素
 *
 * @returns {JSX.Element} 回傳一個包含子元素的 div，並根據 props 設定相應的 class 和樣式
 */
export const Column: React.FC<ColumnProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  align = 'start',
  children,
  className = '',
}: ColumnProps): JSX.Element => {
  const getColClass = () => {
    const classes = [];
    if (xs) classes.push(`ded-col-xs-${xs}`);
    if (sm) classes.push(`ded-col-sm-${sm}`);
    if (md) classes.push(`ded-col-md-${md}`);
    if (lg) classes.push(`ded-col-lg-${lg}`);
    if (xl) classes.push(`ded-col-xl-${xl}`);
    return classes.join(' ');
  };

  return (
    <div
      style={{ textAlign: align }}
      className={`${getColClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default Column;
