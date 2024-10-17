import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@src/ui';

export default {
  title: 'Design System/Slider',
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
          'tertiary',
          'success',
          'warning',
          'error',
          'info',
        ],
      },
    },
    isDisabled: {
      description: '是否禁用',
    },
    max: {
      description: '最大值',
    },
    min: {
      description: '最小值',
    },
    unit: {
      description: '單位',
    },
    step: {
      description: '步進值',
    },
    initValue: {
      description: '初始值',
    },
    className: {
      description: '客製化樣式',
    },
    onChange: {
      description: '值改變事件',
      action: 'onChange',
    },
  },
  parameters: {
    docs: {
      title: '滑桿',
      description: {
        component: '滑桿的呈現及說明。',
      },
    },
  },
  args: {
    themeColor: 'primary',
    isDisabled: false,
    onChange: action('onChange'),
    className: '',
  },
} as Meta;
type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    min: -100,
    max: 100,
    step: 1,
    initValue: 50,
    unit: '℃',
  },
  render(args) {
    return <Slider {...args} />;
  },
};

export const ThemeColor: Story = {
  name: '主題色滑桿',
  args: {
    min: 0,
    max: 100,
    step: 1,
    initValue: 10,
    unit: '%',
  },
  render(args) {
    return (
      <div>
        <Slider {...args} initValue={40} themeColor="primary" />
        <Slider {...args} initValue={50} themeColor="secondary" />
        <Slider {...args} initValue={60} themeColor="tertiary" />
        <Slider {...args} initValue={70} themeColor="info" />
        <Slider {...args} initValue={80} themeColor="success" />
        <Slider {...args} initValue={90} themeColor="warning" />
        <Slider {...args} initValue={100} themeColor="error" />
      </div>
    );
  },
};
