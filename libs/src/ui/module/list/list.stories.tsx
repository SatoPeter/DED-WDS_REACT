import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { List } from '@src/ui';
import { SvgAccount } from '@src/assets/icons';

const options = [
  {
    label: 'Option1',
    value: 'option1',
    prefix: <SvgAccount />,
    isDisabled: true,
  },
  {
    label: 'Option2',
    value: 'option2',
    href: '#',
    prefix: <SvgAccount />,
  },
  {
    label: 'Option3',
    value: 'option3',
    href: '#',
    prefix: <SvgAccount />,
  },
];

export default {
  title: 'Component/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    hasOutline: {
      description: '是否有外框',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'PROPS',
      },
    },
    hasDivider: {
      description: '是否有分隔線',
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
    onSelect: {
      description: '選擇事件',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    dataSource: options,
    hasOutline: false,
    hasDivider: false,
    className: '',
    onSelect: action('onSelect'),
  },
  parameters: {
    docs: {
      title: 'List',
      description: {
        component: '清單組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <List {...args} />;
  },
};

export const Menu: Story = {
  name: '清單樣式-外框',
  argTypes: {
    hasOutline: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<List {...args} hasOutline />`,
      },
    },
  },
  render(args) {
    return <List {...args} hasOutline />;
  },
};

export const Divider: Story = {
  name: '清單樣式-分隔線',
  argTypes: {
    hasDivider: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<List {...args} hasDivider />`,
      },
    },
  },
  render(args) {
    return <List {...args} hasDivider />;
  },
};
