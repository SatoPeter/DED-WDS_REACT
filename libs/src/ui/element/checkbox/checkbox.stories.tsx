import { action } from '@storybook/addon-actions';
import { Meta, StoryContext, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const options = [
  { label: 'Option1', value: 'option1', isDisabled: false },
  { label: 'Option2', value: 'option2', isDisabled: false },
  { label: 'Option3', value: 'option3', isDisabled: false },
];

export default {
  title: 'Component/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
      required: true,
    },
    initValue: {
      description: '選中的項目',
      table: {
        category: 'PROPS',
      },
    },
    direction: {
      description: '排列方向',
      control: {
        type: 'select',
        options: ['row', 'column'],
      },
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
    onChange: {
      description: '選中選項改變時的回調函數',
      action: 'onChange',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    dataSource: options,
    initValue: ['option1', 'option3'],
    direction: 'row',
    size: 'medium',
    className: '',
    onChange: (e: string[]) => action('onChange')(e),
  },
  parameters: {
    docs: {
      title: 'Checkbox',
      description: {
        component: '複選框組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Checkbox>;

const defaultOptions = [
  { label: 'Option1', value: 'option1', isDisabled: false },
  { label: 'Option2', value: 'option2', isDisabled: false },
  { label: 'Option3', value: 'option3', isDisabled: true },
];
export const Default: Story = {
  name: '預設項目',
  args: {
    dataSource: defaultOptions,
  },
  render(args) {
    return <Checkbox {...args} />;
  },
};

export const Direction: Story = {
  name: '排列方向',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;
          return `
<Radio {...args} direction=${args.direction}/>
`;
        },
      },
    },
  },
  render(args) {
    return <Checkbox {...args} />;
  },
};
