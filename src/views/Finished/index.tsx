// 組件引入
import {
  Breadcrumb,
  Button,
  Card,
  Divider,
  Grid,
  Layout,
  Navbar,
  SideNav,
  StatusIndicator,
  Tag,
  Title,
} from '@src/ui';

// icon 引入
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

// 圖表引入
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

// 客製化卡片引入
import { AreaPowerCard } from '../../elements';

// 動態引入
import { useCounter } from '@src/hooks/useCounter';
import { formatToThousand } from '@src/utils/number';

import './style.scss';
import { useNavigate } from 'react-router';
import { useEffect, useRef } from 'react';

// 假資料引入
const chartOptions = {
  chart: {
    type: 'column',
    height: 280,
    spacing: [20, 20, 20, 20],
  },
  title: {
    text: 'Usage Status',
    align: 'left',
  },
  subtitle: {
    text: 'update : 2025/01/09 13:30',
    align: 'left',
  },
  xAxis: {
    categories: ['0', '20', '40', '60', '80', '100'],
    crosshair: true,
    accessibility: {
      description: 'Countries',
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: '1000 metric tons (MT)',
    },
  },
  tooltip: {
    valueSuffix: ' (1000 MT)',
  },
  plotOptions: {
    column: {
      pointPadding: 0,
      borderWidth: 0,
      borderRadius: 20,
    },
  },
  series: [
    {
      name: 'Taipei',
      data: [2000, 2200, 1290, 643, 1240, 1643],
      color: '#005087',
    },
    {
      name: 'HsinChu',
      data: [953, 1400, 1000, 1405, 1950, 2135],
      color: '#87DE64',
    },
  ],
};

const BreadcrumbItems = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/first',
    label: 'Level1',
  },
  {
    href: 'https://tw.yahoo.com',
    label: 'Level2',
  },
];

const NavbarItems = [
  {
    path: '#products',
    label: 'Products',
    order: 1,
  },
  {
    path: '#solutions',
    label: 'Solutions',
    order: 2,
  },
  {
    path: '#about',
    label: 'About',
    order: 3,
  },
  {
    path: '#technologies',
    label: 'Technologies',
    order: 4,
  },
];

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

const cardItems = [
  {
    content: {
      label: 'Station',
      value: '238',
    },
  },
  {
    content: {
      label: 'Power',
      value: '24,857',
    },
  },
  {
    content: {
      label: 'Electric Charge',
      value: '5,658',
    },
  },
];

const tagItems = [
  {
    label: 'HsinChu',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Taipei',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Taichung',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Kaohsiung',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Keelong',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Taoyuan',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Miaoli',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Yunlin',
    prefix: <SvgLocation width={14} height={14} />,
  },
];

const deviceItems = [
  {
    unit: 'Now',
    value: 'Rush Hour',
  },
  {
    unit: 'Percentage',
    value: '55%',
  },
  {
    unit: 'Current count',
    value: '7/22',
  },
  {
    unit: 'Current Power',
    value: '5700kW / 9000kW',
  },
];

