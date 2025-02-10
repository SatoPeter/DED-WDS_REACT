import { ReactNode } from 'react';

export interface HeaderProps {
  children?: ReactNode;
  className?: string;
}
export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { children, className = '' } = props;

  return <header className={`ded-header ${className}`}>{children}</header>;
};

export default Header;
