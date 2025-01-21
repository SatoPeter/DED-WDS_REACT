import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './navbar';
import { has } from 'lodash';

const links = [
  { label: 'Solutions', href: '#solutions', order: 2 },
  { label: 'Products', href: '#products', order: 1 },
  { label: 'Technologies', href: '#technologies', order: 4 },
  { label: 'About', href: '#about', order: 3 },
];

export default {
  title: 'Component/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '連結清單',
      table: {
        category: 'PROPS',
      },
    },
    hasLogo: {
      description: '是否有 Logo',
      table: {
        category: 'PROPS',
      },
    },
    logoSrc: {
      description: 'Logo 圖片連結',
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
    onSearch: {
      description: '搜尋事件',
      action: 'search',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    dataSource: links,
    hasLogo: true,
    logoSrc: 'https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg',
    className: '',
    onSearch: (query: string) => {
      console.log(query);
    },
  },
  parameters: {
    docs: {
      title: 'Navbar',
      description: {
        component: 'Navbar 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  name: '預設項目',
  args: {
    className: '',
  },
  render(args) {
    return <Navbar {...args} />;
  },
};
