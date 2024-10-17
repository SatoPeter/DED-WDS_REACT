import { AccountIcon, HomeIcon } from '@src/assets';
import { Meta, StoryObj } from '@storybook/react';
import { ItemProps } from '@src/hooks/useMenu';
import Menu from './menu';

export default {
  title: 'Design System/Menu',
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
    color: {
      description: '顏色',
      control: {
        type: 'color',
      },
    },
  },
  parameters: {
    docs: {
      title: '選單',
      description: {
        component: '選單的呈現及說明。',
      },
    },
  },
} as Meta;
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
  name: '主要項目',
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
