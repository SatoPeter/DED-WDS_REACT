import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const options = [
  { label: 'Option1', value: 'option1' },
  { label: 'Option2', value: 'option2' },
  { label: 'Option3', value: 'option3' },
];

export default {
  title: 'Component/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'info',
      ],
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
    themeColor: 'primary',
    dataSource: options,
    initValue: ['option1', 'option3'],
    direction: 'row',
    className: '',
    onChange: (e: string[]) => action('onChange')(e),
  },
  parameters: {
    docs: {
      title: 'Checkbox',
      description: {
        component: 'Checkbox 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Checkbox {...args} />;
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {
    dataSource: options,
    initValue: ['option1'],
    className: '',
    onChange: (e) => action('onChange')(e),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Checkbox {...args} themeColor="primary" />
<Checkbox {...args} themeColor="secondary" />
<Checkbox {...args} themeColor="tertiary" />
<Checkbox {...args} themeColor="info" />
<Checkbox {...args} themeColor="success" />
<Checkbox {...args} themeColor="warning" />
<Checkbox {...args} themeColor="error" />
        `,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox {...args} themeColor="primary" />
        <Checkbox {...args} themeColor="secondary" />
        <Checkbox {...args} themeColor="tertiary" />
        <Checkbox {...args} themeColor="info" />
        <Checkbox {...args} themeColor="success" />
        <Checkbox {...args} themeColor="warning" />
        <Checkbox {...args} themeColor="error" />
      </div>
    );
  },
};
