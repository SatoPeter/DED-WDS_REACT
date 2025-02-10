import { ReactNode } from 'react';

export interface SideProps {
  children?: ReactNode;
  className?: string;
}
export const Side: React.FC<SideProps> = (props: SideProps) => {
  const { children, className = '' } = props;
  return <aside className={`ded-side ${className}`}>{children}</aside>;
};

export default Side;
