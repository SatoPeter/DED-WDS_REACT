import { Meta, StoryObj } from '@storybook/react';
import { Select } from '@src/ui';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

export default {
  title: 'Component/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    /* 設定參數 */
    options: {
      description: '選項',
      control: {
        type: 'object',
      },
    },
    placeholder: {
      description: '預設文字',
      control: {
        type: 'text',
      },
    },
    value: {
      description: '值',
      control: {
        type: 'text',
      },
    },
    isDisabled: {
      description: '是否禁用',
      control: {
        type: 'boolean',
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
    onClick: {
      description: '點擊事件',
    },
  },
  args: {
    options,
    placeholder: 'Select',
    value: '',
    isDisabled: false,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Select',
      description: {
        component: '選擇組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  name: '預設項目',
  args: {
    /* 設定參數預設值 */
    // size: 'medium',
    // isDisabled: false,
    className: '',
  },
  render(args) {
    return <Select {...args} />;
  },
};
