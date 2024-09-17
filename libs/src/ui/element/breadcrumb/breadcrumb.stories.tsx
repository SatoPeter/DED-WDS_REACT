import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './breadcrumb';

export default {
  title: 'Design System/Element/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      description: '點擊事件',
      action: 'clicked',
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    onClick: () => {
      action('onClick')();
    },
  },
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
  name: '標準麵包屑',
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
