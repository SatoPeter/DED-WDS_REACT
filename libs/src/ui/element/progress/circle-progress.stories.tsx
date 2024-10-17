import { Meta, StoryObj } from '@storybook/react';
import { CircleProgress } from './circle-progress';

export default {
  title: 'Design System/Circle-Progress',
  component: CircleProgress,
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
    size: {
      description: '直徑',
      control: {
        type: 'range',
        min: 24,
        max: 200,
        step: 1,
      },
    },
    strokeWidth: {
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
    percent: 0,
    size: 100,
    strokeWidth: 10,
  },
  parameters: {
    docs: {
      title: '圓形進度指示',
      description: {
        component: '圓形進度指示組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof CircleProgress>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    className: '',
  },
  render(args) {
    return <CircleProgress {...args} />;
  },
};
