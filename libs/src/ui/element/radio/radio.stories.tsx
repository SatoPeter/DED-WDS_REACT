import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Radio } from './radio';

const options = [
  { label: 'Option1', value: 'option1' },
  { label: 'Option2', value: 'option2' },
  { label: 'Option3', value: 'option3' },
];

export default {
  title: 'Component/Radio',
  component: Radio,
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
    themeColor: 'primary',
    dataSource: options,
    initValue: 'option1',
    direction: 'row',
    className: '',
    onChange: action('onChange'),
  },
  parameters: {
    docs: {
      title: 'Radio Button',
      description: {
        component: 'Radio Button 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Radio {...args} />;
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {
    dataSource: options,
    initValue: 'option1',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Radio {...args} themeColor="primary" />
        <Radio {...args} themeColor="secondary" />
        <Radio {...args} themeColor="tertiary" />
        <Radio {...args} themeColor="info" />
        <Radio {...args} themeColor="success" />
        <Radio {...args} themeColor="warning" />
        <Radio {...args} themeColor="error" />
      </div>
    );
  },
};
