import { Meta, StoryObj } from '@storybook/react';
import {
  AccountIcon,
  HomeIcon,
  AUOIcon,
  AirIcon,
  PowerIcon,
  FanIcon,
} from '@src/assets';
import { ItemProps } from '@src/hooks/useMenu';
import SideNav from './side-nav';

export default {
  title: 'Design System/Section/SideNav',
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
    },
    logo: {
      description: 'Logo',
      mapping: {
        AUOIcon: <AUOIcon width={90} height={30} />,
      },
      options: ['AUOIcon'],
      control: {
        type: 'select',
      },
    },
    menuData: {
      description: '選單資料',
    },
    width: {
      description: '寬度',
    },
    className: {
      description: '客製化樣式',
    },
  },
  parameters: {
    docs: {
      title: '搜尋',
      description: {
        /* 組件描述 */
        component: '側邊導覽的呈現及說明。',
      },
    },
  },
} as Meta;
/* 設定組件類型 */
type Story = StoryObj<typeof SideNav>;

const menuData: ItemProps[] = [
  {
    title: 'Dashboard',
    icon: <HomeIcon width={24} height={24} />,
    path: '/dashboard',
  },
  {
    title: 'Settings',
    icon: <AirIcon width={24} height={24} />,
    path: '/settings',
    children: [
      {
        title: 'Profile',
        icon: <FanIcon width={24} height={24} />,
        path: '/settings/profile',
      },
      {
        title: 'Account',
        icon: <FanIcon width={24} height={24} />,
        path: '/settings/account',
        children: [
          {
            title: 'Profile',
            icon: <AccountIcon width={24} height={24} />,
            path: '/settings/profile',
          },
          {
            title: 'Account',
            icon: <AccountIcon width={24} height={24} />,
            path: '/settings/account',
          },
        ],
      },
    ],
  },
  {
    title: 'Help',
    icon: <PowerIcon width={24} height={24} />,
    path: '/help',
  },
];

export const Primary: Story = {
  name: '搜尋輸入框',
  args: {
    themeColor: 'Blue',
    logo: <AUOIcon width={90} height={30} />,
    menuData,
    width: '240px',
    className: '',
  },
  render(args) {
    return <SideNav {...args} />;
  },
};
