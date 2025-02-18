import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../dropdown';

const options = [
  {
    label: 'Option1',
    value: 'option1',
    // href: '#',
  },
  {
    label: 'Option2',
    value: 'option2',
    // href: '#',
  },
  {
    label: 'Option3',
    value: 'option3',
    // href: '#',
  },
];

export default {
  title: 'Component/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
      required: true,
    },
    placeholder: {
      description: '輸入提示',
      table: {
        category: 'PROPS',
      },
    },
    label: {
      description: '標籤',
      table: {
        category: 'PROPS',
      },
    },
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
    className: {
      description: '客製化樣式',
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
    placeholder: 'Placeholder',
    label: 'Label',
    size: 'medium',
    className: '',
    onSelect: action('onClick'),
  },
  parameters: {
    docs: {
      title: 'Dropdown',
      description: {
        component: '下拉選單組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  name: '預設項目',
  args: {
    dataSource: options,
    label: 'Label',
    className: '',
    onSelect: action('onClick'),
  },
  render(args) {
    return <Dropdown {...args} />;
  },
};
