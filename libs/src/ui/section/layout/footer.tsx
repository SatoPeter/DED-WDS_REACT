import { ReactNode } from 'react';

export interface FooterProps {
  children?: ReactNode;
  className?: string;
}
export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { children, className = '' } = props;

  return <footer className={`ded-footer ${className}`}>{children}</footer>;
};

export default Footer;
