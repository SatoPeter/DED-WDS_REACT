import { AccountIcon, HomeIcon } from '@src/assets';
import { Meta, StoryObj } from '@storybook/react';
import { ItemProps } from '@src/hooks/useMenu';
import Menu from './menu';

export default {
  title: 'Design System/Module/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: '客製化樣式',
    },
    menuData: {
      description: '選單資料',
    },
    isCollapsed: {
      description: '是否收合',
    },
    width: {
      description: '寬度',
    },
  },
  parameters: {
    docs: {
      title: '搜尋',
      description: {
        /* 組件描述 */
        component: '組件的呈現及說明。',
      },
    },
  },
} as Meta;
/* 設定組件類型 */
type Story = StoryObj<typeof Menu>;

const menuData: ItemProps[] = [
  {
    title: 'Dashboard',
    icon: <HomeIcon width={24} height={24} />,
    path: '/dashboard',
  },
  {
    title: 'Settings',
    icon: <HomeIcon width={24} height={24} />,
    path: '/settings',
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
    icon: <HomeIcon width={24} height={24} />,
    path: '/help',
  },
];

export const Primary: Story = {
  name: '搜尋輸入框',
  args: {
    className: '',
    menuData,
    isCollapsed: false,
    width: '300px',
  },
  render(args) {
    return <Menu {...args} />;
  },
};
