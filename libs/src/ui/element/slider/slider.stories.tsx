import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@src/ui';

export default {
  title: 'Design System/Element/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    /* 設定參數 */
    max: {
      description: '最大值',
      control: {
        type: 'number',
      },
    },
    min: {
      description: '最小值',
      control: {
        type: 'number',
      },
    },
    step: {
      description: '步進值',
      control: {
        type: 'number',
      },
    },
    initialValue: {
      description: '初始值',
      control: {
        type: 'number',
      },
    },
    onChange: {
      description: '值改變事件',
      action: 'onChange',
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
  parameters: {
    docs: {
      title: '搜尋',
      description: {
        /* 組件描述 */
        component: 'Slider 的呈現及說明。',
      },
    },
  },
} as Meta;
/* 設定組件類型 */
type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  name: 'Slider',
  args: {
    min: 0,
    max: 100,
    step: 1,
    initialValue: 0,
    themeColor: 'primary',
    isDisabled: false,
    unit: '℃',
    onChange: action('onChange'),
  },
  render(args) {
    return <Slider {...args} />;
  },
};
