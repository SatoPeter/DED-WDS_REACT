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
          'tertiary',
          'success',
          'warning',
          'error',
          'info',
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
      title: '滑桿',
      description: {
        component: '滑桿的呈現及說明。',
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

export const ThemeColor: Story = {
  name: '主題色彩',
  args: {
    min: 0,
    max: 100,
    step: 1,
    initValue: 10,
    label: '%',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Slider {...args} initValue={40} themeColor="primary" />
<Slider {...args} initValue={50} themeColor="secondary" />
<Slider {...args} initValue={60} themeColor="tertiary" />
<Slider {...args} initValue={70} themeColor="info" />
<Slider {...args} initValue={80} themeColor="success" />
<Slider {...args} initValue={90} themeColor="warning" />
<Slider {...args} initValue={100} themeColor="error" />
`,
      },
    },
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
