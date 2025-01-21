import './style.scss';
import { Layout, Navbar, SideNav } from '@src/ui';
import {
  SvgAuo,
  SvgHome,
  SvgBarChart,
  SvgCalendar,
  SvgFavorite,
  SvgNotification,
  SvgDatabase,
  SvgUser,
  SvgLanguage,
  SvgLocation,
  SvgInfoCircle,
  SvgMoreVert,
  SvgSearch,
  SvgSettings,
} from '@src/assets';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const SideNavItems = [
  {
    path: '/Home',
    prefix: <SvgHome height={24} width={24} />,
    label: 'Home',
    order: 1,
  },
  {
    children: [
      {
        path: '/settings/profile',
        label: 'Profile',
        order: 1,
      },
      {
        path: '/settings/account',
        label: 'Account',
        order: 2,
      },
    ],
    path: '/User',
    prefix: <SvgUser height={24} width={24} />,
    label: 'User',
    order: 2,
  },
  {
    children: [
      {
        path: '/settings/profile',
        label: 'Profile',
        order: 1,
      },
      {
        path: '/settings/account',
        label: 'Account',
        order: 2,
      },
      {
        path: '/settings/account',
        label: 'Account',
        order: 3,
      },
      {
        path: '/settings/account',
        label: 'Account',
        order: 4,
      },
    ],
    path: '/Chart',
    prefix: <SvgBarChart height={24} width={24} />,
    label: 'Chart',
    order: 3,
  },
  {
    path: '/dashboard',
    prefix: <SvgDatabase height={24} width={24} />,
    label: 'Database',
    order: 4,
  },
  {
    path: '/Favorite',
    prefix: <SvgFavorite height={24} width={24} />,
    label: 'Favorite',
    order: 5,
  },
  {
    path: '/Calendar',
    prefix: <SvgCalendar height={24} width={24} />,
    label: 'Calendar',
    order: 6,
  },
  {
    path: '/Notification',
    prefix: <SvgNotification height={24} width={24} />,
    label: 'Notification',
    order: 7,
  },
  {
    path: '/Language',
    prefix: <SvgLanguage height={24} width={24} />,
    label: 'Language',
    order: 8,
  },
];

export const Lab4 = () => {
  const { Header, Side, Content } = Layout;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <Layout className="">
      <Side>
        <SideNav
          className=""
          dataSource={SideNavItems}
          hasRWD
          hasSearch
          hasLogo
          logoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
          logo={<SvgAuo height={30} width={90} />}
          logoLink="https://www.auo.com"
          themeColor="#00467C"
        />
      </Side>
      <Layout>
        <Content>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#0958d9',
              color: '#fff',
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              width: '100%',
              fontSize: '24px',
            }}
          >
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
