import { ReactNode, useEffect, useState } from 'react';
import { SvgArrowDown } from '@src/assets/icons';
import { getCombinedClassName } from '@src/utils/string';

/**
 * Accordion 手風琴元件的屬性介面
 * @interface AccordionProps
 *
 * @property {ReactNode} label - 顯示的標題內容
 * @property {ReactNode} content - 展開後顯示的內容
 * @property {ReactNode} [prefix] - 可選的前綴元素
 * @property {boolean} [isSmallSize] - 是否使用小尺寸樣式
 * @property {'solid' | 'highlight'} [borderStyle] - 邊框樣式，可選 'solid' 或 'highlight'
 * @property {boolean} [isOpenAll] - 是否預設展開所有內容
 * @property {string} [className] - 自定義 CSS 類名
 */
export interface AccordionProps {
  label: ReactNode;
  content: ReactNode;
  prefix?: ReactNode;
  isSmallSize?: boolean;
  borderStyle?: 'solid' | 'highlight';
  isOpenAll?: boolean;
  className?: string;
}

/**
 * 手風琴列表項目元件
 * @component AccordionItem
 *
 * @param {Object} props - 元件屬性
 * @param {ReactNode} props.label - 手風琴項目的標題內容
 * @param {ReactNode} props.content - 手風琴項目展開後顯示的內容
 * @param {ReactNode} [props.prefix] - 標題前方的圖示或其他元素（可選）
 * @param {boolean} [props.isSmallSize=false] - 是否使用小尺寸樣式（預設為 false）
 * @param {'highlight' | string} [props.borderStyle='highlight'] - 邊框樣式（預設為 'highlight'）
 * @param {boolean} [props.isOpenAll] - 控制是否展開所有項目的狀態
 * @param {string} [props.className=''] - 額外的 CSS 類別名稱（預設為空字串）
 */
export const AccordionItem: React.FC<AccordionProps> = ({
  label,
  content,
  prefix,
  isSmallSize = false,
  borderStyle = 'highlight',
  isOpenAll,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(isOpenAll);

  useEffect(() => {
    setIsOpen(isOpenAll);
  }, [isOpenAll]);

  useEffect(() => {
    document.querySelectorAll('details').forEach((details) => {
      details.addEventListener('toggle', () => {
        const content = details.querySelector('summary + p');
        if (details.open && content) {
          content.animate(
            [
              { opacity: 0, height: 0 },
              {
                opacity: 1,
                height: content.scrollHeight + 'px',
              },
            ],
            {
              duration: 500,
              easing: 'ease-in-out',
            }
          );
        }
      });
    });
    return () => {
      document.querySelectorAll('details').forEach((details) => {
        details.removeEventListener('toggle', () => {
          const content = details.querySelector('summary + p');
          if (details.open && content) {
            content.animate(
              [
                { opacity: 0, height: 0 },
                { opacity: 1, height: content.scrollHeight + 'px' },
              ],
              {
                duration: 500,
                easing: 'ease-in-out',
              }
            );
          }
        });
      });
    };
  }, []);

  return (
    <li
      className={`ded-accordion-item 
        ${getCombinedClassName('ded-accordion-item', borderStyle)}
      `}
    >
      <details
        onToggle={(e) => {
          setIsOpen((e.target as HTMLDetailsElement).open);
        }}
        open={isOpen}
        className={`ded-accordion-detail ${className}`}
      >
        <summary
          className={`ded-accordion-title 
            ${getCombinedClassName(
              'ded-accordion-title',
              isSmallSize ? 'small' : 'default'
            )}`}
        >
          <div className="ded-accordion-title-content">
            {prefix && <div className="ded-accordion-title-icon">{prefix}</div>}
            <span
              className={`${getCombinedClassName(
                'ded-accordion-title-content',
                isSmallSize ? 'small' : 'default'
              )}`}
            >
              {label}
            </span>
          </div>
          <div
            className={`ded-icon-medium 
              ${
                isOpen ? 'ded-accordion-item-open' : 'ded-accordion-item-close'
              }`}
          >
            <SvgArrowDown width={20} height={20} />
          </div>
        </summary>
        <div className="ded-accordion-detail-content">{content}</div>
      </details>
    </li>
  );
};
export default AccordionItem;
