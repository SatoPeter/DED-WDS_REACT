import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';

export default {
  title: 'Design System/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '標題顏色',
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
    checkChildren: {
      description: '開啟文字',
    },
    unCheckChildren: {
      description: '關閉文字',
    },
    isChecked: {
      description: '是否開啟',
    },
    isDisabled: {
      description: '是否禁用',
    },
    onChange: {
      description: '開關事件',
      action: 'onChange',
    },
    className: {
      description: '客製化樣式',
    },
  },
  parameters: {
    docs: {
      title: '開關按鈕',
      description: {
        component: '開關按鈕組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    themeColor: 'primary',
    isChecked: false,
    isDisabled: false,
    checkChildren: 'on',
    unCheckChildren: 'off',
    className: '',
  },
  render(args) {
    return <Toggle {...args} />;
  },
};

export const ThemeColor: Story = {
  name: '主題色開關按鈕',
  args: {
    themeColor: 'primary',
    isChecked: true,
    isDisabled: false,
    checkChildren: 'on',
    unCheckChildren: 'off',
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Toggle {...args} themeColor="primary" />
        <Toggle {...args} themeColor="secondary" />
        <Toggle {...args} themeColor="tertiary" />
        <Toggle {...args} themeColor="info" />
        <Toggle {...args} themeColor="success" />
        <Toggle {...args} themeColor="warning" />
        <Toggle {...args} themeColor="error" />
      </div>
    );
  },
};
