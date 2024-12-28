import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Input, Button } from '@src/ui';
import { NotificationIcon, SearchIcon, AUOIcon } from '@src/assets';

interface NavbarProps {
  links: { label: string; href: string; order: number }[];
  className?: string;
  onSearch?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  links,
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
    const curr = links.sort((a, b) => {
      return a.order - b.order;
    });
    console.log(curr);

    setCurrLinks(curr);
  }, [links]);

  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-menu">
        {/* <img src={logoSrc} alt="Logo" className="navbar-logo" /> */}
        <Button themeColor="primary" variant="text" onClick={() => ({})}>
          <AUOIcon />
        </Button>
        <ul className="navbar-links">
          {currLinks.map((link) => (
            // <li key={link.href}>
            //   <a href={link.href}>{link.label}</a>
            // </li>
            <Button themeColor="primary" variant="text" onClick={() => ({})}>
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
            prefix={<SearchIcon width={20} height={20} />}
            initValue={''}
          />
        </form>

        <div className="navbar-icons">
          <div className="navbar-icons-icon">
            <Badge isShowDot>
              <NotificationIcon
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
