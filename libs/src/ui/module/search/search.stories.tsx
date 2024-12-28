import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Search } from '@src/ui';

export default {
  title: 'Component/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: '尺寸',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
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
      table: {
        category: 'EVENTS',
      },
    },
    onChange: {
      description: '改變事件',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    size: 'medium',
    isDisabled: false,
    className: '',
    onClick: action('onClick'),
    onChange: action('onChange'),
  },
  parameters: {
    docs: {
      title: '搜尋',
      description: {
        component: '搜尋組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Search {...args} />;
  },
};

export const Size: Story = {
  name: '搜尋尺寸',
  args: {},
  render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Search {...args} size="small" />
        <Search {...args} size="medium" />
        <Search {...args} size="large" />
      </div>
    );
  },
};
