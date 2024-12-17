import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { List } from '@src/ui';
import { AccountIcon } from '@src/assets';

const options = [
  {
    content: {
      label: 'Option1',
      value: 'option1',
      prefix: <AccountIcon />,
    },
  },
  {
    content: {
      label: 'Option2',
      value: 'option2',
      href: '#',
      prefix: <AccountIcon />,
    },
  },
  {
    content: {
      label: 'Option3',
      value: 'option3',
      href: '#',
      prefix: <AccountIcon />,
    },
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
  parameters: {
    docs: {
      source: {
        code: `
<List {...args} />`,
      },
    },
  },
  render(args) {
    return <List {...args} />;
  },
};

export const Menu: Story = {
  name: '選單樣式',
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
