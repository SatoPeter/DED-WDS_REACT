import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Content } from './content';
import { Side } from './side';

export interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

export interface LayoutComponent extends React.FC<LayoutProps> {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Side: typeof Side;
}

export const Layout: LayoutComponent = (props: LayoutProps) => {
  const { children, className = '', ...rest } = props;

  return (
    <div className={`ded-layout ${className}`} {...rest}>
      {children}
    </div>
  );
};

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Side = Side;

export default Layout;
