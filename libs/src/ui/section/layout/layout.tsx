import React from 'react';

/* 組件介面參數 props */
interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

interface LayoutComponent extends React.FC<LayoutProps> {
  Header: (props: HeaderProps) => JSX.Element;
  Footer: (props: FooterProps) => JSX.Element;
  Content: (props: ContentProps) => JSX.Element;
  Side: (props: SideProps) => JSX.Element;
}

export const Layout: LayoutComponent = (props: LayoutProps) => {
  const { children, className = '', ...rest } = props;

  return (
    <div className={`ded-layout ${className}`} {...rest}>
      {children}
    </div>
  );
};

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}
const Header = (props: HeaderProps) => {
  const { children, className = '' } = props;

  return <header className={`ded-header ${className}`}>{children}</header>;
};

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
}
const Footer = (props: FooterProps) => {
  const { children, className = '' } = props;

  return <footer className={`ded-footer ${className}`}>{children}</footer>;
};

interface ContentProps {
  children?: React.ReactNode;
  className?: string;
}
const Content = (props: ContentProps) => {
  const { children, className = '' } = props;

  return <main className={`ded-content ${className}`}>{children}</main>;
};

interface SideProps {
  children?: React.ReactNode;
  className?: string;
}
const Side = (props: SideProps) => {
  const { children, className = '' } = props;
  return <aside className={`ded-side ${className}`}>{children}</aside>;
};

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Side = Side;

export default Layout;
