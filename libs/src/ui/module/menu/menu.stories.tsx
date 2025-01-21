import { SvgAccount, SvgHome } from '@src/assets';
import { Meta, StoryObj } from '@storybook/react';
import { ItemProps } from '@src/hooks/useMenu';
import Menu from './menu';

const menuData: ItemProps[] = [
  {
    label: 'Dashboard',
    prefix: <SvgHome width={24} height={24} />,
    path: '/dashboard',
    order: 1,
  },
  {
    label: 'Settings',
    prefix: <SvgHome width={24} height={24} />,
    path: '/settings',
    children: [
      {
        label: 'Profile',
        prefix: <SvgAccount width={24} height={24} />,
        path: '/settings/profile',
        order: 1,
      },
      {
        label: 'Account',
        prefix: <SvgAccount width={24} height={24} />,
        path: '/settings/account',
        order: 2,
      },
    ],
    order: 2,
  },
  {
    label: 'Help',
    prefix: <SvgHome width={24} height={24} />,
    path: '/help',
    order: 3,
  },
];

export default {
  title: 'Component/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    isCollapsed: {
      description: '是否收合',
      table: {
        category: 'PROPS',
      },
    },
    color: {
      description: '顏色',
      control: {
        type: 'color',
      },
      table: {
        category: 'PROPS',
      },
    },
    isSideNavLink: {
      description: '是否為側邊導航',
      table: {
        category: 'PROPS',
      },
    },
    hasDivider: {
      description: '是否有分隔線',
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
    dataSource: menuData,
    isCollapsed: false,
    color: '#000000',
    isSideNavLink: true,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Menu',
      description: {
        component: '選單組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Menu {...args} />;
  },
};
