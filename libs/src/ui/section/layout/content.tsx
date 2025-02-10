import { ReactNode } from 'react';

export interface ContentProps {
  children?: ReactNode;
  className?: string;
}
export const Content: React.FC<ContentProps> = (props: ContentProps) => {
  const { children, className = '' } = props;

  return <main className={`ded-content ${className}`}>{children}</main>;
};

export default Content;
