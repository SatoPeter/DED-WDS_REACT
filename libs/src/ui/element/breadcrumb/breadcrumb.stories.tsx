import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './breadcrumb';

export default {
  title: 'Design System/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    breadcrumbItems: {
      description: '麵包屑項目',
    },
    placement: {
      description: '麵包屑位置',
      control: {
        type: 'select',
        options: ['top', 'bottom'],
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
  },
  args: {},
  parameters: {
    docs: {
      title: '麵包屑',
      description: {
        component: '麵包屑組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    breadcrumbItems: [
      { label: '首頁', href: '/' },
      { label: '第一層', href: '/first' },
      { label: '第二層', href: 'https://tw.yahoo.com' },
      { label: '第三層', href: '/first/second/third' },
      { label: '第n層', href: '/first/second/third/n' },
      { label: '當前頁' },
    ],
    placement: 'bottom',
  },
  render(args) {
    return <Breadcrumb {...args} />;
  },
};
