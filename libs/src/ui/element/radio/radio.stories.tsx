import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Radio } from './radio';

export default {
  title: 'Design System/Radio',
  component: Radio,
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
    options: {
      description: '選項',
    },
    direction: {
      description: '方向',
      control: {
        type: 'select',
        options: ['row', 'column'],
      },
    },
    initValue: {
      description: '預設值',
    },
    onChange: {
      description: '選擇選項後的事件',
      action: 'onChange',
    },
  },
  args: {
    direction: 'row',
  },
  parameters: {
    docs: {
      title: 'Radio Button',
      description: {
        component: 'Radio Button 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    className: '',
    options: [
      { label: '選項一', value: 'option1' },
      { label: '選項二', value: 'option2' },
      { label: '選項三', value: 'option3' },
    ],
    initValue: 'option3',
    onChange: (e) => {
      action('onChange')(e);
    },
  },
  render(args) {
    return <Radio {...args} />;
  },
};
