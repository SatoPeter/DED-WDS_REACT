import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

export default {
  title: 'Design System/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '標題',
    },
    placeholder: {
      description: '輸入提示',
    },
    isDisabled: {
      description: '是否禁用',
    },
    total: {
      description: '字數限制',
    },
    hint: {
      description: '提示訊息',
    },
    initValue: {
      description: '輸入值',
    },
    onChange: {
      description: '輸入事件',
      action: 'onChange',
    },
    className: {
      description: '客製化樣式',
    },
  },
  parameters: {
    docs: {
      title: '文字輸入框',
      description: {
        component: '文字輸入框組件的呈現及說明。',
      },
    },
  },
  args: {
    isDisabled: false,
    placeholder: '請輸入 ...',
    total: 0,
    className: '',
  },
} as Meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  name: '預設項目',
  args: {
    label: '',
    hint: { error: '', description: '' },
  },
  render(args) {
    return <Textarea {...args} />;
  },
};

export const Label: Story = {
  name: '顯示標籤',
  args: {
    label: '內文描述',
    hint: { error: '', description: '' },
  },
  render(args) {
    return <Textarea {...args} />;
  },
};

export const Limit: Story = {
  name: '字數限制',
  args: {
    label: '內文描述',
    limit: 20,
    initValue: 'Hello World',
    hint: { error: '', description: '' },
  },
  render(args) {
    return <Textarea {...args} />;
  },
};

export const TextareaStatus: Story = {
  name: '輸入框狀態',
  args: {
    label: '內文描述',
    limit: 10,
    placeholder: '請輸入描述 ...',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Textarea {...args} />
        <Textarea
          {...args}
          hint={{ error: 'Error Message', description: '' }}
        />
        <Textarea
          {...args}
          hint={{ error: '', description: 'Something Description' }}
        />
      </div>
    );
  },
};
