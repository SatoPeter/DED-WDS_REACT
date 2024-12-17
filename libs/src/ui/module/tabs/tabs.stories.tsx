import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';
import { ArrowDownIcon } from '@src/assets';

const tabs = [
  { title: 'Tab 1', content: 'Content 1' },
  { title: 'Tab 2', content: 'Content 2' },
  { title: 'Tab 3', content: 'Content 3' },
];

export default {
  title: 'Component/Tabs',
  component: Tabs,
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
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    activeIndex: {
      description: '活動頁籤索引',
      control: {
        type: 'number',
        min: 0,
        max: 2,
      },
      table: {
        category: 'PROPS',
      },
    },
    type: {
      description: '頁籤樣式',
      control: {
        type: 'select',
        options: ['default', 'card'],
      },
      table: {
        category: 'PROPS',
      },
    },
    prefix: {
      description: '前綴元素',
      options: ['none', 'ArrowDownIcon'],
      mapping: {
        none: null,
        ArrowDownIcon: <ArrowDownIcon />,
      },
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
    onClick: {
      description: '點擊事件',
      action: 'clicked',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    themeColor: 'primary',
    dataSource: tabs,
    activeIndex: 0,
    type: 'default',
    prefix: <ArrowDownIcon />,
    isDisabled: false,
    className: '',
    onClick: action('onClick'),
  },
  parameters: {
    docs: {
      title: 'Tabs',
      description: {
        component: '頁籤組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Tabs {...args} />;
  },
};

export const PrimaryWithCard: Story = {
  name: '卡片式頁籤',
  args: {
    type: 'card',
    activeIndex: 1,
  },
  render(args) {
    return <Tabs {...args} />;
  },
};
