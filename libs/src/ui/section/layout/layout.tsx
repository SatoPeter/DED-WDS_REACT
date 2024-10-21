import React, { Children } from 'react';

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
  const { children, className, ...rest } = props;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flex: '1',
        color: '#fff',
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

interface HeaderProps {
  children?: React.ReactNode;
}
const header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <header
      style={{
        width: '100%',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4096ff',
      }}
    >
      {children}
    </header>
  );
};

interface FooterProps {
  children?: React.ReactNode;
}
const footer = (props: FooterProps) => {
  const { children } = props;

  return (
    <footer
      style={{
        width: '100%',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4096ff',
      }}
    >
      {children}
    </footer>
  );
};

interface ContentProps {
  children?: React.ReactNode;
}
const content = (props: ContentProps) => {
  const { children } = props;

  return (
    <main
      style={{
        flex: '1',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0958d9',
      }}
    >
      {children}
    </main>
  );
};

interface SideProps {
  children?: React.ReactNode;
}
const side = (props: SideProps) => {
  const { children } = props;
  return (
    <aside
      style={{
        width: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1677ff',
      }}
    >
      {children}
    </aside>
  );
};

Layout.Header = header;
Layout.Footer = footer;
Layout.Content = content;
Layout.Side = side;

export { header, footer, content };
export default Layout;
