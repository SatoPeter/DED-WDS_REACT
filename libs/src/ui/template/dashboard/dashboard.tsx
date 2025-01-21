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
                      path: '#solutions',
                      label: 'Solutions',
                      order: 2,
                    },
                    {
                      path: '#products',
                      label: 'Products',
                      order: 1,
                    },
                    {
                      path: '#technologies',
                      label: 'Technologies',
                      order: 4,
                    },
                    {
                      path: '#about',
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
                            order: 1,
                          },
                        ],
                        path: '/User',
                        prefix: <SvgUser height={18} width={18} />,
                        label: 'User',
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
                            order: 1,
                          },
                          {
                            path: '/settings/account',
                            label: 'Account',
                            order: 1,
                          },
                          {
                            path: '/settings/account',
                            label: 'Account',
                            order: 1,
                          },
                        ],
                        path: '/Chart',
                        prefix: <SvgBarChart height={18} width={18} />,
                        label: 'Chart',
                        order: 1,
                      },
                      {
                        path: '/dashboard',
                        prefix: <SvgDatabase height={18} width={18} />,
                        label: 'Database',
                        order: 1,
                      },
                      {
                        path: '/Favorite',
                        prefix: <SvgFavorite height={18} width={18} />,
                        label: 'Favorite',
                        order: 1,
                      },
                      {
                        path: '/Calendar',
                        prefix: <SvgCalendar height={18} width={18} />,
                        label: 'Calendar',
                        order: 1,
                      },
                      {
                        path: '/Notification',
                        prefix: <SvgNotification height={18} width={18} />,
                        label: 'Notification',
                        order: 1,
                      },
                      {
                        path: '/Language',
                        prefix: <SvgLanguage height={18} width={18} />,
                        label: 'Language',
                        order: 1,
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
              path: '#solutions',
              label: 'Solutions',
              order: 2,
            },
            {
              path: '#products',
              label: 'Products',
              order: 1,
            },
            {
              path: '#technologies',
              label: 'Technologies',
              order: 4,
            },
            {
              path: '#about',
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
                    order: 1,
                  },
                ],
                path: '/User',
                prefix: <SvgUser height={18} width={18} />,
                label: 'User',
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
                    order: 1,
                  },
                  {
                    path: '/settings/account',
                    label: 'Account',
                    order: 1,
                  },
                  {
                    path: '/settings/account',
                    label: 'Account',
                    order: 1,
                  },
                ],
                path: '/Chart',
                prefix: <SvgBarChart height={18} width={18} />,
                label: 'Chart',
                order: 1,
              },
              {
                path: '/dashboard',
                prefix: <SvgDatabase height={18} width={18} />,
                label: 'Database',
                order: 1,
              },
              {
                path: '/Favorite',
                prefix: <SvgFavorite height={18} width={18} />,
                label: 'Favorite',
                order: 1,
              },
              {
                path: '/Calendar',
                prefix: <SvgCalendar height={18} width={18} />,
                label: 'Calendar',
                order: 1,
              },
              {
                path: '/Notification',
                prefix: <SvgNotification height={18} width={18} />,
                label: 'Notification',
                order: 1,
              },
              {
                path: '/Language',
                prefix: <SvgLanguage height={18} width={18} />,
                label: 'Language',
                order: 1,
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
