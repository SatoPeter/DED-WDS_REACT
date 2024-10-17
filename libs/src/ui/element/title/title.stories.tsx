import { Meta, StoryObj } from '@storybook/react';
import { Title } from './title';

export default {
  title: 'Design System/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'success',
          'warning',
          'error',
          'info',
        ],
      },
    },
    level: {
      description: '標題等級',
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    children: {
      description: '標題內容',
    },
    className: {
      description: '客製化樣式',
    },
  },
  parameters: {
    docs: {
      title: '標題',
      description: {
        component: '標題組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    themeColor: 'primary',
    level: 0,
    children: '標題',
    className: '',
  },
  render(args) {
    return <Title {...args}>{args.children}</Title>;
  },
};
