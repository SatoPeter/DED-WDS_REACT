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
      prefix: <AccountIcon />,
    },
  },
  {
    content: {
      label: 'Option3',
      value: 'option3',
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
    isMenu: {
      description: '是否為選單',
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
    isMenu: false,
    className: '',
    onSelect: action('onSelect'),
  },
  parameters: {
    docs: {
      title: '清單',
      description: {
        component: '清單的呈現及說明。',
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
    return (
      <div style={{ width: '200px' }}>
        <List {...args} />
      </div>
    );
  },
};

export const Menu: Story = {
  name: '選單樣式',
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<List {...args} isMenu />`,
      },
    },
  },
  render(args) {
    return (
      <div style={{ width: '200px' }}>
        <List {...args} isMenu />
      </div>
    );
  },
};
