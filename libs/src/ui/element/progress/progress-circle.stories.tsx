import { Meta, StoryObj } from '@storybook/react';
import { CircleProgress } from './progress-circle';

export default {
  title: 'Design System/Progress-Circle',
  component: CircleProgress,
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
    className: {
      description: '客製化樣式',
    },
  },
  args: {
    themeColor: 'primary',
    percent: 50,
    size: 100,
    strokeWidth: 10,
    label: '',
    className: '',
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

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <CircleProgress {...args} />;
  },
};

export const Label: Story = {
  name: '顯示標籤',
  args: {},
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        <CircleProgress {...args} label="測試" size={70} />
        <CircleProgress {...args} label="測試" size={100} />
      </div>
    );
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {},
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        <CircleProgress {...args} percent={40} themeColor="primary" />
        <CircleProgress {...args} percent={50} themeColor="secondary" />
        <CircleProgress {...args} percent={60} themeColor="tertiary" />
        <CircleProgress {...args} percent={70} themeColor="info" />
        <CircleProgress {...args} percent={80} themeColor="success" />
        <CircleProgress {...args} percent={90} themeColor="warning" />
        <CircleProgress {...args} percent={100} themeColor="error" />
      </div>
    );
  },
};
