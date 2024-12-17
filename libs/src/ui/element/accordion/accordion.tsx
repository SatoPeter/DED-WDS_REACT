import { AccordionItem } from './accordion-item';

export interface AccordionProps {
  dataSource: { id: string; label: string; detail: string }[];
  isOpenAll?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  dataSource,
  isOpenAll = false,
  className = '',
}) => {
  return (
    <div className="ded-accordion-container">
      <ul className={`ded-accordion ${className}`}>
        {dataSource.map((item) => (
          <AccordionItem
            key={item.id}
            label={item.label}
            content={item.detail}
            isOpenAll={isOpenAll}
          />
        ))}
      </ul>
    </div>
  );
};
export default Accordion;