export const Finished = () => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  const containerRef = useRef(null);

  // Layout 結構
  const { Header, Content, Side } = Layout;

  // Grid System 結構
  const { Row, Column } = Grid;

  // 動態呼叫
  const user = formatToThousand(
    useCounter({ initialValue: 0, step: 6, delay: 0, limit: 237 }),
    ','
  );
  const power = formatToThousand(
    useCounter({ initialValue: 0, step: 6, delay: 0, limit: 4857 }),
    ','
  );
  const reservation = formatToThousand(
    useCounter({ initialValue: 0, step: 6, delay: 0, limit: 5658 }),
    ','
  );
  const equipment = formatToThousand(
    useCounter({ initialValue: 0, step: 6, delay: 0, limit: 721 }),
    ','
  );
  const revenue = formatToThousand(
    useCounter({ initialValue: 0, step: 6, delay: 0, limit: 1500 }),
    ','
  );
  const forecast = formatToThousand(
    useCounter({ initialValue: 0, step: 6, delay: 0, limit: 300 }),
    ','
  );

  const navigate = useNavigate();

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (chartRef.current?.chart) {
        chartRef.current.chart.reflow();
        chartRef.current.chart.redraw();
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <Layout className="bg-body">
        <Header className="ded-header-sticky">
          <Navbar
            className=""
            dataSource={NavbarItems}
            logoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
            onSearch={() => ({})}
          />
        </Header>
        <Layout>
          <Side>
            <SideNav
              dataSource={SideNavItems}
              hasSearch
              logo={<SvgAuo height={30} width={90} />}
              logoLink="https://www.auo.com"
              themeColor="#00467C"
            />
          </Side>
          <Layout>
            <Content className="py-8">
              <Grid gap={16}>
                <Row>
                  <Column xs={12}>
                    <Breadcrumb dataSource={BreadcrumbItems} />

                    <div className="mb-3 flex justify-between items-center">
                      <Title level={2}>Equipment Management</Title>
                      <div className="flex gap-2">
                        <Button
                          className="border-[#D9D9D9]"
                          variant="ghost"
                          themeColor="neutral"
                          prefix={<SvgNotification width={18} height={18} />}
                          onClick={() => ({})}
                        />
                        <Button
                          className="border-[#D9D9D9]"
                          variant="ghost"
                          themeColor="neutral"
                          prefix={<SvgSearch width={18} height={18} />}
                          onClick={() => ({})}
                        />
                        <Button
                          className="border-[#D9D9D9]"
                          variant="ghost"
                          themeColor="neutral"
                          prefix={<SvgSettings width={18} height={18} />}
                          onClick={() => ({})}
                        />
                      </div>
                    </div>

                    <div className="flex overflow-auto md:flex-wrap gap-2 py-4 border-t border-t-neutral-300 border-b border-b-neutral-300">
                      {tagItems.map((tag, index) => (
                        <Tag
                          className="bg-white hover:bg-hover text-neutral-400 hover:text-white border-white"
                          key={index}
                          label={tag.label}
                          prefix={tag.prefix}
                        />
                      ))}
                    </div>
                  </Column>
                </Row>

                <Row rowGap="16px">
                  <Column xs={12} md={5} lg={3}>
                    <Card className="bg-primary">
                      <div className="flex flex-wrap gap-2 justify-between items-center">
                        <Title className="text-white" level={3}>
                          AUO GRC
                        </Title>
                        <div className="flex gap-2 items-center border border-success-dark bg-success-light rounded-sm">
                          <StatusIndicator
                            variant="text"
                            themeColor="success"
                            prefix={undefined}
                          >
                            Normal
                          </StatusIndicator>
                        </div>
                      </div>

                      <Divider />
                      <div>
                        {deviceItems.map((item, index) => (
                          <div className="mb-4" key={index}>
                            <Title className="text-tertiary text-[13px]">
                              {item.unit}
                            </Title>
                            <Title className="text-white" level={4}>
                              {item.value}
                            </Title>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </Column>
                  <Column xs={12} md={7} lg={6}>
                    <Grid fluid gap={16}>
                      <Row rowGap="16px">
                        <Column xs={6} xl={4}>
                          <Card
                            className="ded-source-container"
                            cardFooter={
                              <div className="text-[13px] text-right text-[#AAAAAA]">
                                K
                              </div>
                            }
                          >
                            <Title className="mx-auto">User</Title>
                            <Title className="text-secondary mx-auto" level={3}>
                              {user}
                            </Title>
                          </Card>
                        </Column>
                        <Column xs={6} xl={4}>
                          <Card
                            className="ded-source-container"
                            cardFooter={
                              <div className="text-[13px] text-right text-[#AAAAAA]">
                                KWh
                              </div>
                            }
                          >
                            <Title className="mx-auto">Power</Title>
                            <Title className="text-secondary mx-auto" level={3}>
                              {power}
                            </Title>
                          </Card>
                        </Column>
                        <Column xs={6} xl={4}>
                          <Card className="ded-source-container">
                            <Title className="mx-auto">Reservation</Title>
                            <Title className="text-secondary mx-auto" level={3}>
                              {reservation}
                            </Title>
                          </Card>
                        </Column>
                        <Column xs={6} xl={4}>
                          <Card
                            className="ded-source-container"
                            cardFooter={
                              <div className="text-[13px] text-right text-[#AAAAAA]">
                                K
                              </div>
                            }
                          >
                            <Title className="mx-auto">Equipment</Title>
                            <Title className="text-secondary mx-auto" level={3}>
                              {equipment}
                            </Title>
                          </Card>
                        </Column>
                        <Column xs={6} xl={4}>
                          <Card
                            className="ded-source-container"
                            cardFooter={
                              <div className="text-[13px] text-right text-[#AAAAAA]">
                                K
                              </div>
                            }
                          >
                            <Title className="mx-auto">Revenue</Title>
                            <Title className="text-secondary mx-auto" level={3}>
                              {revenue}
                            </Title>
                          </Card>
                        </Column>
                        <Column xs={6} xl={4}>
                          <Card
                            className="ded-source-container"
                            cardFooter={
                              <div className="text-[13px] text-right text-[#AAAAAA]">
                                K
                              </div>
                            }
                          >
                            <Title className="mx-auto">Forecast</Title>
                            <Title className="text-secondary mx-auto" level={3}>
                              {forecast}
                            </Title>
                          </Card>
                        </Column>
                      </Row>
                      <Row>
                        <Column xs={12} className="w-[375px] md:w-full">
                          {/* <Card className="relative"> */}
                          <div
                            ref={containerRef}
                            className="relative rounded-2xl overflow-hidden"
                          >
                            <HighchartsReact
                              ref={chartRef}
                              highcharts={Highcharts}
                              options={chartOptions}
                              updateDimensions={true}
                            />

                            <div className="absolute top-4 right-4 flex gap-2">
                              <Button
                                className="border-[#D9D9D9]"
                                variant="ghost"
                                themeColor="neutral"
                                prefix={
                                  <SvgInfoCircle width={18} height={18} />
                                }
                                onClick={() => ({})}
                              />
                              <Button
                                className="border-[#D9D9D9]"
                                variant="ghost"
                                themeColor="neutral"
                                prefix={<SvgMoreVert width={18} height={18} />}
                                onClick={() => ({})}
                              />
                            </div>
                          </div>

                          {/* </Card> */}
                        </Column>
                      </Row>
                    </Grid>
                  </Column>
                  <Column xs={12} lg={3}>
                    <Card className="ded-map-container min-h-[300px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115924.07095472663!2d120.86705469726559!3d24.773967500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346836265f076a5f%3A0x36ff69a4c9a2e0e6!2z5Y-L6YGU5YWJ6Zu7IC0g5LyB5qWt57i96YOoIChBVEMp!5e0!3m2!1szh-TW!2stw!4v1735551647460!5m2!1szh-TW!2stw"
                        title="Google Map"
                        width="100%"
                        height="100%"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </Card>
                  </Column>
                </Row>

                <Row>
                  <Column xs={12} md={6} lg={3}>
                    <AreaPowerCard
                      areaPower={{
                        name: 'HsinChu',
                        description: 'HsinChu is a city in Taiwan',
                      }}
                      themeColor="success"
                      percentage={80}
                      dataSource={cardItems}
                    />
                  </Column>
                  <Column xs={12} md={6} lg={3}>
                    <AreaPowerCard
                      areaPower={{
                        name: 'Taipei',
                        description: 'Taipei is a city in Taiwan',
                      }}
                      themeColor="warning"
                      percentage={50}
                      dataSource={cardItems}
                    />
                  </Column>
                  <Column xs={12} md={6} lg={3}>
                    <AreaPowerCard
                      areaPower={{
                        name: 'Taichung',
                        description: 'Taipei is a city in Taiwan',
                      }}
                      themeColor="error"
                      percentage={30}
                      dataSource={cardItems}
                    />
                  </Column>
                  <Column xs={12} md={6} lg={3}>
                    <AreaPowerCard
                      areaPower={{
                        name: 'Kaohsiung',
                        description: 'Taipei is a city in Taiwan',
                      }}
                      themeColor="success"
                      percentage={70}
                      dataSource={cardItems}
                    />
                  </Column>
                </Row>
              </Grid>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Finished;
