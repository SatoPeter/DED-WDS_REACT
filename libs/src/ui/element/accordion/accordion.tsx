import { ReactNode } from 'react';
import { AccordionItem } from './accordion-item';
import { getCombinedClassName } from '@src/utils/string';

export interface AccordionProps {
  dataSource: { id: string; label: ReactNode; detail: ReactNode }[];
  prefix?: ReactNode;
  borderStyle?: 'solid' | 'highlight';
  isSmallSize?: boolean;
  isOpenAll?: boolean;
  className?: string;
}

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
