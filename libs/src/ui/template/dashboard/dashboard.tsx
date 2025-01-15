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
} from '@src/assets';
import { Column, Grid, Row } from '@src/ui/section/grid';
import { Layout } from '@src/ui/section/layout';
import { Navbar } from '@src/ui/section/navbar';
import { SideNav } from '@src/ui/section/side-nav';
import React from 'react';

interface DashboardProps {
  isGridSystem?: boolean;
  className?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({
  isGridSystem,
  className,
}) => {
  const { Header, Side, Content } = Layout;
  if (isGridSystem) {
    return (
      <Layout className={className}>
        <Grid fluid>
          <Row hasGap={false}>
            <Column sm={12}>
              <Header>
                <Navbar
                  className=""
                  dataSource={[
                    {
                      href: '#solutions',
                      label: 'Solutions',
                      order: 2,
                    },
                    {
                      href: '#products',
                      label: 'Products',
                      order: 1,
                    },
                    {
                      href: '#technologies',
                      label: 'Technologies',
                      order: 4,
                    },
                    {
                      href: '#about',
                      label: 'About',
                      order: 3,
                    },
                  ]}
                  logoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
                  onSearch={() => ({})}
                />
              </Header>
            </Column>
          </Row>
        </Grid>
        <Layout>
          <Grid fluid>
            <Row hasGap={false}>
              <Column sm={3}>
                <Side>
                  <SideNav
                    className=""
                    dataSource={[
                      {
                        path: '/Home',
                        prefix: <SvgHome height={18} width={18} />,
                        title: 'Home',
                      },
                      {
                        children: [
                          {
                            path: '/settings/profile',
                            title: 'Profile',
                          },
                          {
                            path: '/settings/account',
                            title: 'Account',
                          },
                        ],
                        path: '/User',
                        prefix: <SvgUser height={18} width={18} />,
                        title: 'User',
                      },
                      {
                        children: [
                          {
                            path: '/settings/profile',
                            title: 'Profile',
                          },
                          {
                            path: '/settings/account',
                            title: 'Account',
                          },
                          {
                            path: '/settings/account',
                            title: 'Account',
                          },
                          {
                            path: '/settings/account',
                            title: 'Account',
                          },
                        ],
                        path: '/Chart',
                        prefix: <SvgBarChart height={18} width={18} />,
                        title: 'Chart',
                      },
                      {
                        path: '/dashboard',
                        prefix: <SvgDatabase height={18} width={18} />,
                        title: 'Database',
                      },
                      {
                        path: '/Favorite',
                        prefix: <SvgFavorite height={18} width={18} />,
                        title: 'Favorite',
                      },
                      {
                        path: '/Calendar',
                        prefix: <SvgCalendar height={18} width={18} />,
                        title: 'Calendar',
                      },
                      {
                        path: '/Notification',
                        prefix: <SvgNotification height={18} width={18} />,
                        title: 'Notification',
                      },
                      {
                        path: '/Language',
                        prefix: <SvgLanguage height={18} width={18} />,
                        title: 'Language',
                      },
                    ]}
                    hasSearch
                    logo={<SvgAuo height={30} width={90} />}
                    logoLink="https://www.auo.com"
                    themeColor="#00467C"
                  />
                </Side>
              </Column>
              <Column sm={9}>
                <Content>
                  <div
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#0958d9',
                      color: '#fff',
                      display: 'flex',
                      height: '100vh',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    content
                  </div>
                </Content>
              </Column>
            </Row>
          </Grid>
        </Layout>
      </Layout>
    );
  }
  return (
    <Layout className={className}>
      <Header>
        <Navbar
          dataSource={[
            {
              href: '#solutions',
              label: 'Solutions',
              order: 2,
            },
            {
              href: '#products',
              label: 'Products',
              order: 1,
            },
            {
              href: '#technologies',
              label: 'Technologies',
              order: 4,
            },
            {
              href: '#about',
              label: 'About',
              order: 3,
            },
          ]}
          logoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
          onSearch={() => ({})}
        />
      </Header>
      <Layout>
        <Side>
          <SideNav
            className=""
            dataSource={[
              {
                path: '/Home',
                prefix: <SvgHome height={18} width={18} />,
                title: 'Home',
              },
              {
                children: [
                  {
                    path: '/settings/profile',
                    title: 'Profile',
                  },
                  {
                    path: '/settings/account',
                    title: 'Account',
                  },
                ],
                path: '/User',
                prefix: <SvgUser height={18} width={18} />,
                title: 'User',
              },
              {
                children: [
                  {
                    path: '/settings/profile',
                    title: 'Profile',
                  },
                  {
                    path: '/settings/account',
                    title: 'Account',
                  },
                  {
                    path: '/settings/account',
                    title: 'Account',
                  },
                  {
                    path: '/settings/account',
                    title: 'Account',
                  },
                ],
                path: '/Chart',
                prefix: <SvgBarChart height={18} width={18} />,
                title: 'Chart',
              },
              {
                path: '/dashboard',
                prefix: <SvgDatabase height={18} width={18} />,
                title: 'Database',
              },
              {
                path: '/Favorite',
                prefix: <SvgFavorite height={18} width={18} />,
                title: 'Favorite',
              },
              {
                path: '/Calendar',
                prefix: <SvgCalendar height={18} width={18} />,
                title: 'Calendar',
              },
              {
                path: '/Notification',
                prefix: <SvgNotification height={18} width={18} />,
                title: 'Notification',
              },
              {
                path: '/Language',
                prefix: <SvgLanguage height={18} width={18} />,
                title: 'Language',
              },
            ]}
            hasSearch
            logo={<SvgAuo height={30} width={90} />}
            logoLink="https://www.auo.com"
            themeColor="#00467C"
          />
        </Side>
        <Content>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#0958d9',
              color: '#fff',
              display: 'flex',
              height: '100vh',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
