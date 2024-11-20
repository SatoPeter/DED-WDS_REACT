import { Meta, StoryObj } from '@storybook/react';
import { HomeIcon, AUOIcon, AirIcon, PowerIcon, FanIcon } from '@src/assets';
import { ItemProps } from '@src/hooks/useMenu';
import SideNav from './side-nav';

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
    dataSource: menuData,
    className: '',
  },
  parameters: {
    docs: {
      title: '側邊導覽',
      description: {
        component: '側邊導覽的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <SideNav {...args} />;
  },
};
