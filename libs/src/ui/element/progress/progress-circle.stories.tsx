import { Meta, StoryObj } from '@storybook/react';
import { CircleProgress } from './progress-circle';

export default {
  title: 'Component/Progress-Circle',
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
          'neutral',
          'info',
          'success',
          'warning',
          'error',
        ],
      },
      table: {
        category: 'PROPS',
      },
    },
    label: {
      description: '進度指示標籤',
      table: {
        category: 'PROPS',
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
      table: {
        category: 'PROPS',
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
      table: {
        category: 'PROPS',
      },
    },
    strokeWidth: {
      description: '線條寬度',
      control: {
        type: 'range',
        min: 1,
        max: 20,
        step: 1,
      },
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
    themeColor: 'primary',
    label: 'Label',
    percent: 65,
    size: 100,
    strokeWidth: 10,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Circle Progress',
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
  parameters: {
    docs: {
      source: {
        code: `
<CircleProgress {...args} label="Label" size={70} />
<CircleProgress {...args} label="Label" size={100} />
`,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        <CircleProgress {...args} label="Label" size={70} />
        <CircleProgress {...args} label="Label" size={100} />
      </div>
    );
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<CircleProgress {...args} percent={60} themeColor="neutral" />
<CircleProgress {...args} percent={40} themeColor="primary" />
<CircleProgress {...args} percent={50} themeColor="secondary" />
<CircleProgress {...args} percent={70} themeColor="info" />
<CircleProgress {...args} percent={80} themeColor="success" />
<CircleProgress {...args} percent={90} themeColor="warning" />
<CircleProgress {...args} percent={100} themeColor="error" />
`,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        <CircleProgress {...args} percent={60} themeColor="neutral" />
        <CircleProgress {...args} percent={40} themeColor="primary" />
        <CircleProgress {...args} percent={50} themeColor="secondary" />
        <CircleProgress {...args} percent={70} themeColor="info" />
        <CircleProgress {...args} percent={80} themeColor="success" />
        <CircleProgress {...args} percent={90} themeColor="warning" />
        <CircleProgress {...args} percent={100} themeColor="error" />
      </div>
    );
  },
};
