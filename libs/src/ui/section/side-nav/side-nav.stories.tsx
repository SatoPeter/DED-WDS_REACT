import { Meta, StoryObj } from '@storybook/react';
import { HomeIcon, AUOIcon, AirIcon, PowerIcon, FanIcon } from '@src/assets';
import { ItemProps } from '@src/hooks/useMenu';
import SideNav from './side-nav';
import { Grid, Row, Column } from '@src/ui/section/grid';

const menuData: ItemProps[] = [
  {
    title: 'Dashboard',
    prefix: <HomeIcon width={24} height={24} />,
    path: '/dashboard',
  },
  {
    title: 'Settings',
    prefix: <AirIcon width={24} height={24} />,
    path: '/settings',
    children: [
      {
        title: 'Profile',
        prefix: <FanIcon width={24} height={24} />,
        path: '/settings/profile',
      },
      {
        title: 'Account',
        prefix: <FanIcon width={24} height={24} />,
        path: '/settings/account',
      },
    ],
  },
  {
    title: 'Help',
    prefix: <PowerIcon width={24} height={24} />,
    path: '/help',
  },
];

export default {
  title: 'Component/SideNav',
  component: SideNav,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '背景顏色',
      mapping: {
        Blue: '#00467C',
        Yellow: '#F4E069',
        Grape: '#AB86D1',
        Black: '#000000',
      },
      options: ['Blue', 'Yellow', 'Grape', 'Black'],
      control: {
        type: 'select',
      },
      table: {
        category: 'PROPS',
      },
    },
    logo: {
      description: 'Logo 圖示',
      mapping: {
        AUOIcon: <AUOIcon width={90} height={30} />,
      },
      options: ['AUOIcon'],
      control: {
        type: 'select',
      },
      table: {
        category: 'PROPS',
      },
    },
    logoLink: {
      description: 'Logo 連結',
      table: {
        category: 'PROPS',
      },
    },
    hasSearch: {
      description: '是否有搜尋欄',
      table: {
        category: 'PROPS',
      },
    },
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      table: {
        category: 'PROPS',
      },
    },
  },
  args: {
    themeColor: 'Blue',
    logo: <AUOIcon width={90} height={30} />,
    logoLink: 'https://www.auo.com',
    hasSearch: false,
    dataSource: menuData,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Side Nav',
      description: {
        component: '側邊導覽組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return (
      <Grid fluid>
        <Row>
          <Column xs={12} sm={4} md={4}>
            <SideNav {...args} />
          </Column>
        </Row>
      </Grid>
    );
  },
};
