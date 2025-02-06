import { ReactNode } from 'react';
import { AccordionItem } from './accordion-item';
import { getCombinedClassName } from '@src/utils/string';

/**
 * 手風琴元件的屬性介面
 * @interface AccordionProps
 *
 * @property {Array<{id: string; label: ReactNode; detail: ReactNode}>} dataSource - 手風琴內容資料來源陣列
 *   @property {string} dataSource[].id - 每個項目的唯一識別碼
 *   @property {ReactNode} dataSource[].label - 每個項目的標題內容
 *   @property {ReactNode} dataSource[].detail - 每個項目的詳細內容
 * @property {ReactNode} [prefix] - 選用的前綴內容
 * @property {'solid' | 'highlight'} [borderStyle] - 邊框樣式，可選 'solid' 或 'highlight'
 * @property {boolean} [isSmallSize] - 是否使用小尺寸版本
 * @property {boolean} [isOpenAll] - 是否預設展開所有項目
 * @property {string} [className] - 自定義 CSS 類別名稱
 */
export interface AccordionProps {
  dataSource: { id: string; label: ReactNode; detail: ReactNode }[];
  prefix?: ReactNode;
  borderStyle?: 'solid' | 'highlight';
  isSmallSize?: boolean;
  isOpenAll?: boolean;
  className?: string;
}

/**
 * 手風琴組件
 *
 * @component
 * @param {Object} props - 組件屬性
 * @param {Array} props.dataSource - 手風琴內容的資料來源陣列
 * @param {string} [props.prefix] - 手風琴項目的前綴
 * @param {('highlight'|string)} [props.borderStyle='highlight'] - 邊框樣式
 * @param {boolean} [props.isSmallSize=false] - 是否使用小尺寸版本
 * @param {boolean} [props.isOpenAll=false] - 是否預設全部展開
 * @param {string} [props.className=''] - 額外的 CSS 類名
 *
 * @returns {JSX.Element} 手風琴組件
 */
export const Accordion: React.FC<AccordionProps> = ({
  dataSource,
  prefix,
  borderStyle = 'highlight',
  isSmallSize = false,
  isOpenAll = false,
  className = '',
}) => {
  return (
    <div className="ded-accordion-container">
      <ul
        className={`ded-accordion 
          ${getCombinedClassName('ded-accordion', borderStyle)}     
          ${className}
        `}
      >
        {dataSource.map((item) => (
          <AccordionItem
            key={item.id}
            label={item.label}
            content={item.detail}
            prefix={prefix}
            isSmallSize={isSmallSize}
            borderStyle={borderStyle}
            isOpenAll={isOpenAll}
          />
        ))}
      </ul>
    </div>
  );
};
export default Accordion;
