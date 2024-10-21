import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { List } from '@src/ui';
import { AccountIcon } from '@src/assets';

export default {
  title: 'Design System/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: '選項清單',
    },
    isMenu: {
      description: '是否為選單',
      control: {
        type: 'boolean',
      },
    },
    onSelect: {
      description: '選擇事件',
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
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

const options = [
  {
    content: {
      label: '選項一',
      value: 'option1',
      prefix: <AccountIcon />,
    },
  },
  {
    content: {
      label: '選項二',
      value: 'option2',
      prefix: <AccountIcon />,
    },
  },
  {
    content: {
      label: '選項三',
      value: 'option3',
      prefix: <AccountIcon />,
    },
  },
];

export const Default: Story = {
  name: '預設項目',
  args: {
    options: options,
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
  args: {
    isMenu: true,
    options: options,
    onSelect: action('onSelect'),
  },
  render(args) {
    return (
      <div style={{ width: '200px' }}>
        <List {...args} />
      </div>
    );
  },
};
