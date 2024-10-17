import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonSlider } from '@src/ui';
import { PlusIcon, MinusIcon } from '@src/assets';

export default {
  title: 'Design System/Button-Slider',
  component: ButtonSlider,
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
    min: {
      description: '最小值',
    },
    max: {
      description: '最大值',
    },
    step: {
      description: '步進值',
    },
    unit: {
      description: '單位',
    },
    prefix: {
      description: '前置元素',
      options: ['None', 'Increase', 'Decrease'],
      mapping: {
        None: null,
        Increase: <PlusIcon width={32} height={32} />,
        Decrease: <MinusIcon width={32} height={32} />,
      },
    },
    suffix: {
      description: '後置元素',
      options: ['None', 'Increase', 'Decrease'],
      mapping: {
        None: null,
        Increase: <PlusIcon width={32} height={32} />,
        Decrease: <MinusIcon width={32} height={32} />,
      },
    },
    className: {
      description: '客製化樣式',
    },
    initValue: {
      description: '初始值',
    },
    onChange: {
      description: '變更事件',
    },
    onClick: {
      description: '點擊事件',
      action: 'onClick',
    },
  },
  parameters: {
    docs: {
      title: '按鈕滑桿',
      description: {
        component: '按鈕滑桿輸入的呈現及說明。',
      },
    },
  },
  args: {
    themeColor: 'primary',
    isDisabled: false,
    onChange: action('onChange'),
    onClick: action('onClick'),
    className: '',
  },
} as Meta;
type Story = StoryObj<typeof ButtonSlider>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    prefix: 'Decrease',
    suffix: 'Increase',
    min: 0,
    max: 100,
    step: 1,
    unit: '℃',
    initValue: 50,
    onClick: action('onClick'),
  },
  render(args) {
    return <ButtonSlider {...args} />;
  },
};

export const ThemeColor: Story = {
  name: '主題色按鈕滑桿',
  args: {
    prefix: 'Decrease',
    suffix: 'Increase',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    initValue: 50,
    onClick: action('onClick'),
  },
  render(args) {
    return (
      <div>
        <ButtonSlider {...args} initValue={40} themeColor="primary" />
        <ButtonSlider {...args} initValue={50} themeColor="secondary" />
        <ButtonSlider {...args} initValue={60} themeColor="tertiary" />
        <ButtonSlider {...args} initValue={70} themeColor="success" />
        <ButtonSlider {...args} initValue={80} themeColor="info" />
        <ButtonSlider {...args} initValue={90} themeColor="warning" />
        <ButtonSlider {...args} initValue={100} themeColor="error" />
      </div>
    );
  },
};
