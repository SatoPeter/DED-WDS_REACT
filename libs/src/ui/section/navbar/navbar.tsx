import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Input, Button } from '@src/ui';
import { SvgNotification, SvgSearch } from '@src/assets';

interface NavbarProps {
  dataSource: { label: string; href: string; order: number }[];
  logoSrc: string;
  className?: string;
  onSearch?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  dataSource,
  logoSrc,
  className = '',
  onSearch,
}) => {
  const [currLinks, setCurrLinks] = useState<
    { label: string; href: string; order: number }[]
  >([]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    onSearch && onSearch(query);
  };

  useEffect(() => {
    const curr = dataSource.sort((a, b) => {
      return a.order - b.order;
    });

    setCurrLinks(curr);
  }, [dataSource]);

  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-menu">
        <Button themeColor="primary" variant="text" onClick={() => ({})}>
          <img src={logoSrc} alt="Logo" className="navbar-logo" />
        </Button>
        <ul className="navbar-links">
          {currLinks.map((link) => (
            // <li key={link.href}>
            //   <a href={link.href}>{link.label}</a>
            // </li>
            <Button
              key={link.label}
              themeColor="primary"
              variant="text"
              onClick={() => ({})}
            >
              {link.label}
            </Button>
          ))}
        </ul>
      </div>
      <div className="navbar-feature">
        <form className="navbar-form-search" onSubmit={handleSearch}>
          <Input
            type="text"
            placeholder="Search"
            prefix={<SvgSearch width={20} height={20} />}
            initValue={''}
          />
        </form>

        <div className="navbar-icons">
          <div className="navbar-icons-icon">
            <Badge isShowDot>
              <SvgNotification
                className="navbar-icons-svg"
                width={24}
                height={24}
              />
            </Badge>
          </div>
          <div className="navbar-icons-icon">
            <Avatar
              src="https://storage.googleapis.com/ded-wds-bucket/lion.png"
              alt="Avatar"
              size="small"
              status="online"
              userName={''}
              caption={''}
            />
          </div>
        </div>
        <button className="navbar-switch">
          <div className="navbar-switch-bar"></div>
          <div className="navbar-switch-bar"></div>
          <div className="navbar-switch-bar"></div>
          <span className="navbar-switch-sr-only">切換選單</span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
