import { Meta, StoryObj } from '@storybook/react';
import { LineProgress } from './line-progress';

export default {
  title: 'Design System/Line-Progress',
  component: LineProgress,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'info',
      ],
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
    className: {
      description: '客製化樣式',
    },
    percent: {
      description: '進度',
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    height: {
      description: '線條寬度',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
    label: {
      description: '進度指示標籤',
    },
  },
  args: {
    themeColor: 'primary',
    percent: 0,
    height: 10,
  },
  parameters: {
    docs: {
      title: '長條進度指示',
      description: {
        component: '長條進度指示組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof LineProgress>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    className: '',
  },
  render(args) {
    return <LineProgress {...args} />;
  },
};
