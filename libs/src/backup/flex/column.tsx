import { ReactNode } from 'react';

interface ColumnProps {
  children: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export const Column: React.FC<ColumnProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
}) => {
  const getColClass = () => {
    const classes = [];
    if (xs) classes.push(`col-xs-${xs}`);
    if (sm) classes.push(`col-sm-${sm}`);
    if (md) classes.push(`col-md-${md}`);
    if (lg) classes.push(`col-lg-${lg}`);
    if (xl) classes.push(`col-xl-${xl}`);
    return classes.join(' ');
  };

  return <div className={getColClass()}>{children}</div>;
};

export default Column;
