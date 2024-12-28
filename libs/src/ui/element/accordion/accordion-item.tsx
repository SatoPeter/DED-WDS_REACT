import { ReactNode, useEffect, useState } from 'react';
import { ArrowDownIcon } from '@src/assets';
import { getCombinedClassName } from '@src/utils/string';

export interface AccordionProps {
  label: ReactNode;
  content: ReactNode;
  prefix?: ReactNode;
  isSmallSize?: boolean;
  borderStyle?: 'solid' | 'highlight';
  isOpenAll?: boolean;
  className?: string;
}

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
            <span>{label}</span>
          </div>
          <div
            className={`ded-icon-medium 
              ${
                isOpen ? 'ded-accordion-item-open' : 'ded-accordion-item-close'
              }`}
          >
            <ArrowDownIcon width={20} height={20} />
          </div>
        </summary>
        <div className="ded-accordion-detail-content">{content}</div>
      </details>
    </li>
  );
};
export default AccordionItem;
