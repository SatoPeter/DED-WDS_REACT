import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@src/ui';

export default {
  title: 'Component/Slider',
  component: Slider,
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
    max: {
      description: '最大值',
      table: {
        category: 'PROPS',
      },
    },
    min: {
      description: '最小值',
      table: {
        category: 'PROPS',
      },
    },
    label: {
      description: '顯示單位',
      table: {
        category: 'PROPS',
      },
    },
    step: {
      description: '步進值',
      table: {
        category: 'PROPS',
      },
    },
    initValue: {
      description: '初始值',
      table: {
        category: 'PROPS',
      },
    },
    isShowRange: {
      description: '是否顯示範圍',
      table: {
        category: 'PROPS',
      },
    },
    isShowCurrValue: {
      description: '是否顯示目前值',
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
      description: '值改變事件',
      action: 'onChange',
      table: {
        category: 'EVENTS',
      },
    },
  },
  parameters: {
    docs: {
      title: 'Slider',
      description: {
        component: '滑桿組件的呈現及說明。',
      },
    },
  },
  args: {
    themeColor: 'primary',
    min: -100,
    max: 100,
    step: 1,
    initValue: 0,
    label: '℃',
    isShowRange: true,
    isShowCurrValue: true,
    isDisabled: false,
    onChange: action('onChange'),
    className: '',
  },
} as Meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Slider {...args} />;
  },
};

export const Current: Story = {
  name: '顯示目前值',
  args: {
    isShowRange: false,
  },
  render(args) {
    return <Slider {...args} isShowCurrValue />;
  },
};

export const Range: Story = {
  name: '顯示範圍',
  args: {
    isShowCurrValue: false,
  },
  render(args) {
    return <Slider {...args} isShowRange />;
  },
};
