import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';

export default {
  title: 'Component/Toggle',
  component: Toggle,
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
    checkLabel: {
      description: '開啟文字',
      table: {
        category: 'PROPS',
      },
    },
    unCheckLabel: {
      description: '關閉文字',
      table: {
        category: 'PROPS',
      },
    },
    isChecked: {
      description: '是否開啟',
      table: {
        category: 'PROPS',
      },
    },
    isDisabled: {
      description: '是否禁用',
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
    onChange: {
      description: '開關事件',
      action: 'onChange',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    themeColor: 'success',
    checkLabel: 'on',
    unCheckLabel: 'off',
    isChecked: true,
    isDisabled: false,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Toggle',
      description: {
        component: '開關按鈕組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Toggle {...args} />;
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {
    isChecked: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Toggle {...args} themeColor="neutral" />
<Toggle {...args} themeColor="primary" />
<Toggle {...args} themeColor="secondary" />
<Toggle {...args} themeColor="info" />
<Toggle {...args} themeColor="success" />
<Toggle {...args} themeColor="warning" />
<Toggle {...args} themeColor="error" />
`,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Toggle {...args} themeColor="primary" />
        <Toggle {...args} themeColor="secondary" />
        <Toggle {...args} themeColor="neutral" />
        <Toggle {...args} themeColor="info" />
        <Toggle {...args} themeColor="success" />
        <Toggle {...args} themeColor="warning" />
        <Toggle {...args} themeColor="error" />
      </div>
    );
  },
};
