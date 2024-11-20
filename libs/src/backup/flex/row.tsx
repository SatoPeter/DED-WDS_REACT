import { ReactNode } from 'react';

export interface RowProps {
  children: ReactNode;
  gap?: number;
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
}

export const Row: React.FC<RowProps> = ({
  children,
  gap = 0,
  justify = 'flex-start',
  alignItems = 'stretch',
}) => {
  return (
    <div
      className="row"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: `${gap}px`,
        justifyContent: justify,
        alignItems: alignItems,
      }}
    >
      {children}
    </div>
  );
};

export default Row;
