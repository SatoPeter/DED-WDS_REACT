import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
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
      description: '選中的選項',
    },
    onChange: {
      description: '選中選項改變時的回調函數',
      action: 'onChange',
    },
  },
  args: {
    direction: 'row',
    themeColor: 'primary',
    value: '',
  },
  parameters: {
    docs: {
      title: 'Checkbox',
      description: {
        component: 'Checkbox 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    className: '',
    options: [
      { label: '選項一', value: 'option1' },
      { label: '選項二', value: 'option2' },
      { label: '選項三', value: 'option3' },
    ],
    initValue: ['option2'],
    onChange: (e) => action('onChange')(e),
  },
  render(args) {
    return <Checkbox {...args} />;
  },
};
