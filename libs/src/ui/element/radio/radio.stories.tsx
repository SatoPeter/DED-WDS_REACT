import { action } from '@storybook/addon-actions';
import { Meta, StoryContext, StoryObj } from '@storybook/react';
import { Radio } from './radio';

const options = [
  { label: 'Option1', value: 'option1', isDisabled: false },
  { label: 'Option2', value: 'option2', isDisabled: false },
  { label: 'Option3', value: 'option3', isDisabled: true },
];

export default {
  title: 'Component/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    initValue: {
      description: '預設值',
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
    onChange: {
      description: '選擇選項後的事件',
      action: 'onChange',
      table: {
        category: 'EVENTS',
      },
    },
    className: {
      description: '客製化樣式',
      table: {
        category: 'PROPS',
      },
    },
  },
  args: {
    dataSource: options,
    direction: 'row',
    initValue: 'option1',
    size: 'medium',
    className: '',
    onChange: action('onChange'),
  },
  parameters: {
    docs: {
      title: 'Radio Button',
      description: {
        component: '單選按鈕組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Radio>;

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
    return <Radio {...args} />;
  },
};

export const Direction: Story = {
  name: '直向排列',
  args: {
    dataSource: defaultOptions,
    direction: 'column',
  },
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
    return <Radio {...args} />;
  },
};
